import { profile, socials } from "@/lib/data";
import { DecodeText } from "./DecodeText";
import { Typewriter } from "./Typewriter";

export function Hero() {
  return (
    <section id="top" className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 pt-32 pb-20 md:grid-cols-[1.15fr_0.85fr] md:px-8 md:pt-40 md:pb-28">
      <div>
        <div className="rise mb-8 inline-flex items-center gap-2.5 rounded-full border border-emerald/30 bg-emerald/5 px-3.5 py-1.5">
          <span className="pulse" aria-hidden />
          <span className="font-mono text-[0.7rem] tracking-wide text-emerald">{profile.status}</span>
        </div>

        <h1 className="rise text-4xl leading-[1.08] font-semibold tracking-tight sm:text-5xl lg:text-6xl" style={{ animationDelay: "80ms" }}>
          <DecodeText text={profile.name} className="block" />
        </h1>

        <p className="rise mt-5 font-mono text-base text-ink-2 sm:text-lg" style={{ animationDelay: "160ms" }}>
          <span className="text-ink-3">&gt; </span>
          <Typewriter words={profile.roles} />
        </p>

        <p className="rise mt-8 text-2xl font-light tracking-tight sm:text-3xl" style={{ animationDelay: "240ms" }}>
          <span className="text-cyan">Web2</span> discipline. <span className="text-violet">Web3</span> trust.
        </p>

        <p className="rise mt-5 max-w-xl leading-relaxed text-ink-2" style={{ animationDelay: "320ms" }}>
          {profile.summary}
        </p>

        <div className="rise mt-10 flex flex-wrap gap-3" style={{ animationDelay: "400ms" }}>
          <a href="#projects" className="btn btn-primary">View projects →</a>
          <a href={socials.github} className="btn" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href={socials.linkedin} className="btn" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          {profile.cv && (
            <a href={profile.cv} className="btn" download>Download CV</a>
          )}
        </div>
      </div>

      <BridgeVisual />
    </section>
  );
}

// Two overlapping orbits: Web2 (cyan) and Web3 (violet), meeting in the middle.
function BridgeVisual() {
  return (
    <div className="rise relative mx-auto w-full max-w-[300px] md:max-w-[420px]" style={{ animationDelay: "300ms" }} aria-hidden>
      <svg viewBox="0 0 400 400" className="w-full" fill="none">
        <defs>
          <linearGradient id="bridge" x1="0" x2="1">
            <stop offset="0" stopColor="#00f2fe" />
            <stop offset="1" stopColor="#a855f7" />
          </linearGradient>
          <radialGradient id="lens" cx="0.5" cy="0.5" r="0.5">
            <stop offset="0" stopColor="#7c8cff" stopOpacity="0.35" />
            <stop offset="1" stopColor="#7c8cff" stopOpacity="0" />
          </radialGradient>
          <clipPath id="clip-web2">
            <circle cx="155" cy="200" r="105" />
          </clipPath>
        </defs>

        {/* outer orbit */}
        <g className="spin-slow">
          <circle cx="200" cy="200" r="182" stroke="rgba(255,255,255,0.08)" strokeDasharray="2 8" />
          <circle cx="200" cy="18" r="3" fill="#00f2fe" />
          <circle cx="200" cy="382" r="3" fill="#a855f7" />
        </g>
        <g className="spin-rev">
          <circle cx="200" cy="200" r="150" stroke="url(#bridge)" strokeOpacity="0.25" strokeDasharray="60 240" />
        </g>

        {/* intersection glow */}
        <circle cx="245" cy="200" r="105" fill="url(#lens)" clipPath="url(#clip-web2)" />

        <circle cx="155" cy="200" r="105" stroke="#00f2fe" strokeOpacity="0.7" />
        <circle cx="245" cy="200" r="105" stroke="#a855f7" strokeOpacity="0.75" />

        <text x="105" y="196" fill="#00f2fe" fontSize="13" fontFamily="monospace" letterSpacing="3" textAnchor="middle">WEB2</text>
        <text x="105" y="214" fill="#6b7489" fontSize="8.5" fontFamily="monospace" textAnchor="middle">distributed core</text>

        <text x="295" y="196" fill="#c084fc" fontSize="13" fontFamily="monospace" letterSpacing="3" textAnchor="middle">WEB3</text>
        <text x="295" y="214" fill="#6b7489" fontSize="8.5" fontFamily="monospace" textAnchor="middle">protocol layer</text>

        <circle cx="200" cy="200" r="4" fill="url(#bridge)" />
        <circle cx="200" cy="200" r="10" stroke="url(#bridge)" strokeOpacity="0.5" />
        <text x="200" y="232" fill="#e6ebf5" fontSize="8" fontFamily="monospace" letterSpacing="2" textAnchor="middle">BRIDGE</text>
      </svg>
    </div>
  );
}
