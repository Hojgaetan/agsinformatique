import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";

export function Contact() {
  const contactInfo = [
    {
      icon: <MapPin className="h-6 w-6 text-blue-600" />,
      title: "Adresse",
      content: "Abidjan, Côte d'Ivoire\nPlateau - Zone 4",
      description: "Siège social"
    },
    {
      icon: <Phone className="h-6 w-6 text-green-600" />,
      title: "Téléphone",
      content: "+225 XX XX XX XX XX\n+225 XX XX XX XX XX",
      description: "Support 24h/7j"
    },
    {
      icon: <Mail className="h-6 w-6 text-purple-600" />,
      title: "Email",
      content: "contact@africasglobalservices.com\nsupport@africasglobalservices.com",
      description: "Réponse sous 24h"
    },
    {
      icon: <Clock className="h-6 w-6 text-orange-600" />,
      title: "Horaires",
      content: "Lun - Ven: 8h00 - 18h00\nSam: 8h00 - 13h00",
      description: "Support d'urgence 24h/7j"
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

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl text-gray-900 mb-8">Informations de Contact</h3>
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                  <CardContent className="p-0">
                    <div className="flex items-start space-x-4">
                      <div className="bg-gray-50 p-3 rounded-lg">
                        {info.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg text-gray-900 mb-1">{info.title}</h4>
                        <p className="text-gray-700 whitespace-pre-line mb-1">
                          {info.content}
                        </p>
                        <p className="text-sm text-gray-500">{info.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Quick Actions */}
            <div className="mt-8 space-y-4">
              <Button className="w-full bg-blue-600 hover:bg-blue-700">
                <Phone className="mr-2 h-4 w-4" />
                Appeler maintenant
              </Button>
              <Button variant="outline" className="w-full">
                <Mail className="mr-2 h-4 w-4" />
                Envoyer un email
              </Button>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="p-8">
              <CardHeader className="p-0 mb-8">
                <CardTitle className="text-2xl">Demander un Devis</CardTitle>
                <CardDescription>
                  Remplissez ce formulaire et nous vous recontacterons dans les plus brefs délais.
                </CardDescription>
              </CardHeader>
              
              <CardContent className="p-0">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">Prénom *</Label>
                      <Input id="firstName" placeholder="Votre prénom" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Nom *</Label>
                      <Input id="lastName" placeholder="Votre nom" required />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input id="email" type="email" placeholder="votre@email.com" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Téléphone</Label>
                      <Input id="phone" type="tel" placeholder="+225 XX XX XX XX XX" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="company">Entreprise</Label>
                      <Input id="company" placeholder="Nom de votre entreprise" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="service">Service souhaité *</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Sélectionnez un service" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="vente">Vente de matériel</SelectItem>
                          <SelectItem value="maintenance">Maintenance & Réparation</SelectItem>
                          <SelectItem value="reseaux">Réseaux & Câblage</SelectItem>
                          <SelectItem value="installation">Installation & Configuration</SelectItem>
                          <SelectItem value="support">Support Technique</SelectItem>
                          <SelectItem value="consulting">Consulting IT</SelectItem>
                          <SelectItem value="autre">Autre</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Décrivez votre besoin en détail..."
                      className="min-h-[120px]"
                      required 
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="budget">Budget estimé</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Sélectionnez une fourchette" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="50k-200k">50,000 - 200,000 FCFA</SelectItem>
                        <SelectItem value="200k-500k">200,000 - 500,000 FCFA</SelectItem>
                        <SelectItem value="500k-1m">500,000 - 1,000,000 FCFA</SelectItem>
                        <SelectItem value="1m-5m">1,000,000 - 5,000,000 FCFA</SelectItem>
                        <SelectItem value="5m+">Plus de 5,000,000 FCFA</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <Button type="submit" size="lg" className="w-full bg-blue-600 hover:bg-blue-700">
                    <Send className="mr-2 h-4 w-4" />
                    Envoyer la demande
                  </Button>
                </form>
              </CardContent>
            </Card>
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