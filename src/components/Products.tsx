import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Monitor, Server, Printer, Smartphone, HardDrive, Wifi, X, Mail, Phone, User, Building, Package, Calendar, ArrowRight, Link as LinkIcon } from "lucide-react";
import { PRODUCT_CATEGORIES } from "../data/products";
import { useState } from "react";
import { Link } from "react-router-dom";

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
          <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
            <a href="mailto:contact@agsinformatique.sn?subject=Demande%20de%20devis%20personnalis%C3%A9&body=Bonjour,%20je%20souhaite%20obtenir%20un%20devis%20personnalis%C3%A9%20pour%20du%20mat%C3%A9riel.%20Merci.">Demander un devis personnalisé</a>
          </Button>
        </div>
      </div>

      {/* Popup du formulaire amélioré */}
      {isFormOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center p-4 z-50 backdrop-blur-sm">
          <div className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[95vh] overflow-hidden transform transition-all duration-300 scale-95 hover:scale-100">
            {/* En-tête avec dégradé */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-6 text-white">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-2xl font-bold">Demande de Devis Personnalisé</h3>
                  <p className="text-blue-100 mt-1">
                    Remplissez ce formulaire et nous vous répondrons sous 24h
                  </p>
                </div>
                <button
                  onClick={() => setIsFormOpen(false)}
                  className="text-white hover:text-blue-200 transition-colors p-2 rounded-full hover:bg-white/10"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
            </div>
            
            <form onSubmit={handleSubmit} className="p-8 space-y-8">
              {/* Section Informations Personnelles */}
              <div className="space-y-6">
                <div className="flex items-center space-x-3">
                  <div className="bg-blue-100 p-2 rounded-lg">
                    <User className="h-5 w-5 text-blue-600" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900">Informations Personnelles</h4>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="flex items-center text-sm font-medium text-gray-700">
                      <User className="h-4 w-4 mr-2 text-blue-600" />
                      Nom complet *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white"
                      placeholder="Votre nom complet"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="email" className="flex items-center text-sm font-medium text-gray-700">
                      <Mail className="h-4 w-4 mr-2 text-blue-600" />
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white"
                      placeholder="votre@email.com"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="phone" className="flex items-center text-sm font-medium text-gray-700">
                      <Phone className="h-4 w-4 mr-2 text-blue-600" />
                      Téléphone *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white"
                      placeholder="+225 XX XX XX XX"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="company" className="flex items-center text-sm font-medium text-gray-700">
                      <Building className="h-4 w-4 mr-2 text-blue-600" />
                      Entreprise
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white"
                      placeholder="Nom de votre entreprise"
                    />
                  </div>
                </div>
              </div>

              {/* Section Détails du Produit */}
              <div className="space-y-6">
                <div className="flex items-center space-x-3">
                  <div className="bg-green-100 p-2 rounded-lg">
                    <Package className="h-5 w-5 text-green-600" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900">Détails du Produit</h4>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="category" className="flex items-center text-sm font-medium text-gray-700">
                      Catégorie *
                    </label>
                    <select
                      id="category"
                      name="category"
                      value={formData.category}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white appearance-none"
                    >
                      <option value="">Sélectionnez une catégorie</option>
                      {productCategoriesOptions.map((category) => (
                        <option  value={category}>{category}</option>
                      ))}
                    </select>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="quantity" className="flex items-center text-sm font-medium text-gray-700">
                      Quantité souhaitée *
                    </label>
                    <input
                      type="number"
                      id="quantity"
                      name="quantity"
                      value={formData.quantity}
                      onChange={handleInputChange}
                      required
                      min="1"
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white"
                      placeholder="Nombre d'unités"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="budget" className="flex items-center text-sm font-medium text-gray-700">
                      Budget estimé (FCFA)
                    </label>
                    <input
                      type="text"
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white"
                      placeholder="Ex: 500,000 - 1,000,000 FCFA"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="deadline" className="flex items-center text-sm font-medium text-gray-700">
                      <Calendar className="h-4 w-4 mr-2 text-blue-600" />
                      Délai souhaité
                    </label>
                    <input
                      type="text"
                      id="deadline"
                      name="deadline"
                      value={formData.deadline}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white"
                      placeholder="Ex: 2 semaines, 1 mois, etc."
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="productDescription" className="flex items-center text-sm font-medium text-gray-700">
                    Description détaillée du matériel *
                  </label>
                  <textarea
                    id="productDescription"
                    name="productDescription"
                    value={formData.productDescription}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white resize-none"
                    placeholder="Décrivez en détail le matériel que vous recherchez :
• Marque et modèle spécifiques
• Spécifications techniques (processeur, RAM, stockage, etc.)
• Usage prévu (bureautique, gaming, serveur, etc.)
• Autres exigences particulières"
                  />
                </div>
              </div>

              {/* Pied de page avec boutons */}
              <div className="flex flex-col sm:flex-row justify-between items-center pt-6 border-t border-gray-200 space-y-4 sm:space-y-0">
                <div className="text-sm text-gray-500 text-center sm:text-left">
                  <p>🚀 Réponse sous 24 heures ouvrables</p>
                  <p>📞 Un expert vous contactera pour finaliser votre devis</p>
                </div>
                
                <div className="flex space-x-4">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setIsFormOpen(false)}
                    className="px-6 py-3 border-2 border-gray-300 text-gray-700 hover:bg-gray-50 rounded-xl transition-all duration-200"
                    disabled={isSubmitting}
                  >
                    Annuler
                  </Button>
                  <Button
                    type="submit"
                    className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 px-8 py-3 rounded-xl font-semibold"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <div className="flex items-center space-x-2">
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        <span>Envoi en cours...</span>
                      </div>
                    ) : (
                      <div className="flex items-center space-x-2">
                        <span>Envoyer la demande</span>
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    )}
                  </Button>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}


      {/* Popup du formulaire amélioré */}
      {isFormOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center p-4 z-50 backdrop-blur-sm">
          <div className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[95vh] overflow-hidden transform transition-all duration-300 scale-95 hover:scale-100">
            {/* En-tête avec dégradé */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-6 text-white">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-2xl font-bold">Demande de Devis Personnalisé</h3>
                  <p className="text-blue-100 mt-1">
                    Remplissez ce formulaire et nous vous répondrons sous 24h
                  </p>
                </div>
                <button
                  onClick={() => setIsFormOpen(false)}
                  className="text-white hover:text-blue-200 transition-colors p-2 rounded-full hover:bg-white/10"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
            </div>
            
            <form onSubmit={handleSubmit} className="p-8 space-y-8">
              {/* Section Informations Personnelles */}
              <div className="space-y-6">
                <div className="flex items-center space-x-3">
                  <div className="bg-blue-100 p-2 rounded-lg">
                    <User className="h-5 w-5 text-blue-600" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900">Informations Personnelles</h4>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="flex items-center text-sm font-medium text-gray-700">
                      <User className="h-4 w-4 mr-2 text-blue-600" />
                      Nom complet *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white"
                      placeholder="Votre nom complet"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="email" className="flex items-center text-sm font-medium text-gray-700">
                      <Mail className="h-4 w-4 mr-2 text-blue-600" />
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white"
                      placeholder="votre@email.com"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="phone" className="flex items-center text-sm font-medium text-gray-700">
                      <Phone className="h-4 w-4 mr-2 text-blue-600" />
                      Téléphone *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white"
                      placeholder="+225 XX XX XX XX"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="company" className="flex items-center text-sm font-medium text-gray-700">
                      <Building className="h-4 w-4 mr-2 text-blue-600" />
                      Entreprise
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white"
                      placeholder="Nom de votre entreprise"
                    />
                  </div>
                </div>
              </div>

              {/* Section Détails du Produit */}
              <div className="space-y-6">
                <div className="flex items-center space-x-3">
                  <div className="bg-green-100 p-2 rounded-lg">
                    <Package className="h-5 w-5 text-green-600" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900">Détails du Produit</h4>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="category" className="flex items-center text-sm font-medium text-gray-700">
                      Catégorie *
                    </label>
                    <select
                      id="category"
                      name="category"
                      value={formData.category}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white appearance-none"
                    >
                      <option value="">Sélectionnez une catégorie</option>
                      {productCategoriesOptions.map((category) => (
                        <option value={category}>{category}</option>
                      ))}
                    </select>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="quantity" className="flex items-center text-sm font-medium text-gray-700">
                      Quantité souhaitée *
                    </label>
                    <input
                      type="number"
                      id="quantity"
                      name="quantity"
                      value={formData.quantity}
                      onChange={handleInputChange}
                      required
                      min="1"
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white"
                      placeholder="Nombre d'unités"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="budget" className="flex items-center text-sm font-medium text-gray-700">
                      Budget estimé (FCFA)
                    </label>
                    <input
                      type="text"
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white"
                      placeholder="Ex: 500,000 - 1,000,000 FCFA"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="deadline" className="flex items-center text-sm font-medium text-gray-700">
                      <Calendar className="h-4 w-4 mr-2 text-blue-600" />
                      Délai souhaité
                    </label>
                    <input
                      type="text"
                      id="deadline"
                      name="deadline"
                      value={formData.deadline}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white"
                      placeholder="Ex: 2 semaines, 1 mois, etc."
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="productDescription" className="flex items-center text-sm font-medium text-gray-700">
                    Description détaillée du matériel *
                  </label>
                  <textarea
                    id="productDescription"
                    name="productDescription"
                    value={formData.productDescription}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white resize-none"
                    placeholder="Décrivez en détail le matériel que vous recherchez :
• Marque et modèle spécifiques
• Spécifications techniques (processeur, RAM, stockage, etc.)
• Usage prévu (bureautique, gaming, serveur, etc.)
• Autres exigences particulières"
                  />
                </div>
              </div>

              {/* Pied de page avec boutons */}
              <div className="flex flex-col sm:flex-row justify-between items-center pt-6 border-t border-gray-200 space-y-4 sm:space-y-0">
                <div className="text-sm text-gray-500 text-center sm:text-left">
                  <p>🚀 Réponse sous 24 heures ouvrables</p>
                  <p>📞 Un expert vous contactera pour finaliser votre devis</p>
                </div>
                
                <div className="flex space-x-4">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setIsFormOpen(false)}
                    className="px-6 py-3 border-2 border-gray-300 text-gray-700 hover:bg-gray-50 rounded-xl transition-all duration-200"
                    disabled={isSubmitting}
                  >
                    Annuler
                  </Button>
                  <Button
                    type="submit"
                    className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 px-8 py-3 rounded-xl font-semibold"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <div className="flex items-center space-x-2">
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        <span>Envoi en cours...</span>
                      </div>
                    ) : (
                      <div className="flex items-center space-x-2">
                        <span>Envoyer la demande</span>
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    )}
                  </Button>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}