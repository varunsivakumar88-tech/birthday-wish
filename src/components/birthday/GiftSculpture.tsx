import { motion } from "framer-motion";

export function GiftSculpture({ dolly = 0 }: { dolly?: number }) {
  return (
    <div className="relative flex size-72 items-center justify-center sm:size-80">
      {/* Radiant halo behind gift */}
      <motion.div
        animate={{
          scale: [1, 1.25, 1],
          opacity: [0.4, 0.8, 0.4],
          rotate: [0, 180, 360],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute size-64 rounded-full blur-3xl sm:size-72"
        style={{
          background:
            "radial-gradient(circle, oklch(0.88 0.16 85 / 0.5) 0%, oklch(0.45 0.14 340 / 0.3) 50%, transparent 70%)",
        }}
      />

      {/* Floating Animated 3D Gift Box */}
      <motion.div
        animate={{
          y: [-8, 8, -8],
          rotateY: [-10, 10, -10],
          rotateX: [6, -6, 6],
          rotateZ: [-2, 2, -2],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          perspective: 1000,
          transformStyle: "preserve-3d",
          scale: 1 + dolly * 0.35,
        }}
        className="relative flex size-44 items-center justify-center sm:size-52"
      >
        {/* Main Luxury Box Body */}
        <div
          className="relative size-full rounded-3xl border border-amber-300/30 p-1 shadow-2xl backdrop-blur-md"
          style={{
            background:
              "linear-gradient(135deg, oklch(0.24 0.04 310) 0%, oklch(0.14 0.03 310) 50%, oklch(0.10 0.02 300) 100%)",
            boxShadow:
              "0 25px 60px -15px oklch(0.84 0.12 85 / 0.25), inset 0 1px 1px 0 rgba(255,255,255,0.2)",
          }}
        >
          {/* Vertical Satin Gold Ribbon */}
          <div
            className="absolute inset-y-0 left-1/2 w-8 -translate-x-1/2 overflow-hidden sm:w-10"
            style={{
              background:
                "linear-gradient(90deg, oklch(0.72 0.14 70) 0%, oklch(0.92 0.12 88) 50%, oklch(0.75 0.14 70) 100%)",
              boxShadow: "0 0 15px oklch(0.88 0.14 85 / 0.4)",
            }}
          >
            <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_0%,rgba(255,255,255,0.4)_50%,transparent_100%)] opacity-70" />
          </div>

          {/* Horizontal Satin Gold Ribbon */}
          <div
            className="absolute inset-x-0 top-1/2 h-8 -translate-y-1/2 overflow-hidden sm:h-10"
            style={{
              background:
                "linear-gradient(180deg, oklch(0.72 0.14 70) 0%, oklch(0.92 0.12 88) 50%, oklch(0.75 0.14 70) 100%)",
              boxShadow: "0 0 15px oklch(0.88 0.14 85 / 0.4)",
            }}
          >
            <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_0%,rgba(255,255,255,0.4)_50%,transparent_100%)] opacity-70" />
          </div>

          {/* Box Lid Trim */}
          <div
            className="absolute -inset-1 rounded-[1.7rem] border border-amber-400/20 pointer-events-none"
            style={{
              boxShadow: "inset 0 0 20px oklch(0.88 0.14 85 / 0.15)",
            }}
          />

          {/* Top Metallic Bow */}
          <div className="absolute -top-7 left-1/2 -translate-x-1/2 flex items-center justify-center sm:-top-8">
            {/* Left loop */}
            <motion.div
              animate={{ rotate: [-24, -20, -24], scale: [1, 1.05, 1] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="size-9 -mr-3 rounded-full border-2 border-amber-200/80 sm:size-11"
              style={{
                background:
                  "radial-gradient(circle, oklch(0.94 0.12 88) 0%, oklch(0.75 0.15 72) 100%)",
                boxShadow: "0 4px 15px oklch(0.85 0.15 75 / 0.5)",
              }}
            />
            {/* Center knot */}
            <div
              className="relative z-10 size-6 rounded-full border border-amber-100/60 sm:size-7"
              style={{
                background:
                  "radial-gradient(circle at 35% 35%, oklch(0.98 0.08 90) 0%, oklch(0.78 0.16 75) 100%)",
                boxShadow: "0 0 12px oklch(0.88 0.14 85 / 0.8)",
              }}
            />
            {/* Right loop */}
            <motion.div
              animate={{ rotate: [24, 20, 24], scale: [1, 1.05, 1] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="size-9 -ml-3 rounded-full border-2 border-amber-200/80 sm:size-11"
              style={{
                background:
                  "radial-gradient(circle, oklch(0.94 0.12 88) 0%, oklch(0.75 0.15 72) 100%)",
                boxShadow: "0 4px 15px oklch(0.85 0.15 75 / 0.5)",
              }}
            />
          </div>
        </div>

        {/* Orbiting Sparkles */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              rotate: [0, 360],
              scale: [0.8, 1.3, 0.8],
            }}
            transition={{
              rotate: {
                duration: 6 + i * 2,
                repeat: Infinity,
                ease: "linear",
              },
              scale: {
                duration: 2 + i * 0.5,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}
            className="absolute flex items-center justify-center text-amber-300"
            style={{
              width: `${180 + i * 25}px`,
              height: `${180 + i * 25}px`,
              pointerEvents: "none",
            }}
          >
            <span
              className="text-xs"
              style={{
                transform: `rotate(${i * 60}deg) translateY(-${90 + i * 12}px)`,
                filter: "drop-shadow(0 0 6px oklch(0.9 0.15 85 / 0.9))",
              }}
            >
              ✦
            </span>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
