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