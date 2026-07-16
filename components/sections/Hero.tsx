"use client";

import { useEffect } from "react";
import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { FloatingShape } from "@/components/ui/FloatingShape";
import { avatarClasses, heroStat, personal } from "@/lib/data";

export function Hero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 50, damping: 20, mass: 0.6 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20, mass: 0.6 });
  const layerX = useTransform(springX, [-0.5, 0.5], [-18, 18]);
  const layerY = useTransform(springY, [-0.5, 0.5], [-18, 18]);

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      mouseX.set(e.clientX / window.innerWidth - 0.5);
      mouseY.set(e.clientY / window.innerHeight - 0.5);
    };
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, [mouseX, mouseY]);

  return (
    <section
      id="hero"
      className="relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden px-6 pt-24"
    >
      {/* Giant scrolling background wordmark */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 flex items-center overflow-hidden"
      >
        <motion.div
          className="flex whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 36, repeat: Infinity, ease: "linear" }}
        >
          {Array.from({ length: 4 }).map((_, i) => (
            <span
              key={i}
              className="mx-8 select-none text-[16vw] font-black uppercase leading-none tracking-tight text-foreground/[0.05] md:text-[12vw]"
            >
              {personal.nameEn}
            </span>
          ))}
        </motion.div>
      </div>

      {/* Floating 3D object placeholders — drop real renders into public/images/shapes */}
      <motion.div
        aria-hidden
        style={{ x: layerX, y: layerY }}
        className="pointer-events-none absolute inset-0"
      >
        <FloatingShape
          src="/images/shapes/roll.png"
          alt="roll"
          size={120}
          duration={7}
          className="left-[6%] top-[20%] hidden lg:block"
        />
        <FloatingShape
          src="/images/shapes/star.png"
          alt="star"
          size={130}
          duration={6.5}
          delay={0.4}
          className="right-[6%] top-[16%] hidden lg:block"
        />
        <FloatingShape
          src="/images/shapes/lego.png"
          alt="lego"
          size={110}
          duration={7.5}
          delay={0.2}
          className="left-[10%] top-[58%] hidden lg:block"
        />
        <FloatingShape
          src="/images/shapes/ring.png"
          alt="ring"
          size={100}
          duration={6}
          delay={0.6}
          className="right-[9%] top-[52%] hidden lg:block"
        />
        <FloatingShape
          src="/images/shapes/blue.png"
          alt="blue"
          size={110}
          duration={8}
          delay={0.3}
          className="left-[7%] bottom-[8%] hidden xl:block"
        />
        <FloatingShape
          src="/images/shapes/flower.png"
          alt="flower"
          size={110}
          duration={7}
          delay={0.5}
          className="right-[7%] bottom-[10%] hidden xl:block"
        />
      </motion.div>

      <div className="relative z-10 flex flex-col items-center text-center">
        <RevealOnScroll delay={0.2}>
          <div className="group relative mt-8 h-80 w-64 [perspective:1200px] md:h-[26rem] md:w-80">
            <div className="relative h-full w-full transition-transform duration-700 ease-out [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
              {/* Front: profile photo */}
              <div className="absolute inset-0 overflow-hidden rounded-[2rem] border border-white/30 bg-white/10 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.35)] backdrop-blur-xl [backface-visibility:hidden]">
                <p className="absolute inset-x-0 top-6 text-center text-sm uppercase tracking-[0.15em] text-accent">
                  {personal.title}
                </p>
                <Image
                  src="/images/profile.png"
                  alt={personal.name}
                  width={1024}
                  height={1024}
                  sizes="(min-width: 768px) 320px, 256px"
                  className="absolute inset-x-0 bottom-0 h-auto w-full object-contain"
                  priority
                />
              </div>

              {/* Back: intro text */}
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 overflow-hidden rounded-[2rem] border border-white/30 bg-white px-6 text-center shadow-[0_20px_60px_-20px_rgba(0,0,0,0.35)] [backface-visibility:hidden] [transform:rotateY(180deg)]">
                <p className="text-2xl text-foreground md:text-3xl">
                  Hi, I&apos;m{" "}
                  <span className="font-semibold">{personal.name}</span>!
                </p>
                <p className="mt-1 text-sm leading-relaxed text-muted">
                  {personal.tagline}
                </p>
              </div>
            </div>
          </div>
        </RevealOnScroll>

        {/* <RevealOnScroll delay={0.3}>
          <div className="mt-6 flex items-center gap-3">
            <div className="flex -space-x-3">
              {avatarClasses.map((c, i) => (
                <span
                  key={i}
                  className={`h-8 w-8 rounded-full border-2 border-background ${c}`}
                />
              ))}
            </div>
            <span className="text-sm text-muted">
              {heroStat.value} {heroStat.label}
            </span>
          </div>
        </RevealOnScroll> */}

        <RevealOnScroll delay={0.4}>
          <MagneticButton
            href="#contact"
            className="mt-9 rounded-full border border-border bg-background px-8 py-4 text-base font-semibold text-foreground shadow-[0_10px_30px_-14px_rgba(0,0,0,0.2)] transition-colors hover:border-accent hover:text-accent"
          >
            함께 작업해요!
          </MagneticButton>
        </RevealOnScroll>
      </div>
    </section>
  );
}
