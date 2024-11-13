import { Cta } from "../components/cta";
import { About } from "./_components/about";
import { Features } from "./_components/features";
import { Hero } from "./_components/hero";
import { Services } from "./_components/services";

export default function Home() {
  return (
    <main>
      <Hero />
      <Features />
      <Services />
      <About />

      <Cta />
    </main>
  );
}
