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
    subcategories: ["Imprimantes", "Scanners", "Écrans", "Projecteurs"],
  },
  {
    key: "storage",
    label: "Stockage & Mémoire",
    icon: HardDrive,
    colorClass: "text-orange-600",
    subcategories: ["SSD", "Disques externes", "RAM", "NAS"],
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
    {
        id: "p-11",
        name: "HP ELITEBOOK 830 840 G6 I7 16Go/512SSD",
        price: 200000,
        stock: "En stock",
        category: "computers",
        subcategory: "laptops",
        brand: "HP",
        tags: ["laptop", "hp", "windows"],
        image: "https://i.roamcdn.net/hz/ed/listing-gallery-full-1920w/505a9d8949a4cb52125afde0e0f72232/-/horizon-files-prod/ed/picture/q9m8455v/499cf4efb1d688c4d6f433de81e28ac61af72609.jpg",
        details: [
            "Processeur Intel i7",
            "RAM 16 Go",
            "Stockage 512 Go",
            "Marque HP",
            "Etat Reconditionné",
            "Couleur : Gris Noir"
        ],
        desc: "Ordinateur Portable EliteBook 830 OU 840 G6.I7\n" +
            "CORE I7 8 éme GENERATION\n" +
            "RAM 16 GO extensible à 32 Go\n" +
            "DISQUE :256SSD EXTENSIBLE A 512 GO" +
            "ECRAN 13.3 ou 14 POUCES FHD ou TACTILE",
    },
    {
        id: "p-13",
        name: "HP X360 DELL TACTILE",
        price: 75000,
        stock: "En stock",
        category: "computers",
        subcategory: "laptops",
        brand: "HP",
        tags: ["laptop", "hp", "windows"],
        image: "https://i.roamcdn.net/hz/ed/listing-gallery-full-1920w/81c80e4a8b22f0f96c8749929553a8c0/-/horizon-files-prod/ed/picture/q44dvvq4/75d658816d72e39637333271203956f0effe8be2.jpg",
        details: [
            "Processeur Intel",
            "RAM 4 Go",
            "Stockage 128 SSD",
            "Marque HP",
            "Etat Reconditionné",
            "Couleur : Rouge, NOir, Jaune, Grise, Bleu....."
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
        subcategory: "laptops",
        brand: "HP",
        tags: ["laptop", "hp", "windows"],
        image: "https://i.roamcdn.net/hz/ed/listing-gallery-full-1920w/43bd6f9ba58fd46a3a32867063be1160/-/horizon-files-prod/ed/picture/qm5r86vr/845ac8c12ecf1da1182de6fc2e25f0af5bf002c1.jpg",
        details: [
            "Processeur Intel i7",
            "RAM 16 Go",
            "Stockage 512 SSD",
            "Marque HP",
            "Etat Reconditionné",
            "Couleur : Gris, Noir"
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
        subcategory: "laptops",
        brand: "HP",
        tags: ["laptop", "hp", "windows"],
        image: "https://i.roamcdn.net/hz/ed/listing-gallery-full-1920w/7da1ecf3347aae6842fcd41571473a9c/-/horizon-files-prod/ed/picture/q2jr75w2/0e723cec34f13e3785ea841d18f0a2941a1be91e.jpg",
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
        subcategory: "laptops",
        brand: "HP",
        tags: ["laptop", "hp", "windows"],
        image: "https://i.roamcdn.net/hz/ed/listing-gallery-full-1920w/8513c616804ebfea8b45439559dcbb95/-/horizon-files-prod/ed/picture/q745n7g/c6ccb6921ad21de78452845dbbb4903040306ddf.jpg",
        details: [
            "Processeur Intel Core i5 ou I7 de 2 ème à la 8 ème génération",
            "RAM 4 Go",
            "Stockage 250GO",
            "Marque HP",
            "Etat d'occasion",
            "Couleur : Noir"
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
        subcategory: "desktops",
        brand: "HP",
        tags: ["desktop", "hp", "windows"],
        image: "https://i.roamcdn.net/hz/ed/listing-gallery-full-1920w/a440c598a20131fd22a59c2ed938e163/-/horizon-files-prod/ed/picture/q0g72jj6/6b32c58cd5893a4da603eebf0397fe2865db6dd3.jpg",
        details: [
            "Processeur Intel Core i3",
            "RAM 8 Go",
            "Stockage 256GO",
            "Marque HP",
            "Etat Neuf",
            "Couleur : Noir"
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
        subcategory: "laptops",
        brand: "HP",
        tags: ["laptop", "hp", "windows"],
        image: "https://i.roamcdn.net/hz/ed/listing-gallery-full-1920w/5bc26f3758aa4f7cc8d19a9829a48583/-/horizon-files-prod/ed/picture/qwerwm9d/f59170106831d82e2219abaa5a8696bb4370035e.jpg",
        details: [
            "Processeur Intel Core i5",
            "RAM 8Go",
            "Stockage 256GO",
            "Marque HP",
            "Etat Réconditionné",
            "Couleur : Noir"
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
        subcategory: "laptops",
        brand: "HP",
        tags: ["laptop", "hp", "windows"],
        image: "https://i.roamcdn.net/hz/ed/listing-gallery-full-1920w/f8ff8f31511c4361091070c5a47b69c9/-/horizon-files-prod/ed/picture/qkr80vqw/2c6abad035fe7ffd0f34d5935b9bdc6eb6b88a7c.jpg",
        details: [
            "Processeur Intel i7",
            "RAM 08 Go",
            "Stockage 256 SSD",
            "Marque HP",
            "Etat Reconditionné",
            "Couleur : Gris"
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
        subcategory: "laptops",
        brand: "HP",
        tags: ["laptop", "hp", "windows"],
        image: "https://i.roamcdn.net/hz/ed/listing-thumb-543w/00a050b93f5b793aeb2b54623bf4b5fc/-/horizon-files-prod/ed/picture/qzvpxpmv/fc7d705825f57b32da1e882eb497fb9fb0e2ea3c.jpg",
        details: [
            "Processeur Intel i5-6th Gen",
            "RAM 08 Go",
            "Stockage 256 SSD",
            "Marque HP",
            "Etat Reconditionné",
            "Couleur : Gris"
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
        subcategory: "laptops",
        brand: "HP",
        tags: ["laptop", "hp", "windows"],
        image: "https://i.roamcdn.net/hz/ed/listing-gallery-main-844w/eb1be02a9515a4497f9ff3093ea7fbdd/-/horizon-files-prod/ed/picture/q56xrnp2/d32ee735812c8dc60327167f40fd76a451ba26ba.jpg",
        details: [
            "Processeur Intel i5",
            "RAM 08 Go",
            "Stockage 256 SSD",
            "Marque HP",
            "Etat Reconditionné",
            "Couleur : Gris"
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
        subcategory: "laptops",
        brand: "HP",
        tags: ["laptop", "hp", "windows"],
        image: "https://i.roamcdn.net/hz/ed/listing-gallery-full-1920w/ca10402c5cec2ea39a40121cede1b750/-/horizon-files-prod/ed/picture/migrated/qp0jemw/3c6ac80e193fed84de3ef469b414684e53e0d534.jpg",
        details: [
            "Processeur Intel i5",
            "RAM 16Go",
            "Stockage 512 SSD",
            "Marque HP",
            "Etat Reconditionné",
            "Couleur : Gris"
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
        subcategory: "laptops",
        brand: "HP",
        tags: ["laptop", "hp", "windows"],
        image: "https://i.roamcdn.net/hz/ed/listing-gallery-full-1920w/57110fc716992296b5a1ca8f407df2ce/-/horizon-files-prod/ed/picture/migrated/qp0jemw/17dc65f1f17ba2a1d7262e53f32746d69d0cd4f8.jpg",
        details: [
            "Processeur Intel i5",
            "RAM 8Go",
            "Stockage 512 SSD",
            "Marque HP",
            "Etat Neuf",
            "Couleur : Noir"
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
        subcategory: "laptops",
        brand: "HP",
        tags: ["laptop", "hp", "windows"],
        image: "https://i.roamcdn.net/hz/ed/listing-gallery-full-1920w/a947fa97b12a5ed15a1f7b9e33c6d167/-/horizon-files-prod/ed/picture/migrated/qm6je9m/e5bf24c9b2eeaa701f760c5ed0bdcde20178b470.jpg",
        details: [
            "Processeur Intel i7",
            "RAM 8Go",
            "Stockage 1Téra",
            "Marque HP",
            "Etat Neuf",
            "Couleur : Noir"
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
        subcategory: "laptops",
        brand: "HP",
        tags: ["laptop", "hp", "windows"],
        image: "https://i.roamcdn.net/hz/ed/listing-gallery-full-1920w/7b89aca04aa1dc200bb59155fb96518d/-/horizon-files-prod/ed/picture/migrated/qe9jpx2/e2ceaa5287b5b7aad352af8f373c5d93a5ec3595.jpg",
        details: [
            "Processeur Core 2.dual.",
            "RAM 4Go",
            "Stockage 250Go",
            "Marque HP",
            "Etat d'Occasion",
            "Couleur : Noir"
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
        subcategory: "laptops",
        brand: "HP",
        tags: ["laptop", "hp", "windows"],
        image: "https://i.roamcdn.net/hz/ed/listing-gallery-main-844w/fa54844407e35d7e4d1deb76ea146f7d/-/horizon-files-prod/ed/picture/migrated/qzzj9pr/8f406733e244d177eccd75ae98618291d6b9c9b9.jpg",
        details: [
            "Processeur Core i5",
            "RAM 4Go",
            "Stockage 500Go",
            "Marque HP",
            "Etat d'Occasion",
            "Couleur : Noir"
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
        price: 40000,
        stock: "En stock",
        category: "computers",
        subcategory: "laptops",
        brand: "HP",
        tags: ["laptop", "hp", "windows"],
        image: "https://i.roamcdn.net/hz/ed/listing-gallery-full-1920w/790a15b7c8e6a683487422769e724c7c/-/horizon-files-prod/ed/picture/migrated/qp026mm/eba266304bd5db95647d9b133d59049427fd8fd7.jpg",
        details: [
            "Processeur Core i3",
            "RAM 4Go",
            "Stockage 250Go",
            "Marque HP",
            "Etat d'Occasion",
            "Couleur : Noir"
        ],
        desc: "Ensembles complets HP en desktop.Core i3 -/Mémoire RAM 4go/\n" +
            "Disque 250Go/Écran (19\") . DVDRW - Option Wifi\n" +
            "Prêt a l'emploi: Windows 10 pro, office, antivirus, adobe etc.\n" +
            "Tous nos produits sont garantis.",
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
    id: "p-6",
    name: "Imprimante laser monochrome",
    price: 85000,
    stock: "En stock",
    category: "peripherals",
    subcategory: "Imprimantes",
    brand: "Brother",
    tags: ["laser", "a4"],
    image: "./images/Périphériques.png",
  },
  {
    id: "p-7",
    name: "Écran 27\" IPS 2K",
    price: 165000,
    stock: "En stock",
    category: "peripherals",
    subcategory: "Écrans",
    brand: "LG",
    tags: ["monitor", "2k", "ips"],
    image: "./images/serveur.png",
  },
  {
    id: "p-22",
    name: "Scanner document A4 haute vitesse",
    price: 120000,
    stock: "En stock",
    category: "peripherals",
    subcategory: "Scanners",
    brand: "Canon",
    tags: ["scanner", "document", "a4"],
    image: "./images/Périphériques.png",
  },
  {
    id: "p-23",
    name: "Projecteur HD 1080p 3500 lumens",
    price: 210000,
    stock: "Sur commande",
    category: "peripherals",
    subcategory: "Projecteurs",
    brand: "Epson",
    tags: ["projecteur", "hd", "1080p"],
    image: "./images/Périphériques.png",
  },
  {
    id: "p-24",
    name: "Écran 24\" Full HD USB-C",
    price: 135000,
    stock: "En stock",
    category: "peripherals",
    subcategory: "Écrans",
    brand: "Dell",
    tags: ["ecran", "fullhd", "usbc"],
    image: "./images/Périphériques.png",
  },
  {
    id: "p-25",
    name: "Imprimante multifonction jet d'encre",
    price: 75000,
    stock: "En stock",
    category: "peripherals",
    subcategory: "Imprimantes",
    brand: "HP",
    tags: ["multifonction", "jet", "encre"],
    image: "./images/Périphériques.png",
  },
  {
    id: "p-26",
    name: "Projecteur portable mini LED",
    price: 180000,
    stock: "En stock",
    category: "peripherals",
    subcategory: "Projecteurs",
    brand: "Anker",
    tags: ["portable", "mini", "led"],
    image: "./images/Périphériques.png",
  },

  // Storage - 6 produits
  {
    id: "p-8",
    name: "SSD NVMe 1To",
    price: 59000,
    stock: "En stock",
    category: "storage",
    subcategory: "SSD",
    brand: "Samsung",
    tags: ["ssd", "nvme"],
    image: "./images/Memoire.png",
  },
  {
    id: "p-9",
    name: "NAS 2 baies",
    price: 220000,
    stock: "Sur commande",
    category: "storage",
    subcategory: "NAS",
    brand: "Synology",
    tags: ["nas", "backup"],
    image: "./images/Memoire.png",
  },
  {
    id: "p-27",
    name: "Disque dur externe 2To USB 3.0",
    price: 45000,
    stock: "En stock",
    category: "storage",
    subcategory: "Disques externes",
    brand: "Western Digital",
    tags: ["externe", "2to", "usb3"],
    image: "./images/Memoire.png",
  },
  {
    id: "p-28",
    name: "Kit RAM 32Go DDR4 3200MHz",
    price: 85000,
    stock: "En stock",
    category: "storage",
    subcategory: "RAM",
    brand: "Corsair",
    tags: ["ram", "32go", "ddr4"],
    image: "./images/Memoire.png",
  },
  {
    id: "p-29",
    name: "SSD SATA 500Go",
    price: 35000,
    stock: "En stock",
    category: "storage",
    subcategory: "SSD",
    brand: "Crucial",
    tags: ["ssd", "sata", "500go"],
    image: "./images/Memoire.png",
  },
  {
    id: "p-30",
    name: "NAS 4 baies avec RAID",
    price: 450000,
    stock: "Sur commande",
    category: "storage",
    subcategory: "NAS",
    brand: "QNAP",
    tags: ["nas", "4baies", "raid"],
    image: "./images/Memoire.png",
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