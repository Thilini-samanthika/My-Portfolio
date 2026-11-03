
import { useEffect, useRef } from "react";

export default function NeuralNetworkBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", {
      alpha: true,
    });

    if (!ctx) return;

    const motionQuery = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );

    const finePointerQuery = window.matchMedia(
      "(hover: hover) and (pointer: fine)"
    );

    const mouse = {
      x: -10000,
      y: -10000,
      active: false,
    };

    let width = 0;
    let height = 0;
    let nodes = [];
    let frameId = null;
    let lastTime = 0;

    let isDark = document.documentElement.classList.contains(
      "dark"
    );

    const getSettings = () => {
      const mobile = width < 640;

      return {
        nodeCount: Math.min(
          mobile ? 30 : 75,
          Math.max(
            mobile ? 18 : 35,
            Math.floor((width * height) / 16000)
          )
        ),
        connectionDistance: mobile ? 100 : 145,
        mouseRadius: mobile ? 0 : 160,
        speed: mobile ? 0.14 : 0.24,
      };
    };

    const createNodes = () => {
      const { nodeCount, speed } = getSettings();

      nodes = Array.from(
        { length: nodeCount },
        () => ({
          x: Math.random() * width,
          y: Math.random() * height,

          vx: (Math.random() - 0.5) * speed * 2,
          vy: (Math.random() - 0.5) * speed * 2,

          radius: Math.random() * 1.5 + 1.2,

          color:
            Math.random() > 0.8
              ? [236, 72, 153]
              : [167, 139, 250],
        })
      );
    };

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;

      const dpr = Math.min(
        window.devicePixelRatio || 1,
        2
      );

      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      createNodes();
      draw();
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      const {
        connectionDistance,
      } = getSettings();

      const lineAlpha = isDark ? 0.28 : 0.22;
      const nodeAlpha = isDark ? 0.85 : 0.65;

      // Connections between nearby nodes
      for (let i = 0; i < nodes.length; i++) {
        const a = nodes[i];

        for (let j = i + 1; j < nodes.length; j++) {
          const b = nodes[j];

          const dx = a.x - b.x;
          const dy = a.y - b.y;

          const distanceSquared =
            dx * dx + dy * dy;

          if (
            distanceSquared <
            connectionDistance * connectionDistance
          ) {
            const distance = Math.sqrt(
              distanceSquared
            );

            const opacity =
              (1 - distance / connectionDistance) *
              lineAlpha;

            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);

            ctx.strokeStyle = isDark
              ? `rgba(167,139,250,${opacity})`
              : `rgba(109,40,217,${opacity})`;

            ctx.lineWidth = 0.9;
            ctx.stroke();
          }
        }
      }

      // Nodes
      for (const node of nodes) {
        const [r, g, b] = node.color;

        ctx.beginPath();
        ctx.arc(
          node.x,
          node.y,
          node.radius,
          0,
          Math.PI * 2
        );

        ctx.fillStyle = isDark
          ? `rgba(${r},${g},${b},${nodeAlpha})`
          : `rgba(109,40,217,${nodeAlpha})`;

        ctx.shadowBlur = isDark ? 8 : 2;
        ctx.shadowColor = "rgba(139,92,246,0.45)";

        ctx.fill();
      }

      ctx.shadowBlur = 0;
    };

    const updateNodes = (delta) => {
      const { mouseRadius } = getSettings();

      for (const node of nodes) {
        node.x += node.vx * delta;
        node.y += node.vy * delta;

        // Bounce at screen edges
        if (node.x < 0) {
          node.x = 0;
          node.vx = Math.abs(node.vx);
        }

        if (node.x > width) {
          node.x = width;
          node.vx = -Math.abs(node.vx);
        }

        if (node.y < 0) {
          node.y = 0;
          node.vy = Math.abs(node.vy);
        }

        if (node.y > height) {
          node.y = height;
          node.vy = -Math.abs(node.vy);
        }

        // Mouse interaction
        if (mouse.active && mouseRadius > 0) {
          const dx = node.x - mouse.x;
          const dy = node.y - mouse.y;

          const distance = Math.hypot(dx, dy);

          if (distance < mouseRadius && distance > 1) {
            const force =
              (1 - distance / mouseRadius) *
              1.3 *
              delta;

            node.x += (dx / distance) * force;
            node.y += (dy / distance) * force;
          }
        }
      }
    };

    const stop = () => {
      if (frameId !== null) {
        cancelAnimationFrame(frameId);
        frameId = null;
      }
    };

    const animate = (timestamp) => {
      const delta = lastTime
        ? Math.min(
            (timestamp - lastTime) / 16.67,
            2
          )
        : 1;

      lastTime = timestamp;

      updateNodes(delta);
      draw();

      frameId = requestAnimationFrame(animate);
    };

    const start = () => {
      stop();
      lastTime = 0;
      draw();

      if (
        !motionQuery.matches &&
        !document.hidden
      ) {
        frameId = requestAnimationFrame(animate);
      }
    };

    const onPointerMove = (event) => {
      if (!finePointerQuery.matches) return;

      mouse.x = event.clientX;
      mouse.y = event.clientY;
      mouse.active = true;
    };

    const onPointerLeave = () => {
      mouse.active = false;
    };

    const updateTheme = () => {
      isDark =
        document.documentElement.classList.contains(
          "dark"
        );

      draw();
    };

    const themeObserver = new MutationObserver(
      updateTheme
    );

    themeObserver.observe(
      document.documentElement,
      {
        attributes: true,
        attributeFilter: ["class"],
      }
    );

    window.addEventListener("resize", resize);
    window.addEventListener(
      "pointermove",
      onPointerMove,
      { passive: true }
    );
    document.addEventListener(
      "pointerleave",
      onPointerLeave
    );
    window.addEventListener(
      "blur",
      onPointerLeave
    );

    document.addEventListener(
      "visibilitychange",
      start
    );

    motionQuery.addEventListener(
      "change",
      start
    );

    resize();
    start();

    return () => {
      stop();
      themeObserver.disconnect();

      window.removeEventListener("resize", resize);
      window.removeEventListener(
        "pointermove",
        onPointerMove
      );
      document.removeEventListener(
        "pointerleave",
        onPointerLeave
      );
      window.removeEventListener(
        "blur",
        onPointerLeave
      );
      document.removeEventListener(
        "visibilitychange",
        start
      );
      motionQuery.removeEventListener(
        "change",
        start
      );
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="neural-network-background"
    />
  );
}
