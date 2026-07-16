"use client";

import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useIsDesktop } from "@/hooks/useIsDesktop";

type CursorVariant = "default" | "view";

interface CursorContextValue {
  setVariant: (variant: CursorVariant) => void;
}

const CursorContext = createContext<CursorContextValue>({
  setVariant: () => {},
});

export function useCursor() {
  return useContext(CursorContext);
}

export function CursorProvider({ children }: { children: ReactNode }) {
  const [variant, setVariant] = useState<CursorVariant>("default");
  const [ready, setReady] = useState(false);
  const isDesktop = useIsDesktop();

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);
  const springX = useSpring(mouseX, { damping: 30, stiffness: 400, mass: 0.5 });
  const springY = useSpring(mouseY, { damping: 30, stiffness: 400, mass: 0.5 });

  useEffect(() => {
    if (!isDesktop) {
      setReady(false);
      return;
    }
    const handleMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      setReady(true);
    };
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, [isDesktop, mouseX, mouseY]);

  useEffect(() => {
    const active = isDesktop && ready;
    document.documentElement.classList.toggle("cursor-none-desktop", active);
    return () => document.documentElement.classList.remove("cursor-none-desktop");
  }, [isDesktop, ready]);

  return (
    <CursorContext.Provider value={{ setVariant }}>
      {children}
      {isDesktop && ready && (
        <motion.div
          aria-hidden
          className="pointer-events-none fixed left-0 top-0 z-[100]"
          style={{ x: springX, y: springY }}
        >
          <motion.div
            className={
              variant === "view"
                ? "-translate-x-1/2 -translate-y-1/2 flex items-center justify-center rounded-full border border-foreground/10 bg-background text-foreground shadow-[0_8px_30px_-8px_rgba(0,0,0,0.35)] transition-colors duration-200"
                : "-translate-x-1/2 -translate-y-1/2 flex items-center justify-center rounded-full bg-accent transition-colors duration-200"
            }
            animate={{
              width: variant === "view" ? 88 : 14,
              height: variant === "view" ? 88 : 14,
            }}
            transition={{ type: "spring", damping: 26, stiffness: 320 }}
          >
            {variant === "view" && (
              <span className="text-[11px] font-medium uppercase tracking-wide">
                View
              </span>
            )}
          </motion.div>
        </motion.div>
      )}
    </CursorContext.Provider>
  );
}
