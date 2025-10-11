import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/produits" element={<ProductsPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/productspage" element={<ProductsPage />} />
          <Route path="/produitspage" element={<ProductsPage />} />
          <Route path="/produtspage" element={<ProductsPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}