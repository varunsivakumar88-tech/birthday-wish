import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Dynamically discover all media assets in src/assets
const assetModules = import.meta.glob<{ default: string }>(
  "../../assets/*.{jpg,png,webp,jpeg,svg,gif}",
  { eager: true },
);
const imageUrls = Object.values(assetModules).map((mod) => mod.default);

interface LuxuryPreloaderProps {
  onLoaded?: () => void;
}

export function LuxuryPreloader({ onLoaded }: LuxuryPreloaderProps) {
  const [imageProgress, setImageProgress] = useState<number>(0);
  const [displayProgress, setDisplayProgress] = useState<number>(0);
  const [isFinished, setIsFinished] = useState<boolean>(false);

  // Preload all image files
  useEffect(() => {
    if (imageUrls.length === 0) {
      setImageProgress(100);
      return;
    }

    let loadedCount = 0;
    const totalCount = imageUrls.length;

    const handleLoad = () => {
      loadedCount++;
      setImageProgress(Math.floor((loadedCount / totalCount) * 100));
    };

    imageUrls.forEach((src) => {
      const img = new Image();
      img.src = src;
      if (img.complete) {
        handleLoad();
      } else {
        img.onload = handleLoad;
        img.onerror = handleLoad;
      }
    });
  }, []);

  const targetProgress = imageProgress;

  // Smooth progress counter interpolation
  useEffect(() => {
    const interval = setInterval(() => {
      setDisplayProgress((prev) => {
        if (prev >= targetProgress && targetProgress >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsFinished(true);
            onLoaded?.();
          }, 300);
          return 100;
        }

        if (prev < targetProgress) {
          const step = Math.max(1, Math.floor((targetProgress - prev) * 0.25));
          return Math.min(targetProgress, prev + step);
        }

        return prev;
      });
    }, 20);

    return () => clearInterval(interval);
  }, [targetProgress, onLoaded]);

  // Status subtitle based on progress percentage
  const getStatusText = (val: number) => {
    if (val < 30) return "Gathering Starlight & Gold...";
    if (val < 75) return "Preloading Unforgettable Memories...";
    if (val < 100) return "Polishing Cinematic Tribute...";
    return "Ready For Madhuuu ✨";
  };

  return (
    <AnimatePresence>
      {!isFinished && (
        <motion.div
          key="luxury-preloader"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            scale: 1.04,
            filter: "blur(10px)",
            transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
          }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center overflow-hidden bg-background select-none"
        >
          {/* Ambient aurora background glow */}
          <div className="pointer-events-none absolute inset-0">
            <div
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 size-[650px] rounded-full opacity-30 blur-[120px]"
              style={{
                background:
                  "radial-gradient(circle, oklch(0.88 0.14 85 / 0.4) 0%, oklch(0.35 0.12 330 / 0.2) 50%, transparent 75%)",
              }}
            />
            <div
              className="absolute inset-0 opacity-40"
              style={{ background: "var(--gradient-aurora)" }}
            />
          </div>

          {/* Central Rotating Emblem & Rings */}
          <div className="relative mb-10 flex items-center justify-center">
            {/* Outer spinning dash ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
              className="absolute size-44 rounded-full border border-dashed border-primary/25"
            />

            {/* Counter-rotating gradient stroke ring */}
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
              className="absolute size-36 rounded-full"
              style={{
                background:
                  "conic-gradient(from 0deg, transparent 0%, oklch(0.88 0.14 85 / 0.6) 50%, transparent 100%)",
                WebkitMask:
                  "radial-gradient(farthest-side, transparent calc(100% - 1.5px), #fff calc(100% - 1px))",
                mask: "radial-gradient(farthest-side, transparent calc(100% - 1.5px), #fff calc(100% - 1px))",
              }}
            />

            {/* Glowing core sphere */}
            <div className="relative flex size-28 items-center justify-center rounded-full glass shadow-2xl">
              <motion.div
                animate={{ scale: [0.92, 1.08, 0.92], opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-2 rounded-full opacity-40 blur-md"
                style={{ background: "var(--gradient-gold)" }}
              />
              <span
                className="relative text-3xl text-gold-gradient"
                style={{ filter: "drop-shadow(0 0 12px oklch(0.88 0.14 85 / 0.6))" }}
              >
                ✦
              </span>
            </div>
          </div>

          {/* Numerical Percentage */}
          <div className="relative mb-6 flex items-baseline gap-1 font-display">
            <span className="text-6xl font-light italic tracking-tight text-gold-gradient sm:text-7xl">
              {String(displayProgress).padStart(2, "0")}
            </span>
            <span className="text-2xl font-light italic text-primary/70">%</span>
          </div>

          {/* Sleek Progress Bar Container */}
          <div className="relative mb-6 h-1.5 w-64 overflow-hidden rounded-full glass sm:w-80">
            {/* Filled Progress Bar */}
            <motion.div
              className="h-full rounded-full"
              style={{
                width: `${displayProgress}%`,
                background: "var(--gradient-gold)",
                boxShadow: "0 0 20px oklch(0.88 0.14 85 / 0.9)",
              }}
              transition={{ ease: "easeOut" }}
            />
            {/* Shimmer light tip */}
            <div
              className="absolute top-0 bottom-0 w-8 -translate-x-1/2 opacity-75 blur-[2px]"
              style={{
                left: `${displayProgress}%`,
                background: "linear-gradient(90deg, transparent, oklch(1 0 0), transparent)",
              }}
            />
          </div>

          {/* Subtitle / Status Text */}
          <motion.div
            key={getStatusText(displayProgress)}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="text-center text-[10px] uppercase tracking-[0.45em] text-foreground/60"
          >
            {getStatusText(displayProgress)}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
