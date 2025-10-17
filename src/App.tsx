import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import { ProductsAll } from "./components/productsAll";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products-all" element={<ProductsAll />} />
         
        </Routes>
      </main>
      <Footer />
    </div>
  );
}