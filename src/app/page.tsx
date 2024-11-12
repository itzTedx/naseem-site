import { About } from "./_components/about";
import Cta from "./_components/cta";
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
