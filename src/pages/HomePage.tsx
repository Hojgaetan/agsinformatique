import { Hero } from "../components/Hero";
import { Services } from "../components/Services";
import { Products } from "../components/Products";
import { About } from "../components/About";
import { Contact } from "../components/Contact";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Services />
      <Products />
      <About />
      <Contact />
    </main>
  );
}

