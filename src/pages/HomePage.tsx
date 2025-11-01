import { motion } from "framer-motion";
import { Hero } from "../components/Hero";
import { Services } from "../components/services";
import { ProductsAll } from "../components/productsAll";
import { About } from "../components/about";
import { Contact } from "../components/contact";

// Fonction utilitaire pour générer un variant avec direction
const getDirectionVariant = (direction: "top" | "bottom" | "left" | "right") => {
  switch (direction) {
    case "top":
      return {
        hidden: { opacity: 0, y: -50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
      };
    case "bottom":
      return {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.9 } },
      };
    case "left":
      return {
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.9 } },
      };
    case "right":
      return {
        hidden: { opacity: 0, x: 50 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.9 } },
      };
  }
};

export default function HomePage() {
  return (
    <main>
      {/* Hero - apparaît immédiatement */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={getDirectionVariant("top")}
        style={{ marginBottom: "3rem" }}
      >
        <Hero />
      </motion.section>

      {/* Services - apparaît au scroll */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={getDirectionVariant("left")}
        style={{ marginBottom: "3rem" }}
      >
        <Services />
      </motion.section>

      {/* ProductsAll - apparaît au scroll */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={getDirectionVariant("right")}
        style={{ marginBottom: "3rem" }}
      >
        <ProductsAll />
      </motion.section>

      {/* About - apparaît au scroll */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={getDirectionVariant("bottom")}
        style={{ marginBottom: "3rem" }}
      >
        <About />
      </motion.section>

      {/* Contact - apparaît au scroll */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={getDirectionVariant("top")}
        style={{ marginBottom: "3rem" }}
      >
        <Contact />
      </motion.section>
    </main>
  );
}
