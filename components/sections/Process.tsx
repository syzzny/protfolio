"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { processSteps, solidPlayClasses } from "@/lib/data";

export function Process() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.75", "end 0.4"],
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="process" className="px-6 py-28 md:px-10 md:py-40">
      <div className="mx-auto max-w-content">
        <RevealOnScroll>
          <span className="text-xs uppercase tracking-[0.25em] text-muted">
            Process
          </span>
        </RevealOnScroll>
        <RevealOnScroll delay={0.1}>
          <h2 className="mt-6 max-w-2xl text-balance text-3xl font-medium tracking-tight text-foreground md:text-5xl">
            네 단계로 완성하는 작업 방식
          </h2>
        </RevealOnScroll>

        <div ref={ref} className="relative mt-20 md:mt-28">
          <div className="absolute left-[22px] top-0 h-full w-px bg-border" />
          <motion.div
            style={{ height: lineHeight }}
            className="absolute left-[22px] top-0 w-px bg-accent"
          />

          <ol className="flex flex-col gap-16 md:gap-20">
            {processSteps.map((step, i) => (
              <RevealOnScroll key={step.index} y={16}>
                <li className="grid grid-cols-[2.75rem_1fr] items-start gap-6 pl-0 md:gap-10">
                  <span
                    className={`flex h-11 w-11 items-center justify-center rounded-full text-sm font-bold text-white ${
                      solidPlayClasses[i % solidPlayClasses.length]
                    }`}
                  >
                    {step.index}
                  </span>
                  <div>
                    <h3 className="text-xl font-medium text-foreground md:text-2xl">
                      {step.title}
                    </h3>
                    <p className="mt-3 max-w-md text-sm leading-relaxed text-muted md:text-base">
                      {step.description}
                    </p>
                  </div>
                </li>
              </RevealOnScroll>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
