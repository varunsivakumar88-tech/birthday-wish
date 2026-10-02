import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { IntroScene } from "@/components/birthday/IntroScene";
import { BirthdayHero } from "@/components/birthday/BirthdayHero";
import { PhotoGallery } from "@/components/birthday/PhotoGallery";
import { CakeFinale } from "@/components/birthday/CakeFinale";

export function IndexComponent() {
  const [entered, setEntered] = useState(false);

  return (
    <main className="relative min-h-dvh overflow-x-hidden bg-background text-foreground">
      <AnimatePresence mode="wait">
        {!entered ? (
          <IntroScene key="intro" onBegin={() => setEntered(true)} />
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <BirthdayHero />
            <PhotoGallery />
            <CakeFinale />
            <footer className="border-t border-white/5 px-6 py-12 text-center text-[10px] uppercase tracking-[0.5em] text-foreground/30">
              Crafted with love · For Madhuuu
            </footer>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Happy Birthday, Madhuuu ✨" },
      {
        name: "description",
        content:
          "A cinematic, premium birthday tribute for Madhuuu — memories, moments, and a wish that lasts a lifetime.",
      },
      { property: "og:title", content: "Happy Birthday, Madhuuu ✨" },
      {
        property: "og:description",
        content: "A premium cinematic birthday tribute filled with light, memories, and love.",
      },
    ],
  }),
  component: IndexComponent,
});
