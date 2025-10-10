import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Monitor, Server, Printer, Smartphone, HardDrive, Wifi } from "lucide-react";
import { Link } from "react-router-dom";

type CatKey = "computers" | "infrastructure" | "peripherals" | "storage" | "network" | "mobile";

export function Products() {
  const productCategories = [
    {
      key: "computers" as CatKey,
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
      key: "infrastructure" as CatKey,
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
      key: "peripherals" as CatKey,
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
      key: "storage" as CatKey,
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
      key: "network" as CatKey,
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
      key: "mobile" as CatKey,
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
                
                <Button asChild variant="outline" className="w-full mt-4">
                  <Link to={`/produits?cat=${category.key}`} aria-label={`Voir tous les produits de ${category.title}`}>
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
    </section>
  );
}