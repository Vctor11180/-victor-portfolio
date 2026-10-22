import { Devlog } from "@/components/Devlog";
import { Duality } from "@/components/Duality";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Nav } from "@/components/Nav";
import { Projects } from "@/components/Projects";
import { Terminal } from "@/components/Terminal";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <div className="hairline mx-auto max-w-6xl" />
        <Duality />
        <Projects />
        <Devlog />
        <Terminal />
      </main>
      <Footer />
    </>
  );
}
