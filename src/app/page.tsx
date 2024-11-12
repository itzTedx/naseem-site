import { Cta } from "../components/cta";
import { About } from "./_components/about";
import { Features } from "./_components/features";
import { Hero } from "./_components/hero";

export default function Home() {
  return (
    <main>
      <Hero />
      <Features />
      <About />
      <Cta />
    </main>
  );
}
