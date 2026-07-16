"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useCursor } from "@/components/layout/CustomCursor";
import { solidPlayClasses } from "@/lib/data";
import { Project } from "@/types";

interface ProjectStackCardProps {
  project: Project;
  index: number;
  total: number;
}

export function ProjectStackCard({ project, index, total }: ProjectStackCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { setVariant } = useCursor();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.92]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.55]);

  return (
    <div
      ref={ref}
      className="sticky top-24 h-[78vh] px-6 md:top-28 md:h-[85vh] md:px-10"
      style={{ zIndex: index + 1 }}
    >
      <motion.div style={{ scale, opacity }} className="h-full">
        <Link
          href={`/work/${project.slug}`}
          onMouseEnter={() => setVariant("view")}
          onMouseLeave={() => setVariant("default")}
          className={`relative flex h-full w-full flex-col justify-between overflow-hidden rounded-[2.5rem] p-8 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.3)] md:p-14 ${
            solidPlayClasses[index % solidPlayClasses.length]
          }`}
        >
          <div className="flex items-start justify-between">
            <span className="rounded-full bg-background/90 px-3 py-1 text-sm font-medium text-foreground">
              {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
            </span>
            <span className="rounded-full bg-background/90 px-3 py-1 text-sm font-medium text-foreground">
              {project.year}
            </span>
          </div>

          <div className="text-white">
            <p className="text-xs uppercase tracking-[0.25em] text-white/80">
              {project.category}
            </p>
            <h3 className="mt-4 text-[clamp(2rem,6vw,4.5rem)] font-medium leading-[0.95] tracking-tight">
              {project.title}
            </h3>
            <p className="mt-4 max-w-md text-balance text-sm text-white/85 md:text-base">
              {project.summary}
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {project.tools.map((tool) => (
                <span
                  key={tool}
                  className="rounded-full bg-background/90 px-3 py-1 text-xs font-medium text-foreground"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </Link>
      </motion.div>
    </div>
  );
}
