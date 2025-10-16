import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Monitor, Server, Printer, Smartphone, HardDrive, Wifi, X, Mail, Phone, User, Building, Package, Calendar, ArrowRight, Link as LinkIcon } from "lucide-react";
import { PRODUCT_CATEGORIES } from "../data/products";
import { useState } from "react";
import { Link } from "react-router-dom";
import {FaWhatsapp} from "react-icons/fa";

export function Products() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    productDescription: "",
    quantity: "",
    deadline: "",
    budget: "",
    category: ""
  });
const productCategories = PRODUCT_CATEGORIES.map((c) => ({
  icon: <c.icon className={`h-8 w-8 ${c.colorClass}`} />,
  title: c.title,
  description: c.description,
  products: c.products,
  image: c.image,
}));

  const productCategoriesOptions = productCategories.map((c) => c.title);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulation d'envoi
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    console.log("Données du formulaire:", formData);
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      productDescription: "",
      quantity: "",
      deadline: "",
      budget: "",
      category: ""
    });
    setIsSubmitting(false);
    setIsFormOpen(false);
    
    // Ici vous pouvez remplacer par votre logique d'envoi réelle
    alert("Votre demande de devis a été envoyée avec succès ! Nous vous contacterons dans les plus brefs délais.");
  };

  return (
    <section id="produits" className="py-20 bg-white">
          <div className="container mx-auto px-4">
          <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl text-gray-900 mb-4">
            Nos Produits
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Large gamme de matériels informatiques de qualité, des marques leaders 
            du marché aux prix compétitifs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {productCategories.map((category, index) => (
            <Card key={category.title} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="relative h-48 overflow-hidden">
                <ImageWithFallback
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4 bg-white p-3 rounded-full shadow-lg">
                  {category.icon}
                </div>
              </div>
              
              <CardHeader>
                <CardTitle className="text-xl">{category.title}</CardTitle>
                <CardDescription className="text-gray-600">
                  {category.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-4">
                {category.products.map((product, productIndex) => (
                  <div className="flex items-center justify-between py-2 border-b border-gray-100 last:border-b-0">
                    <div className="flex-1">
                      <p className="font-medium text-gray-900">{product.name}</p>
                      <p className="text-sm text-gray-600">{product.price}</p>
                    </div>
                    <Badge 
                      variant={product.stock === "En stock" ? "default" : "secondary"}
                      className={product.stock === "En stock" ? "bg-green-100 text-green-800" : ""}
                    >
                      {product.stock}
                    </Badge>
                  </div>
                ))}
                
                <Button asChild variant="outline" className="w-full mt-4">
                  <Link aria-label={`Voir tous les produits de ${category.title}`} to={`/products-all?category=${encodeURIComponent(category.title)}`}>
                    Voir tous les produits
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            Vous ne trouvez pas ce que vous cherchez ? Nous pouvons commander tout matériel spécifique.
          </p>
          <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700"
                  style={{
                      backgroundColor: "#25D366",
                      color: "#fff",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "0.5rem",
                      padding: "0.5rem 1rem",
                      borderRadius: "0.375rem",
                  }}>
            <a href="https://wa.me/221773870030" target="_blank"
               rel="noopener noreferrer"
               aria-label="Contactez-nous sur WhatsApp">
                <FaWhatsapp size={16} />
                Contactez nous sur WhatsApp
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}