import { useState } from "react";
import { Albums } from "../data/Tracks";
import { usePlayerStore } from "../store/usePlayerStore";
import { Volume2, ChevronLeft } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useSearchParams } from "react-router-dom";

export const HeroMusic = () => {
  // Logic para sa URL-based navigation
  const [searchParams, setSearchParams] = useSearchParams();
  const albumIdFromUrl = searchParams.get("album");

  // Selected album is derived from URL or local state fallback
  const selectedAlbum = Albums.find((a) => a.id === albumIdFromUrl) || null;

  const { setTrack, currentTrack, isPlaying, togglePlay } = usePlayerStore();

  const handleAlbumSelect = (id: string) => {
    setSearchParams({ album: id });
  };

  const handleBack = () => {
    setSearchParams({});
  };

  // Animation Variants para sa Container
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  // Animation Variants para sa Individual Items
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <section className="py-20 px-6 max-w-7xl mx-auto mb-20 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="flex justify-between items-end mb-10"
      >
        <div>
          <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter uppercase italic leading-none">
            {selectedAlbum ? selectedAlbum.name : "Sonic Archives"}
          </h2>
          <p className="text-yellow-500 font-bold tracking-[0.4em] uppercase text-xs md:text-sm mt-3">
            {selectedAlbum ? `Released ${selectedAlbum.year}` : "Discography"}
          </p>
        </div>

        {selectedAlbum && (
          <button
            onClick={handleBack}
            className="flex items-center gap-2 text-white/50 hover:text-yellow-500 transition-all uppercase tracking-widest text-xs font-bold border-b border-white/10 hover:border-yellow-500 pb-1"
          >
            <ChevronLeft size={14} /> Back to Albums
          </button>
        )}
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-gray-400 max-w-4xl mx-auto mb-16 leading-relaxed text-center text-sm md:text-base"
      >
        Every track within this archival collection is an exercise in{" "}
        <span className="text-white font-medium">creative direction</span> and{" "}
        <span className="text-yellow-500 font-semibold italic">
          original songwriting
        </span>
        . By synthesizing the generative capabilities of{" "}
        <span className="text-white font-medium">Suno AI</span> with a
        meticulous post-production workflow—utilizing{" "}
        <span className="text-white font-medium">CapCut</span> for dynamic
        auditory sequencing and{" "}
        <span className="text-white font-medium">TagMP3</span> for precise
        metadata architecture—I facilitate a seamless convergence between raw
        lyrical concepts and high-fidelity, studio-grade compositions. This
        project serves as a testament to the{" "}
        <span className="text-yellow-500 font-semibold">
          synergy of human creativity and artificial intelligence
        </span>{" "}
        in modern digital artistry.
      </motion.p>

      <AnimatePresence mode="wait">
        {!selectedAlbum ? (
          /* VIEW 1: ALBUM GRID */
          <motion.div
            key="album-grid"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0, scale: 0.95 }}
            className="grid grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10"
          >
            {Albums.map((album) => (
              <motion.div
                key={album.id}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="group cursor-pointer"
                onClick={() => handleAlbumSelect(album.id)}
              >
                <div className="relative aspect-square overflow-hidden rounded-2xl border border-white/5 shadow-2xl ring-1 ring-white/10 group-hover:ring-yellow-500/50 transition-all duration-500">
                  <img
                    src={album.coverUrl}
                    className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110 group-hover:rotate-2"
                    alt={album.name}
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all flex items-center justify-center">
                    <span className="text-white font-black uppercase tracking-[0.3em] text-sm translate-y-4 group-hover:translate-y-0 transition-transform">
                      View Tracks
                    </span>
                  </div>
                </div>
                <h3 className="mt-5 text-lg md:text-2xl font-bold text-white uppercase italic group-hover:text-yellow-500 transition-colors">
                  {album.name}
                </h3>
                <p className="text-gray-500 text-xs tracking-widest uppercase mt-1">
                  {album.tracks.length} Masterpieces
                </p>
              </motion.div>
            ))}
          </motion.div>
        ) : (
          /* VIEW 2: TRACK LIST */
          <motion.div
            key="track-list"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0, x: 20 }}
            className="flex flex-col gap-3"
          >
            {selectedAlbum.tracks.map((track, index) => {
              const isActive = currentTrack?.id === track.id;

              return (
                <motion.div
                  key={track.id}
                  variants={itemVariants}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => (isActive ? togglePlay() : setTrack(track))}
                  className={`group flex items-center justify-between p-4 rounded-2xl transition-all cursor-pointer border 
                    ${
                      isActive
                        ? "bg-white/10 border-white/20 shadow-xl"
                        : "bg-white/5 border-transparent hover:border-white/10 hover:bg-white/10"
                    }`}
                >
                  <div className="flex items-center gap-5 md:gap-8">
                    <div className="w-8 flex justify-center">
                      {isActive && isPlaying ? (
                        <div className="flex gap-1 items-end h-4">
                          <motion.span
                            animate={{ height: [4, 16, 8, 16, 4] }}
                            transition={{ repeat: Infinity, duration: 0.8 }}
                            className="w-1 bg-yellow-500 rounded-full"
                          />
                          <motion.span
                            animate={{ height: [16, 4, 16, 4, 16] }}
                            transition={{ repeat: Infinity, duration: 0.6 }}
                            className="w-1 bg-yellow-500 rounded-full"
                          />
                          <motion.span
                            animate={{ height: [8, 16, 4, 16, 8] }}
                            transition={{ repeat: Infinity, duration: 0.7 }}
                            className="w-1 bg-yellow-500 rounded-full"
                          />
                        </div>
                      ) : (
                        <span
                          className={`text-lg font-black italic ${
                            isActive
                              ? "text-yellow-500"
                              : "text-white/20 group-hover:text-yellow-500"
                          }`}
                        >
                          {index + 1 < 10 ? `0${index + 1}` : index + 1}
                        </span>
                      )}
                    </div>

                    <div
                      className={`w-14 h-14 rounded-lg overflow-hidden shrink-0 border-2 transition-all ${
                        isActive
                          ? "border-yellow-500 shadow-[0_0_15px_rgba(212,175,55,0.3)]"
                          : "border-white/10"
                      }`}
                    >
                      <img
                        src={track.coverUrl}
                        alt=""
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div>
                      <h4
                        className={`text-lg md:text-xl font-bold tracking-tight ${
                          isActive
                            ? "text-yellow-500"
                            : "text-white group-hover:text-yellow-500"
                        }`}
                      >
                        {track.title}
                      </h4>
                    </div>
                  </div>

                  <div
                    className={`${
                      isActive
                        ? "opacity-100"
                        : "opacity-0 group-hover:opacity-100"
                    } transition-all pr-4`}
                  >
                    {isActive && isPlaying ? (
                      <div className="text-yellow-500 flex gap-1 font-black">
                        <span className="w-1.5 h-5 bg-yellow-500 rounded-full" />
                        <span className="w-1.5 h-5 bg-yellow-500 rounded-full" />
                      </div>
                    ) : (
                      <div className="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center text-black pl-1">
                        ▶
                      </div>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
