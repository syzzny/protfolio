import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { ProjectStackCard } from "@/components/ui/ProjectStackCard";
import { projects } from "@/lib/data";

export function Work() {
  return (
    <section id="work" className="py-28 md:py-40">
      <div className="mx-auto max-w-content px-6 md:px-10">
        <RevealOnScroll>
          <h2 className="max-w-2xl break-keep text-balance text-3xl font-medium tracking-tight text-foreground md:text-5xl">
            Projects
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
