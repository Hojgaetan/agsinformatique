import { Card, CardContent } from "./ui/card";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Users, Award, Clock, Globe } from "lucide-react";

export function About() {
  const stats = [
    {
      icon: <Users className="h-8 w-8 text-blue-600" />,
      number: "500+",
      label: "Clients satisfaits"
    },
    {
      icon: <Award className="h-8 w-8 text-green-600" />,
      number: "10+",
      label: "Années d'expérience"
    },
    {
      icon: <Clock className="h-8 w-8 text-purple-600" />,
      number: "24h/7j",
      label: "Support technique"
    },
    {
      icon: <Globe className="h-8 w-8 text-orange-600" />,
      number: "15+",
      label: "Pays couverts"
    }
  ];

  const values = [
    {
      title: "Excellence",
      description: "Nous nous engageons à fournir des solutions de la plus haute qualité, en respectant les standards internationaux."
    },
    {
      title: "Innovation",
      description: "Nous restons à la pointe de la technologie pour offrir les solutions les plus modernes et efficaces."
    },
    {
      title: "Proximité",
      description: "Une approche personnalisée et un accompagnement sur mesure pour chaque client et chaque projet."
    },
    {
      title: "Fiabilité",
      description: "Des partenariats durables basés sur la confiance, la transparence et le respect des engagements."
    }
  ];

  return (
    <section id="apropos" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl text-gray-900 mb-4">
            À Propos d'Africa's Global Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Votre partenaire de confiance pour tous vos besoins informatiques en Afrique
            et dans le monde.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h3 className="text-2xl text-gray-900 mb-6">Notre Histoire</h3>
            <div className="space-y-4 text-gray-600">
              <p>
                Fondée avec la vision de démocratiser l'accès aux technologies informatiques 
                en Afrique, Africa's Global Services s'est imposée comme un acteur incontournable 
                du secteur informatique sur le continent.
              </p>
              <p>
                Depuis plus de 10 ans, nous accompagnons les entreprises, les institutions 
                et les particuliers dans leur transformation numérique, en proposant des solutions 
                adaptées aux réalités et aux besoins spécifiques du marché africain.
              </p>
              <p>
                Notre expertise couvre l'ensemble de la chaîne de valeur informatique : 
                de la fourniture d'équipements à la maintenance, en passant par l'installation, 
                la configuration et le support technique.
              </p>
            </div>
          </div>

          <div className="relative">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1683770997177-0603bd44d070?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB0ZWFtJTIwb2ZmaWNlfGVufDF8fHx8MTc1OTIxNjIxNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Équipe Africa's Global Services"
              className="w-full h-[400px] object-cover rounded-2xl shadow-lg"
            />
          </div>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="flex justify-center mb-4">
                  {stat.icon}
                </div>
                <h3 className="text-2xl text-gray-900 mb-2">{stat.number}</h3>
                <p className="text-gray-600">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Values */}
        <div>
          <h3 className="text-2xl text-gray-900 text-center mb-12">Nos Valeurs</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <h4 className="text-xl text-gray-900 mb-4">{value.title}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Mission */}
        <div className="bg-blue-600 rounded-2xl p-8 md:p-12 text-center text-white mt-20">
          <h3 className="text-2xl md:text-3xl mb-6">Notre Mission</h3>
          <p className="text-lg md:text-xl leading-relaxed max-w-4xl mx-auto">
            Accompagner la transformation numérique de l'Afrique en fournissant des solutions 
            informatiques fiables, innovantes et accessibles, tout en contribuant au développement 
            des compétences locales et à la croissance économique du continent.
          </p>
        </div>
      </div>
    </section>
  );
}