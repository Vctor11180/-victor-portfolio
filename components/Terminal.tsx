"use client";

import { useEffect, useRef, useState } from "react";
import { profile, projects, socials, stack } from "@/lib/data";
import { SectionHeader } from "./SectionHeader";

type Line = { id: number; kind: "in" | "out" | "accent"; text: string };

const PROMPT = "guest@vctor11180:~$";

const HELP = [
  "help              list commands",
  "whoami            short bio",
  "contact           all channels",
  "email | github | linkedin" + (socials.telegram ? " | telegram" : ""),
  "projects          list selected work",
  "stack             web2 / web3 layers",
  "msg <text>        draft an email to me",
  "clear             clear the screen",
];

function run(raw: string): { out: string[]; kind?: Line["kind"]; clear?: boolean } {
  const [cmd, ...rest] = raw.trim().split(/\s+/);
  const arg = rest.join(" ");
  const open = (url: string) => window.open(url, "_blank", "noopener,noreferrer");

  switch (cmd.toLowerCase()) {
    case "":
      return { out: [] };
    case "help":
      return { out: HELP };
    case "whoami":
      return { out: [`${profile.name} — ${profile.roles.join(" · ")}`, profile.location, profile.tagline] };
    case "contact":
      return {
        out: [
          `email     ${profile.email}`,
          `github    ${socials.github}`,
          `linkedin  ${socials.linkedin}`,
          ...(socials.telegram ? [`telegram  ${socials.telegram}`] : []),
        ],
      };
    case "email":
      window.location.href = `mailto:${profile.email}`;
      return { out: [`opening mail client → ${profile.email}`], kind: "accent" };
    case "github":
      open(socials.github);
      return { out: [`opening ${socials.github}`], kind: "accent" };
    case "linkedin":
      open(socials.linkedin);
      return { out: [`opening ${socials.linkedin}`], kind: "accent" };
    case "telegram":
      if (!socials.telegram) break;
      open(socials.telegram);
      return { out: [`opening ${socials.telegram}`], kind: "accent" };
    case "projects":
      return {
        out: projects
          .filter((p) => !p.hidden)
          .map((p) => `[${p.layer.padEnd(6)}] ${p.name}${p.event ? `  — ${p.event}` : ""}`),
      };
    case "stack":
      return {
        out: [
          `web2  ${stack.web2.groups.flatMap((g) => g.items).slice(0, 8).join(", ")} …`,
          `web3  ${stack.web3.groups.flatMap((g) => g.items).slice(0, 8).join(", ")} …`,
        ],
      };
    case "msg":
      if (!arg) return { out: ["usage: msg <your message>"] };
      window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent("Hello from your portfolio")}&body=${encodeURIComponent(arg)}`;
      return { out: ["draft ready in your mail client ✓"], kind: "accent" };
    case "sudo":
      return { out: arg === "hire" ? ["permission granted. run `msg` to start ✓"] : ["nice try."], kind: "accent" };
    case "clear":
      return { out: [], clear: true };
  }
  return { out: [`command not found: ${cmd} — type 'help'`] };
}

const INTRO: Line[] = [
  { id: 0, kind: "accent", text: "VM-OS v2.6 · secure channel established" },
  { id: 1, kind: "out", text: "type 'help' to list commands, or tap one below." },
];

export function Terminal() {
  const nextId = useRef(INTRO.length);
  const make = (kind: Line["kind"], text: string): Line => ({ id: nextId.current++, kind, text });

  const [lines, setLines] = useState<Line[]>(INTRO);
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<string[]>([]);
  const [cursor, setCursor] = useState(-1);
  const screen = useRef<HTMLDivElement>(null);
  const field = useRef<HTMLInputElement>(null);

  useEffect(() => {
    screen.current?.scrollTo({ top: screen.current.scrollHeight });
  }, [lines]);

  const submit = (value: string) => {
    const result = run(value);
    if (value.trim()) setHistory((h) => [value, ...h]);
    setCursor(-1);
    setInput("");
    if (result.clear) return setLines([]);
    setLines((ls) => [
      ...ls,
      make("in", value),
      ...result.out.map((t) => make(result.kind ?? "out", t)),
    ]);
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "ArrowUp" || e.key === "ArrowDown") {
      e.preventDefault();
      const next = Math.max(-1, Math.min(history.length - 1, cursor + (e.key === "ArrowUp" ? 1 : -1)));
      setCursor(next);
      setInput(next === -1 ? "" : history[next]);
    }
  };

  return (
    <section id="contact" className="mx-auto max-w-6xl px-4 py-24 md:px-8">
      <SectionHeader
        index="04"
        eyebrow="Contact"
        title={<>Open a channel. <span className="text-bridge">Let&apos;s build.</span></>}
        lead="Building a Web3 protocol, a high-throughput system, or need a hackathon tech lead? The terminal below is real."
      />

      <div className="hud glass overflow-hidden rounded-2xl" style={{ ["--accent" as string]: "var(--violet)" }}>
        <div className="flex items-center gap-2 border-b border-line px-4 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-ink/15" />
          <span className="h-2.5 w-2.5 rounded-full bg-ink/15" />
          <span className="h-2.5 w-2.5 rounded-full bg-ink/15" />
          <span className="ml-3 font-mono text-xs text-ink-3">ssh guest@vctor11180</span>
        </div>

        <div
          ref={screen}
          onClick={() => field.current?.focus()}
          className="h-80 overflow-y-auto px-4 py-4 font-mono text-[0.8rem] leading-relaxed sm:px-6"
          role="log"
          aria-live="polite"
        >
          {lines.map((l) =>
            l.kind === "in" ? (
              <p key={l.id} className="break-words text-ink">
                <span className="text-cyan">{PROMPT}</span> {l.text}
              </p>
            ) : (
              <p key={l.id} className={`break-words whitespace-pre-wrap ${l.kind === "accent" ? "text-emerald" : "text-ink-2"}`}>
                {l.text}
              </p>
            ),
          )}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              submit(input);
            }}
            className="flex items-center gap-2"
          >
            <label htmlFor="term-input" className="shrink-0 text-cyan">{PROMPT}</label>
            <input
              id="term-input"
              ref={field}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={onKeyDown}
              autoComplete="off"
              autoCapitalize="off"
              spellCheck={false}
              className="min-w-0 flex-1 bg-transparent text-ink caret-violet outline-none"
              aria-label="Terminal command"
            />
          </form>
        </div>

        <div className="flex flex-wrap gap-2 border-t border-line px-4 py-3 sm:px-6">
          {["help", "whoami", "contact", "projects", "github"].map((c) => (
            <button key={c} type="button" onClick={() => submit(c)} className="chip transition-colors hover:text-ink">
              {c}
            </button>
          ))}
        </div>
      </div>

      <p className="mt-6 text-center text-sm text-ink-3">
        Prefer the classic way?{" "}
        <a href={`mailto:${profile.email}`} className="text-ink-2 underline decoration-line underline-offset-4 hover:text-ink">
          {profile.email}
        </a>
      </p>
    </section>
  );
}
