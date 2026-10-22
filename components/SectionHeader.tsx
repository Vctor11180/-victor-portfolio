export function SectionHeader({
  index,
  eyebrow,
  title,
  lead,
}: {
  index: string;
  eyebrow: string;
  title: React.ReactNode;
  lead?: string;
}) {
  return (
    <header className="mb-10 max-w-2xl md:mb-14">
      <p className="eyebrow mb-4">
        <span className="text-cyan">{index}</span>
        <span className="mx-2 text-ink-3">{"//"}</span>
        {eyebrow}
      </p>
      <h2 className="text-3xl font-semibold tracking-tight text-ink md:text-4xl">{title}</h2>
      {lead && <p className="mt-4 text-base leading-relaxed text-ink-2">{lead}</p>}
    </header>
  );
}
