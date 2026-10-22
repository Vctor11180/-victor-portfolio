import { profile, socials } from "@/lib/data";

export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-10 font-mono text-xs text-ink-3 sm:flex-row sm:items-center sm:justify-between md:px-8">
        <p>
          © {profile.shortName} · {profile.location}
        </p>
        <p className="flex gap-5">
          <a href={socials.github} className="hover:text-ink" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href={socials.linkedin} className="hover:text-ink" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href={`mailto:${profile.email}`} className="hover:text-ink">Email</a>
        </p>
      </div>
    </footer>
  );
}
