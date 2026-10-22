// Single source of truth for the portfolio content.
// Edit here — every section reads from this file.

export type Layer = "web2" | "web3" | "hybrid";
export type Filter = "all" | "web3" | "fullstack" | "hackathon";

export type Project = {
  name: string;
  layer: Layer;
  tags: Exclude<Filter, "all">[];
  event?: string;
  stack: string[];
  problem: string;
  solution: string;
  /** Leave empty until confirmed — the card hides it. */
  role?: string;
  metric?: string;
  links: { label: string; href: string }[];
  /** Set to true to hide a project until it has public links. */
  hidden?: boolean;
};

export const profile = {
  name: "Víctor Hugo Murillo Siles",
  shortName: "Víctor Murillo",
  handle: "Vctor11180",
  roles: ["Systems Engineer", "Full Stack Tech Lead", "Web3 Architect"],
  tagline: "Web2 discipline. Web3 trust.",
  summary:
    "I design distributed systems and on-chain protocols that ship — from hexagonal backends and serverless pipelines to Soroban, Solidity and Anchor contracts. Battle-tested across international hackathons on Ethereum, Avalanche, Stellar and Solana.",
  location: "Bolivia · LATAM · Remote",
  status: "Available for global challenges & hackathons",
  email: "victormurillor6@gmail.com",
  // Drop your CV at /public/cv.pdf and set this to "/cv.pdf" to show the button.
  cv: null as string | null,
  site: "https://vctor11180.vercel.app",
};

export const socials = {
  github: "https://github.com/Vctor11180",
  linkedin: "https://www.linkedin.com/in/vmurillos",
  // Add your handle (e.g. "https://t.me/yourhandle") to enable it in the terminal.
  telegram: null as string | null,
};

export const stack = {
  web2: {
    title: "Web2 · Distributed Core",
    lead: "Systems that stay up: clean boundaries, observable services, boring infrastructure.",
    groups: [
      { label: "Backend", items: ["Node.js", "Express", "Hono", "C# .NET Core", "PHP Laravel"] },
      { label: "Data", items: ["PostgreSQL · Neon", "MySQL", "SQL Server", "DynamoDB", "Drizzle", "Prisma"] },
      { label: "Cloud", items: ["Docker", "AWS Lambda", "Serverless", "Nginx", "Vercel", "CI/CD"] },
      { label: "Patterns", items: ["Hexagonal", "DDD", "Microservices", "REST · gRPC", "WebSockets"] },
    ],
  },
  web3: {
    title: "Web3 · Protocol Layer",
    lead: "Contracts that hold value: auditable logic, minimal trust, gas-aware design.",
    groups: [
      { label: "Chains", items: ["EVM · Solidity", "Foundry", "Stellar · Soroban", "Solana · Anchor", "Avalanche"] },
      { label: "DeFi", items: ["AMMs & Hooks", "Escrow", "RWA Factoring", "Liquidity", "Staking"] },
      { label: "Accounts", items: ["ERC-2771 Gasless", "EIP-712", "Account Abstraction", "Tangem NFC", "Tether WDK"] },
      { label: "Verify", items: ["zkTLS · Reclaim", "Oracles", "extsload Gas Opt.", "Contract Security"] },
    ],
  },
  bridge: [
    "Gasless meta-transactions for non-crypto users",
    "AI agents with on-chain guardrails (MCP + WDK)",
    "zk proofs over legacy payment rails",
    "Indexers & APIs that make contracts usable",
  ],
  interface: ["Next.js", "React", "TypeScript", "Tailwind CSS", "React Native · Expo", "Viem · Wagmi", "Stellar SDK"],
};

export const projects: Project[] = [
  {
    name: "RoutePay Protocol",
    layer: "web3",
    tags: ["web3", "hackathon"],
    event: "ETH Bolivia 2026",
    stack: ["Avalanche Fuji", "ERC-2771", "EIP-712", "Tangem NFC"],
    problem: "Cross-border freight paid 30–60 days late, with high fraud risk on the Arica–Bolivia corridor.",
    solution: "Gasless escrow (ERC-2771 / ERC-2612) with sub-second settlement triggered by a physical Tangem NFC tap.",
    role: "Frontend & Web3 Integration",
    links: [
      { label: "Demo", href: "https://frontend-mu-bay-zvc6ih2zcs.vercel.app" },
      { label: "Repo", href: "https://github.com/RoutePay-Protocol/routepay" },
    ],
  },
  {
    name: "Casandra",
    layer: "hybrid",
    tags: ["web3", "hackathon"],
    event: "Aleph Hackathon 2026 · Tether WDK",
    stack: ["MCP Server", "Tether WDK", "Sepolia", "Evidence Pack"],
    problem: "DeFi AI agents hallucinate data and execute swaps with no verifiable evidence or safeguards.",
    solution: "Deterministic evidence substrate for LLMs over an MCP server, WDK guardrails and on-chain anchoring.",
    role: "Smart Contracts & Web3 Core",
    links: [
      { label: "Demo", href: "https://casandra-two.vercel.app" },
      { label: "Contract", href: "https://sepolia.etherscan.io/address/0x27544Fe45b81C09fC91f99c0A7374970839eC4FF" },
      { label: "Repo", href: "https://github.com/Kenyi001/oraculo-radiohead" },
    ],
  },
  {
    name: "Yalita Protocol",
    layer: "web3",
    tags: ["web3", "hackathon"],
    event: "Avalanche Hackathon",
    stack: ["zkTLS · Reclaim", "Foundry", "Hono", "Neon"],
    problem: "210M+ Latin Americans locked out of formal credit for lack of banking history.",
    solution: "On-chain financial identity and scoring from zkTLS proofs of Tigo Money / SIMPLE receipts — no official APIs needed.",
    role: "Smart Contracts & Web3 Dev",
    links: [
      { label: "Demo", href: "https://yalita-one.vercel.app/" },
      { label: "Repo", href: "https://github.com/Vctor11180/Yalita" },
    ],
  },
  {
    name: "Vibe Broker",
    layer: "hybrid",
    tags: ["web3", "hackathon"],
    event: "Dev3pack Global",
    stack: ["Solana · Anchor", "LI.FI", "ElevenLabs", "Docker E2E"],
    problem: "DeFi UX — slippage, gas, blind signing — shuts out non-technical users.",
    solution: "Voice/text transactional assistant with cross-chain routing, risk-policy confirmations and on-chain receipts.",
    role: "Co-Author & Contributor",
    links: [{ label: "Repo", href: "https://github.com/jackson1939/sucha-tech" }],
  },
  {
    name: "CodoChain",
    layer: "web3",
    tags: ["web3", "hackathon"],
    event: "Stellar Year-End Ideathon",
    stack: ["Soroban · Rust", "RWA", "Freighter", "USDC"],
    problem: "LATAM SMEs starved of liquidity by invoices that settle in 90 days.",
    solution: "Tokenized invoice-factoring marketplace on Stellar with native asset issuance and USDC settlement.",
    role: "Lead Architect & Dev",
    links: [{ label: "Repo", href: "https://github.com/Vctor11180/Ideat-n---Arquisoft-Codochain" }],
  },
  {
    name: "Vortex Protocol",
    layer: "web3",
    tags: ["web3"],
    event: "EVM DeFi Engine",
    stack: ["Solidity", "Foundry", "ERC-1155 Hooks", "extsload"],
    problem: "Capital inefficiency and rigid fees in AMMs under high volatility.",
    solution: "Modular AMM with incentive hooks, dynamic fees and a low-gas Position Manager using assembly extsload.",
    role: "Author & Architect",
    links: [
      { label: "Demo", href: "https://vortexprotocol.vercel.app" },
      { label: "Repo", href: "https://github.com/Vctor11180/Vortex-Protocol" },
    ],
  },
  {
    name: "Todo Ya",
    layer: "web2",
    tags: ["fullstack"],
    event: "Production · LATAM",
    stack: ["React Native · Expo", "Neon Postgres", "Drizzle", "Gemini"],
    problem: "Finding and hiring local services in LATAM is slow, informal and trust-poor.",
    solution: "Multi-tenant B2B/B2C services marketplace with PIN/WhatsApp auth, biometric KYC and two-tier AI search.",
    metric: "1,000+ connections",
    links: [{ label: "Repo", href: "https://github.com/Todo-Yaa/TodoYa" }],
  },
  {
    name: "Kosmovia",
    layer: "hybrid",
    tags: ["fullstack", "web3"],
    event: "Fintech · Stellar",
    stack: ["Next.js", "Stellar SDK", "Soroban", "Non-custodial"],
    problem: "Remittances and community payments in Bolivia are expensive and slow.",
    solution: "Community infrastructure with non-custodial wallets and embedded near-zero-cost payments on Stellar.",
    links: [
      { label: "Demo", href: "https://kosmovia.vercel.app" },
      { label: "Repo", href: "https://github.com/Vctor11180/kosmovia" },
    ],
  },
  {
    name: "Chaski",
    layer: "hybrid",
    tags: ["fullstack"],
    event: "P2P Logistics",
    stack: ["Next.js", "TypeScript", "Escrow", "Reputation"],
    problem: "Peer-to-peer parcel delivery lacks payment custody and trust between strangers.",
    solution: "Collaborative delivery marketplace with escrowed payments, reputation and fault-tolerant state tracking.",
    links: [
      { label: "Demo", href: "https://chaski-app-smoky.vercel.app" },
      { label: "Repo", href: "https://github.com/Vctor11180/P2P-Marketplace-y-encomiendas" },
    ],
  },
  {
    name: "Aegis Engine",
    layer: "web2",
    tags: ["fullstack"],
    event: "Enterprise Core",
    stack: ["C# .NET Core", "Laravel", "Docker", "CI/CD"],
    problem: "Transactional business logic tangled with frameworks and infrastructure.",
    solution: "Hexagonal, DDD-based transactional core with isolated domains, strict SQL schemas and CI/CD pipelines.",
    links: [{ label: "Repo", href: "https://github.com/Vctor11180/Aegis" }],
  },
  // From the spec — add public links and remove `hidden` to publish.
  {
    name: "ArquiFi DeFi",
    layer: "web3",
    tags: ["web3", "hackathon"],
    stack: ["Solidity", "EVM", "Next.js"],
    problem: "Manual, fragmented yield strategies.",
    solution: "Decentralized platform for automated finance and yield farming.",
    links: [],
    hidden: true,
  },
  {
    name: "Koquifi Frame",
    layer: "web3",
    tags: ["web3"],
    stack: ["Farcaster Frames", "Next.js"],
    problem: "Web3 apps live far from where users already are.",
    solution: "Interactive mini-app running directly inside the Farcaster feed.",
    role: "Developer",
    links: [],
    hidden: true,
  },
];

export const devlog = [
  {
    title: "ERC-2771 meta-transactions with Tangem NFC in 48 hours",
    note: "Frictionless EIP-712 signatures for truck drivers with zero crypto background.",
    href: "https://github.com/RoutePay-Protocol/routepay",
    tag: "Post-mortem",
  },
  {
    title: "Deterministic AI agents with Tether WDK and MCP",
    note: "Why an LLM should never swap directly — and how to design an Evidence Pack.",
    href: "https://github.com/Kenyi001/oraculo-radiohead",
    tag: "Architecture",
  },
  {
    title: "zkTLS over local payment rails without official APIs",
    note: "Privacy-preserving proofs of solvency on Avalanche C-Chain.",
    href: "https://github.com/Vctor11180/Yalita",
    tag: "Cryptography",
  },
  {
    title: "Modular DeFi with hooks and assembly-level gas tuning",
    note: "Lessons from building a next-gen AMM with extsload.",
    href: "https://github.com/Vctor11180/Vortex-Protocol",
    tag: "DeFi",
  },
];
