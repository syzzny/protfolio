import {
  SiFramer,
  SiHtml5,
  SiSass,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiNotion,
  SiGit,
} from "react-icons/si";
import type { IconType } from "react-icons";
import Image from "next/image";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { SkillCard } from "@/components/ui/SkillCard";
import { aboutText, personal, skills } from "@/lib/data";

const skillIcons: Record<string, IconType> = {
  Framer: SiFramer,
  HTML5: SiHtml5,
  Sass: SiSass,
  JavaScript: SiJavascript,
  React: SiReact,
  "Next.js": SiNextdotjs,
  Notion: SiNotion,
  Git: SiGit,
};

const skillLogos: Record<
  string,
  { src: string; width: number; height: number }
> = {
  Figma: { src: "/images/logo/figma.png", width: 1667, height: 2500 },
  Photoshop: { src: "/images/logo/photoshop.png", width: 960, height: 936 },
  Illustrator: { src: "/images/logo/illustrator.png", width: 960, height: 960 },
  HTML5: { src: "/images/logo/html5.png", width: 500, height: 500 },
  CSS3: { src: "/images/logo/css3.png", width: 500, height: 706 },
  Sass: { src: "/images/logo/sass.png", width: 960, height: 720 },
  JavaScript: { src: "/images/logo/js.png", width: 1259, height: 1750 },
  React: { src: "/images/logo/react.png", width: 960, height: 855 },
  Bootstrap: { src: "/images/logo/boot.png", width: 960, height: 765 },
  "Styled-components": {
    src: "/images/logo/styled.png",
    width: 318,
    height: 318,
  },
  Notion: { src: "/images/logo/notion.png", width: 1228, height: 1280 },
  GitHub: { src: "/images/logo/github.png", width: 1024, height: 1001 },
};

function monogram(skill: string) {
  const words = skill.split(" ");
  return words.length > 1
    ? (words[0][0] + words[1][0]).toUpperCase()
    : skill.slice(0, 2).toUpperCase();
}

const allSkills = skills.flatMap((group) => group.items);

export function About() {
  return (
    <section id="about" className="px-6 py-28 md:px-10 md:py-40">
      <div className="mx-auto max-w-content">
        <RevealOnScroll>
          <span className="text-xs uppercase tracking-[0.25em] text-muted">
            About
          </span>
        </RevealOnScroll>

        <div className="mt-8 max-w-3xl">
          <RevealOnScroll>
            <p className="text-balance text-2xl font-medium leading-snug tracking-tight text-foreground md:text-4xl">
              {aboutText.intro}
            </p>
          </RevealOnScroll>
          <RevealOnScroll delay={0.1}>
            <p className="mt-8 max-w-xl text-base leading-relaxed text-muted md:text-lg">
              {aboutText.detail}
            </p>
          </RevealOnScroll>

          <RevealOnScroll delay={0.2}>
            <dl className="mt-14 flex flex-wrap gap-x-12 gap-y-6 border-t border-border pt-8">
              <div>
                <dt className="text-xs uppercase tracking-[0.2em] text-muted">
                  Role
                </dt>
                <dd className="mt-2 text-sm text-foreground">
                  {personal.title}
                </dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-[0.2em] text-muted">
                  Based in
                </dt>
                <dd className="mt-2 text-sm text-foreground">
                  {personal.location}
                </dd>
              </div>
            </dl>
          </RevealOnScroll>
        </div>

        <div className="relative mt-28">
          {/* decorative backdrop behind the stack grid */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center"
          >
            <Image
              src="/images/3d-bg.png"
              alt=""
              width={900}
              height={900}
              className="w-[70%] max-w-lg animate-float-slow opacity-90"
            />
          </div>

          <RevealOnScroll>
            <span className="text-xs uppercase tracking-[0.25em] text-muted">
              Stack
            </span>
          </RevealOnScroll>

          <ul className="relative mt-8 grid grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-4">
            {allSkills.map((skill, i) => {
              const logo = skillLogos[skill.name];
              const Icon = skillIcons[skill.name];
              return (
                <li key={skill.name}>
                  <RevealOnScroll delay={0.05 * (i % 8)}>
                    <SkillCard
                      name={skill.name}
                      level={skill.level}
                      icon={
                        logo ? (
                          <Image
                            src={logo.src}
                            alt={skill.name}
                            width={logo.width}
                            height={logo.height}
                            className="h-20 w-auto object-contain"
                          />
                        ) : Icon ? (
                          <Icon className="h-9 w-9 text-foreground/80" />
                        ) : (
                          <span className="flex h-9 w-9 items-center justify-center rounded-md bg-muted/15 text-xs font-bold text-foreground/70">
                            {monogram(skill.name)}
                          </span>
                        )
                      }
                    />
                  </RevealOnScroll>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
