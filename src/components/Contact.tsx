import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { MapPin, Phone, Mail, Clock, Send, MessageCircle } from "lucide-react";

export function Contact() {
  const contactInfo = [
    {
      icon: <MapPin className="h-6 w-6 text-blue-600" />,
      title: "Adresse",
      content: "54x65 Geule Tapée Résidence Cheikh Bamba NDIONGUE ",
      description: "Siège social"
    },
    {
      icon: <Phone className="h-6 w-6 text-green-600" />,
      title: "Téléphone",
      content: "+221 387 00 30\n 33 822 63 67",
      description: "Support 24h/6j"
    },
    {
      icon: <Mail className="h-6 w-6 text-purple-600" />,
      title: "Email",
      content: "contact@africasglobalservices.sn",
      description: "Réponse sous 24h"
    },
    {
      icon: <Clock className="h-6 w-6 text-orange-600" />,
      title: "Horaires",
      content: "Lun - Ven: 8h00 - 18h00\nSam: 8h00 - 13h00",
      description: "Fermé les dimanches"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl text-gray-900 mb-4">
            Contactez-Nous
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Besoin d'une solution informatique sur mesure ? Notre équipe d'experts
            est à votre disposition pour vous accompagner dans vos projets.
          </p>
        </div>

        <div className="">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Informations de Contact</h3>

            {/* Cartes d'informations */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6">
              {contactInfo.map((info, index) => (
                <Card key={index} className="p-6 hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200 group">
                  <CardContent className="p-0">
                    <div className="flex items-start space-x-4">
                      <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-3 rounded-xl group-hover:from-blue-100 group-hover:to-blue-200 transition-all duration-300">
                        <div className="text-blue-600">
                          {info.icon}
                        </div>
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold text-gray-900 mb-2">{info.title}</h4>
                        <p className="text-gray-700 whitespace-pre-line mb-2 leading-relaxed">
                          {info.content}
                        </p>
                        <p className="text-sm text-gray-500 font-medium">{info.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Actions rapides */}
            <div className="mt-8">
              <h4 className="text-lg font-semibold text-gray-900 mb-4 text-center">Discuter avec un expert</h4>

              {/* Boutons principaux côte à côte */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Button
                  onClick={() => window.open('tel:+221773870030', '_self')}
                  className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 py-3 rounded-xl font-semibold text-white border-0"
                >
                  <div className="flex items-center justify-center space-x-2">
                    <div className="bg-white/20 p-1 rounded-lg">
                      <Phone className="h-4 w-4" />
                    </div>
                    <span>Appeler</span>
                  </div>
                </Button>

                <Button
                  onClick={() => window.open('mailto:contact@agsinformatique.sn', '_self')}
                  variant="outline"
                  className="w-full border-2 border-blue-300 hover:border-blue-500 hover:bg-blue-50 text-blue-700 hover:text-blue-800 transition-all duration-300 py-3 rounded-xl font-semibold shadow-sm hover:shadow-md transform hover:scale-105"
                >
                  <div className="flex items-center justify-center space-x-2">
                    <div className="bg-blue-100 p-1 rounded-lg">
                      <Mail className="h-4 w-4 text-blue-600" />
                    </div>
                    <span>Email</span>
                  </div>
                </Button>
              </div>

            </div>

            {/* Horaires d'ouverture */}
            <div className="mt-8 bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-6 border border-gray-200">
              <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <Clock className="h-5 w-5 mr-2 text-blue-600" />
                Horaires d'ouverture
              </h4>
              <div className="space-y-2 text-sm text-gray-700">
                <div className="flex justify-between">
                  <span>Lun - Ven</span>
                  <span className="font-semibold text-gray-900">8h00 - 18h00</span>
                </div>
                <div className="flex justify-between">
                  <span>Samedi</span>
                  <span className="font-semibold text-gray-900">9h00 - 13h00</span>
                </div>
                <div className="flex justify-between text-red-600">
                  <span>Dimanche</span>
                  <span className="font-semibold">Fermé</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12 text-center text-white mt-20">
          <h3 className="text-2xl md:text-3xl mb-4">
            Urgence Informatique ?
          </h3>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            Notre équipe d'intervention rapide est disponible 24h/7j pour tous vos problèmes critiques.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
              Assistance d'urgence
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
              Contrat de maintenance
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}