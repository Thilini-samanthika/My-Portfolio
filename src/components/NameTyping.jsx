
import { useEffect, useState } from "react";

const NAME = "Thilini Samanthika";

export default function NameTyping() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count >= NAME.length) return;

    const timer = setTimeout(() => {
      setCount((previous) => previous + 1);
    }, 120);

    return () => clearTimeout(timer);
  }, [count]);

  return (
    <span className="inline">
      {NAME.slice(0, count)}

      <span
        className="ml-1 inline-block animate-pulse
        text-violet-500"
        aria-hidden="true"
      >
        |
      </span>
    </span>
  );
}
