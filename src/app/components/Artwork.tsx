import { motion } from "motion/react";
import { ImageWithFallback } from "@/app/components/imageWithFallback/ImageWithFallback";
import { Expand, Palette, ArrowUpRight } from "lucide-react";
import Art1 from "@/images/Valorant.jpg";
import Art2 from "@/images/Logo.png";
import Art3 from "@/images/Vexel2.png";
import Art4 from "@/images/coverspread.png";
import Art5 from "@/images/Nero.png";
import Art6 from "@/images/Vanessa.png";
import Art7 from "@/images/trad.png";
import Art8 from "@/images/Vexel1.png";
import Art9 from "@/images/Magna.png";
import Art10 from "@/images/Sunset.jpg";

const artworkList = [
  {
    title: "Valorant Artwork",
    category: "Digital Painting",
    image: Art1,
    span: "md:col-span-2 md:row-span-2",
  },
  {
    title: "Cluster Logo",
    category: "Logo Making",
    image: Art2,
    span: "md:col-span-1 md:row-span-1",
  },
  {
    title: "Snow",
    category: "Vexel Art",
    image: Art8,
    span: "md:col-span-1 md:row-span-2",
  },
  {
    title: "Going Back",
    category: "Digital Painting",
    image: Art10,
    span: "md:col-span-2 md:row-span-1",
  },
  {
    title: "Midnight",
    category: "Vexel Art",
    image: Art3,
    span: "md:col-span-1 md:row-span-1",
  },
  {
    title: "Magna",
    category: "Digital Painting",
    image: Art9,
    span: "md:col-span-1 md:row-span-2",
  },
  {
    title: "Kapangyarihan",
    category: "Book Cover",
    image: Art4,
    span: "md:col-span-2 md:row-span-1",
  },
  {
    title: "Bloom",
    category: "Poster Making",
    image: Art7,
    span: "md:col-span-1 md:row-span-1",
  },
  {
    title: "Vanessa",
    category: "Digital Painting",
    image: Art6,
    span: "md:col-span-1 md:row-span-1",
  },
];

export function Artwork() {
  return (
    <section
      id="artwork"
      className="min-h-screen py-20 relative bg-transparent"
    >
      <div className="absolute bottom-0 left-0 w-full px-4">
        <div className="max-w-7xl mx-auto h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/40 to-transparent"></div>
      </div>

      <div className="absolute top-0 left-0 w-full px-4">
        <div className="max-w-7xl mx-auto h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/40 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4 font-bold">
            <span className="text-white">Creative</span>{" "}
            <span className="text-[#D4AF37]">Artwork</span>
          </h2>
          <div className="w-24 h-1 bg-[#D4AF37] mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 grid-flow-dense gap-6 auto-rows-[200px] md:auto-rows-[250px]">
          {artworkList.map((art, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`${art.span} group relative rounded-2xl overflow-hidden border border-white/10`}
            >
              {/* MAS MADILIM NA GRADIENT OVERLAY (Lilitaw lang pag hover) */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* TEXT INFO (Naka-hide/baba sa simula) */}
              <div className="absolute bottom-0 left-0 p-6 z-20 opacity-0 translate-y-6 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-out">
                <p className="text-[#D4AF37] text-sm font-bold uppercase tracking-wider mb-1">
                  {art.category}
                </p>
                <h4 className="text-white text-xl font-extrabold shadow-black drop-shadow-md">
                  {art.title}
                </h4>
              </div>

              {/* IMAGE WITH SLOW ZOOM */}
              <ImageWithFallback
                src={art.image}
                alt={art.title}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                loading="lazy"
              />

              {/* BORDER GLOW ON HOVER */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#D4AF37]/20 rounded-2xl transition-colors duration-300 z-30 pointer-events-none"></div>
            </motion.div>
          ))}
        </div>

        {/* FULL WIDTH BUTTON */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-8"
        >
          <a
            href="https://drive.google.com/drive/folders/1cAKmsyliN8SwbRb-hyYqmfxNEEmOVzPR?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="group w-full h-16 flex items-center justify-center gap-4 bg-white/5 border border-white/10 rounded-2xl text-white font-semibold tracking-widest uppercase text-sm hover:bg-[#D4AF37]/10 hover:border-[#D4AF37]/50 transition-all duration-300"
          >
            View Full Collection
            <motion.div
              animate={{ x: [0, 5, 0], y: [0, -5, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              <ArrowUpRight size={22} className="text-[#D4AF37]" />
            </motion.div>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
