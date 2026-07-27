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
import { aboutText, skills } from "@/lib/data";

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
      <div className="mx-auto max-w-content text-center">
        <RevealOnScroll>
          <h2 className="mx-auto max-w-2xl break-keep text-balance text-2xl font-medium tracking-tight text-foreground md:text-4xl">
            About Me
          </h2>
        </RevealOnScroll>

        <div className="relative mx-auto mt-14 max-w-3xl md:mt-16">
          {/* decorative backdrop behind the about card */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-between"
          >
            <Image
              src="/images/3d-about-1.png"
              alt=""
              width={800}
              height={800}
              className="-ml-8 -mt-4 w-40 animate-float-slow opacity-90 md:-ml-24 md:w-72"
            />
            <Image
              src="/images/3d-about-2.png"
              alt=""
              width={800}
              height={800}
              className="-mr-8 mt-4 w-40 animate-float-slow opacity-90 [animation-delay:1.5s] md:-mr-24 md:w-72"
            />
          </div>

          <RevealOnScroll>
            <div className="rounded-[2.5rem] bg-accent/5 p-4 shadow-sm backdrop-blur-xl transition-shadow duration-300 hover:shadow-[0_16px_40px_-20px_rgba(0,0,0,0.25)] md:p-5">
              <div className="rounded-[2rem] bg-white px-5 py-8 text-center md:p-12">
                <p className="break-keep text-balance text-xl font-medium leading-normal tracking-tight text-foreground md:text-3xl">
                  {aboutText.intro}
                </p>
                <p className="mx-auto mt-4 max-w-xl break-keep text-base leading-relaxed text-muted md:mt-8 md:text-lg">
                  {aboutText.detail}
                </p>
              </div>
            </div>
          </RevealOnScroll>
        </div>

        <div className="relative mt-48 md:mt-56">
          {/* decorative backdrop behind the stack grid */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 -z-10 hidden items-center justify-center md:flex"
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
            <h2 className="mx-auto max-w-2xl break-keep text-balance text-2xl font-medium tracking-tight text-foreground md:text-4xl">
              My Stack
            </h2>
          </RevealOnScroll>

          <ul className="relative mt-14 grid grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-4 md:mt-16">
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
                            className="h-12 w-auto object-contain md:h-20"
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
