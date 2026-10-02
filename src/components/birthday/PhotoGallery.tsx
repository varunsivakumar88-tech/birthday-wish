import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Lightbox } from "./Lightbox";
import img1 from "@/assets/media_1789823967312.jpg";
import img2 from "@/assets/media_1789823967579.jpg";
import img3 from "@/assets/media_1789823968458.jpg";
import img4 from "@/assets/media_1789823968662.jpg";
import img5 from "@/assets/media_1789823968739.jpg";
import img6 from "@/assets/media_1789824174171.jpg";
import img8 from "@/assets/media_1789824174305.jpg";

gsap.registerPlugin(ScrollTrigger);

const images = [
  { src: img1, caption: "Beautiful moments" },
  { src: img2, caption: "With you" },
  { src: img3, caption: "A smile to remember" },
  { src: img4, caption: "Good times" },
  { src: img5, caption: "Always happy" },
  { src: img6, caption: "Special memory" },
  { src: img8, caption: "Together" },
];

export function PhotoGallery() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 768px)");
    const handler = () => setIsMobile(mq.matches);
    handler();
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  useLayoutEffect(() => {
    if (isMobile || !wrapRef.current || !trackRef.current) return;
    const ctx = gsap.context(() => {
      const track = trackRef.current!;
      const distance = track.scrollWidth - window.innerWidth;
      gsap.to(track, {
        x: -distance,
        ease: "none",
        scrollTrigger: {
          trigger: wrapRef.current,
          start: "top top",
          end: () => `+=${distance + window.innerHeight * 0.4}`,
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true,
        },
      });
    }, wrapRef);
    return () => ctx.revert();
  }, [isMobile]);

  return (
    <section className="relative">
      <div className="px-6 pb-12 pt-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-3 text-[10px] uppercase tracking-[0.5em] text-foreground/50"
        >
          ✦ Moments ✦
        </motion.div>
        <motion.h3
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="font-display text-5xl font-light italic text-gold-gradient sm:text-6xl"
        >
          A Reel of You
        </motion.h3>
      </div>

      <div ref={wrapRef} className="relative overflow-hidden md:h-screen">
        <div
          ref={trackRef}
          className="flex md:h-screen md:items-center md:gap-10 md:px-[12vw] md:will-change-transform max-md:grid max-md:grid-cols-1 max-md:gap-8 max-md:px-6"
        >
          {images.map((img, i) => (
            <motion.button
              key={i}
              type="button"
              onClick={() => setActive(i)}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: (i % 4) * 0.05 }}
              whileHover={{ y: -6 }}
              className="group relative flex shrink-0 overflow-hidden rounded-3xl text-left transition-shadow duration-500 md:h-[70vh] md:w-[28vw] max-md:aspect-[4/5] max-md:w-full"
              style={{ boxShadow: "var(--shadow-elegant)" }}
            >
              <img
                src={img.src}
                alt={img.caption}
                loading="lazy"
                className="size-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.06]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 flex flex-col gap-1 p-6">
                <div className="text-[10px] uppercase tracking-[0.4em] text-primary/80">
                  №{String(i + 1).padStart(2, "0")}
                </div>
                <div className="font-display text-2xl italic text-foreground/95">{img.caption}</div>
              </div>
              <div className="absolute inset-0 rounded-3xl ring-1 ring-inset ring-white/10" />
            </motion.button>
          ))}
          {!isMobile && <div className="shrink-0 md:w-[8vw]" aria-hidden />}
        </div>
      </div>

      <Lightbox
        images={images}
        index={active}
        onClose={() => setActive(null)}
        onPrev={() =>
          setActive((i) => (i === null ? null : (i - 1 + images.length) % images.length))
        }
        onNext={() => setActive((i) => (i === null ? null : (i + 1) % images.length))}
      />
    </section>
  );
}
