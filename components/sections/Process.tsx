"use client";

import { useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { FloatingShape } from "@/components/ui/FloatingShape";
import { processSteps } from "@/lib/data";

const stepShapes = [
  { src: "/images/shapes/roll.png", size: 150, duration: 7 },
  { src: "/images/shapes/star.png", size: 130, duration: 6.5 },
  { src: "/images/shapes/lego.png", size: 140, duration: 7.5 },
  { src: "/images/shapes/flower.png", size: 130, duration: 6 },
];

export function Process() {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    const index = Math.min(
      processSteps.length - 1,
      Math.max(0, Math.floor(v * processSteps.length))
    );
    setActive(index);
  });

  const activeStep = processSteps[active];

  return (
    <section id="process" className="px-6 py-28 md:px-10 md:py-40">
      <div className="mx-auto max-w-content">
        <RevealOnScroll>
          <h2 className="max-w-2xl break-keep text-balance text-3xl font-medium tracking-tight text-foreground md:text-5xl">
            Process
          </h2>
        </RevealOnScroll>

        <div
          ref={ref}
          className="mt-20 grid grid-cols-1 md:mt-28 md:grid-cols-[minmax(0,30rem)_1fr] md:gap-24"
        >
          {/* left column: sticky, swaps as you scroll */}
          <div className="relative hidden md:block">
            <div className="sticky top-24 md:top-28">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStep.index}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                >
                  <span className="block select-none text-[12rem] font-black leading-none text-foreground/10">
                    {activeStep.index}
                  </span>
                  <h3 className="-mt-14 text-4xl font-medium text-foreground">
                    {activeStep.title}
                  </h3>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* right column: each step scrolls past, drives the left column */}
          <ol className="flex flex-col">
            {processSteps.map((step, i) => {
              const shape = stepShapes[i % stepShapes.length];
              const mobileSize = Math.round(shape.size * 0.85);
              return (
                <li
                  key={step.index}
                  className="relative flex min-h-[65vh] flex-col justify-center gap-8 md:min-h-[85vh] md:gap-4"
                >
                  <div
                    className="relative mx-auto md:hidden"
                    style={{ width: mobileSize, height: mobileSize }}
                  >
                    <FloatingShape
                      src={shape.src}
                      alt=""
                      size={mobileSize}
                      duration={shape.duration}
                      className="opacity-100"
                    />
                  </div>
                  <FloatingShape
                    src={shape.src}
                    alt=""
                    size={shape.size}
                    duration={shape.duration}
                    className="right-0 top-1/2 hidden -translate-y-1/2 opacity-70 md:block"
                  />
                  <div className="md:hidden">
                    <span className="block select-none text-9xl font-black leading-none text-foreground/10">
                      {step.index}
                    </span>
                    <h3 className="-mt-9 text-2xl font-medium text-foreground">
                      {step.title}
                    </h3>
                  </div>
                  <p className="max-w-2xl break-keep text-lg leading-snug text-muted md:text-2xl md:leading-snug">
                    {step.description}
                  </p>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
