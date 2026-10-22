"use client";

import { useState } from "react";
import { projects, type Filter, type Project } from "@/lib/data";
import { SectionHeader } from "./SectionHeader";

const filters: { id: Filter; label: string }[] = [
  { id: "all", label: "All" },
  { id: "web3", label: "Web3 & DeFi" },
  { id: "fullstack", label: "Full Stack" },
  { id: "hackathon", label: "Hackathons" },
];

const layerLabel = { web2: "WEB2", web3: "WEB3", hybrid: "WEB2 ⇄ WEB3" };
const layerText = { web2: "text-cyan", web3: "text-violet", hybrid: "text-bridge" };

const visible = projects.filter((p) => !p.hidden);

export function Projects() {
  const [filter, setFilter] = useState<Filter>("all");
  const shown = filter === "all" ? visible : visible.filter((p) => p.tags.includes(filter));

  return (
    <section id="projects" className="mx-auto max-w-6xl px-4 py-24 md:px-8">
      <SectionHeader
        index="02"
        eyebrow="Selected work"
        title="Protocols, products & hackathon builds"
        lead="Each project starts from a real problem — mostly in LATAM — and picks the layer that solves it best."
      />

      <div role="group" aria-label="Filter projects" className="mb-8 flex flex-wrap gap-2">
        {filters.map((f) => {
          const count = f.id === "all" ? visible.length : visible.filter((p) => p.tags.includes(f.id as Exclude<Filter, "all">)).length;
          const on = filter === f.id;
          return (
            <button
              key={f.id}
              type="button"
              aria-pressed={on}
              onClick={() => setFilter(f.id)}
              className={`rounded-full border px-4 py-1.5 font-mono text-xs transition-colors ${
                on ? "border-ink/40 bg-ink/10 text-ink" : "border-line text-ink-2 hover:border-ink/25 hover:text-ink"
              }`}
            >
              {f.label}
              <span className="ml-2 text-ink-3">{count}</span>
            </button>
          );
        })}
      </div>

      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {shown.map((p) => (
          <li key={p.name} className="flex">
            <ProjectCard project={p} />
          </li>
        ))}
      </ul>
    </section>
  );
}

function ProjectCard({ project: p }: { project: Project }) {
  const shell = p.layer === "hybrid" ? "border-bridge" : "glass";
  const chip = p.layer === "web2" ? "chip-web2" : p.layer === "web3" ? "chip-web3" : "";

  return (
    <article data-layer={p.layer} className={`card ${shell} flex w-full flex-col rounded-2xl p-6`}>
      <div className="mb-4 flex items-center justify-between gap-3">
        <span className={`font-mono text-[0.65rem] tracking-[0.2em] ${layerText[p.layer]}`}>{layerLabel[p.layer]}</span>
        {p.tags.includes("hackathon") && (
          <span className="font-mono text-[0.65rem] tracking-wider text-ink-3">HACKATHON</span>
        )}
      </div>

      <h3 className="text-xl font-semibold tracking-tight text-ink">{p.name}</h3>
      {p.event && <p className="mt-1 font-mono text-xs text-ink-3">{p.event}</p>}

      <dl className="mt-5 space-y-3 text-sm leading-relaxed">
        <div>
          <dt className="sr-only">Problem</dt>
          <dd className="text-ink-3">{p.problem}</dd>
        </div>
        <div>
          <dt className="sr-only">Solution</dt>
          <dd className="text-ink-2">{p.solution}</dd>
        </div>
      </dl>

      <div className="mt-5 flex flex-wrap gap-1.5">
        {p.stack.map((s) => (
          <span key={s} className={`chip ${chip}`}>{s}</span>
        ))}
      </div>

      <div className="mt-auto pt-6">
        <div className="hairline mb-4" />
        <div className="flex items-center justify-between gap-3">
          <span className="truncate font-mono text-[0.7rem] text-ink-3">{p.metric ?? p.role ?? ""}</span>
          <div className="flex shrink-0 gap-3">
            {p.links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-xs text-ink-2 transition-colors hover:text-ink"
                aria-label={`${p.name} — ${l.label}`}
              >
                {l.label} ↗
              </a>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}
