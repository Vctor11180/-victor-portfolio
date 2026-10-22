"use client";

import { useState } from "react";
import { stack } from "@/lib/data";
import { SectionHeader } from "./SectionHeader";

type Side = "web2" | "web3";

const accent = {
  web2: { color: "var(--cyan)", text: "text-cyan", chip: "chip-web2", border: "rgba(0,242,254,0.35)", tint: "rgba(0,242,254,0.04)" },
  web3: { color: "var(--violet)", text: "text-violet", chip: "chip-web3", border: "rgba(168,85,247,0.4)", tint: "rgba(168,85,247,0.05)" },
};

export function Duality() {
  const [active, setActive] = useState<Side | null>(null);

  return (
    <section id="stack" className="mx-auto max-w-6xl px-4 py-24 md:px-8">
      <SectionHeader
        index="01"
        eyebrow="Technology duality"
        title={<>Two layers, <span className="text-bridge">one architecture.</span></>}
        lead="Hover or tap a side. Most of my work lives where they meet — making on-chain trust usable through solid off-chain engineering."
      />

      <div className="flex flex-col gap-4 md:flex-row" onMouseLeave={() => setActive(null)}>
        {(["web2", "web3"] as const).map((side) => (
          <Panel
            key={side}
            side={side}
            active={active}
            onActivate={() => setActive(side)}
            onToggle={() => setActive(active === side ? null : side)}
          />
        ))}
      </div>

      {/* The bridge */}
      <div className="border-bridge mt-4 rounded-2xl p-6 md:p-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="md:max-w-xs">
            <p className="eyebrow mb-2">
              <span className="text-cyan">web2</span> ⇄ <span className="text-violet">web3</span>
            </p>
            <p className="text-lg font-medium text-ink">Where the layers meet</p>
          </div>
          <ul className="grid flex-1 gap-3 sm:grid-cols-2">
            {stack.bridge.map((item) => (
              <li key={item} className="flex gap-3 text-sm text-ink-2">
                <span className="text-bridge font-mono">◆</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="hairline my-6" />
        <div className="flex flex-wrap items-center gap-2">
          <span className="eyebrow mr-2">Interface</span>
          {stack.interface.map((t) => (
            <span key={t} className="chip">{t}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

function Panel({
  side,
  active,
  onActivate,
  onToggle,
}: {
  side: Side;
  active: Side | null;
  onActivate: () => void;
  onToggle: () => void;
}) {
  const data = stack[side];
  const a = accent[side];
  const isActive = active === side;
  const isDimmed = active !== null && !isActive;

  return (
    // Emphasis only (all content stays visible), so a focusable article rather than a button.
    <article
      tabIndex={0}
      onMouseEnter={onActivate}
      onFocus={onActivate}
      onClick={onToggle}
      className="duality-panel hud glass flex-1 cursor-pointer rounded-2xl p-6 md:p-8"
      style={{
        flexGrow: isActive ? 1.35 : 1,
        borderColor: isActive ? a.border : undefined,
        background: isActive ? a.tint : undefined,
        opacity: isDimmed ? 0.6 : 1,
        ["--accent" as string]: a.color,
      }}
    >
      <div className="mb-6 flex items-center justify-between">
        <h3 className={`font-mono text-sm tracking-[0.18em] uppercase ${a.text}`}>{data.title}</h3>
        <span className="shrink-0 font-mono text-xs whitespace-nowrap text-ink-3">{side === "web2" ? "L1 · off-chain" : "L2 · on-chain"}</span>
      </div>
      <p className="mb-7 max-w-md text-ink-2">{data.lead}</p>
      <dl className="grid gap-5 sm:grid-cols-2">
        {data.groups.map((g) => (
          <div key={g.label}>
            <dt className="eyebrow mb-2.5">{g.label}</dt>
            <dd className="flex flex-wrap gap-1.5">
              {g.items.map((item) => (
                <span key={item} className={`chip ${isActive ? a.chip : ""}`}>{item}</span>
              ))}
            </dd>
          </div>
        ))}
      </dl>
    </article>
  );
}
