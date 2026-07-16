"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface FloatingShapeProps {
  /** Path to a real 3D render, e.g. "/images/shapes/pyramid.png". Omit to show a placeholder slot. */
  src?: string;
  alt: string;
  className?: string;
  size?: number;
  duration?: number;
  delay?: number;
}

/**
 * Decorative slot for the glossy 3D renders from the reference design.
 * Drop a PNG into public/images/shapes and pass its path as `src` — no other
 * code changes needed. Until then it renders a soft dashed placeholder.
 */
export function FloatingShape({
  src,
  alt,
  className,
  size = 96,
  duration = 6,
  delay = 0,
}: FloatingShapeProps) {
  return (
    <motion.div
      aria-hidden
      className={cn("absolute select-none", className)}
      style={{ width: size, height: size }}
      animate={{ y: [0, -16, 0], rotate: [0, 4, 0] }}
      transition={{ duration, delay, repeat: Infinity, ease: "easeInOut" }}
    >
      {src ? (
        <Image src={src} alt={alt} fill className="object-contain drop-shadow-xl" />
      ) : (
        <div className="h-full w-full rounded-3xl border-2 border-dashed border-border bg-background/60" />
      )}
    </motion.div>
  );
}
