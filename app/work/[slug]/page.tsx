import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { chipClasses, personal, solidPlayClasses, projects } from "@/lib/data";

interface ProjectPageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export function generateMetadata({ params }: ProjectPageProps): Metadata {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) return {};
  return {
    title: `${project.title} — ${personal.name}`,
    description: project.summary,
  };
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const index = projects.findIndex((p) => p.slug === params.slug);
  if (index === -1) notFound();

  const project = projects[index];
  const nextProject = projects[(index + 1) % projects.length];

  return (
    <main className="px-6 pb-28 pt-32 md:px-10 md:pb-40 md:pt-40">
      <div className="mx-auto max-w-content">
        <RevealOnScroll>
          <Link
            href="/#work"
            className="text-sm text-muted transition-colors hover:text-foreground"
          >
            ← Work
          </Link>
        </RevealOnScroll>

        <RevealOnScroll delay={0.1}>
          <div className="mt-8 flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.2em] text-muted">
            <span>{project.category}</span>
            <span>·</span>
            <span>{project.year}</span>
            <span>·</span>
            <span>{project.role}</span>
          </div>
          <h1 className="mt-6 text-[clamp(2.25rem,7vw,5.5rem)] font-medium leading-[0.95] tracking-tight text-foreground">
            {project.title}
          </h1>
        </RevealOnScroll>

        <RevealOnScroll delay={0.15}>
          <div
            className={`mt-14 h-[50vh] w-full rounded-[2.5rem] md:h-[65vh] ${
              solidPlayClasses[index % solidPlayClasses.length]
            }`}
          />
        </RevealOnScroll>

        <div className="mt-16 grid gap-12 md:grid-cols-12 md:gap-8">
          <RevealOnScroll className="md:col-span-8">
            <p className="text-balance text-lg leading-relaxed text-foreground/85 md:text-xl">
              {project.description}
            </p>
          </RevealOnScroll>
          <RevealOnScroll delay={0.1} className="md:col-span-4">
            <h2 className="text-xs uppercase tracking-[0.2em] text-muted">
              Tools
            </h2>
            <ul className="mt-4 flex flex-wrap gap-2">
              {project.tools.map((tool, i) => (
                <li
                  key={tool}
                  className={`rounded-full border px-4 py-2 text-sm font-medium ${
                    chipClasses[i % chipClasses.length]
                  }`}
                >
                  {tool}
                </li>
              ))}
            </ul>
          </RevealOnScroll>
        </div>

        <RevealOnScroll delay={0.1}>
          <div className="mt-28 flex items-center justify-between border-t border-border pt-10 md:mt-40">
            <span className="text-xs uppercase tracking-[0.2em] text-muted">
              Next Project
            </span>
            <Link
              href={`/work/${nextProject.slug}`}
              className="group flex items-center gap-3 text-xl font-medium text-foreground transition-colors hover:text-accent md:text-3xl"
            >
              {nextProject.title}
              <span className="transition-transform duration-300 group-hover:translate-x-1.5">
                →
              </span>
            </Link>
          </div>
        </RevealOnScroll>
      </div>
    </main>
  );
}
