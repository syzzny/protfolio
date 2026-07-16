import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { ProjectStackCard } from "@/components/ui/ProjectStackCard";
import { projects } from "@/lib/data";

export function Work() {
  return (
    <section id="work" className="py-28 md:py-40">
      <div className="mx-auto max-w-content px-6 md:px-10">
        <RevealOnScroll>
          <span className="text-xs uppercase tracking-[0.25em] text-muted">
            Work
          </span>
        </RevealOnScroll>
        <RevealOnScroll delay={0.1}>
          <h2 className="mt-6 max-w-2xl text-balance text-3xl font-medium tracking-tight text-foreground md:text-5xl">
            디자인과 퍼블리싱이 함께 완성한 프로젝트들
          </h2>
        </RevealOnScroll>
      </div>

      <div className="mt-20 flex flex-col gap-10 md:mt-28 md:gap-16">
        {projects.map((project, index) => (
          <ProjectStackCard
            key={project.slug}
            project={project}
            index={index}
            total={projects.length}
          />
        ))}
      </div>
    </section>
  );
}
