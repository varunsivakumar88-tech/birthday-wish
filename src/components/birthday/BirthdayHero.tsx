import { motion } from "framer-motion";

const title = "Happy Birthday, Madhuuu";
const words = title.split(" ");

export function BirthdayHero() {
  return (
    <section className="relative flex min-h-dvh items-center justify-center overflow-hidden px-6 py-32">
      {/* ambient */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{ background: "var(--gradient-aurora)" }}
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-40 mix-blend-screen"
        style={{
          background:
            "conic-gradient(from 200deg at 50% 0%, transparent 0deg, oklch(0.9 0.1 85 / 0.18) 30deg, transparent 60deg)",
        }}
      />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px hairline" />

      <div className="relative mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="mb-8 inline-flex items-center gap-4 text-[11px] uppercase tracking-[0.6em] text-foreground/50"
        >
          <span className="h-px w-10 bg-foreground/30" />
          The Story of You
          <span className="h-px w-10 bg-foreground/30" />
        </motion.div>

        <h2 className="font-display text-5xl font-light leading-[1.05] sm:text-7xl md:text-8xl">
          {words.map((w, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 50, filter: "blur(12px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true }}
              transition={{ duration: 1.4, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="mr-3 inline-block italic text-gold-gradient"
            >
              {w.replace(",", "")}
              {i === 1 && ","}
            </motion.span>
          ))}
          <motion.span
            initial={{ opacity: 0, scale: 0, rotate: -20 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{
              opacity: { delay: 1.2, duration: 1 },
              scale: { delay: 1.2, type: "spring", stiffness: 180, damping: 14 },
              rotate: { delay: 1.2, type: "spring", stiffness: 150 },
            }}
            className="relative ml-3 inline-flex items-center justify-center align-middle"
          >
            {/* Heart Ambient Glow Halo */}
            <motion.span
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.35, 0.75, 0.35],
              }}
              transition={{
                duration: 2.8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute size-12 rounded-full blur-lg"
              style={{
                background:
                  "radial-gradient(circle, oklch(0.85 0.16 75 / 0.8) 0%, oklch(0.65 0.22 18 / 0.6) 60%, transparent 100%)",
              }}
            />

            {/* Luxury Metallic Gem Heart SVG */}
            <motion.svg
              animate={{
                scale: [1, 1.12, 1, 1.08, 1],
                y: [0, -5, 0],
              }}
              transition={{
                duration: 3.2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2,
              }}
              viewBox="0 0 24 24"
              className="relative size-10 sm:size-14 md:size-16"
              style={{
                filter: "drop-shadow(0 0 25px oklch(0.84 0.14 75 / 0.6))",
              }}
            >
              <defs>
                <linearGradient id="luxuryHeartGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="oklch(0.96 0.12 85)" />
                  <stop offset="40%" stopColor="oklch(0.84 0.18 68)" />
                  <stop offset="80%" stopColor="oklch(0.68 0.22 22)" />
                  <stop offset="100%" stopColor="oklch(0.55 0.24 15)" />
                </linearGradient>
              </defs>
              <path
                fill="url(#luxuryHeartGrad)"
                d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
              />
              {/* Soft metallic highlight */}
              <path
                d="M7.5 4.5c-1.8 0-3.3 1.3-3.8 3.1 0.4-1.2 1.5-2.1 2.8-2.1 1.2 0 2.3.6 3 1.6-.4-1.5-1.2-2.6-2-2.6z"
                fill="oklch(0.98 0.04 90)"
                opacity="0.65"
              />
            </motion.svg>
          </motion.span>
        </h2>

        <motion.p
          initial={{ opacity: 0, y: 40, filter: "blur(12px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 1.6, delay: 1.4, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto mt-10 max-w-2xl text-lg leading-relaxed text-foreground/75 sm:text-xl"
        >
          To my amazing best friend and a sister — thank you for filling life with laughter,
          kindness, and unforgettable memories. May this year bring you endless happiness, success,
          good health, and everything your heart wishes for. Keep smiling, keep shining, and never
          stop being the wonderful person you are.{" "}
          <span className="text-gold-gradient italic">Happy Birthday!</span> 🎂✨
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 2, duration: 1 }}
          className="mt-20 flex flex-col items-center gap-3"
        >
          <div className="text-[10px] uppercase tracking-[0.4em] text-foreground/40">Scroll</div>
          <motion.div
            className="h-12 w-px"
            style={{
              background: "linear-gradient(to bottom, transparent, oklch(0.84 0.12 85 / 0.8))",
            }}
            animate={{ scaleY: [0.3, 1, 0.3], originY: 0 }}
            transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </div>
    </section>
  );
}
