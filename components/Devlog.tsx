import { devlog } from "@/lib/data";
import { SectionHeader } from "./SectionHeader";

export function Devlog() {
  return (
    <section id="devlog" className="mx-auto max-w-6xl px-4 py-24 md:px-8">
      <SectionHeader
        index="03"
        eyebrow="Build in public"
        title="Engineering devlog"
        lead="Trade-offs, post-mortems and design decisions from the field."
      />
      <ol className="border-t border-line">
        {devlog.map((entry, i) => (
          <li key={entry.href} className="border-b border-line">
            <a
              href={entry.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group grid gap-2 py-6 transition-colors sm:grid-cols-[4rem_1fr_auto] sm:items-baseline sm:gap-6"
            >
              <span className="font-mono text-xs text-ink-3">{String(i + 1).padStart(2, "0")}</span>
              <span>
                <span className="block text-lg font-medium text-ink transition-colors group-hover:text-cyan">
                  {entry.title}
                </span>
                <span className="mt-1 block text-sm text-ink-2">{entry.note}</span>
              </span>
              <span className="chip justify-self-start sm:justify-self-end">{entry.tag}</span>
            </a>
          </li>
        ))}
      </ol>
    </section>
  );
}
