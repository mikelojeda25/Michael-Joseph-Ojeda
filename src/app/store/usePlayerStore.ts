import { create } from "zustand";
import { Track, Albums } from "../data/Tracks";

// Kunin lahat ng tracks mula sa lahat ng albums mo at i-combine sa isang listahan
const allTracks = Albums.flatMap((album) => album.tracks);

interface PlayerState {
  currentTrack: Track | null;
  isPlaying: boolean;
  queue: Track[]; // Dito nakatago ang listahan ng lahat ng kanta
  setTrack: (track: Track) => void;
  togglePlay: () => void;
  nextTrack: () => void;
  prevTrack: () => void;
  shuffle: () => void;
}

export const usePlayerStore = create<PlayerState>((set) => ({
  currentTrack: null,
  isPlaying: false,
  queue: allTracks,

  setTrack: (track) => set({ currentTrack: track, isPlaying: true }),
  setCurrentTrack: (track: Track | null) => set({ currentTrack: track }),

  togglePlay: () => set((state) => ({ isPlaying: !state.isPlaying })),

  nextTrack: () =>
    set((state) => {
      if (!state.currentTrack) return state;
      const currentIndex = state.queue.findIndex(
        (t) => t.id === state.currentTrack?.id,
      );
      const nextIndex = (currentIndex + 1) % state.queue.length;
      return { currentTrack: state.queue[nextIndex], isPlaying: true };
    }),

  prevTrack: () =>
    set((state) => {
      if (!state.currentTrack) return state;
      const currentIndex = state.queue.findIndex(
        (t) => t.id === state.currentTrack?.id,
      );
      const prevIndex =
        (currentIndex - 1 + state.queue.length) % state.queue.length;
      return { currentTrack: state.queue[prevIndex], isPlaying: true };
    }),

  shuffle: () =>
    set((state) => {
      // Randomize ang queue
      const shuffled = [...state.queue].sort(() => Math.random() - 0.5);
      return { queue: shuffled, currentTrack: shuffled[0], isPlaying: true };
    }),
}));
