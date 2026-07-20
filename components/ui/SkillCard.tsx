"use client";

import { ReactNode, useState } from "react";
import { cn } from "@/lib/utils";

interface SkillCardProps {
  name: string;
  level: number;
  icon: ReactNode;
}

export function SkillCard({ name, level, icon }: SkillCardProps) {
  const [flipped, setFlipped] = useState(false);

  return (
    <button
      type="button"
      onClick={() => setFlipped((v) => !v)}
      aria-pressed={flipped}
      aria-label={`${name}, tap to flip`}
      className="group relative aspect-square w-full cursor-pointer [perspective:800px]"
    >
      <div
        className={cn(
          "relative h-full w-full transition-transform duration-500 ease-out [transform-style:preserve-3d]",
          flipped && "[transform:rotateY(180deg)]",
        )}
      >
        {/* Front */}
        <div className="absolute inset-0 rounded-[1.75rem] bg-accent/5 p-5 shadow-sm backdrop-blur-xl transition-shadow duration-300 [backface-visibility:hidden] group-hover:shadow-[0_16px_40px_-20px_rgba(0,0,0,0.25)]">
          <div className="relative flex h-full w-full flex-col items-center justify-center gap-3 rounded-xl bg-white p-3 text-center">
            {icon}
            <span className="text-lg font-medium text-foreground">{name}</span>

            <span className="pointer-events-none absolute inset-x-0 bottom-3 mx-auto w-fit rounded-full border border-border bg-background px-3 py-1.5 text-[11px] font-medium text-muted opacity-0 shadow-sm transition-opacity duration-200 group-hover:opacity-100">
              Tap to Flip
            </span>
          </div>
        </div>

        {/* Back */}
        <div className="absolute inset-0 rounded-[1.75rem] bg-accent/25 p-5 shadow-sm backdrop-blur-xl [backface-visibility:hidden] [transform:rotateY(180deg)]">
          <div className="flex h-full w-full flex-col items-center justify-center gap-1 rounded-xl bg-accent px-3 text-center">
            <span className="text-sm font-semibold text-accent-foreground">
              {name}
            </span>
            <div className="mt-1 flex items-center gap-1.5" aria-label={`${level} out of 5`}>
              {Array.from({ length: 5 }).map((_, i) => (
                <span
                  key={i}
                  className={cn(
                    "h-2.5 w-2.5 rounded-full border border-accent-foreground",
                    i < level ? "bg-accent-foreground" : "bg-transparent",
                  )}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </button>
  );
}
