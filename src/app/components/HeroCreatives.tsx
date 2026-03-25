import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

type CreativeFolder = {
  title: string;
  subtitle: string;
  path: string;
  variant: "image" | "text";
};

const folders: CreativeFolder[] = [
  {
    title: "Visual Editing",
    subtitle: "Video / Motion / Cuts",
    path: "/creatives/visual-editing",
    variant: "image",
  },
  {
    title: "Digital Arts",
    subtitle: "Illustration / Concept",
    path: "/creatives/digital-arts",
    variant: "text",
  },
  {
    title: "Graphic Design",
    subtitle: "Brand / Layout / Print",
    path: "/creatives/graphic-design",
    variant: "text",
  },
  {
    title: "UI Design",
    subtitle: "Wireframes / Systems",
    path: "/creatives/ui-design",
    variant: "text",
  },
];

export const HeroCreatives = () => {
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
            Creatives
          </h2>
          <p className="text-yellow-500 font-bold tracking-[0.4em] uppercase text-xs md:text-sm mt-3">
            Dashboard
          </p>
        </div>
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-gray-400 max-w-4xl mx-auto mb-16 leading-relaxed text-center text-sm md:text-base"
      >
        Pick a folder to explore: editing workflows, digital pieces, design work,
        and UI explorations.
      </motion.p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
        {folders.map((folder, idx) => (
          <motion.button
            key={folder.path}
            type="button"
            onClick={() => navigate(folder.path)}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08 * idx }}
            whileHover={{ y: -8 }}
            whileTap={{ scale: 0.98 }}
            className="text-left group rounded-2xl border border-white/5 bg-white/5 hover:bg-white/10 ring-1 ring-white/10 hover:ring-yellow-500/40 transition-all duration-500 overflow-hidden"
          >
            <div className="p-5">
              <p className="text-white/30 text-[10px] tracking-[0.35em] uppercase font-bold">
                Folder
              </p>
              <h3 className="mt-2 text-xl md:text-2xl font-black text-white uppercase italic group-hover:text-yellow-500 transition-colors leading-tight">
                {folder.title}
              </h3>
              <p className="mt-2 text-xs text-gray-400 tracking-widest uppercase">
                {folder.subtitle}
              </p>
            </div>

            <div className="px-5 pb-5">
              <div
                className={`relative w-full rounded-xl overflow-hidden border border-white/5 ${
                  folder.variant === "image"
                    ? "aspect-[4/5]"
                    : "aspect-[4/5] bg-gradient-to-br from-[#14433D] via-[#0B2F2A] to-black"
                }`}
              >
                {folder.variant === "image" ? (
                  <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/20 via-[#14433D]/20 to-black/40" />
                ) : (
                  <div className="absolute inset-0 opacity-60 bg-[radial-gradient(circle_at_30%_20%,rgba(212,175,55,0.25),transparent_55%),radial-gradient(circle_at_70%_80%,rgba(20,67,61,0.45),transparent_60%)]" />
                )}

                <div className="absolute inset-0 flex items-end justify-between p-4">
                  <div className="flex items-center gap-2">
                    <span className="inline-flex h-2 w-2 rounded-full bg-yellow-500/80" />
                    <span className="text-white/70 text-[11px] font-bold tracking-widest uppercase">
                      Open
                    </span>
                  </div>
                  <span className="text-white/40 text-sm font-black italic group-hover:text-yellow-500 transition-colors">
                    →
                  </span>
                </div>
              </div>
            </div>
          </motion.button>
        ))}
      </div>
    </section>
  );
};

