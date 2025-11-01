import { LucideIcon, Monitor, Server, Printer, Smartphone, HardDrive, Wifi } from "lucide-react";

export type CategoryKey =
  | "computers"
  | "infrastructure"
  | "peripherals"
  | "storage"
  | "network"
  | "applications avec licences et antivirus";

export type Product = {
  id: string;
  name: string;
  price: number; // FCFA
  stock: "En stock" | "Sur commande" | "Rupture";
  category: CategoryKey;
  subcategory: string;
  image: string;
  tags?: string[];
  brand?: string;
  desc?: string;
  details?: string[];
};

export type CategoryMeta = {
  key: CategoryKey;
  label: string;
  icon: LucideIcon;
  colorClass: string; // text-*
  subcategories: string[];
};

export const CATEGORIES: CategoryMeta[] = [
  {
    key: "computers",
    label: "Ordinateurs & Laptops",
    icon: Monitor,
    colorClass: "text-blue-600",
    subcategories: [
      "Ordinateurs de bureau",
      "Laptops",
      "Mini PC",
    ],
  },
  {
    key: "infrastructure",
    label: "Serveurs & Infra",
    icon: Server,
    colorClass: "text-green-600",
    subcategories: ["Routeurs", "Switches", "Serveurs tour", "Serveurs rack"],
  },
  {
    key: "peripherals",
    label: "Périphériques",
    icon: Printer,
    colorClass: "text-purple-600",
    subcategories: ["Imprimantes", "Unité centrale", "Écrans", "Projecteurs", "Accessoires", "onduleurs", "BOITE D'ALIMENTATION PC", "Régulateurs", ],
  },
  {
    key: "storage",
    label: "Stockage & Mémoire",
    icon: HardDrive,
    colorClass: "text-orange-600",
    subcategories: ["SSD", "Disques externes", "RAM", "NAS","Cartes graphiques", "Clé USB","Adaptateur" ],
  },
  {
    key: "network",
    label: "Réseaux & Sécurité",
    icon: Wifi,
    colorClass: "text-teal-600",
    subcategories: ["Wi‑Fi", "Firewalls", "Caméras IP", "UPS","Sécurite"],
  },
  {
    key: "applications avec licences et antivirus",
    label: "Application avec licences et antivirus",
    icon: Smartphone,
    colorClass: "text-red-600",
    subcategories: ["Windows 10 pro", "Windows 11 pro", "Office 19 actif"],
  },
];

export const PRODUCTS: Product[] = [
  // Computers - 8 produits
 
  {
    id: "p-2",
    name: "DELL X360  TACTILE", // A revoir
    price: 75000,
    stock: "En stock",
    category: "computers",
    subcategory: "Laptops",
    brand: "Dell",
    details: ["Réconditionné","ROUGE, NOIR, JAUNE, GRISE, BLEU,...", "Dell","128GO", "4GO", "Intel"],
    tags: ["bureau","portable","tactile"],
    image: "./IMG//HP X360 DELL TACTILE/2.jpg",
    desc: " Dell 3190\n"+
    "Disque dur 128 giga ssd\n"+ "Mémoire Ram 4giga\n"+ "Ecran 11.6 Pouces convertible x360\n"+ "Dell 3190 disponible avec 8go 256 ssd\n"+ "Port type C,2usb, Rj45, support carte mémoire,hdmi,2port usb...\n"+ "Tablette avec écran tactile en même temps\n"+ "très léger pour étudiants et professionnels"
  },
  {
    id: "p-4",
    name: "LENOVO T14.Core I7 11 ou 12 éme gen.14 pouces FHD ou TACTILE",
    price: 325000,
    stock: "En stock",
    category: "computers",
    subcategory: "Laptops",
    brand: "Lenovo",
    tags: ["portable", "bureau"],
    image: "./IMG/LENOVO T14.Core I7 11 ou 12 éme gen.14 pouces FHD ou TACTILE/1.jfif",
    desc: "ORDINATEUR PORTABLE LENOVO T14\n"+ "PROCESSEUR: CORE I7 11éme à 12-ème génération\n"+
    "RAM: 16 GO EXTENSIBLE A 32 GO\n"+ "DISQUE: SSD512 EXTENSIBLE 1TERA\n"+ "ECRAN 14 POUCES FHD OU TACTILE\n"+ "A PARTIR DU PRIX INDIQUE",
    details: ["Réconditionné","NOIR","Lenovo","512 SSD","16GO","CORE I7"]
  },
  {
    id: "p-6",
    name: "Lenovo L380 YOGA X360. i5. 8GO. 256GOSSD. 13.3. tactile+Stylet",
    price: 150000,
    stock: "En stock",
    category: "computers",
    subcategory: "Laptops",
    brand: "Lenovo",
    tags: ["portable", "bureau", "tactile"],
    image: "./IMG/Lenovo L380 YOGA X360.i5.8GO.256GOSSD.13.3tactile+Stylet/1.jfif",
    details:["Réconditionné","NOIR","Lenovo","256SSD","8GO","i5, 8250 U de 8ème generation"],
    desc: "Lenovo Thinkpad L380 YOGA X360\n"+ "Core i5 (8e gén) - 8GO\n"+ "256GO SSD\n"+ 
    "Ecran 13.3 pouces tactile pliable\n"+ "Lenovo Thinkpad L380 (mince et très leger)\n"+ 
    "Processeur: Core i5-8250 U de 8 -ème generation\n"+ "Fréquence de base du processeur: 1.6GHz\n"+
     "Fréquence maximum du processeur: 3,4GHz\n"+ "Mémoire vive (RAM): 8Go DDR4 extensible à 16 ou même 32Go\n"+ 
     "Type de stockage: SSD 256Go extensible à 512Go ou+\n"+ "Modèle du chipset graphique: HD Graphics 620\n"+
      "Taille d'écran: 13,3 pouces (33,8cm) tactile\n"+ "Résolution d'écran: 1920 x 1080 pixels (Full HD)\n"+ 
      "IPS Wi-Fi : 802.11ac (Wi-Fi 5)\n"+ "Bluetooth 4.1 Webcam: 720p / 1280 x 720 pixel\n"+ 
      "Connectique audio: 1 x Combo Casque/Micro/ Dolby Advanced Audio\n"+ 
      "PORTS : type A USB 3.2 Gen 1 (3.1 Gen 1) type C USB 3.2 Gen 1 (3.1 Gen 1 Sortie HDMI: 1 x HDMI 1.4 Adaptateur secteur USB-C® 65 W\n"+ 
      "Poids (en kg): 1,\n"+ "Système d'exploitation: Windows 10 OU 11 PROFESSIONNEL\n"+"OFFICE 2019.\n"+
      "TOUS LES UTILITAIRES INSTALLES\n"+ "A PARTIR DU PRIX INDIQUE"
  },
  {
    id: "p-8",
    name: "ORDINATEUR CORE I5 I7 AVEC ECRAN DE 19 à 24 POUCES",// A revoir
    price: 50000,
    stock: "En stock",
    category: "computers",
    subcategory: "Ordinateurs de bureau",
    brand: "Lenovo",
    tags: ["all-in-one", "écran", "bureau", "portable", "Laptops"],
    image: "./IMG/Ordinateur Core i5 ou I7 Ecran 19 à 22 pouces/1.jfif",
    details:["D'occasion","NOIR","Lenovo","250 à 500go ou SSD 128 à 256 Go","4GO","i5 ou I7 de 2ème à la 8ème génération"],
    desc:"Ordinateurs complets avec écran 19 à 24\n"+ "disponibles Lenovo, HP,ACER et DELL selon stock\n" +
"Core i5 ou i7(de la 2 -ème à la 8 -ème génération)\n" +
"Mémoire Ram de 4 à 8 go extensible à 16 go\n" +
"Disque dur:250 à 500go ou SSD 128 à 256 Go.\n"+
"En Option :Wifi, Carte Graphique de 2 à 4 go\n"+
"Windows 10 ou 11 Professionnel 64 bits, Office 2019 , Antivirus etc...\n"+
"prêt à l'emploi. Machines idéales pour tous travaux de bureau et d'internet ou de montage videos.\n"+
"Tous nos produits sont garantis \n"+
"A PARTIR DU PRIX INDIQUE"
  },
  {
    id: "p-10",
    name: "ALL IN ONE TACTILE 24\"",
    price: 225000,
    stock: "En stock",
    category: "computers",
    subcategory: "Ordinateurs de bureau",
    brand: "Lenovo",
    tags: ["all-in-one", "écran", "bureau"],
    image: "./IMG/ALL IN ONE TACTILE 24/1.jpg",
    details:["reconditionné","NOIR","Lenovo","256 GO SSD","8GO","CORE I5 6ème"],

    desc:"ThinkCentre M900z All-in-One\n"+ "Ecran tactile 60,45 cm (23,8)\n" +
"Core™ i5 6 ème génération\n" +
"Mémoire 8go extensible à 16 go\n" +
"Disque ssd 256 go extensible à 512 ou plus\n"+
"Windows 10 Professionnel 64 bits, Office 2019"
  }, 
  {
    id: "p-12",
    name: "DELL 5470 .I7 6ème Gen.8Go.SSD 256 2GO GRAPHIQUE",
    price: 140000,
    stock: "En stock",
    category: "computers",
    subcategory: "Laptops",
    brand: "Dell",
    tags: ["portable", "laptop"],
    image: "./IMG/DELL 5470 .I7 6ème Gen.8Go.SSD 256 2GO GRAPHIQUE/1.jpg",
    details:["reconditionné","NOIR","dell","256SSD","8GO","CORE I7"],
    desc:"DELL LATITUDE 5470 Core I7 6 ème Gen .8Go.SSD 256 Go.14 POUCES Full HD.carte graphique Radeon R7 M360 2 Go\n" +
"Webcam .HDMI\n" +
"(RECONDITIONNE USINE AVEC CARTON D'ORIGINE)\n" +
"Très bon choix à moindre prix pour les le DESIGN, l'ARCHITECTURE , l'édition de photos et de vidéos\n"+
"Processeur Intel Core i7-6600U de 6e génération (double cœur, jusqu'à 3,40 GHz, 4 Mo de cache, 15 W)\n"+
"Disque stockage : SSD 256Go à 512go (jusqu'a 35 fois plus rapide qu'un disque SATA de 500go) extensible à 512 Go\n"+
"Carte graphique AMD Radeon R7 M360, carte graphique séparée de 2 Go\n"+
"Clavier retro éclaire\n"+
"Lecteur empreinte digitaleLecteur empreinte digitale\n"+
"Ecran : 14.1'' HD - LED - MAT Antireflets - Full HD - Résolution 1920*1080\n"+
"Carte son : Intégrée - Enceintes et microphone/Réseau : 100/1000 - Gigabit Ethernet/Webcam : Oui HD\n"+
"Carte réseau sans fil Dell Wireless 1820 802.11AC double bande Wi-Fi + Bluetooth 4.1\n"+
"Ports de connexion \n"+
"3 x USB 3.0-3.1/1 x VGA - HD D-Sub (HD-15) 15 broches/1 x HDMI/1 x Lecteur de cartes mémoires : SD/1 x SmartCard\n"+
"Reader/1 x Gigabit Ethernet (RJ45) 10/100/1000Mbps/1 x Port Station d'accueil / duplicateur de ports\n"+
"1 x Microphone - entrée / Audio - sortie de ligne/casque\n"+
"Système d'exploitation installé et suite office : Microsoft Windows 11 Professionnel 64 bits /OFFICE 2019\n"+
"A PARTIR DU PRIX INDIQUE"

  },
    {
    id: "p-14",
    name: "Lenovo Thinkpad T460 Core I5 6 eme.8Go.SSD 256 Go.",
    price: 115000,
    stock: "En stock",
    category: "computers",
    subcategory: "Laptops",
    brand: "Lenovo",
    tags: ["portable", "laptop"],
    image: "./IMG/Lenovo Thinkpad T460 Core I5 6 eme.8Go.SSD 256 Go/1.jfif",
    details:["Réconditionné","NOIR","Lenovo","256 SSD","8GO","CORE I5"],
    desc:"Lenovo Thinkpad T460 Ultrabook (mince et très léger) avec 2 batteries. Très bonne autonomie\n" +
"Processeur : Intel Core i5-6300U (6e génération, jusqu'à 3,0 GHz)\n" +
"RAM : 8 Go DDR4 extensible à 16 et 32GO\n" +
"Stockage : SSD 256 Go extensible à 512go (démarrage rapide et applications réactives)\n"+
"Écran : Écran antireflet HD/FHD de 14 pouces\n"+
"Graphiques : Intel HD Graphics 520\n"+
"Ports : USB 3.0, HDMI, Mini DisplayPort, LAN, prise audio, lecteur de carte SD\n"+
"Connectivité : Wi-Fi, Bluetooth\n"+
"Webcam : Caméra HD intégrée\n"+
"A PARTIR DU PRIX INDIQUE"
  },
   {
    id: "p-16",
    name: "Lenovo ThinkPad 13 Core i5-7 eme Gen.8Go.256 Go SSD.",
    price: 100000,
    stock: "En stock",
    category: "computers",
    subcategory: "Laptops",
    brand: "Lenovo",
    tags: ["portable", "laptop"],
    image: "./IMG/Lenovo ThinkPad 13 Core i5-7 eme Gen.8Go.256 Go SSD/2.jfif",
    details:["Réconditionné","NOIR","Lenovo","256 SSD","8GO","CORE I5"],
    desc:"Lenovo ThinkPad 13 Intel Core i5-7200U 8Go de RAM 256 Go SSD\n" +
"Processeur : Intel Core i5 7 -ème\n" +
"Mémoire : 8GO à 16 Go de RAM.\n" +
"Stockage : 256 SSD à 512 Go.\n"+
"Ecran (13.3) 33,8 cm Full HD 1920 x 1080 pixels IPS Rétroéclairage à LED Mat 16:9\n"+
"Connectivité : avec prise en charge des signaux sans fil 802.11 AC Bluetooth\n"+
"Ports : 2 x USB 3.0 + 1 x USB 3.0 (alimenté) + 1 x USB-C. + 1 x HDMI OneLink + Lecteur de cartes 4 en 1 (SD,SD-HC,D-XC,MMC)\n"+
"1 x prise combinée casque/microphone.\n"+
"Système d'exploitation et suite office : Microsoft Windows 11 Professionnel 64 bits /OFFICE 2019\n"+
"A PARTIR DU PRIX INDIQUE"
  },
   {
    id: "p-18",
    name: "DELL LATITUDE E5550 I5 15.6 TACTILE +PAVE",
    price: 125000,
    stock: "En stock",
    category: "computers",
    subcategory: "Laptops",
    brand: "Dell",
    tags: ["portable", "laptop"],
    image: "./IMG/DELL LATITUDE E5550 I5 15.6 TACTILE +PAVE/1.jpg",
    details:["Réconditionné","NOIR","dell","256 SSD","8GO","CORE I5"],
    desc:"Ordinateur portable DELL LATITUDE 5550\n" +
"ECRAN 15.6 POUCES TACTILE\n" +
"CLAVIER +PAVE NUMERIQUE\n" +
"Processeur : Intel Core i5 5 eme generation - 2.9 Ghz - 4 threads\n"+
"Mémoire Vive : 8 à16 Go\n"+
"Disque stockage : 256 à 512 Go SSD\n"+
"Carte graphique : Intel HD Graphics 5500\n"+
"Carte son : Intégrée - Enceintes et microphone\n"+
"Réseau : 100/1000 - Gigabit Ethernet\n"+
"Wifi : Oui\n"+
"Bluetooth : Oui\n"+
"Webcam : Oui\n"+
"Pavé numérique : Oui\n"+
"Résolution : 1366x768\n"+
"Professionnel 64 bits ou Windows 10 Pro\n"+
"Ports de connexion\n"+
"2 x Super-Speed USB (3.0)\n"+
"2 x Hi-Speed USB (2.0)\n"+
"1 x VGA - HD D-Sub (HD-15) 15 broches\n"+
"1 x HDMI\n"+
"1 x Lecteur de cartes mémoires : SD\n"+
"1 x Express Card 54mm\n"+
"1 x Gigabit Ethernet (RJ45) 10/100/1000Mbps\n"+
"1 x Station d'accueil / duplicateur de ports\n"+
"1 x Microphone - entrée / Audio - sortie de ligne/casque\n"+
"A PARTIR DU PRIX INDIQUE"
  },
    {
    id: "p-20",
    name: "Lenovo yoga 11e 4go 128go 11,6''\n",
    price: 60000,
    stock: "En stock",
    category: "computers",
    subcategory: "Laptops",
    brand: "Lenovo",
    tags: ["portable", "laptop"],
    image: "./IMG/Lenovo yoga 11e 4go 128go 11,6''/1.jpg",
    details:["Réconditionné","NOIR","Lenovo","128 SSD","4GO","intel"],
    desc:"Ordinateur portable Lenovo Thinkpad Yoga 11e 11.6 pouces\n" +
"Processeur 1,6 GHz INTEL\n" +
"RAM 4 à 8 Go DDR3E\n" +
"Disque dur SSD de 128 à 256 SSD\n"+
"Ecran 11,6 pouces non Tactile\n"+
"Nombre de ports USB 2.0 1\n"+
"Nombre de ports USB 3.0 1\n"+
"A partir du prix indiquer ci dessous"
  },
  {
    id: "p-22",
    name: "DELL E5530 CORE I7 15'' PAVE",
    price: 135000,
    stock: "En stock",
    category: "computers",
    subcategory: "Laptops",
    brand: "Dell",
    tags: ["portable", "laptop"],
    image: "./IMG/DELL E5530 CORE I7 15'' PAVE/1.jpg",
    details:["D'occasion","NOIR","dell","256 SSD","16GO","CORE I7",],
    desc:"DELL LATITUDE E5530 CORE I7 3éme GENERATION\n" +
"Processeur Intel Core i7 3 eme generation\n" +
"16 Go de mémoire DDR3 2x 8 Go\n" +
"Ecran de 15.6\n"+
"SSD 256 Go\n"+
"Clavier avec pavé Numérique\n"+
"Windows 10 Professionnel 64 bits"
  },
    {
    id: "p-24",
    name: "Dell Core I5 Écran 22\" WIFI",
    price: 60000,
    stock: "En stock",
    category: "computers",
    subcategory: "Ordinateurs de bureau",
    brand: "Dell",
    tags: ["bureau", "desktop", "ordinateur fixe", "dell", "windows"],
    image: "./IMG/Core I5 Écran 22 WIFI/1.jpg",
    details:["Réconditionné","Gris","dell","500GO","4GO","3.20Ghz"],
    desc:"Ordinateurs Complets avec écran 22 pouces\n" +
"Disponible en acer desktop selon stock : \n" +
"Core I5 3.20ghz 4go de mémoire Ram , \n" +
" disque dur 500go extensible à 1000go\n"+
"Écran 22 pouces et Wifi en option\n"+
" Windows 10Pro , Office , Antivirus etc... prêt à l'emploi\n"+
"Machines idéales pour tous travaux de bureau et d'internet\n"+
"Tous nos produits sont garantis"
  },
  {
    id: "p-26",
    name: "Dell I7 16go 1To 15.6",
    price: 135000,
    stock: "En stock",
    category: "computers",
    subcategory: "Laptops",
    brand: "Dell",
    tags: ["portable", "laptop", "dell", "windows"," core i7","16go","1to", "15.6"],
    image: "./IMG/Dell I7 16go 1to 15.6/1.jpg",
    details:["D'occasion","Noir","dell","1000Go (1To)","16GO","CORE I7"],
    desc:"Je vends mon Dell LATITUDE E6530 avec les caractéritiques principales: \n" +
"Processeur Intel Core i7-3.à 3.7ghz\n" +
" RAM 16 Go - Disque dur 1000Go\n" +
"Ecran 15.6 pouces \n"+
"DVDRW - Webcam\n"+
"Gigabit Ethernet HDMI Port pour TV,\n"+
"Bluetooth USB 2.0\n"+
"Multi Card Slot : 3-in-1 WebCam\n"+
"Windows 10 pro, office, antivirus, adobe etc\n"+
"Tous nos produits sont garantis!"

  },
   {
    id: "p-28",
    name: "Ordinateur Acer Core i3",
    price: 45000,
    stock: "En stock",
    category: "computers",
    subcategory: "Ordinateurs de bureau",
    brand: "Acer",
    tags: ["bureau", "desktop", "ordinateur fixe", "acer", "windows"],
    image: "./IMG/Ordinateur Core i3/1.jpg",
    details:["D'occasion","Noir","acer","250GO","4GO","3.10Ghz"],
    desc:"Ensembles complets Lenovo, HP ou Acer en desktop\n" +
".Core i3\n" +
"Processeur 3.10ghz\n" +
"Mémoire RAM 4go\n"+
" Disque 250Go\n"+
"Écran (19)\n"+
" DVDRW - Option Wifi\n"+
"Prêt a l'emploi: Windows 10 pro, office, antivirus, adobe etc.\n"+
"Tous nos produits sont garantis."

  },
   {
    id: "p-30",
    name: "ORDINATEUR Dell COMPLET",
    price: 35000,
    stock: "En stock",
    category: "computers",
    subcategory: "Ordinateurs de bureau",
    brand: "Dell",
    tags: ["bureau", "desktop", "ordinateur fixe", "dell", "windows"],
    image: "./IMG/ORDINATEUR COMPLET/1.jpg",
    details:["Réconditionné","Noir","dell","80GO","4GO","2.6Ghz"],
    desc:"Ordinateurs complets en HP, Dell et LENOVO, selon stock\n" +
"Pentium DUAL CORE 2,6ghz à 3ghz ,\n" +
"4 go de mémoire ram , \n" +
"disque dur 80go disponible aussi en160 ou 250 go\n"+
"écran 17 pouces \n"+
"Wifi en option\n"+
"Machines idéales pour : \n"+
"Transfert d'argent \n"+
"Multiservices \n"+
"Tous travaux de bureau et d'internet \n"+
"Tous nos produits sont garantis"
  },
    {
    id: "p-32",
    name: "Portable Dell Core I7",
    price: 125000,
    stock: "En stock",
    category: "computers",
    subcategory: "Laptops",
    brand: "Dell",
    tags: ["portable", "laptop", "dell", "windows"," core i7",],
    image: "./IMG/Portable Dell Core I7/1.jpg",
    details:["D'occasion","Noir","dell","500Go","8GO","CORE I7"],
    desc:"Je vends mon DELL E6510 avec les caractéritiques principales: \n" +
" Processeur Intel Core i7-3.33ghz\n" +
" RAM 8 Go extensible à 16 go \n" +
"Disque dur 500Go extensible à 1 téra \n"+
"Ecran 15.6 pouces \n"+
"DVDRW - Webcam \n"+
"Gigabit Ethernet HDMI Port pour TV\n"+
"Bluetooth USB 2.0,\n"+
"Windows 10 pro, office, antivirus, adobe etc.\n"+
"Tous nos produits sont garantis!"

  },
  {
    id: "p-34",
    name: "ORDINATEUR Dell Core2.250go.19.Ordinateur Complet",
    price: 40000,
    stock: "En stock",
    category: "computers",
    subcategory: "Ordinateurs de bureau",
    brand: "Dell",
    tags: ["bureau", "desktop", "ordinateur fixe", "dell", "windows"],
    image: "./IMG/Core2.250go.19.Ordinateur Complet/2.jpg",
    details:["D'occasion","Noir","dell","250GO","4GO","Core 2 duo"],
    desc:"Nous vendons des ordinateurs complets avec \n" +
"écran 19 en Dell, Lenovo et HP selon stock :\n" +
"intel pentium ou Core 2 duo,\n" +
"2.60 à 3.10 ghz,\n"+
"2 à 4 go de mémoire Ram,\n"+
"disque dur 160 à 250 go \n"+
"Wifi en option\n"+
"Windows , Office, Antivirus etc...prêt à l'emploi\n"+
"Machines idéales pour : \n"+
"Transfert d'argent \n"+
"Multiservices \n"+
"Tous travaux de bureau et d'internet \n"+
"Tous nos produits sont garantis"
  },

// nouveaux produits ajoutés

  {
        id: "p-53",
        name: "ALL IN ONE 27 POUCES TACTILE I7 12ème",
        price: 850000,
        stock: "En stock",
        category: "computers",
        subcategory: "Ordinateurs de bureau",
        brand: "HP",
        tags: ["desktop", "hp", "windows", "all-in-one", "tactile", "i7", "12ème", "27 pouces", "32go", "1tera ssd"],
        image: "./IMG/ALL IN ONE 27 POUCES TACTILE I7 12ème/1.jpg",
        details: [
            "Neuf",
            "Noir",
            "HP",
        ],
        desc: "ALL IN ONE 27 POUCES TACTILE I7 12ème\n " +
            "Processeur: Intel® Core™ i7-1255U (up to 4.7 GHz with Intel® Turbo Boost Technology, 12 MB L3 cache, 10 cores, 12 threads) 1 2\n" +
            "Mémoire 16 à 32 GO\n" +
            "Disque dur: 1tera SSD\n" +
            "Ecran 27 pouces Tactile\n",
    },
 {
        id: "p-55",
        name: "ALL IN ONE.Core I5.24 Tactile",
        price: 600000,
        stock: "En stock",
        category: "computers",
        subcategory: "Ordinateurs de bureau",
        brand: "HP",
        tags: ["desktop", "hp", "windows", "all-in-one", "tactile", "i5", "24 pouces", "16go", "512 ssd"],
        image: "./IMG/ALL IN ONE.Core I524Tactile/1.jpg",
        details: [
            "Neuf",
            "Noir/blanc",
            "HP",
            "1000 go SATA ou 512 go SSD",
            "16 go de RAM",
            "Core i5 de 11e à 13ème génération",

        ],
        desc: "ALL IN ONE.Core I5.24 Tactile avec les caractéristiques principales;\n " +
            "processeur core i5 11 ème à 13 ème génération\n" +
            "Mémoire vive (RAM) 16 GO EXTENSIBLE 32 GO\n" +
            "Disque dur 1000GO SATA OU 512 GO SSD\n" +
            "Ecran tactile de 24 pouces . Windows 10 OU 11 PROFESSIONNEL 64 BITS+office .\n" +
            "Pour toutes autres informations contactez-moi si vous le souhaitez\n",
   
          },

  {
        id: "p-57",
        name: "HP core 2 duo + 19 pouces",
        price: 35000,
        stock: "En stock",
        category: "computers",
        subcategory: "Ordinateurs de bureau",
        brand: "HP",
        tags: ["hp", "windows", "elitebook", "i7", "16go", "512ssd", "14 pouces", "portable"],
        image: "./IMG/HP core 2 duo + 19 pouces/1.jfif",
        details: [
            "D'Occasion",
            "Gris Noir",
            "HP",
            "160",
            "2 go",
            "2.2core2 duo",
        ],
        desc: "Nous vendons des ordinateurs complets en LENOVO, Dell et HP selon le stock : \n " +
            "Pentium Core 2 duo 2,6ghz à 3ghz , 2go de mémoire ram, 160 go de disque dur et écran 19 pouces\n" +
            "Disponibles aussi avec 4go de mémoire et 250Go de disque pour un petit supplément.\n" +
            "Machines puissantes idéales pour transfert d'argent, multiservices et tous travaux de bureau et d'internet .D\n" +
            "TOUS NOS PRODUITS SONT GARANTIS.\n",
            
    },
     {
        id: "p-59",
       name: "HP Core I5+19 NEUF",
        price: 250000,
        stock: "En stock",
        category: "computers",
        subcategory: "Ordinateurs de bureau",
        brand: "HP",
       tags: ["hp", "windows", "core i5", "8go", "256ssd", "19 pouces", "desktop"],
        image: "./IMG/HP Core I5+19 NEUF/2.jfif",
        details: [
            "Neuf",
            "Noir",
            "HP",
            "500",
            "8go",
            "3.4 core i5",
        ],
        desc: "Nous vendons Hp pro 6300 microtower coreI5 avec écran 19 pouces \n " +
            "Core i5 3570 ou 3470: 3.40ghz.à 3,8ghz. Mémoire 8 go extensible à 16go.\n" +
            "Disque dur 500 go. Disponible aussi avec 1000go . Graveur dvd .\n" +
            "Windows 10 professionnel 64 bits -office-antivirus et tous les utilitaires( acrobat reader etc,,,) \n" +
            "Prêt à l'emploi et garanti. \n",
            
    },
    

 {
        id: "p-61",
        name: "HP Core I7 neuf + 19 pouces",
        price: 300000,
        stock: "En stock",
        category: "computers",
        subcategory: "Ordinateurs de bureau",
        brand: "HP",
        tags: ["hp", "windows", "core i7", "8go", "512ssd", "19 pouces", "desktop"],
        image: "./IMG/HP Core I7 neuf + 19/2.jfif",
        details: [
            "Neuf",
            "Noir",
            "HP",
            "1000",
            "8go",
            "3.4 core i7",
        ],
        desc: "Nous vendons des machines fixes Hp pro 6300 microtower coreI7 avec écran 19 pouces.  \n " +
            ". Core i7 3770: 3.40ghz.à 3,8ghz. Mémoire 8 go extensible à 16go. \n" +
            " Disque dur 1000 go. Graveur dvd .Windows 10 professionnel 64 bits -office-antivirus et tous les utilitaires( acrobat reader etc,,,)\n" +
            "Prêt à l'emploi et garanti. \n",
    },
    {
        id: "p-1",
        name: "Desktop Pro 14\" i7/16Go/1To",// A revoir
        price: 790000,
        stock: "En stock",
        category: "computers",
        subcategory: "Ordinateurs de bureau",
        brand: "HP",
        tags: ["desktop", "lenovo", "windows"],
        image: "./images/HP/hp3.jpg",
        details: [
            "Réconditionné",
            "Noir",
            "HP",
            "500 Go ET/OU 256 SSD",
             "08 Go EXTENSIBLE à 16 GO",
            "Intel Core i7 de 7e génération",
            " 22 à 24 Pouces",
            "longue durée jusqu'à 10 heures",
        ],
        desc: "ENSEMBLE ORDINATEUR COMPLET CORE I7 7 ème génération\" " +
            "DISPONIBLE EN HP PRODESK 400 G4 SSF.\"" +
            " AVEC UNE MÉMOIRE DE 8GO EXTENSIBLE à 16GO, \"" +
            "DISQUE DUR 500 GO ET/OU SSD 256 GO. ECRAN 22 à 24 POUCES\n\"" +
            "A PARTIR DU PRIX INDIQUE",
    },
    {
        id: "p-3",
        name: "Core I5 et I7.Ram 8GO\" Ecran 19 à 24\"+wifi",// A revoir
        price: 50000,
        stock: "En stock",
        category: "computers",
        subcategory: "Ordinateurs de bureau",
        brand: "HP",
        tags: ["desktop", "hp", "windows", "all-in-one", "écran", "bureau", "portable"],
        image: "./images/HP/hp4.webp",
        details: [
            "Réconditionné",
            "Noir",
            "HP",
            "Stockage 250 à 500 Go SATA OU 128 à 256 SSD",
            "04 Go de RAM EXTENSIBLE à 16 GO",
            "Processeur Intel i5 ou i7(de la 2 -ème à la 8 -ème génération)",
        ],
        desc: "Ordinateurs complets avec écran 19 à 24\" disponibles Lenovo, HP et DELL selon stock\n" +
            "Core i5 ou i7(de la 2 -ème à la 8 -ème génération)\n " +
            "Mémoire Ram de 4 go extensible à 8 ou 16 go\n" +
            "Disque dur 250 go SATA extensible à 500go ou SSD 128 à 256 Go.\"" +
            "En Option :Wifi, Carte Graphique de 2 à 4 go\n" +
            "Windows 10 ou 11 Professionnel 64 bits, Office 2019 , Antivirus etc...  \"" +
            "prêt à l'emploi. Machines idéales pour tous travaux de bureau et d'internet ou de montage videos\n\"" +
            "Tous nos produits sont garantis",
    },
    {
        id: "p-5",
        name: "CORE I3 ,I5,I7 \" AVEC ECRAN 19 à 22 pouces",
        price: 45000,
        stock: "En stock",
        category: "computers",
        subcategory: "Ordinateurs de bureau",
        brand: "HP",
        tags: ["desktop", "hp", "windows"],
        image: "./IMG/CORE I3  I5 I7 AVEC ECRAN 19 à 22 pouces/1.jpg",
        details: [
            "D'Occasion",
            " Gris Noir",
              " HP",
                "250 à 500 Go SATA OU 128 à 256 SSD",
                  " 04 Go de RAM EXTENSIBLE à 16 GO",
                    "Processeur Intel i3",
        ],
        desc: "NOUS VENDONS DES ORDINATEURS COMPLETS\n" +
            "HP/DELL/LENOVO/ACER\n" +
            "PROCESSEUR: CORE I3 I5 I7\n" +
            "RAM: 4 EXTENSIBLE à 16 GO\n" +
            "DISQUE DUR: 250 à 500 GO SATA OU 128 à 256 SSD\n" +
            "ÉCRANS 19 POUCES à 24 POUCES\n" +
            "A PARTIR DU PRIX INDIQUE",
    },
    {
        id: "p-7",
        name: "ALL IN ONE 27 POUCES TACTILE CORE I7 13EME.32 GO.1TERA SSD",
        price: 900000,
        stock: "En stock",
        category: "computers",
        subcategory: "Ordinateurs de bureau",
        brand: "HP",
        tags: ["desktop", "hp", "windows"],
        image: "./IMG/ALL IN ONE 27 POUCES TACTILE CORE I7 13EME 32 GO 1TERA SSD/1.jpg",
        details: [
            "Neuf",
            "Noir",
              "HP",
                  "1Téra SSD",
                   " 32 Go",
                       "Intel Core i7-13-ème",
        ],
        desc: "ALL IN ONE HP 27 POUCES TACTILE\n" +
            "CORE I7 13éme GENERATION\n" +
            "RAM A 32 GO\n" +
            "DISQUE DUR SSD 1 TERA\n" +
            "Ports\n" +
            "Arrière 1 port USB Type-C, vitesse de transfert 5 Gbit/s ; 2 ports USB Type-A, vitesse de transfert 5 Gbit/s ; 2 ports USB 2.0 Type-A; 1 prise combinée casque/microphone; 1 port RJ-45",
    },
    {
        id: "p-9",
        name: "CORE I5 AVEC 19 à 22 POUCES",
        price: 50000,
        stock: "En stock",
        category: "computers",
        subcategory: "Ordinateurs de bureau",
        brand: "HP",
        tags: ["desktop", "hp", "windows", "ssd", "core i5", "écran 19 à 22 pouces"],
        image: "./IMG/ecran/CORE I3  I5 I7 AVEC ECRAN 19 à 22 pouces/3.jpg",
        details: [
            "D'Occasion",
            "Gris Noir",
             " HP",
             "250 à 500 Go SATA OU 128 à 256 SSD",
             "04 Go de RAM EXTENSIBLE à 08 GO",
                  "Intel i5",
        ],
        desc: "CORE I5 HP ACER LENOVO DELL EN DESKTOPS OU TOURS SELON STOCK\n" +
            "RAM 4GO EXTENSIBLE A 8GO\n" +
            "DISQUES DURS DE 250 à 500 Go SATA OU 128 à 256 SSD\n" +
            "ÉCRAN 19 à 22POUCES " +
            "A PARTIR DU PRIX INDIQUE",
    },
    {
        id: "p-11",
        name: "HP ELITEBOOK 830 840 G6 I7 16Go/512SSD",
        price: 200000,
        stock: "En stock",
        category: "computers",
        subcategory: "Laptops",
        brand: "HP",
        tags: ["laptop", "hp", "windows"],
        image: "./IMG/HP ELITEBOOK 830 840 G6 I7 16Go512SSD/1.jpg",
        details: [
            "Réconditionné",
            "Gris Noir",
            "HP",
            "512 Go",
            "16 Go",
             "Intel i7",
            
        ],
        desc: "Ordinateur Portable EliteBook 830 OU 840 G6.I7\n" +
            "CORE I7 8 éme GENERATION\n" +
            "RAM 16 GO extensible à 32 Go\n" +
            "DISQUE :256SSD EXTENSIBLE A 512 GO\n" +
            "ECRAN 13.3 ou 14 POUCES FHD ou TACTILE"
    },
    {
        id: "p-13",// A revoir
        name: "HP X360 DELL TACTILE",
        price: 75000,
        stock: "En stock",
        category: "computers",
        subcategory: "Laptops",
        brand: "HP",
        tags: ["laptop", "hp", "windows"],
         image: "./IMG//HP X360 DELL TACTILE/1.jpg",
        details: [       
            "Réconditionné",
            "Rouge, NOir, Jaune, Grise, Bleu.....",
                 "HP",
                 " 128 SSD",
                   " 4 Go",
                    " Intel",
        ],
        desc: "Hp Probook x36011.6pouces G3 et Dell 3190. Disque dur 128 giga ssd.\n" +
            "Mémoire Ram 4giga. Ecran 11.6 Pouces convertible x360. Dell 3190 disponible avec 8go 256 ssd\n" +
            "Port type C,2usb, Rj45, support carte mémoire,hdmi,2port usb...\n" +
            "Tablette avec écran tactile en même temps très léger pour étudiants et professionnels",
    },
    {
        id: "p-15",
        name: "HP ELITEBOOK 840G6 I7",
        price: 200000,
        stock: "En stock",
        category: "computers",
        subcategory: "Laptops",
        brand: "HP",
        tags: ["laptop", "hp", "windows"," elitebook", "i7", "16go", "512ssd", "14 pouces", "portable"],
        image: "./IMG/HP ELITEBOOK 840G6 I7/3.jfif",
        details: [
            "Reconditionné",
            "Gris, Noir",
            "HP",
             "512 SSD",
            "16 Go",
            "Intel i7"
        ],
        desc: "Ordinateur Portable EliteBook 840 G6 I7\n" +
            "CORE I7 8émE GENERATION\n" +
            "RAM 16GO\n" +
            "DISQUE 512GO SSD\n" +
            "ECRAN 14 POUCES\n" +
            "CLAVIER RETRO ECLAIRE",
    },
    {
        id: "p-17",
        name: "CORE I3 AVEC ECRAN 19 à 22 POUCES",
        price: 45000,
        stock: "En stock",
        category: "computers",
        subcategory: "Laptops",
        brand: "HP",
        tags: ["laptop", "hp", "windows"],
        image: "./IMG/CORE I3 AVEC ECRAN 19 à 22 POUCES/1.jpg",
        details: [
            "Processeur Intel i3",
            "RAM 4 Go",
            "Stockage 250GO SATA ou 128 GO SSD",
            "Marque HP",
            "Etat d'occasion",
            "Couleur : Gris, Noir"
        ],
        desc: "NOUS VENDONS DES CORE I3 HP EN TOUR OU DESKTOPS\n" +
            "SELON STOCK DISPONIBLES + ÉCRAN 19 POUCES.\n" +
            "RAM 4GO\n" +
            "DISQUE DUR 250 GO SATA OU 128 GO SSD\n" +
            "ÉCRANS 19 à 22 POUCES.\n" +
            "A PARTIR DU PRIX INDIQUE",
    },
    {
        id: "p-19",
        name: "Ordinateur Core i5 ou I7 Ecran 19 à 22 pouces",
        price: 50000,
        stock: "En stock",
        category: "computers",
        subcategory: "Ordinateurs de bureau",
        brand: "HP",
        tags: ["laptop", "hp", "windows"],
        image: "./IMG/Ordinateur Core i5 ou I7 Ecran 19 à 22 pouces/1.jfif",
        details: [
           
         
            "D'occasion",
            "Noir",
            " HP",
               "250GO",
                 "RAM 4 Go extensible à 8 ou 16go",
                  "Intel Core i5 ou I7 de 2 ème à la 8 ème génération"
          

        ],
        desc: "Ordinateur Core i5 ou I7 Ecran 19 à 22 pouces\n" +
            "DISPONIBLES EN HP DELL LENOVO ACER\n" +
            "PROCESSEUR Core i5 ou I7 de 2 ème à la 8 ème génération\n" +
            "Mémoire Ram 4 extensible à 8 ou 16go\n" +
            "Disque dur de 250 à 500 go ou SSD128 à 256 go. Wifi en option .\n" +
            "Windows 10 ou 11 Pro, Office, Antivirus etc... prêt à l'emploi.\n" +
            "Machines puissantes idéales pour transfert d'argent, multiservices et tous travaux de bureau et d'internet.\n" +
            "Tout nos produits sont garantis\n" +
            "A PARTIR DU PRIX INDIQUE",
    },
    {
        id: "p-21",
        name: "ALL IN ONE HP NEUF 23.8\" I3 12éme",
        price: 450000,
        stock: "En stock",
        category: "computers",
        subcategory: "Ordinateurs de bureau",
        brand: "HP",
        tags: ["desktop", "hp", "windows", "all-in-one", "i3", "12ème", "23.8 pouces", "8go", "256 ssd"],
        image: "./IMG/ALL IN ONE HP NEUF 23.8 I3 12éme/1.jpg",
        details: [
            "Neuf",
            "Noir",
             " HP",
             " 256GO",
              " 8 Go",
                   " Intel Core i3",
        ],
        desc: "Hp proOne ProOne 240 23.8 pouces G9 All in one\n" +
            "core i3 12éme gen /RAM 8Go extensible à 16 go, DISQUE DUR 256Go\n" +
            "SSD extensible à 512 go ECRAN 23.8POUCES",
    },
    {
        id: "p-23",
        name: "Hp Probook 650 G3.i5 .8go.SSD 256go.Ecran 15.6 \"TACTILE.",
        price: 125000,
        stock: "En stock",
        category: "computers",
        subcategory: "Laptops",
        brand: "HP",
        tags: ["laptop", "hp", "windows"," probook", "i5", "8go", "256ssd", "15.6 pouces", "portable"],
        image: "./IMG/Hp Probook 650 G3.i5 .8go.SSD 256go.Ecran 15.6 TACTILE/2.jfif",
        details: [
            "HP",
            "Réconditionné",
            "Noir",
             "256GO",
              "8Go",
            "Intel Core i5",

        ],
        desc: "HP Probook 650 G3 Core i5 7 eme.8go.SSD 256go..Ecran 15.6 \"TACTILE.\n" +
            "Pavé numérique\n" +
            "Processeur : Intel Core i5 7 -ème Génération. .Vitesse de 2.5 à 3.5 GHz\n" +
            "Mémoire Vive : 8Go - DDR4/ A 16GO\n" +
            "Disque stockage : 256Go SSD A 512SSD\n" +
            "Carte graphique : Intel Graphics HD 520\n" +
            "Carte son : Oui - Enceintes + microphone\n" +
            "Réseau et Wifi : Intel Ethernet Connection I219-V (10/100/1000/2500/5000MBit/s), Intel Dual Band Wireless-AC 7265 (a/b/g/h/n = Wi-Fi 4/ac = Wi-Fi 5), Bluetooth 4.2\n" +
            "Webcam : Oui\n" +
            "Pavé numérique : Oui\n" +
            "Clavier avec pavé numérique\n" +
            "Ecran : 15.6poucesTACTILE 16:9, 1920 x 1080 pixel\n" +
            "Ports de connexion\n" +
            "3 USB 3.0 / 3.1 Gen1, 1 VGA, 1 DisplayPort, 1 Encoche de Sécurité Kensington, 1 Port Série, 1 Port pour Station d'accueil, Connectique audio: combo audio, Lecteur de cartes mémoires: SD, 1 Lecteur de cartes à puce, 1 Lecteur d'empreintes digitales, TPM 2.0\n" +
            "A PARTIR DU PRIX INDIQUE",
    },
    {
        id: "p-25",
        name: "HP ELITEBOOK 840 G3 I7 TACTILE",
        price: 160000,
        stock: "En stock",
        category: "computers",
        subcategory: "Laptops",
        brand: "HP",
        tags: ["laptop", "hp", "windows"," elitebook", "i7", "8go", "256ssd", "14 pouces", "portable"],
        image: "./IMG/PROMO 🔥🔥 HP ELITEBOOK 840 G3 I7 14'' TACTILE/1.jfif",
        details: [       
            "Reconditionné",
            "Gris",
            " HP",
            " 256 SSD",
            " 08 Go",
            " Intel i7",
        ],
        desc: "ORDINATEUR PORTABLE HP ELITEBOOK 840 G3 CORE I7\n" +
            "6éme GENERATION\n" +
            "RAM 8GO EXTENSIBLE A 16 GO\n" +
            "DISQUE DUR 256 SSD EXTENSIBLE A 512 GO\n" +
            "ECRAN TACTILE 14 POUCES\n" +
            "Windows 10 Pro 64Bit; Comprend 2 ports USB 3.1, USB Type-C, Display\n" +
            "A PARTIR DU PRIX INDIQUE",
    },
    {
        id: "p-27",
        name: "ORDINATEURS PORTABLE HP ELITEBOOK 840 G3 (PROMO🔥🔥🔥)",
        price: 125000,
        stock: "En stock",
        category: "computers",
        subcategory: "Laptops",
        brand: "HP",
        tags: ["laptop", "hp", "windows"," elitebook", "i5", "8go", "256ssd", "14 pouces", "portable"],
        image: "./IMG/ORDINATEURS PORTABLE HP ELITEBOOK 840 G3 (PROMO🔥🔥🔥)/4.jfif",
        details: [
            "Réconditionné",
            "Gris",
            "HP",
             "256 SSD",
              "08 Go",
            "Intel i5-6th Gen",

        ],
        desc: "SPÉCIAL PROMO ORDINATEURS PORTABLE 🔥🔥🔥🔥🔥\n" +
            "ORDINATEUR PORTABLE HP ELITEBOOK 840 G3\n\n" +
            "CORE I5 6éme Génération\n" +
            "RAM 8GO à 16GO\n" +
            "DISQUE DUR SSD 256go à 512GO OU PLUS\n" +
            "ÉCRAN 14 POUCES\n" +
            "CLAVIER RETRO ÉCLAIRE\n" +
            "A PARTIR DU PRIX INDIQUE",
    },
    {
        id: "p-29",
        name: "HP ELITEBOOK.840G8.I5",
        price: 270000,
        stock: "En stock",
        category: "computers",
        subcategory: "Laptops",
        brand: "HP",
        tags: ["laptop", "hp", "windows"," elitebook", "i5", "8go", "256ssd", "14 pouces", "portable"],
        image: "./IMG/HP ELITEBOOK.840G8.I5/2.jpg",
        details: [
            " Reconditionné",
            " Gris",
            " HP",
            " 256 SSD",
            " 08 Go",
            " Intel i5",
        ],
        desc: "HP ELITEBOOK 840 G8\n" +
            "Processeur Intel Core i5-1135G7 (Quad-Core 0.9 GHz - 2.4 GHz / 4.2 GHz Turbo - 8 Threads - Cache 8 Mo)\n" +
            "8 Go de mémoire DDR4 extensible à 16 Go\n" +
            "Disque dur 256ssd extensible à 512 go. Ecran de 14\" avec résolution Full HD (1920 x 1080)\n" +
            "CLAVIER RETRO ÉCLAIRE",
    },
    {
        id: "p-31",
        name: "GAMER HP ZBOOK 14U G6 I5",
        price: 250000,
        stock: "En stock",
        category: "computers",
        subcategory: "Laptops",
        brand: "HP",
        tags: ["laptop", "hp", "windows"," zbook", "i5", "16go", "512ssd", "14 pouces", "portable"],
        image: "./IMG/GAMER HP ZBOOK 14U G6 I5/1.jpg",
        details: [
            "Reconditionné",
            "Gris",
             "HP",
            " 512 SSD",
            " 16Go",
            " Intel i5",
        ],
        desc: "Ordinateur Portable GAMER HP ZBOOK 14U G6\n" +
            "CORE I5 8émE GENERATION\n" +
            "RAM : 16 GO EXTENSIBLE A 32GO\n" +
            "DISQUE : 512 GO SSD M2\n" +
            "ECRAN 14 POUCES\n" +
            "CARTE GRAPHIQUE DE 4 GO dédié GDDR5",
    },
    {
        id: "p-33",
        name: "HP Core I5+19 NEUF",
        price: 250000,
        stock: "En stock",
        category: "computers",
        subcategory: "Laptops",
        brand: "HP",
        tags: ["laptop", "hp", "windows"],
        image: "./IMG/HP Core I5+19 NEUF/1.jfif",
        details: [
            " Neuf",
            " Noir",
            " HP",
            " 512 SSD",
            " 8Go",
            " Intel i5",
        ],
        desc: "Nous vendons Hp pro 6300 microtower coreI5 avec écran 19 pouces.\n" +
            "Core i5 3570 ou 3470: 3.40ghz.à 3,8ghz. Mémoire 8 go extensible à 16go\n" +
            "Disque dur 500 go. Disponible aussi avec 1000go\n" +
            "Windows 10 professionnel 64 bits -office-antivirus et tous les utilitaires( acrobat reader etc,,,)\n" +
            "Prêt à l'emploi et garanti\n" +
            "Pour toutes autres informations contactez moi si vous le souhaitez",
    },
    {
        id: "p-35",
        name: "HP Core I7+19 NEUF",
        price: 300000,
        stock: "En stock",
        category: "computers",
        subcategory: "Laptops",
        brand: "HP",
        tags: ["laptop", "hp", "windows"],
        image: "./IMG/HP Core I7 neuf + 19/1.jfif",
        details: [
            " Neuf",
            "Noir",
            " HP",
            " 1Téra",
            " 8Go",
            " Intel i7"
        ],
        desc: "Nous vendons Hp pro 6300 microtower coreI5 avec écran 19 pouces.\n" +
            "Core i5 3570 ou 3470: 3.40ghz.à 3,8ghz. Mémoire 8 go extensible à 16go\n" +
            "Disque dur 500 go. Disponible aussi avec 1000go\n" +
            "Windows 10 professionnel 64 bits -office-antivirus et tous les utilitaires( acrobat reader etc,,,)\n" +
            "Prêt à l'emploi et garanti\n" +
            "Pour toutes autres informations contactez moi si vous le souhaitez",
    },
    {
        id: "p-37",
        name: "Core 2.dual.+19",
        price: 40000,
        stock: "En stock",
        category: "computers",
        subcategory: "Ordinateurs de bureau",
        brand: "HP",
        tags: ["Ordinateur de bureau", "hp", "windows"," core 2 duo", "4go", "250go", "19 pouces", "desktop"],
        image: "./IMG/Core 2.dual.+19/1.jpg",
        details: [
            "D'Occasion",
            "Noir",
            " HP",
            " 250Go",
            " 4Go",
            " Core 2.dual.",
        ],
        desc: "Nous vendons des ordinateurs complets avec écran 19\" en HP.\n" +
            "dual core et core 2 2.80 à 3.20 ghz, 4 go de mémoire Ram , disque dur 250 go\n" +
            "Wifi en option . Windows 10 Pro, Office, Antivirus etc... prêt à l'emploi\n" +
            "Windows 10 professionnel 64 bits -office-antivirus et tous les utilitaires( acrobat reader etc,,,)\n" +
            "Machines puissantes idéales pour transfert d'argent, multi services et tous travaux de bureau et d'internet. \n" +
            "Tous nos produits sont garantis.",
    },
    {
        id: "p-39",
        name: "Ordinateur Core I5",
        price: 50000,
        stock: "En stock",
        category: "computers",
        subcategory: "Ordinateurs de bureau",
        brand: "HP",
        tags: ["Ordinateur de bureau", "hp", "windows"," core i5", "4go", "500go", "19 pouces", "desktop"],
        image: "./IMG/Ordinateur Core I5/1.jfif",
        details: [
            "D'occasion",
            "Noir",
            "HP",
            "500Go",
            "4Go",
            "3.2 Core i5",
        ],
        desc: "Nous vendons des ordinateurs complets avec écran 19\" en Lenovo et Acer selon stock\n" +
            "Core i5 3.20 ghz, 4 go de mémoire Ram extensible à 8go , disque dur 500 go\n" +
            "Wifi en option . Windows 10 Pro, Office, Antivirus etc... prêt à l'emploi\n" +
            "Wifi en option . Windows 10 Pro, Office, Antivirus etc... prêt à l'emploi.\n" +
            "Machines puissantes idéales pour transfère d'argent, multiservices et tous travaux de bureau et d'internet\n" +
            "Tous nos produits sont garantis.",
    },
    {
        id: "p-41",
        name: "HP Core I3 ordinateur complet",
        price: 45000,
        stock: "En stock",
        category: "computers",
        subcategory: "Ordinateurs de bureau",
        brand: "HP",
        tags: ["Ordinateur de bureau", "hp", "windows"," core i3", "4go", "250go", "19 pouces", "desktop"],
        image: "./IMG/HP Core I3 ordinateur complet/1.jpg",
        details: [
            "D'occasion",
            "Noir",
            "HP",
            "250Go",
            "4Go",
            "Core i3",
        ],
        desc: "Ensembles complets HP en desktop.Core i3 -/Mémoire RAM 4go/\n" +
            "Disque 250Go/Écran (19\") . DVDRW - Option Wifi\n" +
            "Prêt a l'emploi: Windows 10 pro, office, antivirus, adobe etc.\n" +
            "Tous nos produits sont garantis.",
    },
    {
        id: "p-102",
        name: "GAMER +24 POUCES.16go.2go graphique\n",
        price: 200000,
        stock: "En stock",
        category: "computers",
        subcategory: "Ordinateurs de bureau",
        brand: "Dell",
        tags: ["desktop", "dell", "windows"],
        image: "./IMG/GAMER +24 POUCES.16go.2go graphique/1.jpg",
        details: [
            "Réconditionné",
            "Noir",
            "Dell",
            "500Go",
            "16Go",
            "Intel XEON"
        ],
        desc: "DIPONIBLE EN Dell ET HP Z400,Z420\n" +
            "Processeur :Intel XEON Mémoire Vive : 16Go\n" +
            "Disque dur : (1 x 500 Go) ou (1xssd 256go).\n" +
            "Carte graphique Nvidia (2 go dedié) graveur DVDRW.+ Ecran 24 pouces",
    },
    {
        id: "p-104",
        name: "Dell Wyse 5470 ALL IN ONE.24 POUCES FHD",
        price: 90000,
        stock: "En stock",
        category: "computers",
        subcategory: "Ordinateurs de bureau",
        brand: "Dell",
        tags: ["All in one", "desktop", "dell", "windows"],
        image: "./IMG/Dell Wyse 5470 ALL IN ONE.24 POUCES FHD/3" +
            ".jpg",
        details:["D'occasion","NOIR","dell","128 SSD","8GO","intel J4005",],
        desc:"Modèle : Dell Wyse 5470 ALL IN ONE\n" +
            "Ecran de 24 Pouces Full HD Resolution 1920 x 1080\n" +
            "Processeur : intel J4005 CPU de 2.0 à 2.7 Ghz (supérieur au Core I3 de 3 ème génération )\n" +
            "Mémoire RAM : 08 Go extensible à 16Go\n"+
            "Disque dur : SSD M2 de 128 go extensible 256 Go\n"+
            "Système d'exploitation : Windows 10 ou 11 Professionnel 64\n" +
            "Microsoft Office 2019\n"+
            "Tous les utilitaires Acrobat etc\n" +
            "Clavier + souris\n" +
            "A PARTIR DU PRIX INDIQUE"
    },
    {
        id: "p-106",
        name: "Ordinateur Core i3",
        price: 45000,
        stock: "En stock",
        category: "computers",
        subcategory: "Ordinateurs de bureau",
        brand: "Acer",
        tags: ["desktop", "acer", "windows"],
        image: "./IMG/Ordinateur Core i3/1.jpg",
        details:["D'occasion","NOIR","acer","250 Go","4GO","Core i3",],
        desc:"Ensembles complets Lenovo, HP ou Acer en desktop\n" +
            "Core i3 - Processeur 3.10ghz/Mémoire RAM 4go/ Disque 250Go/Écran (19\")\n" +
            "DVDRW - Option Wifi\n" +
            "Prêt a l'emploi: Windows 10 pro, office, antivirus, adobe etc\n"+
            "Tous nos produits sont garantis."
    },


  // Infrastructure - 1 produit
  {
    id: "p-43",
    name: "Modem Router TP-Link",
    price: 18000,
    stock: "En stock",
    category: "infrastructure",
    subcategory: "Routeurs",
    brand: "TP-Link",
    tags: ["modem", "router", "access point"],
            image: "./IMG/Modem Router et Access point/1.jfif",

      details:["Neuf", "Blanc", "TP-Link"],
    desc: "TP LINK 150Mbps wireless N ADSL2+ Modem Router\n" +
        "APARTIR DU PRIX INDIQUER CI DESSUS",
  },
  // Peripherals - 28 produits
  {
    id: "p-36",
    name: "HP COLOR LASER JET MFP 277",
    price: 150000,
    stock: "En stock",
    category: "peripherals",
    subcategory: "Imprimantes",
    brand: "HP",
    tags: ["laser", "HP", "multifonction", "couleur", "imprimante"],
    image: "./IMG/HP COLOR LASER JET MFP 277/1.jpg",
    desc: "Nous vendons des imprimantes avec les spécifications suivantes :\n"
         + "Marque HP séries Laserjet PRO M 277  n,\n"
         + "dn ou dw Couleur Blanche\n"
         + "out-en-un Laser couleur selon stock\n"
         + "Impression, copie, scan et télécopie + réseau et recto-verso",

    details: [
    
      "Réconditionné", 
        "Blanc",
        "HP"
    ]
  },
   {
    id: "p-38",
    name: "PHOTOCOPIEURS CANON RICOH XEROX",
    price: 450000,
    stock: "En stock",
    category: "peripherals",
    subcategory: "Imprimantes",
    brand: "Canon",
    tags: ["laser", "canon", "multifonction", "couleur", "imprimante", "photocopieur","ricoh","xerox"],
    image: "./IMG/PHOTOCOPIEURS CANON RICOH XEROX/1.webp",
    desc: "PHOTOCOPIEURS MULTIFONCTIONS LASER NOIR\n"
         + "CANON IRC ADAVANCE 400 NOIR ET BLANC,\n"
         + "dn ou dw Couleur Blanche\n"
         + "SCANNER, COPIEUR, IMPRIMANTE (RECTO-VERSO)\n"
         + "1°) CANON IRC ADAVANCE 5030 COULEUR ET NB.VITESSE DE 30PPM.SCANNER, COPIEUR, IMPRIMANTE A3, A4(RECTO-VERSO)\n"
           + "2°) CANON IRC ADAVANCE 5250 COULEUR ET NB.VITESSE DE 50PPM.SCANNER, COPIEUR, IMPRIMANTE A3, A4(RECTO-VERSO).\n"
             + "3°) RICOH MPC 3002, 3003: COULEUR ET NB.VITESSE DE 30PPM.SCANNER, COPIEUR, IMPRIMANTE A3, A4(RECTO-VERSO)\n"
               + "4°) RICOH MPC 3502, 3503: COULEUR ET NB.VITESSE DE 35PPM.SCANNER, COPIEUR, IMPRIMANTE A3, A4(RECTO-VERSO)\n"
                 + "5°) RICOH MPC 4502: COULEUR ET NB.VITESSE DE 45PPM.SCANNER, COPIEUR, IMPRIMANTE A3, A4(RECTO-VERSO)\n"
                 + "6°) XEROX WORKCENTRE 7855 COULEUR ET NB.VITESSE DE 55PPM.SCANNER, COPIEUR, IMPRIMANTE A3, A4(RECTO-VERSO).\n",


    details: [
      "Réconditionné", 
      "Noir/Blanc",
      
    ]
  },
    {
    id: "p-40",
    name: "Imprimante laser monochrome",// a REVOIR
    price: 70000,
    stock: "En stock",
    category: "peripherals",
    subcategory: "Imprimantes",
    brand: "Canon",
    tags: ["laser", "canon", "multifonction", "couleur", "imprimante", "photocopieur","ricoh","xerox"],
    image: "./IMG/Imprimante laser monochrome/1.webp",
    desc: "Vitesse d'impression (noir, A4) 40 ppm\n"
         + "Format de papier A4,\n"
         + "Recto/verso automatique\n"
         + "Écran LCD N&B\n"
         + "Vitesse d'impression 1ère page monochrome 5 s\n"
           + "Cycle d'utilisation mensuel conseillé (min.)3000 pages / mois\n"
             + "Cycle d'utilisation mensuel conseillé (max.) 10000 pages / mois\n"
               + "Résolution d'impression monochrome (Maximum) 1200 x 1200 ppp\n",


    details: [
      "Réconditionné", 
       "Blanc",
    ]
  },
  {
    id: "p-42",
    name: "ECRAN DELL DE 22 à 24 pouces AVEC POSSIBILITE HDMI",
    price: 25000,
    stock: "En stock",
    category: "peripherals",
    subcategory: "Écrans",
    brand: "Dell",
    tags: ["écran", "dell", "22 pouces", "24 pouces", "hdmi", "monitor",  "affichage",  "video",  "resolution", "bureau", "desktop",  "ordinateur fixe",  "windows"],
    image: "./IMG/ECRAN DELL DE 22 à 24 pouces  AVEC POSSIBILITE HDMI/1.webp",
    desc: "NOUS VENDONS DES ECRAN DE 22 à 24 POUCES EN DELL\n"
         + "AVEC PORT VGA ET DVI\n"
         + " POSSIBILITÉ DE LE METTRE SOUS HDMI AVEC ADAPTATEUR \n"
         + "HDMI VGA OU\n"
         + "DVI HDMI POUR UN PETIT SUPPLÉMENT\n"
           + "A PARTIR DU PRIX INDIQUE",
    details: [
      
      "Réconditionné",
      "Noir Gris",
      "Dell"
    ]
  },
 {
    id: "p-44",
    name: "CHARGEUR HP DELL LENOVO ORDINATEUR PORTABLE",
    price: 10000,
    stock: "En stock",
    category: "peripherals",
    subcategory: "Accessoires",
    brand: "Dell",
    tags: ["chargeur", "dell", "hp", "lenovo", "ordinateur portable", "accessoire",],
    image: "./IMG/CHARGEUR HP DELL LENOVO ORDINATEUR PORTABLE/3.jpg",
    desc: "NOUS VENDONS DES CHARGEURS\n"
         + " POUR TOUS TYPES ORDINATEURS PORTABLES :\n"
         + " DELL 19.5V 4.62 ORIGINAL DELL ETC...\n"
         + "DELL 19.5V 6.7 ORIGINAL DELL ETC...\n"
         + "HP 19.5V 3.33, 2.31 TETE BLEU ETC...\n"
           + " LENOVO 20V 2.5, 3.5 , 4.5A ETC...",
             
         
    details: [
      "Neuf",
      "Noir",
      "HP, Dell, Lenovo"
    ]
  },

 {
    id: "p-48",
    name: "ECRAN DELL P2422H HDMI",
    price: 150000,
    stock: "En stock",
    category: "peripherals",
    subcategory: "Écrans",
    brand: "Dell",
    tags: ["écran", "dell", "22 pouces", "24 pouces", "hdmi", "monitor",  "affichage",  "video",  "resolution", "bureau", "desktop",  "ordinateur fixe",  "windows"],
    image: "./IMG/ECRAN DELL P2422H HDMI/1.jpg",
    desc: "ECRAN DELL P2422H\n"
         + "Écran LCD à rétroéclairage LED 24\n"
         + "Full HD (1080p) 1920 x 1080 à 60 Hz\n"
         + "DisplayPort 1.2 (HDCP 1.4)\n"
         + "VGA\n"
         + "HDMI (HDCP 1.4)\n"
         + "USB 3.2 montant de génération 1\n"
           + "4 x USB 3.2 descendant de génération 1",
    details: [
      "Neuf",
      "Noir",
      "Dell",
    
    ]
  },
  {
   id: "p-50",
    name: "ONDULEUR JC TECH.MERCURY 850VA",
    price: 30000,
    stock: "En stock",
    category: "peripherals",
    subcategory: "onduleurs",
    brand: "Mercury",
    tags: ["onduleur", "ups", "jc tech", "mercury"],
    image: "./IMG/ONDEULEUR JC TECH.MERCURY 850VA/3.jfif",
    desc: "Caractéristiques techniques 850 VA\n"+
         + "MARQUES DISPONIBLES: JC TECH.MERCURY LIGHTWAVE SELON STOCK\n"+
         + "Type: interactive;\n"
         + "Puissance: 850 VA;\n"
         + "Onde de sortie: vitesse d'approximation d'une onde sinusoïdale;\n"
         + "Le temps de transfert de la batterie: 8 MS;\n"
         + "Le nombre de sortie connecteurs d'alimentation: 3 (d'eux à piles - 2);\n"
           + "Type de sortie connecteurs d'alimentation: IEC 320 C13 (l'ordinateur);\n"
         + "Entrée / Sortie\n"
         + "Entrée: 1-tension de phase;\n"
         + "Sortie: 1-tension de phase;\n"
         + "Tension d'entrée: 140 - 285;\n"
           + "Facteur de puissance: 0.6;\n"
            + "Les fonctionnalités\n"
           + "Affichage de l'information: indicateurs led;\n"
         + "Alarme sonore: oui;\n"
         + "Démarrage à froid: oui;\n"
         + "Protection contre les impulsions à haute tension: oui;\n"
         + "Filtrage de bruit: oui;\n"
         + "Protection de court-circuit: oui;\n"
         + "Protection de surcharge: oui;\n",
    details: [
      "Neuf",
      "Noir",
   
    ]
  },
  {
    id: "p-52",
    name: "ECRAN HDMI 24 POUCES",
    price: 45000,
    stock: "En stock",
    category: "peripherals",
    subcategory: "Écrans",
    brand: "Asus",
    tags: ["écran", "asus", "22 pouces", "24 pouces", "hdmi", "monitor",  "affichage",  "video",  "resolution", "bureau", "desktop",  "ordinateur fixe",  "windows"],
    image: "./IMG/ECRAN HDMI 24 POUCES/2.jpg",
    desc: "ECRAN ASUS VS247HR\n"
         + "Diagonale : 23.6 (60 cm)\n"
         + "Écran LCD à rétroéclairage LED\n"
         + "Format : 1920 x 1080 (Wide) / 16:9\n"
         + "Dalle TFT • 2 ms\n"
         + "Réglage socle : Inclinaison\n"
         + "Connectiques vidéo principales :\n"
            + "HDMI • DVI-D • VGA\n"
         + "Rétroéclairage :\n"
         + "LED (LCD LED)\n"
         + "Aspect (ratio): 16:9\n"
         + "Diagonale: 23.6 (60 cm)\n"
         + "Pas de pixel (pitch): 0.272 mm\n"

         + "Définition / Fréquence max \n"
         + "1920 x 1080 (Format Wide)\n"
         + "Temps de réponse :\n"
         + "2 ms (GTG / Gris à gris)\n"
         + "Luminosité :\n"
           + "250 cd/m² (typique)\n"
         + "Taux de contraste :\n"

         + "50 000 000 : 1 (dynamique/max)\n"
         + "Couleurs :\n"
         + "16.70 millions\n"
         + "Angles de vision H/V\n"
         + "170° / 160°\n",
    details: [
      "Réconditionné",
      "Noir",
      "Asus",
      
    ]
  },
   {
    id: "p-54",
    name: "ECRAN HP 22 POUCES Full HD HDMI",
    price: 145000,
    stock: "En stock",
    category: "peripherals",
    subcategory: "Écrans",
    brand: "HP",
    tags: ["écran", "HP", "22 pouces", "hdmi", "monitor",  "affichage",  "video",  "resolution", "bureau", "desktop",  "ordinateur fixe",  "windows"],
    image: "./IMG/ECRAN HP 22 POUCES Full HD HDMI/1.jpg",
    desc: "NOUS VENDONS DES ÉCRANS HP 22 POUCES HDMI FULL HD.\n",
    details: [
      "Neuf",
      "Noir",
      "HP",
      
    ]
  },
   {
    id: "p-58",
    name: "IMPRIMANTE LASER COULEUR HP MFP M480",
    price: 350000,
    stock: "En stock",
    category: "peripherals",
    subcategory: "Imprimantes",
    brand: "HP",
    tags: ["laser", "canon", "multifonction", "couleur", "imprimante", "photocopieur","ricoh","xerox"],
    image: "./IMG/IMPRIMANTE LASER COULEUR HP MFP M480/1.jfif",
    desc: "Technologie d'impression:Laser\n"
         + "Impression:Impression couleur,\n"
         + "Résolution maximale:600 x 600 DPI\n"
         + "Vitesse d'impression (couleur, qualité normale, A4/US Letter):29 ppm.\n"
         + "Copie:Copie couleur, Résolution maximale de copie:600 x 600 DPI.\n"
           + "Numérisation:Numérisation couleur, Résolution optique du scanner:600 x 600 DPI\n"
             + "Envoi par fax:Fax couleur\n"
             + "RImpression directe.\n"
         + "Couleur du produit:Blanc, Noir.\n"
         + "Spécifications:\n"
         + "-Système d'exploitation Windows pris en charge:Oui.\n"
           + "-Système d'exploitation MAC pris en charge:Oui.\n"
             + "-Impression directe:Oui.\n",


    details: [
      "Réconditionné", 
      "Blanc",
      
    ]
  },
     {
    id: "p-60",
    name: "Imprimante HP laser 1102",
    price: 60000,
    stock: "En stock",
    category: "peripherals",
    subcategory: "Imprimantes",
    brand: "HP",
    tags: ["laser", "canon", "multifonction", "couleur", "imprimante", "photocopieur","ricoh","xerox"],
    image: "./IMG/Imprimante HP laser 1102/1.jpg",
    desc: "IMPRIMANTE LASER 1102\n"
         + "Imprimante laser monochrome A4 - 600 x 600 ppp,\n"
         + "18 ppm - 2 Mo de RAM\n"
         + " Processeur 266 MHz \n"
          + "USB 2.0 \n"
         + " Compatible PC et Mac\n"
             + " Bac d'alimentation 150 feuilles\n",


    details: [
      "Venant", 
      "Blanc",
     
    ]
  },
     {
    id: "p-62",
    name: "UNITE CENTRALE HP DELL",
    price: 25000,
    stock: "En stock",
    category: "peripherals",
    subcategory: "Unité centrale",
    brand: "HP",
    tags: ["laser", "canon", "multifonction", "couleur", "imprimante", "photocopieur","ricoh","xerox"],
    image: "./IMG/UNITE CENTRALE HP DELL/1.jfif",
    desc: "Nous vendons des UC : \n"
         + "HP DESKTOP OU DELL TOUR (selon stock):\n"
         + "INTEL ,DUAL CORE OU CORE 2. 4 go de mémoire Ram , disque dur 250Go",

    details: [
      "Venant", 
    ]
  },
    {
    id: "p-64",
    name: "BOITE D'ALIMENTATION PC",
    price: 5000,
    stock: "En stock",
    category: "peripherals",
    subcategory: "BOITE D'ALIMENTATION PC",
    brand: "HP",
    tags: ["laser", "canon", "multifonction", "couleur", "imprimante", "photocopieur","ricoh","xerox"],
    image: "./IMG/BOITE D'ALIMENTATION PC/1.jpg",
    desc: "Vente de Boite D'alimentation modèle: \n"
         + "HP, DELL, LENOVO, IBM etc...\n"
         + "A partir du prix indiqué dessus (standard ou spécifique)",

    details: [
      "Réconditionné", 
    ]
  },
    {
        id: "p-96",
        name: "BOITE D'ALIMENTATION HX520W",
        price: 30000,
        stock: "En stock",
        category: "peripherals",
        subcategory: "BOITE D'ALIMENTATION PC",
        brand: "CORSAIR",
        tags: ["laser", "canon", "multifonction", "couleur", "imprimante", "photocopieur","ricoh","xerox"],
        image: "./IMG/BOITE D'ALIMENTATION PC/6.jpg",
        desc: "HX 520W, affiche une puissance de 480W pour le +12V réparti en 3 rails de 18A l'un.\n"
            + "La modularité est assurée par 2 prises destinées à 2 câbles PCI-Express\n"
            + "6/8 broches, suivies de 5 prises pour : 1 câble à 2 Molex, 2 câbles à 3 Molex, 2 câbles à 2 SATA.\n"
            + "Sont également fournis un adaptateur Molex vers 2 Molex,\n"
            + "pour les ventilateurs (+12V seulement) et un adaptateur Molex vers 2 Floppy.\n" +
            "\n",

        details: [
            "Réconditionné",
            "Noir"
        ]
    },
   {
    id: "p-66",
    name: "A+B SUBWOOFER YG-USB11",
    price: 25000,
    stock: "En stock",
    category: "peripherals",
    subcategory: "Accessoires",
    brand: "YG-USB11",
    tags: ["laser", "canon", "multifonction", "couleur", "imprimante", "photocopieur","ricoh","xerox"],
    image: "./IMG/A+B SUBWOOFER YG-USB11/1.jpg",
    desc: "A+B YG-USB est un centre de musique autonome,  \n"
         + " il peut être lire des fichiers depuis un lecteur flash USB,\n"
         + "depuis une carte mémoire SD et possède un tuner FM intégré il ya une télécommande aussi, "
          + "Le système 2.1 A+B 2.1,\n"
         + "YG-USB11 est un acoustique provenant de 2 enceintes satellites et d'un subwoofer "
           + " avec lecteur multimédia intégré,\n"
         + "Le système peut être connecté à un ordinateur, "
          + "un téléphone ou une autre source sonore.\n",


    details: [
      "Neuf", 
    ]
  },
   {
    id: "p-68",
    name: "Clavier et Souris sans fil",
    price: 10000,
    stock: "En stock",
    category: "peripherals",
    subcategory: "Accessoires",
    brand: "HP",
    tags: ["laser", "canon", "multifonction", "couleur", "imprimante", "photocopieur","ricoh","xerox"],
    image: "./IMG/Clavier et Souris sans fil/1.jpg",
    desc: "Je vend des Claviers et souris sans fil marque :   \n"
         + "HP, WIRELESS etc...\n"
          + "A partir du prix indiqué dessus \n",
    details: [
      "Neuf", 
    ]
  },
   {
    id: "p-70",
    name: "VIDEO PROJECTEUR EPSON",
    price: 325000,
    stock: "En stock",
    category: "peripherals",
    subcategory: "Projecteurs",
    brand: "HP",
    tags: ["laser", "canon", "multifonction", "couleur", "imprimante", "photocopieur","ricoh","xerox"],
    image: "./IMG/VIDEO PROJECTEUR EPSON/1.jpg",
    desc: " Vivez l'expérience du grand écran:    \n"
         + "Des décors aux présentations professionnelles, captez l'attention de tous.\n"
         +  "Des images lumineuses même dans des conditions de lumière ambiante.\n"
         + "Niveaux de luminosités blanche et couleur équivalents de 3 200 lumens\n"
         + "Équipement haute technologie à un prix attractif\n"
         + " Profitez de ce projecteur SVGA • Portable et rapide à installer\n"
          + "Alignement facile grâce au curseur de correction du trapèze.\n",
    details: [
      "Neuf", 
    ]
  },
  {
   id: "p-72",
    name: "HP Color LaserJet Pro MFP M283fdw",
    price: 375000,
    stock: "En stock",
    category: "peripherals",
    subcategory: "Imprimantes",
    brand: "HP",
    tags: ["laser", "canon", "multifonction", "couleur", "imprimante", "photocopieur","ricoh","xerox"],
    image: "./IMG/HP Color LaserJet Pro MFP M283fdw/1.jfif",
    desc: "HP Color LaserJet Pro M283fdw Imprimante laser couleur \n"
         + " multifonction format A4, vitesse d'impression jusqu'à 21 pages par minute,\n"
         +  "résolution d'impression de 600 x 600 dpi, impression recto/verso automatique, résolution en Scan de 1200 dpi,\n"
         + "capacité papier de 251 Feuilles, \n"
         + " connexion Gigabit Ethernet, réseau sans-fil, HP ePrint, Wi-Fi Direct.\n",
    details: [
      "Neuf", 
    ]
  },
  {
   id: "p-74",
    name: "Onduleur LW UPS 1000VA",
    price: 40000,
    stock: "En stock",
    category: "peripherals",
    subcategory: "onduleurs",
    brand: "Lightwave",
    tags: ["onduleur", "ups", "jc tech", "mercury", "lightwave"],
    image: "./IMG/Onduleur LW UPS 1000VA/1.jpg",
    desc: "Ligth Wave UPS 1000VA LCD 230V \n"+
         + "Capacité de l'alimentation de sortie 670 Watts / 1000 VA\n"+
         + "Puissance configurable max 670 Watts / 1000 VA\n"
         + "Tension nominale de sortie 230V \n"
         + "Voltage nominal en entrée 230V \n"
         + "Fréquence d'entrée 50/60 Hz +/- 3 Hz\n",
    details: [
      "Neuf",
      "Noir",
      
   
    ]
  },
  {
   id: "p-76",
    name: "CASQUE POUR GAMER",
    price: 65000,
    stock: "En stock",
    category: "peripherals",
    subcategory: "Accessoires",
    brand: "HyperX",
    tags: ["casque", "gamer", "hyperx", "audio", "headset", "pc", "ordinateur", "gaming", "jeu", "multimedia", "son", "microphone", "confort", "durable", "high performance", "surround sound", "noise cancelling", "wired headset", "over ear", "gaming accessories"],
    image: "./IMG/CASQUE POUR GAMER/1.jpg",
    desc: "HYPERX CLOUD ALPHA OU STINGER \n"+
         + "Technologie de connectivité Filaire\n"+
         + "Technologie de communication sans fil Sans-fil\n"
         + "Caractéristique spéciale Fonction microphone\n"
         + "Composants inclus HyperX Cloud Alpha\n"
          + "Technologie de connectivité Filaire\n"+
         + "Tranche d'âge (description) Adulte. Matériau Aluminium\n"
         + "Compatible avec PC, PS5, PS4, Xbox One, Xbox Series X|S et d'autres plateformes avec un port de 3,5 mm\n"
         + "Les transducteurs à chambre double HyperX génèrent un son cristallin et moins de distorsions acoustiques Niveau de pression acoustique : 98dBSPL/mW à 1kHz\n"
         + "Confort certifié par Discord et TeamSpeak\n"

          + "Cadre aluminium durable avec arceau élargi\n"
         + "Câble tressé amovible avec commandes audio en ligne\n"
          + "Microphone amovible à réduction de bruit. Impédance: 65 Ω\n"+
         + "Réponse en fréquence : 50Hz-18,000Hz\n"
         + "Le Cloud Alpha disposant d'un câble détachable,\n"
          + " il est également important de s'assurer que ce dernier est complètement\n"
          + " inséré dans l'oreillette du casque \n"+
         + "Aucune partie grise sur la prise jack ne doit être visible une fois le câble branché\n",
    details: [
    
      "Neuf",
      "Rouge Noir",
   
    ]
  },
    {
        id: "p-94",
        name: "IMPRIMANTE HP RE CONDITIONNÉE",
        price: 50000,
        stock: "En stock",
        category: "peripherals",
        subcategory: "Imprimantes",
        brand: "HP",
        tags: ["imprimante", "hp", "reconditionnée", "impression", "bureau", "pmc", "a4", "usb", "150 feuilles", "100 feuilles", "8 000 pages"],
        image: "./IMG/IMPRIMANTE HP RE CONDITIONNÉE/img.jpg",
        desc: "IMPRIMANTE hp \n"
            + "Idéale pour le bureau à domicile et les PME\n"
            + "Fonction : impression\n"
            + "Formats : A4 ; A5 ; A6 ; Enveloppes (C5, DL) ; Personnalisé\n"
            + "Port USB 2.0 haut débit\n"
            + "Cycle d'utilisation (mensuel - A4) : jusqu'à 8 000 pages\n"
            + "Capacité d'alimentation de 150 feuilles, capacité de sortie de 100 feuilles",
        details: [

            "Réconditionné",
            "Noir, Blanc",

        ]
    },
    {
        id: "p-98",
        name: "ECRAN HP DELL 19\" CARRE ET RECTANGLE\n",// A REVOIR
        price: 15000,
        stock: "En stock",
        category: "peripherals",
        subcategory: "Écrans",
        brand: "Dell",
        tags: ["écran", "dell", "19 pouces", "monitor",  "affichage",  "video",  "resolution", "bureau", "desktop",  "ordinateur fixe",  "windows"],
        image: "./IMG/ecran/ECRAN HP DELL 19 CARRE ET RECTANGLE 1/ECRAN HP DELL 19 CARRE ET RECTANGLE 2.jpg",
        desc: "NOUS VENDONS DES ECRANS 19 POUCES CARRES ET RECTANGLLES\n"
            + "DISPONIBLE EN HP LENOVO ACER DELL SELON STOCKS.",
        details: [
            "D'occasion",
            "Gris, Noir",

        ]
    },
    {
        id: "p-100",
        name: "ECRAN 19 POUCES ,20\",22\", 24 DELL ou HP",// A REVOIR
        price: 15000,
        stock: "En stock",
        category: "peripherals",
        subcategory: "Écrans",
        brand: "HP",
        tags: ["écran", "hp", "22 pouces", "24 pouces", "hdmi", "monitor",  "affichage",  "video",  "resolution", "bureau", "desktop",  "ordinateur fixe",  "windows"],
        image: "./IMG/ecran/ECRAN 19 POUCES 20 22 24 DELL ou HP/1.jpg",
        desc: "NOUS VENDONS DES ÉCRANS de 19 POUCES RECTANGLES(LARGE)\n"
            + "DISPONIBLES AUSSI EN 20\"22\" 24\" DELL OU HP SELON STOCKS\n"
            + "A PARTIR DU PRIX INDIQUE",
        details: [

            "D'occasion",
            "Noir Gris",
            "hp",
        ]
    },
    {
        id: "p-108",
        name: "Régulateur 1kva\n",
        price: 20000,
        stock: "En stock",
        category: "peripherals",
        subcategory: "Régulateurs",
        brand: "LIGHTWAVE",
        tags: ["régulateur", "stabilisateur", "lightwave", "jc tech", "mercury"],
        image: "./IMG/Régulateur 1 et 2kva/1.jfif",
        desc: "CARACTÉRISTIQUES:" +
            "Entrée: 140 ~ 260 Vac\n"
            + "Sortie: 220/110 Vac\n"
            + "Fréquence: 50/60 Hz\n"
            + "Affichage: électrique Puissance: 1000 VA\n"
            + "Délai: 3 ~ 5 secondes / 2 ~ 3 minutes\n"
            + "Type: régulateur de tension automatique\n" +
            "Régulateur automatique de tension 1KVA Light Wave\n",


        details: [
            "Neuf",
            "Noir",
            "HP, Dell, Lenovo"
        ]
    },
    {
        id: "p-110",
        name: "Régulateur 2kva\n",
        price: 20000,
        stock: "En stock",
        category: "peripherals",
        subcategory: "Régulateurs",
        brand: "LIGHTWAVE",
        tags: ["régulateur", "stabilisateur", "lightwave", "jc tech", "mercury"],
        image: "./IMG/Régulateur 1 et 2kva/2.jfif",
        desc: "CARACTÉRISTIQUES:" +
            "Entrée: 140 ~ 260 Vac\n"
            + "Sortie: 220/110 Vac\n"
            + "Fréquence: 50/60 Hz\n"
            + "Affichage: électrique Puissance: 2000 VA\n"
            + "Délai: 3 ~ 5 secondes / 2 ~ 3 minutes\n"
            + "Type: régulateur de tension automatique\n" +
            "Régulateur automatique de tension 2KVA Light Wave\n",


        details: [
            "Neuf",
            "Noir",
            "HP, Dell, Lenovo"
        ]
    },
    {
        id: "p-112",
        name: "TONER CANON CEXV 21\n",
        price: 25000,
        stock: "En stock",
        category: "peripherals",
        subcategory: "Accessoires",
        brand: "CANON",
        tags: ["toner", "canon", "imprimante", "accessoire", "photocopieur","ricoh","xerox"],
        image: "./IMG/TONER CANON CEXV 21/1.jfif",
        desc: "Fabricant:Toner Canon CEXV 21 disponibles en Noir et toutes les couleurs.\n"
            + "Référence:image RUNNER- C2550/ C 2550 I/C 2880/C2880 I/C 3080/C3080 I/C 3380/C3380 I/ C 3480/C 3480 I. IR-C 2380 I/ C2550/ C2550 I/C 2880/C2880 I/C 3080/C 3080 I/ C3380/ C 3380 I/ C 3480/C 3480 I/C 3580/C3580 I.\n" +
            "\n",

        details: [
            "Neuf",
        ]
    },
  // Storage - 6 produits
  {
    id: "p-78",
    name: "DISQUE DUR INTERNE 1TERA",
    price: 75000,
    stock: "En stock",
    category: "storage",
    subcategory: "SSD",
    brand: "XLR8",
    tags: ["ssd", "1tera", "interne", "m2", "boitier",  "disque dur", "storage",  "pc", "ordinateur", "fixe",  "portable",  "laptop", "windows",  "mac",  "linux",  "data", "backup", "save", "fast", "reliable", "high performance", "durable",  "efficient",  "storage solution", "internal storage",  "m.2 ssd",  "hard drive",  "computer storage", "data storage", "file storage",  "system drive",  "gaming ssd",  "professional storage",  "workstation storage",  "enterprise storage"],
    image: "./IMG/DISQUE DUR INTERNE 1TERA/1.jpg",
    details: [
      "Neuf",
      "Noir",
    ],
    desc: "NOUS VENDONS DES DISQUES DUR INTERNE 1TERA M2.\n"
         + "NOUS VENDONS ÉGALEMENT DES BOITIERS EXTERNES POUR DISQUE DUR M2\n",
  },
    {
    id: "p-80",
    name: "DISQUE DUR EXTERNE SATA WESTERN DIGITAL NEUF",
    price: 15000,
    stock: "En stock",
    category: "storage",
    subcategory: "Disques externes",
    brand: "WD",
    tags: ["externe", "500go", "usb3", "disque dur", "storage",  "pc", "ordinateur", "fixe",  "portable",  "laptop", "windows",  "mac",  "linux",  "data", "backup", "save", "fast", "reliable", "high performance", "durable",  "efficient",  "storage solution", "external storage",  "sata hdd",  "hard drive",  "computer storage", "data storage", "file storage",  "system drive",  "gaming hdd",  "professional storage",  "workstation storage",  "enterprise storage"],
    image: "./images/stockage/disk1.jpg",
    details: [
      "Neuf",
      "Noir",
    ],
    desc: "NOUS VENDONS DES DISQUES DURS NEUFS EXTERNES SATA DE 500GO WESTERN DIGITAL.\n",
  },
   {
    id: "p-82",
    name: "BARRETTE PORTABLE8, 16 et 32GO DDR4",
    price: 15000,
    stock: "En stock",
    category: "storage",
    subcategory: "RAM",
    brand: "Crucial",
    tags: ["ram", "8go", "16go", "32go", "ddr4", "memory", "storage",  "pc", "ordinateur", "fixe",  "portable",  "laptop", "windows",  "mac",  "linux",  "data", "backup", "save", "fast", "reliable", "high performance", "durable",  "efficient",  "storage solution", "ram module",  "ddr4 ram",  "computer memory", "data storage", "file storage",  "system memory",  "gaming ram",  "professional memory",  "workstation memory",  "enterprise memory"],
    image: "./IMG/BARRETTE PORTABLE8, 16 et 32GO DDR4/1.jpg",
    details: [
      "Neuf",
      "Vert",
    ],
    desc: "Nous vendons des barrettes portables\n"
         + "8 go DDR4 2666MHZ à 15000 fcfa\n"
         + "8 go DDR4 2666MHZ à 60.000 fcfa\n"
          + "8 go DDR4 2666MHZ à 30000 fcfa\n",
  },
   {
    id: "p-84",
    name: "ADAPTATEUR APHA 11en1",
    price: 20000,
    stock: "En stock",
    category: "peripherals",
    subcategory: "Accessoires",
    brand: "WIWU",
    tags: ["ram", "8go", "16go", "32go", "ddr4", "memory", "storage",  "pc", "ordinateur", "fixe",  "portable",  "laptop", "windows",  "mac",  "linux",  "data", "backup", "save", "fast", "reliable", "high performance", "durable",  "efficient",  "storage solution", "ram module",  "ddr4 ram",  "computer memory", "data storage", "file storage",  "system memory",  "gaming ram",  "professional memory",  "workstation memory",  "enterprise memory"],
    image: "./IMG/ADAPTATEUR APHA 11en1/1.jpg",
    details: [
      "Neuf",
      "Noir",
    ],
    desc: "Adaptateur Multi Fonction:\n"
          + " Le Hub USB-C Alpha 11 en 1 transforme le port USB-C de votre ordinateur en hub de connexion pour tous vos appareils électroniques (moniteur, disque dur, cartes SD, enceintes audio, etc.)..\n",
  },
   {
    id: "p-86",
    name: "CARTE GRAPHIQUE 2GO",
    price: 20000,
    stock: "En stock",
    category: "peripherals",
    subcategory: "Accessoires",
    brand: "RoHS",
    tags: ["ram", "8go", "16go", "32go", "ddr4", "memory", "storage",  "pc", "ordinateur", "fixe",  "portable",  "laptop", "windows",  "mac",  "linux",  "data", "backup", "save", "fast", "reliable", "high performance", "durable",  "efficient",  "storage solution", "ram module",  "ddr4 ram",  "computer memory", "data storage", "file storage",  "system memory",  "gaming ram",  "professional memory",  "workstation memory",  "enterprise memory"],
    image: "./IMG/CARTE GRAPHIQUE 2GO/1.jpg",
    details: [
      "Réconditionné",
      "Noir",
    ],
    desc: "Mémoire vive de la carte graphique 2 Go\n"
           + " Type de mémoire vive (carte graphique) GDDR 5\n"
            + "PCI Express. Nombre de ports VGA ou DISPLAY\n",
  },
    {
    id: "p-88",
    name: "Disque SSD Interne et Sata Interne",
    price: 15000,
    stock: "En stock",
    category: "storage",
    subcategory: "Disques internes",
    brand: "GX2",
    tags: ["ssd", "sata", "disque dur", "storage",  "pc", "ordinateur", "fixe",  "portable",  "laptop", "windows",  "mac",  "linux",  "data", "backup", "save", "fast", "reliable", "high performance", "durable",  "efficient",  "storage solution", "internal ssd",  "sata hdd",  "hard drive",  "computer storage", "data storage", "file storage",  "system drive",  "gaming ssd",  "professional storage",  "workstation storage",  "enterprise storage"],
    image: "./IMG/Disque SSD Interne et Sata Interne/1.jpg",
    details: [
      "Réconditionné",
      "Noir",
    ],
    desc: "Nous vendons des disques durs: \n"
          + "SATA et SSD internes et externes\n"
           + "Neufs et d'occasions de 256go,500 512,1tera, 2 et 4 tera\n",
  },
   {
    id: "p-90",
    name: "CLES USB ET CARTE MEMOIRE MICRO SD DE 2GO A 32 GIGA.",
    price: 2500,
    stock: "En stock",
    category: "storage",
    subcategory: "Clé USB",
    brand: "MicroSD Cards",
    tags: ["ssd", "sata", "disque dur", "storage",  "pc", "ordinateur", "fixe",  "portable",  "laptop", "windows",  "mac",  "linux",  "data", "backup", "save", "fast", "reliable", "high performance", "durable",  "efficient",  "storage solution", "internal ssd",  "sata hdd",  "hard drive",  "computer storage", "data storage", "file storage",  "system drive",  "gaming ssd",  "professional storage",  "workstation storage",  "enterprise storage"],
    image: "./IMG/CLES USB ET CARTE MEMOIRE MICRO SD DE 2GO A 32 GIGA/1.jpg",
    details: [
      "Réconditionné",
      "Noir",
    ],
    desc: "Clés usb de 2,4 ,8,16,32giga.\n"
          + "Carte mémoire de 2,4 ,8,16,32giga à partir du prix indiqués ci-dessous.\n"
           + "Possibilité de livraison\n",
  },
 
  // Network - 6 produits
  {
    id: "p-92",
    name: "CABLE DE SECURITE POUR ORDINATEUR PORTABLE",
    price: 15000,
    stock: "En stock",
    category: "network",
    subcategory: "Sécurite",
    brand: "cable",
    tags: ["cable","Sécurité","ordinateur"],
    image: "./IMG/CABLE DE SECURITE POUR ORDINATEUR PORTABLE/1.jpg",
    desc:"Câble de sécurité antivol pour ordinateur plusieurs types de portables\n"
  +"Il existe désormais un câble antivol à combinaison qui fait tout. \n"+
  " Le verrou universel pour ordinateur portable à combinaison 3 en 1 \n"+
  "s'adapte à n'importe quel emplacement de sécurité pour ordinateur portable \n"+
  " standard naro et en forma de coin \n"+
  " aidant à \" protéger l'avenir\" de votre solution de verrouillage cadran\n"+
  " rénitialisable à 4 chiffres avec 10 000 combinaisons possibles et câble en acier au carbone \n"+
  " offrant une sécurité renforcée contre les tentatives de vol. Les fonctionnalités.",
    details:["Neuf","Noir"]
  },




  // Applications avec licences et antivirus - 6 produits
   {
    id: "p-49",
    name: "LICENCE MICROSOFT OFFICE 2019",
    price: 45000,
    stock: "En stock",
    category: "applications avec licences et antivirus",
      subcategory: "Office 19 actif",
      brand: "Microsoft",
      tags: ["windows", "licence", "office", "word", "excel", "powerpoint"],
      image: "./IMG/LICENECE MICROSOFT OFFICE 2019/2.jfif",
      details: ["Neuf", "Gris", "Microsoft"],
      desc: "NOUS VENDONS DES LICENCES MICROSOFT OFFICE 2019 (1)POSTE\n"
          + "AU DELÀ DE CINQ (5) RÉDUCTION POSSIBLE."
  },
  {
    id: "p-47",
    name: "Windows 11 Pro Licence activation À Vie",
    price: 20000,
    stock: "En stock",
    category: "applications avec licences et antivirus",
    subcategory: "Windows 11 pro",
    brand: "Microsoft",
    tags: ["windows", "licence"],
    image: "./IMG/Windows 11 Pro Licence activation À Vie/1.jfif",
      details: ["Neuf", "Gris, Noir", "Microsoft"],
      desc: "Produit Windows 11 Pro officiel\n"
         + "Microsoft Online Update.\n"
         + "Prend en charge l'allemand, l'anglais, l'italien, le français, le japonais, l'espagnol, le russe, etc.\n"
         + "Compatible avec les versions 32 et 64 bits\n"
         + "1 clé pour un seul PC. 1 clé Windows 11 Pro pour un ordinateur."
  },
 
    {
        id: "p-51",
        name: "LICENCE WINDOWS 10 PROFESSIONNEL",
        price: 15000,
        stock: "En stock",
        category: "applications avec licences et antivirus",
        subcategory: "Windows 10 pro",
        brand: "Microsoft",
        tags: ["windows", "licence"],
        image: "./IMG/LICENCE WINDOWS 10 PROFESSIONNEL/1.jfif",
        details: ["Neuf", "Gris", "Microsoft"],
        desc: "NOUS VENDONS DES LICENCES WINDOWS 10 PROFESSIONNEL POUR UN (1) POSTE.\n"
            + "AU DELÀ DE CINQ (5) RÉDUCTION POSSIBLE."
    },
];

export const PRICE_MIN = 5000;
export const PRICE_MAX = 2500000;

// Build a UI-friendly categories array used by components
export type UiProduct = {
  name: string;
  price: string;
  stock: string;
};

export type UiCategory = {
  key: CategoryKey;
  title: string;
  description: string;
  icon: LucideIcon;
  colorClass: string;
  products: UiProduct[];
  image: string;
};

function formatPrice(num: number) {
  return `À partir de ${num.toLocaleString("fr-FR")} FCFA`;
}

export const PRODUCT_CATEGORIES: UiCategory[] = CATEGORIES.map((cat) => {
  const productsInCat = PRODUCTS.filter((p) => p.category === cat.key);

  // Group by subcategory and pick representative price/stock/image
  const grouped = new Map<string, { price: number; stock: string; image: string }>();
  productsInCat.forEach((p) => {
    const existing = grouped.get(p.subcategory);
    if (!existing) {
      grouped.set(p.subcategory, { price: p.price, stock: p.stock, image: p.image });
    } else {
      // keep min price as "À partir de"
      if (p.price < existing.price) existing.price = p.price;
      // prefer 'En stock' if any
      if (existing.stock !== "En stock" && p.stock === "En stock") existing.stock = p.stock;
    }
  });

  const uiProducts: UiProduct[] = Array.from(grouped.entries()).slice(0, 8).map(([sub, v]) => ({
    name: sub,
    price: formatPrice(v.price),
    stock: v.stock,
  }));

  return {
    key: cat.key,
    title: cat.label,
    description: `${cat.label} — ${cat.subcategories.slice(0, 3).join(", ")}`,
    icon: cat.icon,
    colorClass: cat.colorClass,
    products: uiProducts,
    image: productsInCat[0]?.image ?? "https://images.unsplash.com/photo-1508747703725-7191d23b3b1b?q=80&w=1200&auto=format&fit=crop",
  };
});