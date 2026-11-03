
import { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";

export default function MusicToggle() {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    return () => {
      audioRef.current?.pause();
    };
  }, []);

  const toggleMusic = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (!audio.paused) {
      audio.pause();
      return;
    }

    try {
      await audio.play();
    } catch (error) {
      console.error("Music playback error:", error);
      alert("Error playing music.");
    }
  };

  return (
    <>
      <audio
        ref={audioRef}
        src="/music.mp3"
        loop
        preload="auto"
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        onError={() => {
          console.error("Music file load failed: /music.mp3");
          setPlaying(false);
        }}
        
  onLoadedMetadata={(e) => {
    e.currentTarget.volume = 0.2;
  }}
  onEnded={() => setPlaying(false)}
      />

      <button
        type="button"
        onClick={toggleMusic}
        aria-label={playing ? "Pause music" : "Play music"}
        title={playing ? "Pause music" : "Play music"}
        className="rounded-full border border-slate-300
                   p-2 text-slate-700 transition
                   hover:bg-purple-100
                   dark:border-slate-700
                   dark:text-slate-200
                   dark:hover:bg-purple-900/40"
      >
        {playing ? (
          <Volume2 size={18} />
        ) : (
          <VolumeX size={18} />
        )}
      </button>
    </>
  );
}
