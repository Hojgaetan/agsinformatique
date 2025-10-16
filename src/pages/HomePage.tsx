import { Hero } from "../components/Hero";
import { Services } from "../components/Services";
import { ProductsAll } from "../components/productsAll";
import { About } from "../components/About";
import { Contact } from "../components/Contact";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Services />
      <ProductsAll />
      <About />
      <Contact />
    </main>
  );
}
