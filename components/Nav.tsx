const links = [
  { href: "#stack", label: "Stack" },
  { href: "#projects", label: "Projects" },
  { href: "#devlog", label: "Devlog" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-line bg-bg/70 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 md:px-8">
        <a href="#top" className="font-mono text-sm tracking-widest text-ink" aria-label="Back to top">
          <span className="text-cyan">V</span>
          <span className="text-violet">M</span>
          <span className="text-ink-3">_</span>
        </a>
        <ul className="flex items-center gap-1 font-mono text-xs text-ink-2 sm:gap-2">
          {links.map((l) => (
            <li key={l.href} className={l.href === "#devlog" ? "hidden sm:block" : undefined}>
              <a href={l.href} className="rounded-md px-2 py-1.5 transition-colors hover:text-ink sm:px-3">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
