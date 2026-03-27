import React, { useState, useRef } from "react";
import { VideoEdits, VideoEdit } from "../data/VideoEdits";
import { motion, AnimatePresence } from "framer-motion";

const VideoGallery: React.FC = () => {
  const [playingId, setPlayingId] = useState<string | null>(null);
  const videoRefs = useRef<{ [key: string]: HTMLVideoElement | null }>({});

  const handlePlayVideo = (id: string) => {
    if (playingId && videoRefs.current[playingId]) {
      videoRefs.current[playingId]?.pause();
    }
    setPlayingId(id);
    setTimeout(() => {
      if (videoRefs.current[id]) {
        videoRefs.current[id]?.play();
      }
    }, 50);
  };

  return (
    <section className="py-20 px-6 max-w-7xl mx-auto mb-20">
      {/* Header - Styled like your HeroMusic */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-12"
      >
        <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter uppercase italic leading-none">
          Video Edits
        </h2>
        <p className="text-yellow-500 font-bold tracking-[0.4em] uppercase text-xs md:text-sm mt-2">
          Video Edits & Animations
        </p>
      </motion.div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {VideoEdits.map((video: VideoEdit) => (
          <motion.div
            key={video.id}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="group flex flex-col bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-yellow-500/50 hover:bg-white/10 transition-all duration-500 shadow-2xl"
            onClick={() => handlePlayVideo(video.id)}
          >
            {/* Video Container */}
            <div className="relative w-full h-[280px] bg-black cursor-pointer overflow-hidden">
              <AnimatePresence>
                {playingId !== video.id && (
                  <motion.div
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 z-10"
                  >
                    <img
                      src={
                        video.thumbnailUrl ||
                        video.videoUrl.replace(".mp4", ".jpg")
                      }
                      alt={video.title}
                      className="w-full h-full object-contain bg-black transition-transform duration-700 group-hover:scale-105"
                    />

                    {/* Play Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center text-black shadow-[0_0_20px_rgba(234,179,8,0.4)]">
                        <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[16px] border-l-black border-b-[10px] border-b-transparent ml-1"></div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <video
                ref={(el) => (videoRefs.current[video.id] = el)}
                src={video.videoUrl}
                className={`w-full h-full object-contain ${playingId === video.id ? "block" : "hidden"}`}
                controls={playingId === video.id}
                playsInline
              />
            </div>

            {/* Info Box - Matches Track List Vibe */}
            <div className="p-6">
              <div className="flex justify-between items-center mb-3">
                <span className="text-[10px] font-black text-yellow-500 uppercase tracking-[0.2em] bg-yellow-500/10 px-2 py-1 rounded">
                  {video.category}
                </span>
                <span className="text-[10px] text-white/20 font-mono italic">
                  #{video.id}
                </span>
              </div>

              <h3 className="font-bold text-xl text-white tracking-tight uppercase italic group-hover:text-yellow-500 transition-colors">
                {video.title}
              </h3>

              <p className="text-sm text-gray-500 mt-2 font-medium leading-relaxed">
                {video.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default VideoGallery;
