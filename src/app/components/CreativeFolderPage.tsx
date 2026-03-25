import { motion } from "framer-motion";
import { ChevronLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

type CreativeFolderPageProps = {
  title: string;
  subtitle: string;
};

export const CreativeFolderPage = ({ title, subtitle }: CreativeFolderPageProps) => {
  const navigate = useNavigate();

  return (
    <section className="py-20 px-6 max-w-7xl mx-auto mb-20 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="flex justify-between items-end mb-10"
      >
        <div>
          <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter uppercase italic leading-none">
            {title}
          </h2>
          <p className="text-yellow-500 font-bold tracking-[0.4em] uppercase text-xs md:text-sm mt-3">
            {subtitle}
          </p>
        </div>

        <button
          onClick={() => navigate("/creatives")}
          className="flex items-center gap-2 text-white/50 hover:text-yellow-500 transition-all uppercase tracking-widest text-xs font-bold border-b border-white/10 hover:border-yellow-500 pb-1 cursor-pointer"
        >
          <ChevronLeft size={14} /> Back
        </button>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="rounded-2xl border border-white/5 bg-white/5 ring-1 ring-white/10 p-6 md:p-10"
      >
        <div className="max-w-3xl">
          <p className="text-gray-400 leading-relaxed text-sm md:text-base">
            This folder is ready. Drop your work here (images/videos), or tell me
            what layout you want inside this section and I’ll build it to match.
          </p>
        </div>
      </motion.div>
    </section>
  );
};

