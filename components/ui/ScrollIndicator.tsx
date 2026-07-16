"use client";

import { motion } from "framer-motion";

export function ScrollIndicator() {
  return (
    <motion.div
      className="flex flex-col items-center gap-3"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 1.4 }}
    >
      <span className="text-[11px] uppercase tracking-[0.2em] text-muted">
        Scroll
      </span>
      <motion.div
        className="h-10 w-px bg-border"
        animate={{ scaleY: [1, 0.4, 1], opacity: [0.3, 1, 0.3] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        style={{ transformOrigin: "top" }}
      />
    </motion.div>
  );
}
