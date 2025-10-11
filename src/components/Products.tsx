import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
<<<<<<< HEAD
import { Monitor, Server, Printer, Smartphone, HardDrive, Wifi } from "lucide-react";

export function Products() {
  const productCategories = [
=======
import { Monitor, Server, Printer, Smartphone, HardDrive, Wifi, X } from "lucide-react";
import { useState } from "react";

export function Products() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    productDescription: "",
    quantity: "",
    deadline: ""
  });

  const productCategories = [
    // ... (vos catégories de produits restent inchangées)
>>>>>>> 40ae852 (Premier commit du projet AGS Informatique)
    {
      icon: <Monitor className="h-8 w-8 text-blue-600" />,
      title: "Ordinateurs & Laptops",
      description: "Gamme complète d'ordinateurs de bureau et portables pour tous usages",
      products: [
        { name: "Ordinateurs de bureau", price: "À partir de 250,000 FCFA", stock: "En stock" },
        { name: "Laptops professionnels", price: "À partir de 400,000 FCFA", stock: "En stock" },
        { name: "Stations de travail", price: "À partir de 800,000 FCFA", stock: "Sur commande" },
        { name: "Mini PC", price: "À partir de 150,000 FCFA", stock: "En stock" }
      ],
      image: "https://images.unsplash.com/photo-1645385890999-43dcd4f4a703?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXB0b3AlMjBjb21wdXRlcnMlMjBzdG9yZXxlbnwxfHx8fDE3NTkyNDY4Mjd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      icon: <Server className="h-8 w-8 text-green-600" />,
      title: "Serveurs & Infrastructure",
      description: "Solutions serveurs et équipements réseau pour entreprises",
      products: [
        { name: "Serveurs tour", price: "À partir de 1,200,000 FCFA", stock: "Sur commande" },
        { name: "Serveurs rack", price: "À partir de 2,000,000 FCFA", stock: "Sur commande" },
        { name: "Switches réseau", price: "À partir de 50,000 FCFA", stock: "En stock" },
        { name: "Routeurs", price: "À partir de 80,000 FCFA", stock: "En stock" }
      ],
      image: "https://images.unsplash.com/photo-1629837093109-11325d6e7afd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZXR3b3JrJTIwY2FibGVzJTIwc2VydmVyJTIwcm9vbXxlbnwxfHx8fDE3NTkyNDY4MjZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      icon: <Printer className="h-8 w-8 text-purple-600" />,
      title: "Périphériques",
      description: "Accessoires et périphériques informatiques essentiels",
      products: [
        { name: "Imprimantes laser", price: "À partir de 75,000 FCFA", stock: "En stock" },
        { name: "Scanners", price: "À partir de 45,000 FCFA", stock: "En stock" },
        { name: "Écrans", price: "À partir de 65,000 FCFA", stock: "En stock" },
        { name: "Projecteurs", price: "À partir de 200,000 FCFA", stock: "En stock" }
      ],
      image: "https://images.unsplash.com/photo-1642736670762-dd634932a212?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21wdXRlciUyMGhhcmR3YXJlJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NTkyNDY4MjV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      icon: <HardDrive className="h-8 w-8 text-orange-600" />,
      title: "Stockage & Mémoire",
      description: "Solutions de stockage et composants mémoire",
      products: [
        { name: "Disques SSD", price: "À partir de 25,000 FCFA", stock: "En stock" },
        { name: "Disques durs externes", price: "À partir de 30,000 FCFA", stock: "En stock" },
        { name: "Mémoire RAM", price: "À partir de 15,000 FCFA", stock: "En stock" },
        { name: "NAS", price: "À partir de 180,000 FCFA", stock: "Sur commande" }
      ],
      image: "https://images.unsplash.com/photo-1738262039504-54d6b4a542ab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21wdXRlciUyMHJlcGFpciUyMG1haW50ZW5hbmNlfGVufDF8fHx8MTc1OTI0NjgyNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      icon: <Wifi className="h-8 w-8 text-teal-600" />,
      title: "Réseaux & Sécurité",
      description: "Équipements réseau et solutions de sécurité informatique",
      products: [
        { name: "Points d'accès Wi-Fi", price: "À partir de 35,000 FCFA", stock: "En stock" },
        { name: "Firewalls", price: "À partir de 120,000 FCFA", stock: "Sur commande" },
        { name: "Caméras IP", price: "À partir de 40,000 FCFA", stock: "En stock" },
        { name: "UPS", price: "À partir de 60,000 FCFA", stock: "En stock" }
      ],
      image: "https://images.unsplash.com/photo-1531482984755-b51a25295306?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvZmZpY2UlMjB0ZWNobm9sb2d5JTIwYWZyaWNhfGVufDF8fHx8MTc1OTI0NjgyN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      icon: <Smartphone className="h-8 w-8 text-red-600" />,
      title: "Mobiles & Tablettes",
      description: "Smartphones et tablettes pour usage professionnel",
      products: [
        { name: "Smartphones pro", price: "À partir de 100,000 FCFA", stock: "En stock" },
        { name: "Tablettes", price: "À partir de 80,000 FCFA", stock: "En stock" },
        { name: "Accessoires mobiles", price: "À partir de 5,000 FCFA", stock: "En stock" },
        { name: "Solutions MDM", price: "Sur devis", stock: "Service" }
      ],
      image: "https://images.unsplash.com/photo-1683770997177-0603bd44d070?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB0ZWFtJTIwb2ZmaWNlfGVufDF8fHx8MTc1OTIxNjIxNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    }
  ];

<<<<<<< HEAD
=======
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Ici vous pouvez ajouter la logique pour envoyer le formulaire
    console.log("Données du formulaire:", formData);
    // Réinitialiser le formulaire et fermer la popup
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      productDescription: "",
      quantity: "",
      deadline: ""
    });
    setIsFormOpen(false);
    // Afficher un message de succès ou rediriger
    alert("Votre demande de devis a été envoyée avec succès !");
  };

>>>>>>> 40ae852 (Premier commit du projet AGS Informatique)
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
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
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
                  <div key={productIndex} className="flex items-center justify-between py-2 border-b border-gray-100 last:border-b-0">
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
                
                <Button variant="outline" className="w-full mt-4">
                  Voir tous les produits
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            Vous ne trouvez pas ce que vous cherchez ? Nous pouvons commander tout matériel spécifique.
          </p>
<<<<<<< HEAD
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
=======
          <Button 
            size="lg" 
            className="bg-blue-600 hover:bg-blue-700"
            onClick={() => setIsFormOpen(true)}
          >
>>>>>>> 40ae852 (Premier commit du projet AGS Informatique)
            Demander un devis personnalisé
          </Button>
        </div>
      </div>
<<<<<<< HEAD
=======

      {/* Popup du formulaire */}
      {isFormOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center p-6 border-b">
              <h3 className="text-xl font-semibold text-gray-900">Demande de devis personnalisé</h3>
              <button
                onClick={() => setIsFormOpen(false)}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            
            <form onSubmit={handleSubmit} className="p-6 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Nom complet *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Votre nom complet"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="votre@email.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Téléphone *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Votre numéro de téléphone"
                  />
                </div>
                
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                    Entreprise
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Nom de votre entreprise"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="productDescription" className="block text-sm font-medium text-gray-700 mb-2">
                  Description du matériel recherché *
                </label>
                <textarea
                  id="productDescription"
                  name="productDescription"
                  value={formData.productDescription}
                  onChange={handleInputChange}
                  required
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Décrivez en détail le matériel que vous recherchez (marque, modèle, spécifications techniques, etc.)"
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="quantity" className="block text-sm font-medium text-gray-700 mb-2">
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
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Nombre d'unités"
                  />
                </div>
                
                <div>
                  <label htmlFor="deadline" className="block text-sm font-medium text-gray-700 mb-2">
                    Délai souhaité
                  </label>
                  <input
                    type="text"
                    id="deadline"
                    name="deadline"
                    value={formData.deadline}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Ex: 2 semaines, 1 mois, etc."
                  />
                </div>
              </div>
              
              <div className="flex justify-end space-x-4 pt-6">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setIsFormOpen(false)}
                >
                  Annuler
                </Button>
                <Button
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-700"
                >
                  Envoyer la demande
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}
>>>>>>> 40ae852 (Premier commit du projet AGS Informatique)
    </section>
  );
}