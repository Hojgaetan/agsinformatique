import React, { useState } from "react";
import { PRODUCTS, CATEGORIES, Product, CategoryMeta } from "../data/products";
import { Button } from "./ui/button";

type ViewMode = "categories" | "products";

export const ProductsAll: React.FC = () => {
  const [view, setView] = useState<ViewMode>("categories");
  const [selectedCategory, setSelectedCategory] = useState<CategoryMeta | null>(null);
  const [selectedBrand, setSelectedBrand] = useState<string>("");

  const handleCategoryClick = (category: CategoryMeta) => {
    setSelectedCategory(category);
    setSelectedBrand("");
    setView("products");
  };

  const handleBackToCategories = () => {
    setSelectedCategory(null);
    setSelectedBrand("");
    setView("categories");
  };

  const formatPrice = (price: number) =>
    `À partir de ${price.toLocaleString("fr-FR")} FCFA`;

  const filteredProducts = selectedCategory
    ? PRODUCTS.filter(
        (p) =>
          p.category === selectedCategory.key &&
          (selectedBrand === "" || p.brand === selectedBrand)
      )
    : [];

  const brands = Array.from(
    new Set(
      PRODUCTS.filter((p) => p.category === selectedCategory?.key).map((p) => p.brand)
    )
  ).filter(Boolean) as string[];

  const getMinPrice = (categoryKey: string, subcategory: string): number => {
    const productsInSub = PRODUCTS.filter(
      (p) => p.category === categoryKey && p.subcategory === subcategory
    );
    if (productsInSub.length === 0) return 0;
    return Math.min(...productsInSub.map((p) => p.price));
  };

  return (
    <div className="p-6 max-w-full overflow-x-hidden">
      {/* -------------------- CATEGORIES -------------------- */}
      {view === "categories" && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {CATEGORIES.map((cat) => {
            const productsInCat = PRODUCTS.filter((p) => p.category === cat.key);
            return (
              <div
                key={cat.key}
                className="relative border rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
              >
                {/* Image + overlay */}
                <div className="relative h-48">
                  <img
                    src={productsInCat[0]?.image ?? ""}
                    alt={cat.label}
                    className="w-full h-full object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                    <h3 className="text-white text-xl font-bold text-center px-2">
                      {cat.label}
                    </h3>
                  </div>
                </div>

                {/* Sous-catégories */}
                <div className="p-4 flex flex-wrap gap-2 overflow-hidden">
                  {cat.subcategories.slice(0, 4).map((sub) => {
                    const minPrice = getMinPrice(cat.key, sub);
                    return (
                      <span
                        key={sub}
                        className="bg-gray-200 text-gray-800 px-2 py-1 rounded-full text-xs font-medium"
                      >
                        {sub} {minPrice > 0 && `• ${formatPrice(minPrice)}`}
                      </span>
                    );
                  })}
                  {cat.subcategories.length > 4 && (
                    <span className="bg-gray-300 text-gray-800 px-2 py-1 rounded-full text-xs">
                      +{cat.subcategories.length - 4} autres
                    </span>
                  )}
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

      {/* -------------------- PRODUITS -------------------- */}
      {view === "products" && selectedCategory && (
        <div>
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
            <h2 className="text-3xl font-bold">{selectedCategory.label}</h2>
            <Button onClick={handleBackToCategories}>Retour aux catégories</Button>
          </div>

          {/* Filtre par marque */}
          {brands.length > 0 && (
            <div className="mb-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <label className="font-semibold">Filtrer par marque :</label>
              <select
                value={selectedBrand}
                onChange={(e) => setSelectedBrand(e.target.value)}
                className="border rounded px-3 py-1"
              >
                <option value="">Toutes les marques</option>
                {brands.map((brand) => (
                  <option key={brand} value={brand}>
                    {brand}
                  </option>
                ))}
              </select>
            </div>
          )}

          {/* Liste des produits */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product: Product) => (
              <div
                key={product.id}
                className="border rounded-lg shadow hover:shadow-xl transition-shadow duration-300 p-4 flex flex-col"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 sm:h-56 md:h-64 object-cover mb-4 rounded"
                />
                <h3 className="text-lg font-bold mb-2">{product.name}</h3>
                <p className="text-sm text-gray-700 mb-1">Marque: {product.brand}</p>
                <p className="text-sm font-semibold text-blue-700 mb-1">
                  {product.price.toLocaleString("fr-FR")} FCFA
                </p>
                <p
                  className={`text-sm mb-2 ${
                    product.stock === "En stock" ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {product.stock}
                </p>

                {/* Description */}
                {product.description && (
                  <div className="mb-2">
                    <strong>Description:</strong>
                    <p className="text-sm text-gray-600 whitespace-pre-line">
                      {product.description}
                    </p>
                  </div>
                )}

                {/* Détails */}
                {product.details && (
                  <div className="mb-2">
                    <strong>Détails:</strong>
                    <ul className="text-sm text-gray-600 list-disc list-inside">
                      {Object.entries(product.details).map(([key, value]) => (
                        <li key={key}>
                          <span className="font-semibold">{key}:</span> {value}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Bouton appel fournisseur */}
                <Button
                  onClick={() => window.open("tel:+221XXXXXXXXX", "_blank")}
                  className="mt-auto w-full bg-green-600 hover:bg-green-700 text-white"
                >
                  Appeler le fournisseur
                </Button>
              </div>
            ))}
            {filteredProducts.length === 0 && (
              <p className="text-center col-span-full">
                Aucun produit disponible pour ce filtre.
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
