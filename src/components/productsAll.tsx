import React, { useState } from "react";
import { PRODUCTS, CATEGORIES, Product, CategoryMeta } from "../data/products";
import { Button } from "./ui/button";
import { PRODUCT_DETAIL_LABELS } from "../data/productDetailsMap";


type ViewMode = "categories" | "products";

export const ProductsAll: React.FC = () => {
  const [view, setView] = useState<ViewMode>("categories");
  const [selectedCategory, setSelectedCategory] = useState<CategoryMeta | null>(null);
  const [selectedBrand, setSelectedBrand] = useState<string>("");
  const [selectedSubcategory, setSelectedSubcategory] = useState<string>("");
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  // --- Fonctions utilitaires ---
  const handleCategoryClick = (category: CategoryMeta) => {
    setSelectedCategory(category);
    setSelectedBrand("");
    setSelectedSubcategory("");
    setSearchTerm("");
    setView("products");
  };

  const handleBackToCategories = () => {
    setSelectedCategory(null);
    setSelectedBrand("");
    setSelectedSubcategory("");
    setSearchTerm("");
    setView("categories");
  };

  const formatPrice = (price: number) =>
    `À partir de ${price.toLocaleString("fr-FR")} FCFA`;

  const highlightMatch = (text: string | undefined): React.ReactNode => {
    if (!text || !searchTerm.trim()) return text || "";
    const regex = new RegExp(`(${searchTerm})`, "gi");
    const parts = text.split(regex);
    return (
      <>
        {parts.map((part, i) =>
          part.toLowerCase() === searchTerm.toLowerCase() ? (
            <mark key={i} className="bg-green-300 rounded px-1">{part}</mark>
          ) : (
            part
          )
        )}
      </>
    );
  };

  const truncateDescription = (text: string, wordLimit: number) => {
    const words = text.trim().split(/\s+/);
    if (words.length <= wordLimit) return text;
    return words.slice(0, wordLimit).join(" ") + "...";
  };

  const filteredProducts = selectedCategory
    ? PRODUCTS.filter(
        (p) =>
          p.category === selectedCategory.key &&
          (selectedSubcategory === "" || p.subcategory === selectedSubcategory) &&
          (selectedBrand === "" || p.brand === selectedBrand) &&
          (searchTerm === "" ||
            p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            (p.brand && p.brand.toLowerCase().includes(searchTerm.toLowerCase())) ||
            (p.desc && p.desc.toLowerCase().includes(searchTerm.toLowerCase())))
      )
    : [];

  const brands = Array.from(
    new Set(
      PRODUCTS.filter(
        (p) =>
          p.category === selectedCategory?.key &&
          (selectedSubcategory === "" || p.subcategory === selectedSubcategory) &&
          p.brand
      ).map((p) => p.brand)
    )
  ).filter((b): b is string => Boolean(b));

  // --- Contenu principal ---
  return (
    <div className="p-6 max-w-full overflow-x-hidden">
      {/* ✅ Masquer tout le reste si un produit est sélectionné */}
      {!selectedProduct && (
        <>
          {/* --- CATEGORIES --- */}
          {view === "categories" && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {CATEGORIES.map((cat) => {
                const productsInCat = PRODUCTS.filter((p) => p.category === cat.key);
                return (
                  <div
                    key={cat.key}
                    className="relative border rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
                  >
                    <sup className="absolute top-3 left-3 bg-white text-base sm:text-lg px-4 py-2 rounded-full z-20 shadow-md backdrop-blur-md text-black font-bold tracking-wide">
                      {cat.label}
                    </sup>

                    <div className="relative h-48 bg-black">
                      <img
                        src={productsInCat[0]?.image ?? ""}
                        alt={cat.label}
                        className="w-full h-full object-contain object-center"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                        
                      </div>
                    </div>

                    <div className="p-4 flex justify-center">
                      <Button
                        onClick={() => handleCategoryClick(cat)}
                        className="w-full hover:bg-blue-700"
                      >
                        Voir les produits
                      </Button>
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {/* --- PRODUITS --- */}
          {view === "products" && selectedCategory && (
            <div>
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
                <h2 className="text-3xl font-bold">{selectedCategory.label}</h2>
                <Button onClick={handleBackToCategories}>Retour aux Catégories</Button>
              </div>

              {/* --- Filtres + Recherche --- */}
              <div className="mb-6 flex flex-col sm:flex-row flex-wrap items-start sm:items-center gap-6 w-full">
                <div className="flex items-center gap-2">
                  <label className="font-semibold">Sous-catégories :</label>
                  <select
                    value={selectedSubcategory}
                    onChange={(e) => setSelectedSubcategory(e.target.value)}
                    className="border rounded px-3 py-1"
                  >
                    <option value="">Toutes</option>
                    {selectedCategory.subcategories.map((sub) => (
                      <option key={sub} value={sub}>{sub}</option>
                    ))}
                  </select>
                </div>

                {selectedSubcategory && brands.length > 0 && (
                  <div className="flex items-center gap-2">
                    <label className="font-semibold whitespace-nowrap">Marques :</label>
                    <select
                      value={selectedBrand}
                      onChange={(e) => setSelectedBrand(e.target.value)}
                      className="border rounded px-3 py-1"
                    >
                      <option value="">Toutes</option>
                      {brands.map((brand) => (
                        <option key={brand} value={brand}>{brand}</option>
                      ))}
                    </select>
                  </div>
                )}

                <div className="flex items-center gap-2 flex-1 min-w-[200px]">
                  <label className="font-semibold whitespace-nowrap">Rechercher :</label>
                  <input
                    type="text"
                    placeholder="Nom, marque, description..."
                    className="border rounded px-3 py-1 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
              </div>

              {/* --- Liste Produits --- */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {filteredProducts.map((product) => {
                  const desc = product.desc || "";
                  const showVoirPlus = desc.trim().split(/\s+/).length >= 10;
                  const truncatedDesc = truncateDescription(desc, 10);

                  return (
                    <div
                      key={product.id}
                      className="border rounded-lg shadow hover:shadow-xl transition-shadow duration-300 p-4 flex flex-col"
                    >
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-48 object-contain mb-4 rounded bg-black"
                      />

                      <h3 className="text-lg font-bold mb-2">{highlightMatch(product.name)}</h3>
                      <p className="text-sm text-gray-700 mb-1">
                        Marque: {highlightMatch(product.brand || "Non spécifiée")}
                      </p>
                      <p className="text-sm font-semibold text-blue-700 mb-1">
                        {product.price.toLocaleString("fr-FR")} FCFA
                      </p>

                      <p className="text-sm mb-2">
                        <strong>Description:</strong>{" "}
                        {highlightMatch(truncatedDesc)}
                      </p>
                      {showVoirPlus && (
                        <button
                          onClick={() => setSelectedProduct(product)}
                          className="text-blue-600 underline text-sm mt-1"
                        >
                          Voir plus
                        </button>
                      )}
                    </div>
                  );
                })}

                {filteredProducts.length === 0 && (
                  <p className="text-center col-span-full">
                    Aucun produit trouvé pour cette recherche.
                  </p>
                )}
              </div>
            </div>
          )}
        </>
      )}

      {/* --- ✅ POPUP EN MODE FENÊTRE UNIQUE --- */}
      {selectedProduct && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-md animate-fadeIn"
          onClick={() => setSelectedProduct(null)}
        >
          <div
            className="relative bg-white rounded-2xl shadow-2xl max-w-2xl w-full mx-4 p-6 overflow-y-auto max-h-[90vh] animate-zoomIn"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedProduct(null)}
              className="absolute top-3 right-3 text-gray-500 hover:text-black text-2xl font-bold"
            >
              ×
            </button>

            <img
              src={selectedProduct.image}
              alt={selectedProduct.name}
              className="w-full h-64 object-contain mb-4 rounded bg-gray-100"
            />

            <h3 className="text-2xl font-bold mb-2">{selectedProduct.name}</h3>
            <p className="text-blue-700 font-semibold mb-2">
              {selectedProduct.price.toLocaleString("fr-FR")} FCFA
            </p>

            <p className="text-sm text-gray-700 whitespace-pre-line mb-4">
              {selectedProduct.desc}
            </p>

{selectedProduct.details && selectedProduct.details.length > 0 && (
  <div className="mt-6">
    <h4 className="text-lg font-semibold mb-3 text-gray-900">Détails :</h4>

    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 text-sm text-gray-700">
      {selectedProduct.details.map((value, index) => (
        <div
          key={index}
          className="flex justify-between border-b border-gray-100 pb-1"
        >
          <span className="font-medium text-gray-800">
            {PRODUCT_DETAIL_LABELS[index] || `Détail ${index + 1}`}
          </span>
          <span className="text-gray-600">{value}</span>
        </div>
      ))}
    </div>
  </div>
)}




            <div className="mt-6 flex justify-end">
              <Button onClick={() => setSelectedProduct(null)}>Fermer</Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
