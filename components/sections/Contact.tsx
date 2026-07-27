import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { personal } from "@/lib/data";

export function Contact() {
  return (
    <section id="contact" className="px-6 py-28 md:px-10 md:py-40">
      <div className="mx-auto max-w-content">
        <RevealOnScroll>
          <h2 className="max-w-3xl break-keep text-balance text-2xl font-medium leading-tight tracking-tight text-foreground md:text-5xl md:leading-tight">
            Contact
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

        {personal.available && (
          <RevealOnScroll delay={0.3}>
            <div className="mt-20 flex items-center gap-2.5 border-t border-border pt-10">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-play-lime/60" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-play-lime" />
              </span>
              <span className="text-sm font-medium text-muted">
                {personal.availabilityText}
              </span>
            </div>
          </RevealOnScroll>
        )}
      </div>
    </section>
  );
}
