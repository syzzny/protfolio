import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { aboutText, chipClasses, personal, skills } from "@/lib/data";

export function About() {
  return (
    <section id="about" className="px-6 py-28 md:px-10 md:py-40">
      <div className="mx-auto max-w-content">
        <RevealOnScroll>
          <span className="text-xs uppercase tracking-[0.25em] text-muted">
            About
          </span>
        </RevealOnScroll>

        <div className="mt-8 grid gap-16 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-7">
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

          <div className="md:col-span-5">
            <div className="flex flex-col gap-10">
              {skills.map((group, i) => (
                <RevealOnScroll key={group.category} delay={0.1 * i}>
                  <div>
                    <h3 className="text-xs uppercase tracking-[0.2em] text-muted">
                      {group.category}
                    </h3>
                    <ul className="mt-4 flex flex-wrap gap-2">
                      {group.items.map((skill, j) => (
                        <li
                          key={skill}
                          className={`rounded-full border px-4 py-2 text-sm font-medium ${
                            chipClasses[(i + j) % chipClasses.length]
                          }`}
                        >
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </div>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
