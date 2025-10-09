import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ShoppingCart, Wrench, Network, Settings, Headphones, Laptop } from "lucide-react";

export function Services() {
  const services = [
    {
      icon: <ShoppingCart className="h-8 w-8 text-blue-600" />,
      title: "Vente de Matériel Informatique",
      description: "Large gamme d'ordinateurs, serveurs, périphériques et accessoires informatiques de marques reconnues.",
      image: "https://images.unsplash.com/photo-1645385890999-43dcd4f4a703?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXB0b3AlMjBjb21wdXRlcnMlMjBzdG9yZXxlbnwxfHx8fDE3NTkyNDY4Mjd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      features: ["Ordinateurs portables et de bureau", "Serveurs d'entreprise", "Périphériques et accessoires", "Garantie constructeur"]
    },
    {
      icon: <Wrench className="h-8 w-8 text-green-600" />,
      title: "Maintenance & Réparation",
      description: "Services de maintenance préventive et curative pour tous types d'équipements informatiques.",
      image: "https://images.unsplash.com/photo-1738262039504-54d6b4a542ab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21wdXRlciUyMHJlcGFpciUyMG1haW50ZW5hbmNlfGVufDF8fHx8MTc1OTI0NjgyNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      features: ["Diagnostic complet", "Réparation sur site", "Maintenance préventive", "Remplacement de pièces"]
    },
    {
      icon: <Network className="h-8 w-8 text-purple-600" />,
      title: "Réseaux & Câblage",
      description: "Conception, installation et maintenance de réseaux informatiques et infrastructure de câblage.",
      image: "https://images.unsplash.com/photo-1629837093109-11325d6e7afd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZXR3b3JrJTIwY2FibGVzJTIwc2VydmVyJTIwcm9vbXxlbnwxfHx8fDE3NTkyNDY4MjZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      features: ["Câblage structuré", "Configuration de routeurs", "Réseaux Wi-Fi", "Sécurité réseau"]
    },
    {
      icon: <Settings className="h-8 w-8 text-orange-600" />,
      title: "Installation & Configuration",
      description: "Installation et configuration de systèmes d'exploitation, logiciels et applications métier.",
      image: "https://images.unsplash.com/photo-1642736670762-dd634932a212?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21wdXRlciUyMGhhcmR3YXJlJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NTkyNDY4MjV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      features: ["Systèmes d'exploitation", "Logiciels métier", "Configuration sécurisée", "Migration de données"]
    },
    {
      icon: <Headphones className="h-8 w-8 text-red-600" />,
      title: "Support Technique",
      description: "Assistance technique à distance et sur site pour résoudre tous vos problèmes informatiques.",
      image: "https://images.unsplash.com/photo-1683770997177-0603bd44d070?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB0ZWFtJTIwb2ZmaWNlfGVufDF8fHx8MTc1OTIxNjIxNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      features: ["Support 24h/7j", "Assistance à distance", "Formation utilisateurs", "Documentation technique"]
    },
    {
      icon: <Laptop className="h-8 w-8 text-teal-600" />,
      title: "Consulting IT",
      description: "Conseil en stratégie informatique pour optimiser votre infrastructure et vos processus.",
      image: "https://images.unsplash.com/photo-1531482984755-b51a25295306?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvZmZpY2UlMjB0ZWNobm9sb2d5JTIwYWZyaWNhfGVufDF8fHx8MTc1OTI0NjgyN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      features: ["Audit informatique", "Stratégie IT", "Optimisation des coûts", "Modernisation"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl text-gray-900 mb-4">
            Nos Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Des solutions informatiques complètes pour accompagner votre croissance
            et optimiser vos performances technologiques.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="relative h-48 overflow-hidden">
                <ImageWithFallback
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4 bg-white p-3 rounded-full shadow-lg">
                  {service.icon}
                </div>
              </div>
              
              <CardHeader>
                <CardTitle className="text-xl">{service.title}</CardTitle>
                <CardDescription className="text-gray-600">
                  {service.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}