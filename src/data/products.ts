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
      "Stations de travail",
      "Mini PC",
    ],
  },
  {
    key: "infrastructure",
    label: "Serveurs & Infra",
    icon: Server,
    colorClass: "text-green-600",
    subcategories: ["Serveurs tour", "Serveurs rack", "Switches", "Routeurs"],
  },
  {
    key: "peripherals",
    label: "Périphériques",
    icon: Printer,
    colorClass: "text-purple-600",
    subcategories: ["Imprimantes", "Unité centrale", "Écrans", "Projecteurs", "Accessoires", "onduleurs", "BOITE D'ALIMENTATION PC" ],
  },
  {
    key: "storage",
    label: "Stockage & Mémoire",
    icon: HardDrive,
    colorClass: "text-orange-600",
    subcategories: ["SSD", "Disques externes", "RAM", "NAS","Cartes graphiques", "Clé USB" ],
  },
  {
    key: "network",
    label: "Réseaux & Sécurité",
    icon: Wifi,
    colorClass: "text-teal-600",
    subcategories: ["Wi‑Fi", "Firewalls", "Caméras IP", "UPS"],
  },
  {
    key: "applications avec licences et antivirus",
    label: "Application avec licences et antivirus",
    icon: Smartphone,
    colorClass: "text-red-600",
    subcategories: ["Smartphones", "Tablettes", "Accessoires", "MDM"],
  },
];

export const PRODUCTS: Product[] = [
  // Computers - 8 produits
 
  {
    id: "p-2",
    name: "DELL X360  TACTILE",
    price: 75000,
    stock: "En stock",
    category: "computers",
    subcategory: "Laptops",
    brand: "Dell",
    details: ["128GO", "4GO", "Intel", "ROUGE, NOIR, JAUNE, GRISE, BLEU,.......", "Dell", "Réconditionné"],
    tags: ["bureau","portable","tactile"],
    image: "/images/ordinateurDELL/X360 DELL TACTILE.png",
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
    image: "./images/lenovo/LENOVOT14TACTILE.jpg",
    desc: "ORDINATEUR PORTABLE LENOVO T14\n"+ "PROCESSEUR: CORE I7 11éme à 12-ème génération\n"+
    "RAM: 16 GO EXTENSIBLE A 32 GO\n"+ "DISQUE: SSD512 EXTENSIBLE 1TERA\n"+ "ECRAN 14 POUCES FHD OU TACTILE\n"+ "A PARTIR DU PRIX INDIQUE",
    details: ["512 SSD","16GO","CORE I7","NOIR","Lenovo","Réconditionné"]
  },
  {
    id: "p-6",
    name: "Lenovo L380 YOGA X360. i5. 8GO. 256GOSSD. 13.3. tactile+Stylet",
    price: 150000,
    stock: "En stock",
    category: "computers",
    subcategory: "laptops",
    brand: "Lenovo",
    tags: ["portable", "bureau", "tactile"],
    image: "./images/lenovo/lonovoYOGA.webp",
    details:["256SSD","8GO","i5","NOIR","Lenovo","Réconditionné"],
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
    name: "ORDINATEUR CORE I5 I7 AVEC ECRAN DE 19 à 24 POUCES",
    price: 50000,
    stock: "En stock",
    category: "computers",
    subcategory: "Ordinateurs de bureau",
    brand: "Lenovo",
    tags: ["all-in-one", "écran", "bureau", "portable", "Laptops"],
    image: "./images/lenovo/ORDINATEURfixe.webp",
    details:["250 à 500go ou SSD 128 à 256 Go","4GO","i5 ou I7 de 2ème à la 8ème génération","NOIR","Lenovo","D'occasion"],
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
    name: "ALL IN ONE TACTILE 24",
    price: 225000,
    stock: "En stock",
    category: "computers",
    subcategory: "Ordinateurs de bureau",
    brand: "Lenovo",
    tags: ["all-in-one", "écran", "bureau"],
    image: "./images/lenovo/allinon.webp",
    details:["256 GO SSD","8GO","CORE I5 6ème","NOIR","Lenovo","reconditionné"],
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
    image: "./images/ordinateurDELL/dell.webp",
    details:["256SSD","8GO","CORE I7","NOIR","dell","reconditionné"],
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
    image: "./images/lenovo/lonovo.webp",
    details:["256 SSD","8GO","CORE I5","NOIR","Lenovo","Réconditionné"],
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
    image: "./images/lenovo/lenovo.webp",
    details:["256 SSD","8GO","CORE I5","NOIR","Lenovo","Réconditionné"],
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
    name: "DELL LATITUDE E5550 I5 15.6",
    price: 125000,
    stock: "En stock",
    category: "computers",
    subcategory: "Laptops",
    brand: "Dell",
    tags: ["portable", "laptop"],
    image: "./images/ordinateurDELL/dell1.webp",
    details:["256 SSD","8GO","CORE I5","NOIR","dell","Réconditionné"],
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
    name: "Lenovo yoga 11e 4go 128go 11,6",
    price: 60000,
    stock: "En stock",
    category: "computers",
    subcategory: "Laptops",
    brand: "Lenovo",
    tags: ["portable", "laptop"],
    image: "./images/lenovo/lenovoyoga.webp",
    details:["128 SSD","4GO","intel","NOIR","Lenovo","Réconditionné"],
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
    image: "./images/ordinateurDELL/dell2.webp",
    details:["256 SSD","16GO","CORE I7","NOIR","dell","D'occasion"],
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
    subcategory: "ordinateurs de bureau",
    brand: "Dell",
    tags: ["bureau", "desktop", "ordinateur fixe", "dell", "windows"],
    image: "./images/ordinateurDELL/dell2.webp",
    details:["500GO","4GO","3.20Ghz","dell","Réconditionné"],
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
    image: "./images/ordinateurDELL/dell5.webp",
    details:["1000Go","16GO","CORE I7","dell","D'occasion"],
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
    subcategory: "ordinateurs de bureau",
    brand: "Acer",
    tags: ["bureau", "desktop", "ordinateur fixe", "acer", "windows"],
    image: "./images/acer/acer.webp",
    details:["250GO","4GO","3.10Ghz","acer","D'occasion"],
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
    subcategory: "ordinateurs de bureau",
    brand: "Dell",
    tags: ["bureau", "desktop", "ordinateur fixe", "dell", "windows"],
    image: "./images/ordinateurDELL/dell4.webp",
    details:["80GO","4GO","2.6Ghz","dell","Réconditionné"],
    desc:"Ordinateurs complets en HP, Dell et LENOVO, selon stock\n" +
"Pentium DUAL CORE 2,6ghz à 3ghz ,\n" +
"4 go de mémoire ram , \n" +
"disque dur 80go disponible aussi en160 ou 250 go\n"+
"écran 17 pouces \n"+
"Wifi en option\n"+
"Machines idéales pour : \n"+
"_transfert d'argent \n"+
"_multiservices \n"+
"_Tous travaux de bureau et d'internet \n"+
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
    image: "./images/ordinateurDELL/dell6.webp",
    details:["500Go","8GO","CORE I7","dell","D'occasion"],
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
    price: 35000,
    stock: "En stock",
    category: "computers",
    subcategory: "ordinateurs de bureau",
    brand: "Dell",
    tags: ["bureau", "desktop", "ordinateur fixe", "dell", "windows"],
    image: "./images/ordinateurDELL/dell7.webp",
    details:["250GO","4GO","Core 2 duo","dell","D'occasion"],
    desc:"Nous vendons des ordinateurs complets avec \n" +
"écran 19 en Dell, Lenovo et HP selon stock :\n" +
"intel pentium ou Core 2 duo,\n" +
"2.60 à 3.10 ghz,\n"+
"2 à 4 go de mémoire Ram,\n"+
"disque dur 160 à 250 go \n"+
"Wifi en option\n"+
"Windows , Office, Antivirus etc...prêt à l'emploi\n"+
"Machines idéales pour : \n"+
"_transfert d'argent \n"+
"_multiservices \n"+
"_Tous travaux de bureau et d'internet \n"+
"Tous nos produits sont garantis"
  },
    {
        id: "p-1",
        name: "Laptop Pro 14\" i7/16Go/1To",
        price: 790000,
        stock: "En stock",
        category: "computers",
        subcategory: "Laptops",
        brand: "HP",
        tags: ["desktop", "lenovo", "windows"],
        image: "https://i.roamcdn.net/hz/ed/listing-thumb-543w/a25e0963c61102f4192557d7d059b5e7/-/horizon-files-prod/ed/picture/qgq9e76k/4237975ee73dce7b337b90775aedff3dbea61564.jpg",
        details: [
            "Processeur Intel Core i7 de 7e génération",
            "08 Go de RAM",
            "Stockage 500 Go ET/OU 256 SSD",
            "Écran 22 à 24",
            "Batterie longue durée jusqu'à 10 heures",
            "Etat reconditionné",
            "Couleur : Noir"
        ],
        desc: "ENSEMBLE ORDINATEUR COMPLET CORE I7 7 ème génération\" " +
            "DISPONIBLE EN HP PRODESK 400 G4 SSF.\"" +
            " AVEC UNE MÉMOIRE DE 8GO EXTENSIBLE à 16GO, \"" +
            "DISQUE DUR 500 GO ET/OU SSD 256 GO. ECRAN 22 à 24 POUCES\n\"" +
            "A PARTIR DU PRIX INDIQUE",
    },
    {
        id: "p-3",
        name: "Core I5 et I7.Ram 8GO\" Ecran 19 à 24\"+wifi",
        price: 50000,
        stock: "En stock",
        category: "computers",
        subcategory: "ordinateurs de bureau",
        brand: "HP",
        tags: ["desktop", "hp", "windows"],
        image: "https://i.roamcdn.net/hz/ed/listing-gallery-full-1920w/c3fd5eaba47405be638e37ac669cc44f/-/horizon-files-prod/ed/picture/qrxv9wx/cb6e8d57928bb08ceb36ee2a1b1120b0f229dcd1.jpg",
        details: [
            "Processeur Intel i5 ou i7(de la 2 -ème à la 8 -ème génération)",
            "04 Go de RAM",
            "Stockage 250 à 500 Go SATA OU 128 à 256 SSD",
            "Marque HP",
            "Etat reconditionné",
            "Couleur : Noir"
        ],
        desc: "Ordinateurs complets avec écran 19 à 24\" disponibles Lenovo, HP et DELL selon stock\n" +
            "Core i5 ou i7(de la 2 -ème à la 8 -ème génération)\" " +
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
        subcategory: "ordinateurs de bureau",
        brand: "HP",
        tags: ["desktop", "hp", "windows"],
        image: "https://i.roamcdn.net/hz/ed/listing-gallery-main-844w/06c4ccfebc3b4e45155a40f82820210f/-/horizon-files-prod/ed/picture/q9m8nrv8/943f4ca4de3939073649839db923a11ccd08c472.jpg",
        details: [
            "Processeur Intel i3",
            "RAM 04 Go de RAM EXTENSIBLE à 16 GO",
            "Stockage 250 à 500 Go SATA OU 128 à 256 SSD",
            "Marque HP",
            "Etat d'Occasion",
            "Couleur : Gris Noir"
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
        subcategory: "ordinateurs de bureau",
        brand: "HP",
        tags: ["desktop", "hp", "windows"],
        image: "https://i.roamcdn.net/hz/ed/listing-gallery-full-1920w/47387edf75afce8bab67bcc5a6401fa3/-/horizon-files-prod/ed/picture/qgqw8jzn/2a49ac87d9c4fa1559408c4682e3fce9eda2e6aa.jpg",
        details: [
            "Processeur Intel Core i7-13-ème",
            "RAM 32 Go",
            "Stockage 1Téra SSD",
            "Marque HP",
            "Etat Neuve",
            "Couleur : Noir"
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
        subcategory: "ordinateurs de bureau",
        brand: "HP",
        tags: ["desktop", "hp", "windows"],
        image: "https://i.roamcdn.net/hz/ed/listing-gallery-full-1920w/02e25a7d5f8747a4a05f23fddcbbdea4/-/horizon-files-prod/ed/picture/q788256m/ff826b2a965bc7f26a102c6aedb2d392a9b8df66.jpg",
        details: [
            "Processeur Intel i5",
            "RAM 04 Go de RAM EXTENSIBLE à 08 GO",
            "Stockage 250 à 500 Go SATA OU 128 à 256 SSD",
            "Marque HP",
            "Etat d'Occasion",
            "Couleur : Gris Noir"
        ],
        desc: "CORE I5 HP ACER LENOVO DELL EN DESKTOPS OU TOURS SELON STOCK\n" +
            "RAM 4GO EXTENSIBLE A 8GO\n" +
            "DISQUES DURS DE 250 à 500 Go SATA OU 128 à 256 SSD\n" +
            "ÉCRAN 19 à 22POUCES " +
            "A PARTIR DU PRIX INDIQUE",
    },

  // Infrastructure - 6 produits
  {
    id: "p-4",
    name: "Serveur tour Xeon/ECC",
    price: 1400000,
    stock: "Sur commande",
    category: "infrastructure",
    subcategory: "Serveurs tour",
    brand: "HPE",
    tags: ["server", "xeon"],
    image: "./images/serveur.png",
  },
  {
    id: "p-5",
    name: "Switch 24 ports Gigabit",
    price: 95000,
    stock: "En stock",
    category: "infrastructure",
    subcategory: "Switches",
    brand: "TP-Link",
    tags: ["switch", "gigabit"],
    image: "./images/serveur.png",
  },
  {
    id: "p-18",
    name: "Serveur rack 2U Dual Xeon",
    price: 2200000,
    stock: "Sur commande",
    category: "infrastructure",
    subcategory: "Serveurs rack",
    brand: "Dell",
    tags: ["rack", "xeon", "2u"],
    image: "./images/serveur.png",
  },
  {
    id: "p-19",
    name: "Routeur Entreprise Gigabit",
    price: 180000,
    stock: "En stock",
    category: "infrastructure",
    subcategory: "Routeurs",
    brand: "Cisco",
    tags: ["routeur", "cisco", "entreprise"],
    image: "./images/serveur.png",
  },
  {
    id: "p-20",
    name: "Switch 48 ports managé",
    price: 250000,
    stock: "En stock",
    category: "infrastructure",
    subcategory: "Switches",
    brand: "Netgear",
    tags: ["switch", "managé", "48ports"],
    image: "./images/serveur.png",
  },
  {
    id: "p-21",
    name: "Serveur tour Quad Core",
    price: 950000,
    stock: "En stock",
    category: "infrastructure",
    subcategory: "Serveurs tour",
    brand: "Supermicro",
    tags: ["tour", "quadcore", "server"],
    image: "./images/serveur.png",
  },

  // Peripherals - 7 produits
  {
    id: "p-36",
    name: "HP COLOR LASER JET MFP 277",
    price: 150000,
    stock: "En stock",
    category: "peripherals",
    subcategory: "Imprimantes",
    brand: "HP",
    tags: ["laser", "HP", "multifonction", "couleur", "imprimante"],
    image: "./images/peripheriques/imprimante.webp",
    desc: "Nous vendons des imprimantes avec les spécifications suivantes :\n"
         + "_Marque HP séries Laserjet PRO M 277  n,\n"
         + "_dn ou dw Couleur Blanche\n"
         + "_out-en-un Laser couleur selon stock\n"
         + "_Impression, copie, scan et télécopie + réseau et recto-verso",

    details: [
      "Blanc",
      "Réconditionné", 
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
    image: "./images/peripheriques/imprimante2.webp",
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
      "Noir/Blanc",
      "Réconditionné", 
    ]
  },
    {
    id: "p-40",
    name: "Imprimante laser monochrome",
    price: 70000,
    stock: "En stock",
    category: "peripherals",
    subcategory: "Imprimantes",
    brand: "Canon",
    tags: ["laser", "canon", "multifonction", "couleur", "imprimante", "photocopieur","ricoh","xerox"],
    image: "./images/peripheriques/imprimante3.webp",
    desc: "Vitesse d'impression (noir, A4) 40 ppm\n"
         + "Format de papier A4,\n"
         + "Recto/verso automatique\n"
         + "Écran LCD N&B\n"
         + "Vitesse d'impression 1ère page monochrome 5 s\n"
           + "Cycle d'utilisation mensuel conseillé (min.)3000 pages / mois\n"
             + "Cycle d'utilisation mensuel conseillé (max.) 10000 pages / mois\n"
               + "Résolution d'impression monochrome (Maximum) 1200 x 1200 ppp\n",


    details: [
      "Blanc",
      "Réconditionné", 
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
    image: "./images/peripheriques/ecrandell.webp",
    desc: "NOUS VENDONS DES ECRAN DE 22 à 24 POUCES EN DELL\n"
         + "AVEC PORT VGA ET DVI\n"
         + " POSSIBILITÉ DE LE METTRE SOUS HDMI AVEC ADAPTATEUR \n"
         + "HDMI VGA OU\n"
         + "DVI HDMI POUR UN PETIT SUPPLÉMENT\n"
           + "A PARTIR DU PRIX INDIQUE",
    details: [
      "Noir Gris",
      "Réconditionné",
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
    image: "./images/peripheriques/chargeur.webp",
    desc: "NOUS VENDONS DES CHARGEURS\n"
         + " POUR TOUS TYPES ORDINATEURS PORTABLES :\n"
         + " DELL 19.5V 4.62 ORIGINAL DELL ETC...\n"
         + "DELL 19.5V 6.7 ORIGINAL DELL ETC...\n"
         + "HP 19.5V 3.33, 2.31 TETE BLEU ETC...\n"
           + " LENOVO 20V 2.5, 3.5 , 4.5A ETC...",
             
         
    details: [
      "Neuf",
      "Pour HP, Dell, Lenovo"
    ]
  },

 {
    id: "p-48",
    name: "ECRAN DELL P2422H HDMI",
    price: 25000,
    stock: "En stock",
    category: "peripherals",
    subcategory: "Écrans",
    brand: "Dell",
    tags: ["écran", "dell", "22 pouces", "24 pouces", "hdmi", "monitor",  "affichage",  "video",  "resolution", "bureau", "desktop",  "ordinateur fixe",  "windows"],
    image: "./images/peripheriques/ecrandell2.webp",
    desc: "ECRAN DELL P2422H\n"
         + "Écran LCD à rétroéclairage LED 24\n"
         + "Full HD (1080p) 1920 x 1080 à 60 Hz\n"
         + "DisplayPort 1.2 (HDCP 1.4)\n"
         + "VGA\n"
         + "HDMI (HDCP 1.4)\n"
         + "USB 3.2 montant de génération 1\n"
           + "4 x USB 3.2 descendant de génération 1",
    details: [
      "Noir",
      "Dell",
    
    ]
  },
  {
   id: "p-50",
    name: "ONDEULEUR JC TECH.MERCURY 850VA",
    price: 30000,
    stock: "En stock",
    category: "peripherals",
    subcategory: "onduleurs",
    brand: "Mercury",
    tags: ["onduleur", "ups", "jc tech", "mercury"],
    image: "./images/peripheriques/onduleur.webp",
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
      "Noir",
      "Neuf",
   
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
    image: "./images/peripheriques/ecranasus.webp",
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
      "Noir",
      "Asus",
      "Réconditionné"
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
    image: "./images/peripheriques/ecranhp.webp",
    desc: "NOUS VENDONS DES ÉCRANS HP 22 POUCES HDMI FULL HD.\n",
    details: [
      "Noir",
      "HP",
      "Neuf"
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
    image: "./images/peripheriques/imprimante4.webp",
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
      "Blanc",
      "Réconditionné", 
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
    image: "./images/peripheriques/imprimante5.jpg",
    desc: "IMPRIMANTE LASER 1102\n"
         + "Imprimante laser monochrome A4 - 600 x 600 ppp,\n"
         + "18 ppm - 2 Mo de RAM\n"
         + " Processeur 266 MHz \n"
          + "USB 2.0 \n"
         + " Compatible PC et Mac\n"
             + " Bac d'alimentation 150 feuilles\n",


    details: [
      "Blanc",
      "Venant", 
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
    image: "./images/peripheriques/unite.jpg",
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
    image: "./images/peripheriques/ba.webp",
    desc: "Vente de Boite D'alimentation modèle: \n"
         + "HP, DELL, LENOVO, IBM etc...\n"
         + "A partir du prix indiqué dessus (standard ou spécifique)",

    details: [
      "Réconditionné", 
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
    image: "./images/peripheriques/audio.jpg",
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
    image: "./images/peripheriques/sourisetclavier.webp",
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
    image: "./images/peripheriques/projecteur.webp",
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
    image: "./images/peripheriques/laser.webp",
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
    image: "./images/peripheriques/onduleur2.webp",
    desc: "Ligth Wave UPS 1000VA LCD 230V \n"+
         + "Capacité de l'alimentation de sortie 670 Watts / 1000 VA\n"+
         + "Puissance configurable max 670 Watts / 1000 VA\n"
         + "Tension nominale de sortie 230V \n"
         + "Voltage nominal en entrée 230V \n"
         + "Fréquence d'entrée 50/60 Hz +/- 3 Hz\n",
    details: [
      "Noir",
      "Neuf",
   
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
    image: "./images/peripheriques/casque.webp",
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
      "Rouge Noir",
      "Neuf",
   
    ]
  },
  // Storage - 6 produits
  {
    id: "p-78",
    name: "DISQUE DUR INTERNE 1TERA",
    price: 59000,
    stock: "En stock",
    category: "storage",
    subcategory: "SSD",
    brand: "XLR8",
    tags: ["ssd", "1tera", "interne", "m2", "boitier",  "disque dur", "storage",  "pc", "ordinateur", "fixe",  "portable",  "laptop", "windows",  "mac",  "linux",  "data", "backup", "save", "fast", "reliable", "high performance", "durable",  "efficient",  "storage solution", "internal storage",  "m.2 ssd",  "hard drive",  "computer storage", "data storage", "file storage",  "system drive",  "gaming ssd",  "professional storage",  "workstation storage",  "enterprise storage"],
    image: "./images/stockage/disk.webp",
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
    image: "./images/stockage/ram.jpg",
    details: [
      "Neuf",
      "Vert",
    ],
    desc: "Nous vendons des barrettes portables\n"
         + "d8 go DDR4 2666MHZ à 15000 fcfa\n"
         + "8 go DDR4 2666MHZ à 60.000 fcfa\n"
          + "8 go DDR4 2666MHZ à 30000 fcfa\n",
  },
   {
    id: "p-84",
    name: "ADAPTATEUR APHA 11en1",
    price: 20000,
    stock: "En stock",
    category: "storage",
    subcategory: "RAM",
    brand: "Crucial",
    tags: ["ram", "8go", "16go", "32go", "ddr4", "memory", "storage",  "pc", "ordinateur", "fixe",  "portable",  "laptop", "windows",  "mac",  "linux",  "data", "backup", "save", "fast", "reliable", "high performance", "durable",  "efficient",  "storage solution", "ram module",  "ddr4 ram",  "computer memory", "data storage", "file storage",  "system memory",  "gaming ram",  "professional memory",  "workstation memory",  "enterprise memory"],
    image: "./images/stockage/adaptateur.jpg",
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
    category: "storage",
    subcategory: "Cartes graphiques",
    brand: "RoHS",
    tags: ["ram", "8go", "16go", "32go", "ddr4", "memory", "storage",  "pc", "ordinateur", "fixe",  "portable",  "laptop", "windows",  "mac",  "linux",  "data", "backup", "save", "fast", "reliable", "high performance", "durable",  "efficient",  "storage solution", "ram module",  "ddr4 ram",  "computer memory", "data storage", "file storage",  "system memory",  "gaming ram",  "professional memory",  "workstation memory",  "enterprise memory"],
    image: "./images/stockage/graphique.webp",
    details: [
      "Réconditionné",
      "Noir",
    ],
    desc: "Adaptateur Multi Fonction:\n"
          + " Mémoire vive de la carte graphique 2 Go\n"
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
    image: "./images/stockage/sata.webp",
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
    image: "./images/stockage/cle.jpg",
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
    id: "p-10",
    name: "Point d'accès Wi‑Fi 6",
    price: 120000,
    stock: "En stock",
    category: "network",
    subcategory: "Wi‑Fi",
    brand: "Ubiquiti",
    tags: ["wifi6", "ap"],
    image: "./images/Réseaux.png",
  },
  {
    id: "p-11",
    name: "Onduleur 1.5kVA",
    price: 160000,
    stock: "En stock",
    category: "network",
    subcategory: "UPS",
    brand: "APC",
    tags: ["ups", "onduleur"],
    image: "./images/Réseaux.png",
  },
  {
    id: "p-31",
    name: "Firewall UTM nouvelle génération",
    price: 850000,
    stock: "Sur commande",
    category: "network",
    subcategory: "Firewalls",
    brand: "Fortinet",
    tags: ["firewall", "utm", "securite"],
    image: "./images/Réseaux.png",
  },
  {
    id: "p-32",
    name: "Caméra IP 4MP vision nocturne",
    price: 75000,
    stock: "En stock",
    category: "network",
    subcategory: "Caméras IP",
    brand: "Hikvision",
    tags: ["camera", "ip", "4mp"],
    image: "./images/Réseaux.png",
  },
  {
    id: "p-33",
    name: "Routeur WiFi 6 AX6000",
    price: 195000,
    stock: "En stock",
    category: "network",
    subcategory: "Wi‑Fi",
    brand: "Asus",
    tags: ["routeur", "wifi6", "ax6000"],
    image: "./images/Réseaux.png",
  },
  {
    id: "p-34",
    name: "Onduleur 3kVA ligne interactive",
    price: 320000,
    stock: "En stock",
    category: "network",
    subcategory: "UPS",
    brand: "Eaton",
    tags: ["ups", "3kva", "onduleur"],
    image: "./images/Réseaux.png",
  },

  // Applications avec licences et antivirus - 6 produits
  {
    id: "p-12",
    name: "Smartphone Pro 5G 128Go",
    price: 215000,
    stock: "En stock",
    category: "applications avec licences et antivirus",
    subcategory: "Smartphones",
    brand: "Samsung",
    tags: ["android", "5g"],
    image: "/images/antivirus.png",
  },
  {
    id: "p-35",
    name: "Tablette Android 10\" 64Go",
    price: 125000,
    stock: "En stock",
    category: "applications avec licences et antivirus",
    subcategory: "Tablettes",
    brand: "Samsung",
    tags: ["tablette", "android", "10pouces"],
    image: "/images/antivirus.png",
  },
  {
    id: "p-36",
    name: "Licence Windows 11 Pro",
    price: 25000,
    stock: "En stock",
    category: "applications avec licences et antivirus",
    subcategory: "Smartphones",
    brand: "Microsoft",
    tags: ["windows", "licence", "os"],
    image: "/images/antivirus.png",
  },
  {
    id: "p-37",
    name: "Antivirus Internet Security 1 an",
    price: 15000,
    stock: "En stock",
    category: "applications avec licences et antivirus",
    subcategory: "Tablettes",
    brand: "Kaspersky",
    tags: ["antivirus", "securite", "1an"],
    image: "/images/antivirus.png",
  },
  {
    id: "p-38",
    name: "Licence Office 365 Famille",
    price: 35000,
    stock: "En stock",
    category: "applications avec licences et antivirus",
    subcategory: "Smartphones",
    brand: "Microsoft",
    tags: ["office", "365", "licence"],
    image: "/images/antivirus.png",
  },
  {
    id: "p-39",
    name: "Solution MDM pour entreprises",
    price: 120000,
    stock: "Sur commande",
    category: "applications avec licences et antivirus",
    subcategory: "MDM",
    brand: "VMware",
    tags: ["mdm", "entreprise", "gestion"],
    image: "/images/antivirus.png",
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