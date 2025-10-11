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
      number: "20+",
      label: "Années d'expérience"
    },
    {
      icon: <Clock className="h-8 w-8 text-purple-600" />,
      number: "24h/6j",
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
      description: "Nous plaçons l’excellence au cœur de chaque solution, en garantissant une qualité supérieure et une fiabilité irréprochable."
    },
    {
      title: "Innovation",
      description: "Allier créativité et technologie pour offrir des solutions toujours plus efficaces et avant-gardistes"
    },
    {
      title: "Proximité",
      description: "Nous plaçons chaque client au cœur de notre démarche, avec un accompagnement personnalisé et adapté à chaque projet."
    },
    {
      title: "Fiabilité",
      description: "Nous construisons des partenariats solides, en tenant toujours nos promesses et en garantissant la transparence."
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
           Chez Africa’s Global Services, nous connectons l’Afrique au monde grâce
            à des solutions informatiques sur mesure, performantes et accessibles. 
            Notre ambition : faire du numérique un levier de compétitivité et d’excellence pour chaque entreprise.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h3 className="text-2xl text-gray-900 mb-6">Notre Histoire</h3>
            <div className="space-y-4 text-gray-600">
              <p>
               Fondée avec la vision de rendre les technologies informatiques accessibles à tous, 
               Africa’s Global Services (AGS Informatique) s’est progressivement imposée comme
                un acteur majeur du secteur numérique en Afrique.
            
              </p>
              <p>
                Depuis plus de vingt ans, nous accompagnons entreprises, institutions et
                particuliers dans leur transformation digitale en leur offrant des solutions
                 sur mesure, pensées pour répondre aux réalités du marché africain.
              </p>
              <p>
                
                Notre expertise s’étend sur l’ensemble de la chaîne de valeur informatique : 
                fourniture d’équipements, installation, configuration, maintenance et support technique.
              </p>
            </div>
          </div>

         <div className="relative">
  <ImageWithFallback
    src="/images/img.png"
    alt="Équipe Africa's Global Services"
    className="w-full h-[400px] object-contain rounded-2xl shadow-lg bg-gray-100"
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
           Chez AGS Informatique, notre mission est d’accompagner la transformation numérique 
          de l’Afrique en proposant des solutions technologiques fiables, innovantes et accessibles à tous.
          Nous plaçons l’excellence, la confiance et le développement des compétences locales au cœur de 
          notre démarche afin de bâtir un écosystème numérique solide, créateur d’opportunités et moteur
           de croissance durable pour le continent africain.
          </p>
        </div>
      </div>
    </section>
  );
}