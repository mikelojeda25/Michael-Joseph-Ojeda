import { usePlayerStore } from "../store/usePlayerStore";

interface MusicInfoProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MusicInfo = ({ isOpen, onClose }: MusicInfoProps) => {
  const { currentTrack } = usePlayerStore();

  if (!isOpen || !currentTrack) return null;

  return (
    <div className="fixed inset-0 z-[100] flex flex-col bg-black animate-in fade-in duration-500 overflow-y-auto mb-20">
      {/* Close Button - Responsive Position */}
      <button
        onClick={onClose}
        className="hidden md:fixed right-0 md:top-10 md:right-10 z-[110] text-white/30 hover:text-white transition-colors p-2"
      >
        <span className="text-2xl md:text-3xl font-light">✕</span>
      </button>

      {/* Main Container:*/}
      <div className="relative w-full max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-16 px-6 py-10 md:mt-16 h-auto md:h-[calc(100vh-200px)] z-10">
        <div className=" w-full md:w-1/2 flex items-center justify-center shrink-0">
          <img
            src={currentTrack.coverUrl}
            alt={currentTrack.title}
            className="w-full aspect-square object-cover rounded-lg shadow-2xl border border-white/5 shadow-black/80"
          />
        </div>

        {/* COLUMN 2: INFO + LYRICS */}
        <div className="w-full md:w-1/2 flex flex-col h-auto md:h-full max-h-none md:max-h-[620px]">
          {/* Header Section */}
          <div className="mb-8 shrink-0 text-center md:text-left">
            <h1 className="text-3xl md:text-5xl font-black text-white tracking-tighter uppercase italic leading-tight">
              {currentTrack.title}
            </h1>
            <p className="text-base md:text-lg font-bold text-yellow-500 tracking-[0.3em] uppercase mt-2 opacity-80">
              {currentTrack.artist}
            </p>
            <div className="h-[1px] w-12 bg-white/20 mt-6 mx-auto md:mx-0" />
          </div>

          {/* Lyrics Area */}
          <div className="overflow-visible md:overflow-y-auto pr-0 md:pr-6 custom-scrollbar">
            <p className="text-lg md:text-2xl font-light text-gray-400 leading-relaxed whitespace-pre-line italic text-center md:text-left">
              {currentTrack.lyrics}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
