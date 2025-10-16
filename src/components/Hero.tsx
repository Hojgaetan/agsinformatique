import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ArrowRight, Zap, Shield, Users } from "lucide-react";

export function Hero() {
  return (
    <section id="accueil" className="relative overflow-hidden bg-gradient-to-br from-blue-50 to-white">
      <div className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl text-gray-900 mb-6">
              L'Excellence Informatique <br />{" "}
              <span className="text-blue-600">Au Service de Votre Réussite</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Africa's Global Services vous accompagne dans tous vos besoins informatiques : 
              vente d'équipements, maintenance, réparation, réseaux et câblage. 
            </p>


            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Zap className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="mb-1">Rapidité</h3>
                <p className="text-sm text-gray-600">Intervention rapide</p>
              </div>
              <div className="text-center">
                <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Shield className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="mb-1">Fiabilité</h3>
                <p className="text-sm text-gray-600">Solutions durables</p>
              </div>
              <div className="text-center">
                <div className="bg-purple-100 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Users className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="mb-1">Expertise</h3>
                <p className="text-sm text-gray-600">Équipe qualifiée</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10">
              <ImageWithFallback
                src="/images/imagebanniere.png" // Chemin depuis le dossier public
                alt="Équipe Africa's Global Services"
                className="w-full h-[500px] object-cover rounded-2xl shadow-2xl"
              />
            </div>
            {/* Floating elements */}
            <div className="absolute -top-6 -right-6 bg-white p-4 rounded-xl shadow-lg z-20">
              <div className="flex items-center space-x-3">
                <div className="bg-green-500 w-3 h-3 rounded-full"></div>
                <span className="text-sm">+500 clients satisfaits</span>
              </div>
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg z-20">
              <div className="flex items-center space-x-3">
                <div className="bg-blue-500 w-3 h-3 rounded-full"></div>
                <span className="text-sm">Support 24h/7j</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}