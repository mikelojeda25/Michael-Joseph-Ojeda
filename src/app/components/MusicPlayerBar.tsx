import { usePlayerStore } from "../store/usePlayerStore";
import { useRef, useEffect, useState } from "react";
import { MusicInfo } from "./MusicInfo";
import {
  Shuffle,
  SkipBack,
  Play,
  Pause,
  SkipForward,
  Repeat,
  X,
} from "lucide-react";

export const MusicPlayerBar = () => {
  const [isInfoOpen, setIsInfoOpen] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isRepeating, setIsRepeating] = useState(false);
  const [isTouching, setIsTouching] = useState(false);
  const [isSeeking, setIsSeeking] = useState(false);
  const [seekTime, setSeekTime] = useState(0);

  const {
    currentTrack,
    isPlaying,
    togglePlay,
    nextTrack,
    prevTrack,
    shuffle,
    setCurrentTrack,
  } = usePlayerStore();

  const audioRef = useRef<HTMLAudioElement>(null);

  // 1. LOGIC FUNCTIONS
  const handleEnded = () => {
    if (isRepeating && audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play();
    } else {
      nextTrack();
    }
  };

  const handleClosePlayer = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.src = "";
    }
    setCurrentTrack(null);
    setIsInfoOpen(false);
  };

  const formatTime = (time: number) => {
    if (isNaN(time)) return "0:00";
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  const activeTime = isSeeking ? seekTime : currentTime;
  const safeDuration = Number.isFinite(duration) && duration > 0 ? duration : 0;
  const progressPct =
    safeDuration > 0 ? Math.min(100, (activeTime / safeDuration) * 100) : 0;

  // 2. EFFECTS
  useEffect(() => {
    if (audioRef.current && currentTrack) {
      if (isPlaying) {
        audioRef.current
          .play()
          .catch((err) => console.log("Playback error:", err));
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying, currentTrack]);

  useEffect(() => {
    if (!currentTrack) return;
    setCurrentTime(0);
    setDuration(0);
    setIsSeeking(false);
    setSeekTime(0);
  }, [currentTrack?.id]);

  if (!currentTrack) return null;

  return (
    <>
      <style>{`
        input[type="range"]::-webkit-slider-thumb {
          appearance: none;
          width: 16px;
          height: 16px;
          background: #eab308;
          border-radius: 50%;
          cursor: pointer;
          opacity: ${isTouching ? "1" : "0"};
          transition: opacity 0.1s ease;
          border: 2px solid black;
        }
        input[type="range"]::-moz-range-thumb {
          width: 16px;
          height: 16px;
          background: #eab308;
          border-radius: 50%;
          opacity: ${isTouching ? "1" : "0"};
          border: 2px solid black;
        }
      `}</style>

      <div className="fixed bottom-0 left-0 w-full bg-black/95 backdrop-blur-md border-t border-white/10 z-[500] h-20 md:h-24 flex flex-col justify-center">
        {/* PROGRESS BAR */}
        <div
          className="absolute top-0 left-0 w-full h-[6px] flex items-center group"
          onTouchStart={() => setIsTouching(true)}
          onTouchEnd={() => setIsTouching(false)}
          onMouseDown={() => setIsTouching(true)}
          onMouseUp={() => setIsTouching(false)}
        >
          <input
            type="range"
            min="0"
            max={safeDuration}
            value={activeTime}
            onPointerDown={() => setIsSeeking(true)}
            onPointerUp={(e) => {
              const newTime = Number((e.target as HTMLInputElement).value);
              setIsSeeking(false);
              if (audioRef.current) {
                audioRef.current.currentTime = newTime;
              }
              setCurrentTime(newTime);
            }}
            onChange={(e) => {
              const newTime = Number(e.target.value);
              setSeekTime(newTime);
              if (!isSeeking && audioRef.current) {
                audioRef.current.currentTime = newTime;
                setCurrentTime(newTime);
              }
            }}
            className="absolute w-full h-full bg-transparent appearance-none cursor-pointer z-20"
            aria-label="Seek"
          />

          <div
            className={`absolute -top-10 left-1/2 -translate-x-1/2 bg-yellow-500 text-black text-[10px] font-black px-2 py-1 rounded shadow-xl transition-opacity duration-200 z-30 ${isTouching ? "opacity-100" : "opacity-0"}`}
          >
            {formatTime(activeTime)} / {formatTime(safeDuration)}
          </div>

          <div
            className="absolute h-[3px] bg-yellow-500 z-10 transition-all duration-100 ease-linear"
            style={{ width: `${progressPct}%` }}
          />
          <div className="w-full h-[3px] bg-white/10" />
        </div>

        <div className="max-w-7xl mx-auto w-full px-4 grid grid-cols-12 items-center relative">
          {/* TRACK INFO */}
          <div
            className="col-span-7 md:col-span-4 flex items-center gap-3 text-white cursor-pointer group active:scale-95 transition-transform"
            onClick={() => setIsInfoOpen(!isInfoOpen)}
          >
            <img
              src={currentTrack.coverUrl}
              className="w-10 h-10 md:w-14 md:h-14 rounded border border-white/10 shrink-0 object-cover"
              alt="cover"
            />
            <div className="overflow-hidden">
              <p className="text-xs md:text-base font-black uppercase italic leading-none group-hover:text-yellow-500 truncate mb-0.5">
                {currentTrack.title}
              </p>
              <p className="text-[8px] md:text-[10px] text-gray-500 uppercase tracking-widest font-bold truncate">
                {currentTrack.artist}
              </p>
              <div className="mt-1 flex items-center gap-2 text-[10px] md:text-xs font-bold tracking-widest uppercase text-white/30">
                <span className="tabular-nums">{formatTime(activeTime)}</span>
                <span className="opacity-40">/</span>
                <span className="tabular-nums">{formatTime(safeDuration)}</span>
              </div>
            </div>
          </div>

          {/* PLAYER CONTROLS */}
          <div className="col-span-4 md:col-span-4 flex items-center justify-center">
            <div className="flex items-center gap-3 md:gap-8">
              <button
                onClick={shuffle}
                className="hidden md:block text-gray-500 hover:text-yellow-500 transition-colors"
                aria-label="Shuffle"
              >
                <Shuffle size={18} />
              </button>

              <button
                onClick={prevTrack}
                className="text-white hover:text-yellow-500 active:scale-90 transition-all"
                aria-label="Previous track"
              >
                <SkipBack size={20} fill="currentColor" />
              </button>

              <button
                onClick={togglePlay}
                className="bg-yellow-500 text-black w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(234,179,8,0.3)] hover:scale-110 active:scale-95 transition-all"
                aria-label={isPlaying ? "Pause" : "Play"}
              >
                {isPlaying ? (
                  <Pause size={18} fill="currentColor" />
                ) : (
                  <Play size={18} fill="currentColor" className="ml-0.5" />
                )}
              </button>

              <button
                onClick={nextTrack}
                className="text-white hover:text-yellow-500 active:scale-90 transition-all"
                aria-label="Next track"
              >
                <SkipForward size={20} fill="currentColor" />
              </button>

              <button
                onClick={() => setIsRepeating(!isRepeating)}
                className={`hidden md:block transition-colors ${isRepeating ? "text-yellow-500" : "text-gray-500 hover:text-white"}`}
                aria-label="Repeat"
              >
                <Repeat size={18} />
              </button>
            </div>
          </div>

          {/* ACTIONS */}
          <div className="col-span-1 md:col-span-4 flex items-center justify-end gap-2 md:gap-4">
            <button
              onClick={() => setIsInfoOpen(!isInfoOpen)}
              className="hidden md:block text-gray-400 hover:text-yellow-500 text-[10px] font-black uppercase tracking-widest border border-white/10 px-4 py-1.5 rounded-full bg-white/5 transition-all"
            >
              {isInfoOpen ? "Close Lyrics" : "Lyrics"}
            </button>

            <button
              onClick={handleClosePlayer}
              className="text-gray-500 hover:text-red-500 transition-colors p-1 active:scale-90"
              title="Close Player"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        <audio
          ref={audioRef}
          src={currentTrack.audioUrl}
          onTimeUpdate={() => {
            if (!audioRef.current) return;
            if (isSeeking) return;
            setCurrentTime(audioRef.current.currentTime);
          }}
          onLoadedMetadata={() => {
            if (!audioRef.current) return;
            setDuration(audioRef.current.duration);
          }}
          onDurationChange={() => {
            if (!audioRef.current) return;
            setDuration(audioRef.current.duration);
          }}
          onEnded={handleEnded}
        />
      </div>

      <MusicInfo
        isOpen={isInfoOpen}
        onClose={() => setIsInfoOpen(false)}
        onShuffle={shuffle}
        onToggleRepeat={() => setIsRepeating(!isRepeating)}
        isRepeating={isRepeating}
      />
    </>
  );
};
