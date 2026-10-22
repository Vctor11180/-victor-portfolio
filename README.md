# victor-portfolio

Personal portfolio of **Víctor Hugo Murillo Siles** — Systems Engineer · Full Stack Tech Lead · Web3 Architect.

**Live:** https://vctor11180.vercel.app

Next.js 16 (App Router) · TypeScript · Tailwind CSS v4 · statically prerendered, no heavy animation libraries.

## Design language

| Token | Meaning |
| --- | --- |
| Cyan `#00f2fe` | Web2 — distributed core |
| Violet `#a855f7` | Web3 — protocol layer |
| Cyan → violet gradient | Hybrid work, the bridge between both |

## Editing content

All copy, projects, stack and devlog entries live in [`lib/data.ts`](lib/data.ts).

- Hide a project until it has public links: `hidden: true`
- Show the CV button: put the PDF at `public/cv.pdf` and set `cv: "/cv.pdf"`
- Enable Telegram in the contact terminal: set `socials.telegram`

## Development

```bash
npm install
npm run dev     # http://localhost:3000
npm run lint
npm run build
```

## Deploy

Import the repository in [Vercel](https://vercel.com/new) (framework preset: Next.js, no env vars needed) and set the project name / alias to `vctor11180` so the URL matches the GitHub profile README.
