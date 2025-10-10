import { LucideIcon, Monitor, Server, Printer, Smartphone, HardDrive, Wifi } from "lucide-react";

export type CategoryKey =
  | "computers"
  | "infrastructure"
  | "peripherals"
  | "storage"
  | "network"
  | "mobile";

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
    key: "mobile",
    label: "Mobiles & Tablettes",
    icon: Smartphone,
    colorClass: "text-red-600",
    subcategories: ["Smartphones", "Tablettes", "Accessoires", "MDM"],
  },
];

export const PRODUCTS: Product[] = [
  // Computers
  {
    id: "p-1",
    name: "PC Bureau Pro i5/16Go/512Go",
    price: 350000,
    stock: "En stock",
    category: "computers",
    subcategory: "Ordinateurs de bureau",
    brand: "Dell",
    tags: ["desktop", "bureau", "windows"],
    image:
      "https://images.unsplash.com/photo-1547394765-185e1e68f34e?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "p-2",
    name: "Laptop Pro 14\" i7/16Go/1To",
    price: 790000,
    stock: "En stock",
    category: "computers",
    subcategory: "Laptops",
    brand: "HP",
    tags: ["portable", "pro", "windows"],
    image:
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "p-3",
    name: "Station de travail Ryzen 9/64Go/RTX",
    price: 1850000,
    stock: "Sur commande",
    category: "computers",
    subcategory: "Stations de travail",
    brand: "Lenovo",
    tags: ["workstation", "cad", "3d"],
    image:
      "https://images.unsplash.com/photo-1593642634315-48f5414c3ad9?q=80&w=1200&auto=format&fit=crop",
  },
  // Infra
  {
    id: "p-4",
    name: "Serveur tour Xeon/ECC",
    price: 1400000,
    stock: "Sur commande",
    category: "infrastructure",
    subcategory: "Serveurs tour",
    brand: "HPE",
    tags: ["server", "xeon"],
    image:
      "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?q=80&w=1200&auto=format&fit=crop",
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
    image:
      "https://images.unsplash.com/photo-1629837093109-11325d6e7afd?q=80&w=1200&auto=format&fit=crop",
  },
  // Peripherals
  {
    id: "p-6",
    name: "Imprimante laser monochrome",
    price: 85000,
    stock: "En stock",
    category: "peripherals",
    subcategory: "Imprimantes",
    brand: "Brother",
    tags: ["laser", "a4"],
    image:
      "https://images.unsplash.com/photo-1527443154391-507e9dc6c5cc?q=80&w=1200&auto=format&fit=crop",
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
    image:
      "https://images.unsplash.com/photo-1649972904349-6e44c0ce7dd8?q=80&w=1200&auto=format&fit=crop",
  },
  // Storage
  {
    id: "p-8",
    name: "SSD NVMe 1To",
    price: 59000,
    stock: "En stock",
    category: "storage",
    subcategory: "SSD",
    brand: "Samsung",
    tags: ["ssd", "nvme"],
    image:
      "https://images.unsplash.com/photo-1612533638560-63904a9f8f2a?q=80&w=1200&auto=format&fit=crop",
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
    image:
      "https://images.unsplash.com/photo-1600697395543-ef3ee6e38bc1?q=80&w=1200&auto=format&fit=crop",
  },
  // Network
  {
    id: "p-10",
    name: "Point d'accès Wi‑Fi 6",
    price: 120000,
    stock: "En stock",
    category: "network",
    subcategory: "Wi‑Fi",
    brand: "Ubiquiti",
    tags: ["wifi6", "ap"],
    image:
      "https://images.unsplash.com/photo-1584438784894-089d6a62b8fa?q=80&w=1200&auto=format&fit=crop",
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
    image:
      "https://images.unsplash.com/photo-1557986166-23cda26b1d58?q=80&w=1200&auto=format&fit=crop",
  },
  // Mobile
  {
    id: "p-12",
    name: "Smartphone Pro 5G 128Go",
    price: 215000,
    stock: "En stock",
    category: "mobile",
    subcategory: "Smartphones",
    brand: "Samsung",
    tags: ["android", "5g"],
    image:
      "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?q=80&w=1200&auto=format&fit=crop",
  },
];

export const PRICE_MIN = 5000;
export const PRICE_MAX = 2500000;
