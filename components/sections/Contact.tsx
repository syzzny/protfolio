import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { chipClasses, personal, socialLinks } from "@/lib/data";

export function Contact() {
  return (
    <section id="contact" className="px-6 py-28 md:px-10 md:py-40">
      <div className="mx-auto max-w-content">
        <RevealOnScroll>
          <span className="text-xs uppercase tracking-[0.25em] text-muted">
            Contact
          </span>
        </RevealOnScroll>

        <RevealOnScroll delay={0.1}>
          <h2 className="mt-6 max-w-3xl text-balance text-3xl font-medium leading-tight tracking-tight text-foreground md:text-6xl">
            새로운 프로젝트를 함께 만들고 싶다면 편하게 연락 주세요.
          </h2>
        </RevealOnScroll>

        <RevealOnScroll delay={0.2}>
          <MagneticButton
            href={`mailto:${personal.email}`}
            className="mt-12 inline-block rounded-full bg-accent px-8 py-5 text-lg font-medium text-accent-foreground hover:bg-accent/90 md:text-2xl"
          >
            {personal.email}
          </MagneticButton>
        </RevealOnScroll>

        <RevealOnScroll delay={0.3}>
          <div className="mt-20 flex flex-wrap gap-3 border-t border-border pt-10">
            {socialLinks
              .filter((link) => link.label !== "Email")
              .map((link, i) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className={`rounded-full border px-4 py-2 text-sm font-medium transition-transform hover:-translate-y-0.5 ${
                    chipClasses[i % chipClasses.length]
                  }`}
                >
                  {link.label}
                </a>
              ))}
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
