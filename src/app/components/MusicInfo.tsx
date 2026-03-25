import { usePlayerStore } from "../store/usePlayerStore";
import { Repeat, Shuffle } from "lucide-react";

interface MusicInfoProps {
  isOpen: boolean;
  onClose: () => void;
  onShuffle: () => void;
  onToggleRepeat: () => void;
  isRepeating: boolean;
}

export const MusicInfo = ({
  isOpen,
  onClose,
  onShuffle,
  onToggleRepeat,
  isRepeating,
}: MusicInfoProps) => {
  const { currentTrack } = usePlayerStore();

  if (!isOpen || !currentTrack) return null;

  return (
    <div className="fixed inset-0 z-[100] animate-in fade-in duration-300 overflow-hidden">
      {/* Mobile: full-screen panel */}
      <div className="md:hidden flex flex-col bg-black h-[100dvh] overflow-y-auto overscroll-contain pb-24">
        <button
          onClick={onClose}
          className="fixed right-0 top-0 z-[110] text-white/30 hover:text-white transition-colors p-3"
        >
          <span className="text-2xl font-light">✕</span>
        </button>

        <div className="relative w-full max-w-6xl mx-auto flex flex-col items-center gap-6 px-6 pt-16 pb-6 z-10">
          <div className="w-full flex items-center justify-center shrink-0">
            <div className="w-full aspect-square rounded-lg border border-white/10 bg-black/40 p-2">
              <img
                src={currentTrack.coverUrl}
                alt={currentTrack.title}
                className="w-full h-full object-contain rounded-md"
              />
            </div>
          </div>

          <div className="w-full flex justify-end gap-2">
            <button
              onClick={onShuffle}
              className="text-gray-400 hover:text-yellow-500 transition-colors border border-white/10 rounded-full p-2"
              aria-label="Shuffle"
            >
              <Shuffle size={16} />
            </button>
            <button
              onClick={onToggleRepeat}
              className={`transition-colors border border-white/10 rounded-full p-2 ${
                isRepeating
                  ? "text-yellow-500"
                  : "text-gray-400 hover:text-yellow-500"
              }`}
              aria-label="Repeat"
            >
              <Repeat size={16} />
            </button>
          </div>

          <div className="w-full flex flex-col">
            <div className="shrink-0 text-center">
              <h1 className="text-3xl font-black text-white tracking-tighter uppercase italic leading-tight">
                {currentTrack.title}
              </h1>
              <p className="text-base font-bold text-yellow-500 tracking-[0.3em] uppercase mt-2 opacity-80">
                {currentTrack.artist}
              </p>
              <div className="h-[1px] w-12 bg-white/20 mt-6 mx-auto" />
            </div>

            <div className="mt-6">
              <p className="text-lg font-light text-gray-400 leading-relaxed whitespace-pre-line italic text-center">
                {currentTrack.lyrics}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop: click-outside-to-close with transparent margin */}
      <div
        className="hidden md:flex fixed inset-0 bg-black/70"
        onClick={onClose}
      >
        <div
          className="relative w-full max-w-6xl mx-auto h-full rounded-none border-x border-white/10 bg-black/90 shadow-2xl overflow-y-auto lg:overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={onClose}
            className="absolute top-5 right-5 z-[110] text-white/30 hover:text-white transition-colors p-2"
          >
            <span className="text-3xl font-light">✕</span>
          </button>

          <div className="flex flex-col xl:flex-row items-stretch gap-6 min-h-full px-6 pt-16 pb-24">
            <div className="flex items-start justify-center shrink-0 h-full xl:w-[62%]">
              <img
                src={currentTrack.coverUrl}
                alt={currentTrack.title}
                className="w-full max-h-[70vh] xl:max-h-none xl:h-[calc(100vh-140px)] object-contain object-top rounded-xl p-6 xl:p-10"
              />
            </div>

            <div className="w-full xl:w-[38%] flex flex-col min-h-0 xl:pt-8">
              <div className="mb-7 shrink-0 text-left">
                <h1 className="text-3xl font-black text-white tracking-tighter uppercase italic leading-tight">
                  {currentTrack.title}
                </h1>
                <p className="text-base font-bold text-yellow-500 tracking-[0.3em] uppercase mt-2 opacity-80">
                  {currentTrack.artist}
                </p>
                <div className="h-[1px] w-12 bg-white/20 mt-6" />
              </div>

              <div className="overflow-y-auto pr-4 custom-scrollbar min-h-0 xl:max-h-[calc(100vh-240px)]">
                <p className="text-md font-light text-gray-300 leading-relaxed whitespace-pre-line italic">
                  {currentTrack.lyrics}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
