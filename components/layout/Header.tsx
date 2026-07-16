"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks } from "@/lib/data";
import { cn } from "@/lib/utils";

export function Header() {
  const [activeHref, setActiveHref] = useState("#hero");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const sectionIds = navLinks.map((l) => l.href.replace("#", ""));
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActiveHref(`#${visible.target.id}`);
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed inset-x-0 top-5 z-50 flex justify-center px-4">
      <nav className="flex items-center gap-1 rounded-full border border-border bg-background/90 p-1.5 shadow-[0_12px_40px_-16px_rgba(0,0,0,0.18)] backdrop-blur-md">
        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={cn(
                "relative rounded-full px-4 py-2 text-sm font-medium transition-colors duration-300",
                activeHref === link.href
                  ? "text-accent-foreground"
                  : "text-foreground/70 hover:text-foreground"
              )}
            >
              {activeHref === link.href && (
                <motion.span
                  layoutId="nav-pill"
                  className="absolute inset-0 rounded-full bg-accent"
                  transition={{ type: "spring", stiffness: 350, damping: 30 }}
                />
              )}
              <span className="relative">{link.label}</span>
            </a>
          ))}
        </div>

        <button
          type="button"
          aria-label="메뉴 열기"
          onClick={() => setMenuOpen((v) => !v)}
          className="flex h-9 w-9 flex-col items-center justify-center gap-1.5 rounded-full md:hidden"
        >
          <motion.span
            className="h-px w-4 bg-foreground"
            animate={{ rotate: menuOpen ? 45 : 0, y: menuOpen ? 3.5 : 0 }}
          />
          <motion.span
            className="h-px w-4 bg-foreground"
            animate={{ rotate: menuOpen ? -45 : 0, y: menuOpen ? -3.5 : 0 }}
          />
        </button>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.96 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="absolute left-1/2 top-[calc(100%+0.5rem)] w-56 -translate-x-1/2 rounded-3xl border border-border bg-background p-3 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.25)] md:hidden"
          >
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={cn(
                    "rounded-full px-4 py-2.5 text-sm font-medium",
                    activeHref === link.href
                      ? "bg-accent text-accent-foreground"
                      : "text-foreground/80"
                  )}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
