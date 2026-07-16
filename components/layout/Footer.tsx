import { personal, socialLinks } from "@/lib/data";

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-content flex-col gap-6 px-6 py-10 md:flex-row md:items-center md:justify-between md:px-10">
        <p className="text-sm text-muted">
          © {new Date().getFullYear()} {personal.nameEn}. All rights reserved.
        </p>
        <div className="flex flex-wrap gap-x-6 gap-y-2">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noreferrer" : undefined}
              className="text-sm text-muted transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
