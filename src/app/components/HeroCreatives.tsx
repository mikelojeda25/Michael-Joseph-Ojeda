import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

type CreativeFolder = {
  title: string;
  subtitle: string;
  path: string;
  variant: "image" | "text";
  imageUrl: string;
  alt: string;
};

const folders: CreativeFolder[] = [
  {
    title: "Editing",
    subtitle: "Photo / Video",
    path: "/creatives/visual-editing",
    variant: "image",
    imageUrl:
      "https://res.cloudinary.com/dd5gbzoti/image/upload/dpr_auto,f_auto,q_auto/v1774520390/1774513939241_abxidf.png",
    alt: "Visual editing workspace",
  },
  {
    title: "Artworks",
    subtitle: "Digital & Concept Art ",
    path: "/creatives/artworks",
    variant: "image",
    imageUrl:
      "https://res.cloudinary.com/dd5gbzoti/image/upload/dpr_auto,f_auto,q_auto/file_0000000036f471fd87db9eda517ce711_xe2ljc.png",
    alt: "Digital artworks",
  },
  {
    title: "Web Dev",
    subtitle: "Design / Programming",
    path: "/creatives/web-development",
    variant: "image",
    imageUrl:
      "https://res.cloudinary.com/dd5gbzoti/image/upload/dpr_auto,f_auto,q_auto/v1774520390/file_000000000da071f5bfc98ec3ab60edd6_rafz0b.png",
    alt: "Web development",
  },
  {
    title: "SUNO MUSIC",
    subtitle: "Songwriting / Poetry",
    path: "/music",
    variant: "image",
    imageUrl:
      "https://res.cloudinary.com/dd5gbzoti/image/upload/dpr_auto,f_auto,q_auto/v1774520390/file_00000000715871fda281a84e8eecd57c_y3xylr.png",
    alt: "Music production",
  },
];

export const HeroCreatives = () => {
  const navigate = useNavigate();

  return (
    /* FIXED: bg-zinc-950 ensures no white space during stagger animation */
    <section className="relative w-full min-h-screen bg-zinc-950 overflow-hidden">
      {/* Top Gradient Overlay - Greenish Tint */}
      <div className="absolute inset-0 pointer-events-none z-20 bg-gradient-to-b from-[#051510] via-transparent to-transparent h-[25%]" />

      {/* Mobile Header */}
      <div className="relative z-30 pt-20 px-6 lg:hidden mb-10">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <h2 className="text-4xl font-black text-white tracking-tighter uppercase italic">
            Creatives
          </h2>
          <div className="h-1 w-12 bg-black/80 mt-2" />{" "}
          {/* Green accent line */}
        </motion.div>
      </div>

      {/* Grid/Flex Container */}
      <div className="flex flex-col lg:flex-row lg:absolute lg:inset-0 w-full h-full lg:gap-0 gap-4 p-4 lg:p-0">
        {folders.map((folder, idx) => (
          <motion.button
            key={folder.path}
            layout
            type="button"
            onClick={() => navigate(folder.path)}
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.1 * idx,
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
              layout: { duration: 0.4 },
            }}
            whileHover={{
              flexGrow:
                typeof window !== "undefined" && window.innerWidth > 1024
                  ? 1.4
                  : 1,
            }}
            className="relative flex-1 min-h-[350px] lg:min-h-full overflow-hidden group border border-emerald-900/20 lg:border-none rounded-2xl lg:rounded-none bg-black"
          >
            {/* Background Image with Green Overlay */}
            <div className="absolute inset-0 z-10">
              <motion.img
                src={folder.imageUrl}
                alt={folder.alt}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.8 }}
                className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-700"
              />
              {/* The "Green Gradient" Vibe */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#061a14] via-[#061a14]/40 to-transparent mix-blend-multiply opacity-90 group-hover:opacity-60 transition-all duration-500" />
            </div>

            {/* Text Content */}
            <div className="absolute inset-0 z-30 flex flex-col justify-end p-8 lg:items-center lg:justify-center">
              <div className="lg:text-center">
                <p className="text-yellow-500 text-[10px] tracking-[0.4em] uppercase font-black mb-2 opacity-80 font-weight-bold text-shadow-2xs">
                  Expertise
                </p>
                <h3 className="text-3xl md:text-4xl font-black text-white uppercase italic leading-none group-hover:tracking-wider transition-all duration-500">
                  {folder.title}
                </h3>
                <p className="text-[11px] text-yellow-400 font-medium tracking-[0.1em] uppercase lg:opacity-0 lg:group-hover:opacity-100 transition-all duration-500 pt-2 inline-block text-shadow-2xs">
                  {folder.subtitle}
                </p>
              </div>
            </div>
          </motion.button>
        ))}
      </div>
    </section>
  );
};
