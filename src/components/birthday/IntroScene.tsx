import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { GiftSculpture } from "./GiftSculpture";
import { ParticleField } from "./ParticleField";

export function IntroScene({ onBegin }: { onBegin: () => void }) {
  const [dolly, setDolly] = useState(0);
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    if (!leaving) return;
    let raf = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / 900);
      setDolly(t);
      if (t < 1) raf = requestAnimationFrame(tick);
      else setTimeout(onBegin, 150);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [leaving, onBegin]);

  return (
    <AnimatePresence>
      <motion.section
        key="intro"
        className="fixed inset-0 z-50 cursor-pointer overflow-hidden select-none"
        onClick={() => !leaving && setLeaving(true)}
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        animate={{ opacity: leaving ? 0 : 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        style={{
          background:
            "radial-gradient(ellipse at 50% 50%, oklch(0.22 0.06 320) 0%, oklch(0.1 0.02 300) 60%, oklch(0.06 0.01 300) 100%)",
        }}
      >
        {/* ambient blobs */}
        <div className="pointer-events-none absolute inset-0">
          <div
            className="absolute -left-40 top-1/4 size-[600px] rounded-full opacity-30 blur-3xl"
            style={{
              background: "radial-gradient(circle, oklch(0.5 0.18 350) 0%, transparent 70%)",
            }}
          />
          <div
            className="absolute -right-40 bottom-0 size-[700px] rounded-full opacity-25 blur-3xl"
            style={{
              background: "radial-gradient(circle, oklch(0.6 0.14 70) 0%, transparent 70%)",
            }}
          />
        </div>

        {/* Floating background particles */}
        <ParticleField count={80} />

        {/* light ray sweep on leave */}
        <motion.div
          className="pointer-events-none absolute inset-0 mix-blend-screen"
          initial={{ opacity: 0 }}
          animate={{ opacity: leaving ? 1 : 0 }}
          transition={{ duration: 0.8 }}
          style={{
            background:
              "conic-gradient(from 220deg at 50% 50%, transparent 0deg, oklch(0.95 0.1 85 / 0.18) 30deg, transparent 60deg, transparent 360deg)",
          }}
        />
        <motion.div
          className="pointer-events-none absolute inset-0"
          animate={{ opacity: leaving ? 1 : 0 }}
          transition={{ duration: 0.9 }}
          style={{
            background:
              "radial-gradient(circle at 50% 50%, oklch(1 0 0 / 0.7) 0%, transparent 60%)",
          }}
        />

        {/* Central 3D Gift Box */}
        <div className="absolute inset-0 flex items-center justify-center">
          <GiftSculpture dolly={dolly} />
        </div>

        {/* text overlay */}
        <motion.div
          className="pointer-events-none absolute inset-x-0 top-[12%] flex flex-col items-center px-6 text-center"
          animate={{ opacity: leaving ? 0 : 1, y: leaving ? -20 : 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="mb-3 text-[10px] uppercase tracking-[0.5em] text-foreground/50"
          >
            ✦ A Cinematic Tribute ✦
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1.2, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-5xl font-light italic leading-[1.05] text-gold-gradient sm:text-6xl md:text-7xl"
          >
            For Someone
            <br />
            Truly Special
          </motion.h1>
        </motion.div>

        <motion.div
          className="absolute inset-x-0 bottom-14 flex flex-col items-center gap-3"
          animate={{ opacity: leaving ? 0 : 1 }}
          transition={{ duration: 0.4 }}
        >
          <motion.span
            className="size-2 rounded-full bg-primary"
            animate={{ scale: [1, 1.6, 1], opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            style={{ boxShadow: "0 0 20px oklch(0.84 0.12 85 / 0.8)" }}
          />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="text-[11px] uppercase tracking-[0.5em] text-foreground/60"
          >
            Click to Open
          </motion.div>
        </motion.div>
      </motion.section>
    </AnimatePresence>
  );
}
