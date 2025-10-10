import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Separator } from "./ui/separator";
import { MapPin, Phone, Mail, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

export function Footer() {
  const services = [
    "Vente de matériel informatique",
    "Maintenance & Réparation",
    "Réseaux & Câblage",
    "Installation & Configuration",
    "Support Technique",
    "Consulting IT"
  ];

  const products = [
    "Ordinateurs & Laptops",
    "Serveurs & Infrastructure",
    "Périphériques",
    "Stockage & Mémoire",
    "Réseaux & Sécurité",
    "Mobiles & Tablettes"
  ];

  const company = [
    "À propos",
    "Notre équipe",
    "Nos partenaires",
    "Carrières",
    "Actualités",
    "Contact"
  ];

  const support = [
    "Centre d'aide",
    "Documentation",
    "Formation",
    "Garanties",
    "Retours",
    "FAQ"
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        {/* Newsletter */}
        <div className="bg-blue-600 rounded-2xl p-8 mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl mb-2">Restez informé</h3>
              <p className="text-blue-100">
                Recevez nos dernières actualités, offres spéciales et conseils techniques.
              </p>
            </div>
            <div className="flex gap-4">
              <Input 
                placeholder="Votre adresse email" 
                className="bg-white text-gray-900 border-none"
              />
              <Button variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
                S'abonner
              </Button>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
              <div className="bg-blue-600 text-white p-2 rounded-lg mr-3">
                <span className="font-bold text-xl">AGS</span>
              </div>
              <div>
                <h3 className="text-xl">Africa's Global Services</h3>
                <p className="text-gray-400 text-sm">Solutions Informatiques</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Votre partenaire de confiance pour tous vos besoins informatiques à Dakar.
              Plus de 20 ans d'expertises au service des entreprises.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-blue-400" />
                <span className="text-gray-300">Dakar, Sénégal</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-green-400" />
                <span className="text-gray-300">221 77 387 00 30</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-purple-400" />
                <span className="text-gray-300">contact@agsinformatique.sn</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg mb-6">Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-lg mb-6">Produits</h4>
            <ul className="space-y-3">
              {products.map((product, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">
                    {product}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg mb-6">Entreprise</h4>
            <ul className="space-y-3">
              {company.map((item, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-lg mb-6">Support</h4>
            <ul className="space-y-3">
              {support.map((item, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Separator className="bg-gray-700 mb-8" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-gray-400 text-sm">
            © 2024 Africa's Global Services. Tous droits réservés.
          </div>

          {/* Social Links */}
          <div className="flex space-x-4">
            <a href="#" className="bg-gray-800 p-2 rounded-lg hover:bg-blue-600 transition-colors">
              <Facebook className="h-5 w-5" />
            </a>
            <a href="#" className="bg-gray-800 p-2 rounded-lg hover:bg-blue-400 transition-colors">
              <Twitter className="h-5 w-5" />
            </a>
            <a href="#" className="bg-gray-800 p-2 rounded-lg hover:bg-blue-700 transition-colors">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href="#" className="bg-gray-800 p-2 rounded-lg hover:bg-pink-600 transition-colors">
              <Instagram className="h-5 w-5" />
            </a>
          </div>

          {/* Legal Links */}
          <div className="flex gap-6 text-sm text-gray-400">
            <a href="#" className="hover:text-white transition-colors">
              Politique de confidentialité
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Conditions d'utilisation
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Mentions légales
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}