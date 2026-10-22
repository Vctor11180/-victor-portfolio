"use client";

import { useEffect, useState } from "react";

// Cycles through words, typing and deleting each one. SSR shows the first word.
export function Typewriter({ words }: { words: string[] }) {
  const [index, setIndex] = useState(0);
  const [length, setLength] = useState(words[0].length);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const word = words[index];
    let delay = deleting ? 40 : 85;
    if (!deleting && length === word.length) delay = 2200;
    if (deleting && length === 0) delay = 300;

    const id = setTimeout(() => {
      if (!deleting && length === word.length) setDeleting(true);
      else if (deleting && length === 0) {
        setDeleting(false);
        setIndex((index + 1) % words.length);
      } else setLength(length + (deleting ? -1 : 1));
    }, delay);

    return () => clearTimeout(id);
  }, [words, index, length, deleting]);

  return (
    <span aria-label={words.join(", ")}>
      <span aria-hidden className="caret">
        {words[index].slice(0, length)}
      </span>
    </span>
  );
}
