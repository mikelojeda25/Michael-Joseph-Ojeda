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

  const handleProgressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTime = Number(e.target.value);
    if (audioRef.current) {
      audioRef.current.currentTime = newTime;
      setCurrentTime(newTime);
    }
  };

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
            max={duration || 0}
            value={currentTime}
            onChange={handleProgressChange}
            className="absolute w-full h-full bg-transparent appearance-none cursor-pointer z-20"
          />

          <div
            className={`absolute -top-10 left-1/2 -translate-x-1/2 bg-yellow-500 text-black text-[10px] font-black px-2 py-1 rounded shadow-xl transition-opacity duration-200 z-30 ${isTouching ? "opacity-100" : "opacity-0"}`}
          >
            {formatTime(currentTime)} / {formatTime(duration)}
          </div>

          <div
            className="absolute h-[3px] bg-yellow-500 z-10 transition-all duration-100 ease-linear"
            style={{ width: `${(currentTime / duration) * 100}%` }}
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
            </div>
          </div>

          {/* PLAYER CONTROLS */}
          <div className="col-span-4 md:col-span-4 flex items-center justify-center">
            <div className="flex items-center gap-3 md:gap-8">
              <button
                onClick={shuffle}
                className="hidden md:block text-gray-500 hover:text-yellow-500 transition-colors"
              >
                <Shuffle size={18} />
              </button>

              <button
                onClick={prevTrack}
                className="text-white hover:text-yellow-500 active:scale-90 transition-all"
              >
                <SkipBack size={20} fill="currentColor" />
              </button>

              <button
                onClick={togglePlay}
                className="bg-yellow-500 text-black w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(234,179,8,0.3)] hover:scale-110 active:scale-95 transition-all"
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
              >
                <SkipForward size={20} fill="currentColor" />
              </button>

              <button
                onClick={() => setIsRepeating(!isRepeating)}
                className={`hidden md:block transition-colors ${isRepeating ? "text-yellow-500" : "text-gray-500 hover:text-white"}`}
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
          onTimeUpdate={() =>
            audioRef.current && setCurrentTime(audioRef.current.currentTime)
          }
          onLoadedMetadata={() =>
            audioRef.current && setDuration(audioRef.current.duration)
          }
          onEnded={handleEnded}
        />
      </div>

      <MusicInfo isOpen={isInfoOpen} onClose={() => setIsInfoOpen(false)} />
    </>
  );
};
