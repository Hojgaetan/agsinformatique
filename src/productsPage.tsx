import React, { useState, useMemo } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./components/ui/card";
import { Badge } from "./components/ui/badge";
import { Button } from "./components/ui/button";
import { ImageWithFallback } from "./components/figma/ImageWithFallback";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./components/ui/select";
import { Checkbox } from "./components/ui/checkbox";
import { Label } from "./components/ui/label";
import { Slider } from "./components/ui/slider";
import { Input } from "./components/ui/input";
import { Search, ShoppingCart, Filter, X } from "lucide-react";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "./components/ui/sheet";

interface Product {
  id: number;
  name: string;
  category: string;
  brand: string;
  price: number;
  image: string;
  stock: boolean;
  description: string;
  specs?: string[];
}

const products: Product[] = [
  // Ordinateurs & Laptops
  { id: 1, name: "Dell Latitude 5420", category: "Ordinateurs & Laptops", brand: "Dell", price: 450000, image: "https://images.unsplash.com/photo-1737868131581-6379cdee4ec3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXB0b3AlMjBjb21wdXRlciUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzYwMTAzOTI2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral", stock: true, description: "Laptop professionnel 14\" Intel i5, 8GB RAM, 256GB SSD", specs: ["Intel Core i5", "8GB RAM", "256GB SSD", "14\" FHD"] },
  { id: 2, name: "HP EliteBook 840 G8", category: "Ordinateurs & Laptops", brand: "HP", price: 550000, image: "https://images.unsplash.com/photo-1737868131581-6379cdee4ec3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXB0b3AlMjBjb21wdXRlciUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzYwMTAzOTI2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral", stock: true, description: "Ultrabook 14\" Intel i7, 16GB RAM, 512GB SSD", specs: ["Intel Core i7", "16GB RAM", "512GB SSD", "14\" FHD"] },
  { id: 3, name: "Lenovo ThinkPad T14", category: "Ordinateurs & Laptops", brand: "Lenovo", price: 520000, image: "https://images.unsplash.com/photo-1737868131581-6379cdee4ec3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXB0b3AlMjBjb21wdXRlciUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzYwMTAzOTI2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral", stock: false, description: "Laptop business 14\" AMD Ryzen 7, 16GB RAM, 512GB SSD", specs: ["AMD Ryzen 7", "16GB RAM", "512GB SSD", "14\" FHD"] },
  { id: 4, name: "Asus VivoBook 15", category: "Ordinateurs & Laptops", brand: "Asus", price: 320000, image: "https://images.unsplash.com/photo-1737868131581-6379cdee4ec3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXB0b3AlMjBjb21wdXRlciUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzYwMTAzOTI2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral", stock: true, description: "Laptop 15.6\" Intel i3, 8GB RAM, 256GB SSD", specs: ["Intel Core i3", "8GB RAM", "256GB SSD", "15.6\" FHD"] },
  { id: 5, name: "Dell OptiPlex 7090", category: "Ordinateurs & Laptops", brand: "Dell", price: 380000, image: "https://images.unsplash.com/photo-1737868131581-6379cdee4ec3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXB0b3AlMjBjb21wdXRlciUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzYwMTAzOTI2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral", stock: true, description: "PC de bureau Intel i5, 8GB RAM, 256GB SSD", specs: ["Intel Core i5", "8GB RAM", "256GB SSD", "Tower"] },
  { id: 6, name: "HP ProDesk 400 G7", category: "Ordinateurs & Laptops", brand: "HP", price: 340000, image: "https://images.unsplash.com/photo-1737868131581-6379cdee4ec3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXB0b3AlMjBjb21wdXRlciUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzYwMTAzOTI2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral", stock: true, description: "PC de bureau compact Intel i5, 8GB RAM, 1TB HDD", specs: ["Intel Core i5", "8GB RAM", "1TB HDD", "Mini Tower"] },
  { id: 7, name: "Lenovo IdeaPad 3", category: "Ordinateurs & Laptops", brand: "Lenovo", price: 280000, image: "https://images.unsplash.com/photo-1737868131581-6379cdee4ec3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXB0b3AlMjBjb21wdXRlciUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzYwMTAzOTI2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral", stock: true, description: "Laptop 15.6\" AMD Ryzen 5, 8GB RAM, 512GB SSD", specs: ["AMD Ryzen 5", "8GB RAM", "512GB SSD", "15.6\" FHD"] },
  { id: 8, name: "MacBook Air M1", category: "Ordinateurs & Laptops", brand: "Apple", price: 750000, image: "https://images.unsplash.com/photo-1737868131581-6379cdee4ec3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXB0b3AlMjBjb21wdXRlciUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzYwMTAzOTI2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral", stock: false, description: "Ultraportable 13.3\" Apple M1, 8GB RAM, 256GB SSD", specs: ["Apple M1", "8GB RAM", "256GB SSD", "13.3\" Retina"] },

  // Serveurs & Infrastructure
  { id: 9, name: "Dell PowerEdge T340", category: "Serveurs & Infrastructure", brand: "Dell", price: 1450000, image: "https://images.unsplash.com/photo-1746893737268-81fe686e6a51?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZXJ2ZXIlMjBuZXR3b3JrJTIwaW5mcmFzdHJ1Y3R1cmV8ZW58MXx8fHwxNzYwMTA2ODc1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral", stock: false, description: "Serveur tour Intel Xeon, 16GB RAM, 2TB HDD", specs: ["Intel Xeon E-2224", "16GB RAM", "2TB HDD", "Tower Server"] },
  { id: 10, name: "HP ProLiant ML110 Gen10", category: "Serveurs & Infrastructure", brand: "HP", price: 1350000, image: "https://images.unsplash.com/photo-1746893737268-81fe686e6a51?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZXJ2ZXIlMjBuZXR3b3JrJTIwaW5mcmFzdHJ1Y3R1cmV8ZW58MXx8fHwxNzYwMTA2ODc1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral", stock: true, description: "Serveur tour Intel Xeon, 16GB RAM, 1TB HDD", specs: ["Intel Xeon Silver", "16GB RAM", "1TB HDD", "Tower Server"] },
  { id: 11, name: "Cisco Catalyst 2960", category: "Serveurs & Infrastructure", brand: "Cisco", price: 180000, image: "https://images.unsplash.com/photo-1746893737268-81fe686e6a51?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZXJ2ZXIlMjBuZXR3b3JrJTIwaW5mcmFzdHJ1Y3R1cmV8ZW58MXx8fHwxNzYwMTA2ODc1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral", stock: true, description: "Switch 24 ports Gigabit Ethernet", specs: ["24 Ports", "Gigabit", "Layer 2", "Rack Mount"] },
  { id: 12, name: "TP-Link TL-SG108", category: "Serveurs & Infrastructure", brand: "TP-Link", price: 25000, image: "https://images.unsplash.com/photo-1746893737268-81fe686e6a51?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZXJ2ZXIlMjBuZXR3b3JrJTIwaW5mcmFzdHJ1Y3R1cmV8ZW58MXx8fHwxNzYwMTA2ODc1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral", stock: true, description: "Switch 8 ports Gigabit non administrable", specs: ["8 Ports", "Gigabit", "Unmanaged", "Desktop"] },

  // Écrans & Périphériques
  { id: 13, name: "Dell P2422H", category: "Périphériques", brand: "Dell", price: 125000, image: "https://images.unsplash.com/photo-1746597068824-56a76a2b7b57?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21wdXRlciUyMG1vbml0b3IlMjBkaXNwbGF5fGVufDF8fHx8MTc2MDEyNzQzOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral", stock: true, description: "Écran 24\" Full HD IPS", specs: ["24\"", "1920x1080", "IPS", "HDMI/DP"] },
  { id: 14, name: "HP E24 G4", category: "Périphériques", brand: "HP", price: 115000, image: "https://images.unsplash.com/photo-1746597068824-56a76a2b7b57?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21wdXRlciUyMG1vbml0b3IlMjBkaXNwbGF5fGVufDF8fHx8MTc2MDEyNzQzOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral", stock: true, description: "Écran 23.8\" Full HD IPS", specs: ["23.8\"", "1920x1080", "IPS", "VGA/HDMI/DP"] },
  { id: 15, name: "LG 27UL500", category: "Périphériques", brand: "LG", price: 195000, image: "https://images.unsplash.com/photo-1746597068824-56a76a2b7b57?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21wdXRlciUyMG1vbml0b3IlMjBkaXNwbGF5fGVufDF8fHx8MTc2MDEyNzQzOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral", stock: true, description: "Écran 27\" 4K UHD IPS", specs: ["27\"", "3840x2160", "IPS", "HDR10"] },
  { id: 16, name: "HP LaserJet Pro M404dn", category: "Périphériques", brand: "HP", price: 185000, image: "https://images.unsplash.com/photo-1739826294194-9e0ceaea136f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmludGVyJTIwb2ZmaWNlJTIwZXF1aXBtZW50fGVufDF8fHx8MTc2MDIwMDY5Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral", stock: true, description: "Imprimante laser monochrome réseau", specs: ["Laser Mono", "38 ppm", "Ethernet", "Recto/Verso"] },
  { id: 17, name: "Canon imageCLASS MF445dw", category: "Périphériques", brand: "Canon", price: 245000, image: "https://images.unsplash.com/photo-1739826294194-9e0ceaea136f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmludGVyJTIwb2ZmaWNlJTIwZXF1aXBtZW50fGVufDF8fHx8MTc2MDIwMDY5Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral", stock: true, description: "Multifonction laser monochrome WiFi", specs: ["Laser Mono", "40 ppm", "WiFi", "Scan/Copy/Fax"] },
  { id: 18, name: "Epson EcoTank L3250", category: "Périphériques", brand: "Epson", price: 125000, image: "https://images.unsplash.com/photo-1739826294194-9e0ceaea136f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmludGVyJTIwb2ZmaWNlJTIwZXF1aXBtZW50fGVufDF8fHx8MTc2MDIwMDY5Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral", stock: true, description: "Multifonction jet d'encre WiFi", specs: ["Jet d'encre", "33 ppm", "WiFi", "Écotank"] },
  { id: 19, name: "Logitech MK270", category: "Périphériques", brand: "Logitech", price: 18000, image: "https://images.unsplash.com/photo-1681857779472-4045012e111c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrZXlib2FyZCUyMG1vdXNlJTIwcGVyaXBoZXJhbHxlbnwxfHx8fDE3NjAyMDA2OTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral", stock: true, description: "Ensemble clavier souris sans fil", specs: ["Sans fil", "USB", "Clavier complet", "Souris optique"] },
  { id: 20, name: "Microsoft Sculpt Ergonomic", category: "Périphériques", brand: "Microsoft", price: 45000, image: "https://images.unsplash.com/photo-1681857779472-4045012e111c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrZXlib2FyZCUyMG1vdXNlJTIwcGVyaXBoZXJhbHxlbnwxfHx8fDE3NjAyMDA2OTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral", stock: true, description: "Clavier souris ergonomique sans fil", specs: ["Ergonomique", "Sans fil", "Repose-poignet", "Souris"] },

  // Stockage & Mémoire
  { id: 21, name: "Samsung 870 EVO 500GB", category: "Stockage & Mémoire", brand: "Samsung", price: 45000, image: "https://images.unsplash.com/photo-1658954957744-9f4c52a929b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXJkJTIwZHJpdmUlMjBzdG9yYWdlfGVufDF8fHx8MTc2MDIwMDY5M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral", stock: true, description: "SSD SATA 2.5\" 500GB", specs: ["500GB", "SATA III", "560MB/s", "2.5\""] },
  { id: 22, name: "WD Blue 1TB SSD", category: "Stockage & Mémoire", brand: "Western Digital", price: 75000, image: "https://images.unsplash.com/photo-1658954957744-9f4c52a929b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXJkJTIwZHJpdmUlMjBzdG9yYWdlfGVufDF8fHx8MTc2MDIwMDY5M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral", stock: true, description: "SSD SATA 2.5\" 1TB", specs: ["1TB", "SATA III", "560MB/s", "2.5\""] },
  { id: 23, name: "Seagate Barracuda 2TB", category: "Stockage & Mémoire", brand: "Seagate", price: 55000, image: "https://images.unsplash.com/photo-1658954957744-9f4c52a929b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXJkJTIwZHJpdmUlMjBzdG9yYWdlfGVufDF8fHx8MTc2MDIwMDY5M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral", stock: true, description: "Disque dur interne 3.5\" 2TB", specs: ["2TB", "7200 RPM", "SATA III", "3.5\""] },
  { id: 24, name: "WD My Passport 4TB", category: "Stockage & Mémoire", brand: "Western Digital", price: 95000, image: "https://images.unsplash.com/photo-1658954957744-9f4c52a929b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXJkJTIwZHJpdmUlMjBzdG9yYWdlfGVufDF8fHx8MTc2MDIwMDY5M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral", stock: true, description: "Disque dur externe portable 4TB", specs: ["4TB", "USB 3.0", "Portable", "Chiffrement"] },
  { id: 25, name: "Kingston Fury 16GB DDR4", category: "Stockage & Mémoire", brand: "Kingston", price: 38000, image: "https://images.unsplash.com/photo-1658954957744-9f4c52a929b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXJkJTIwZHJpdmUlMjBzdG9yYWdlfGVufDF8fHx8MTc2MDIwMDY5M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral", stock: true, description: "Mémoire RAM DDR4 16GB 3200MHz", specs: ["16GB", "DDR4", "3200MHz", "Desktop"] },
  { id: 26, name: "Crucial 32GB DDR4 Kit", category: "Stockage & Mémoire", brand: "Crucial", price: 68000, image: "https://images.unsplash.com/photo-1658954957744-9f4c52a929b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXJkJTIwZHJpdmUlMjBzdG9yYWdlfGVufDF8fHx8MTc2MDIwMDY5M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral", stock: true, description: "Kit mémoire RAM 32GB (2x16GB) DDR4", specs: ["32GB", "DDR4", "2666MHz", "Kit 2x16GB"] },

  // Réseaux & Sécurité
  { id: 27, name: "TP-Link Archer AX50", category: "Réseaux & Sécurité", brand: "TP-Link", price: 85000, image: "https://images.unsplash.com/photo-1621685634155-dcb444e2ec98?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aXJlbGVzcyUyMHJvdXRlciUyMG5ldHdvcmt8ZW58MXx8fHwxNzYwMjAwNjkzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral", stock: true, description: "Routeur WiFi 6 AX3000 Dual Band", specs: ["WiFi 6", "AX3000", "Dual Band", "4 Ports Gigabit"] },
  { id: 28, name: "Ubiquiti UniFi AP AC Pro", category: "Réseaux & Sécurité", brand: "Ubiquiti", price: 125000, image: "https://images.unsplash.com/photo-1621685634155-dcb444e2ec98?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aXJlbGVzcyUyMHJvdXRlciUyMG5ldHdvcmt8ZW58MXx8fHwxNzYwMjAwNjkzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral", stock: true, description: "Point d'accès WiFi AC Pro", specs: ["WiFi 5", "AC1750", "PoE", "Dual Band"] },
  { id: 29, name: "APC Back-UPS 650VA", category: "Réseaux & Sécurité", brand: "APC", price: 75000, image: "https://images.unsplash.com/photo-1621685634155-dcb444e2ec98?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aXJlbGVzcyUyMHJvdXRlciUyMG5ldHdvcmt8ZW58MXx8fHwxNzYwMjAwNjkzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral", stock: true, description: "Onduleur UPS 650VA 400W", specs: ["650VA", "400W", "4 Prises", "Batterie"] },
  { id: 30, name: "CyberPower CP1500PFCLCD", category: "Réseaux & Sécurité", brand: "CyberPower", price: 195000, image: "https://images.unsplash.com/photo-1621685634155-dcb444e2ec98?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aXJlbGVzcyUyMHJvdXRlciUyMG5ldHdvcmt8ZW58MXx8fHwxNzYwMjAwNjkzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral", stock: true, description: "Onduleur UPS 1500VA 1000W LCD", specs: ["1500VA", "1000W", "LCD", "12 Prises"] },
  { id: 31, name: "Hikvision DS-2CD2143G0-I", category: "Réseaux & Sécurité", brand: "Hikvision", price: 95000, image: "https://images.unsplash.com/photo-1621685634155-dcb444e2ec98?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aXJlbGVzcyUyMHJvdXRlciUyMG5ldHdvcmt8ZW58MXx8fHwxNzYwMjAwNjkzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral", stock: true, description: "Caméra IP dôme 4MP IR", specs: ["4MP", "IR 30m", "PoE", "H.265+"] },
  { id: 32, name: "Dahua IPC-HFW1230S", category: "Réseaux & Sécurité", brand: "Dahua", price: 55000, image: "https://images.unsplash.com/photo-1621685634155-dcb444e2ec98?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aXJlbGVzcyUyMHJvdXRlciUyMG5ldHdvcmt8ZW58MXx8fHwxNzYwMjAwNjkzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral", stock: true, description: "Caméra IP bullet 2MP IR", specs: ["2MP", "IR 30m", "PoE", "H.265"] },

  // Mobiles & Tablettes
  { id: 33, name: "Samsung Galaxy Tab A8", category: "Mobiles & Tablettes", brand: "Samsung", price: 145000, image: "https://images.unsplash.com/photo-1622531636820-5d727319e45d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0YWJsZXQlMjBkZXZpY2UlMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc2MDIwMDY5M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral", stock: true, description: "Tablette 10.5\" 3GB RAM 32GB", specs: ["10.5\"", "3GB RAM", "32GB", "Android"] },
  { id: 34, name: "iPad 10.2\" 9th Gen", category: "Mobiles & Tablettes", brand: "Apple", price: 285000, image: "https://images.unsplash.com/photo-1622531636820-5d727319e45d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0YWJsZXQlMjBkZXZpY2UlMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc2MDIwMDY5M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral", stock: true, description: "Tablette 10.2\" 64GB WiFi", specs: ["10.2\"", "64GB", "WiFi", "A13 Bionic"] },
  { id: 35, name: "Samsung Galaxy A54", category: "Mobiles & Tablettes", brand: "Samsung", price: 285000, image: "https://images.unsplash.com/photo-1622531636820-5d727319e45d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0YWJsZXQlMjBkZXZpY2UlMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc2MDIwMDY5M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral", stock: true, description: "Smartphone 5G 6.4\" 8GB/128GB", specs: ["6.4\"", "8GB/128GB", "5G", "Android"] },
  { id: 36, name: "iPhone 13", category: "Mobiles & Tablettes", brand: "Apple", price: 565000, image: "https://images.unsplash.com/photo-1622531636820-5d727319e45d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0YWJsZXQlMjBkZXZpY2UlMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc2MDIwMDY5M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral", stock: false, description: "Smartphone 6.1\" 128GB", specs: ["6.1\"", "128GB", "5G", "iOS"] },
];

export function ProductsPage({ onBack }: { onBack?: () => void }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<number[]>([0, 1000000]);
  const [showInStockOnly, setShowInStockOnly] = useState(false);
  const [sortBy, setSortBy] = useState<string>("name");

  // Extract unique categories and brands
  const categories = useMemo(() => {
    const cats = Array.from(new Set(products.map(p => p.category)));
    return cats;
  }, []);

  const brands = useMemo(() => {
    const brandSet = Array.from(new Set(products.map(p => p.brand)));
    return brandSet.sort();
  }, []);

  const maxPrice = useMemo(() => {
    return Math.max(...products.map(p => p.price));
  }, []);

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    let filtered = products.filter(product => {
      // Search filter
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           product.description.toLowerCase().includes(searchQuery.toLowerCase());
      
      // Category filter
      const matchesCategory = selectedCategory === "all" || product.category === selectedCategory;
      
      // Brand filter
      const matchesBrand = selectedBrands.length === 0 || selectedBrands.includes(product.brand);
      
      // Price filter
      const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
      
      // Stock filter
      const matchesStock = !showInStockOnly || product.stock;
      
      return matchesSearch && matchesCategory && matchesBrand && matchesPrice && matchesStock;
    });

    // Sort products
    filtered.sort((a, b) => {
      switch (sortBy) {
        case "price-asc":
          return a.price - b.price;
        case "price-desc":
          return b.price - a.price;
        case "name":
        default:
          return a.name.localeCompare(b.name);
      }
    });

    return filtered;
  }, [searchQuery, selectedCategory, selectedBrands, priceRange, showInStockOnly, sortBy]);

  const toggleBrand = (brand: string) => {
    setSelectedBrands(prev =>
      prev.includes(brand) ? prev.filter(b => b !== brand) : [...prev, brand]
    );
  };

  const clearAllFilters = () => {
    setSelectedCategory("all");
    setSelectedBrands([]);
    setPriceRange([0, maxPrice]);
    setShowInStockOnly(false);
    setSearchQuery("");
  };

  const activeFiltersCount = 
    (selectedCategory !== "all" ? 1 : 0) +
    selectedBrands.length +
    (showInStockOnly ? 1 : 0) +
    (priceRange[0] !== 0 || priceRange[1] !== maxPrice ? 1 : 0);

  const FilterContent = () => (
    <div className="space-y-6">
      {/* Categories */}
      <div>
        <h3 className="mb-3">Catégorie</h3>
        <Select value={selectedCategory} onValueChange={setSelectedCategory}>
          <SelectTrigger>
            <SelectValue placeholder="Toutes les catégories" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Toutes les catégories</SelectItem>
            {categories.map(cat => (
              <SelectItem key={cat} value={cat}>{cat}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Brands */}
      <div>
        <h3 className="mb-3">Marques</h3>
        <div className="space-y-2 max-h-60 overflow-y-auto">
          {brands.map(brand => (
            <div key={brand} className="flex items-center space-x-2">
              <Checkbox
                id={`brand-${brand}`}
                checked={selectedBrands.includes(brand)}
                onCheckedChange={() => toggleBrand(brand)}
              />
              <Label htmlFor={`brand-${brand}`} className="cursor-pointer">
                {brand}
              </Label>
            </div>
          ))}
        </div>
      </div>

      {/* Price Range */}
      <div>
        <h3 className="mb-3">Prix (FCFA)</h3>
        <div className="space-y-4">
          <Slider
            min={0}
            max={maxPrice}
            step={10000}
            value={priceRange}
            onValueChange={setPriceRange}
            className="my-4"
          />
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-600">
              {priceRange[0].toLocaleString()} FCFA
            </span>
            <span className="text-sm text-gray-600">
              {priceRange[1].toLocaleString()} FCFA
            </span>
          </div>
        </div>
      </div>

      {/* Stock Status */}
      <div className="flex items-center space-x-2 pt-2">
        <Checkbox
          id="in-stock"
          checked={showInStockOnly}
          onCheckedChange={(checked: boolean | "indeterminate") => setShowInStockOnly(!!checked)}
        />
        <Label htmlFor="in-stock" className="cursor-pointer">
          En stock uniquement
        </Label>
      </div>

      {/* Clear Filters */}
      {activeFiltersCount > 0 && (
        <Button
          variant="outline"
          onClick={clearAllFilters}
          className="w-full"
        >
          <X className="h-4 w-4 mr-2" />
          Réinitialiser les filtres ({activeFiltersCount})
        </Button>
      )}
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-3xl text-gray-900 mb-2">Nos Produits</h1>
              <p className="text-gray-600">
                {filteredProducts.length} produit{filteredProducts.length !== 1 ? 's' : ''} disponible{filteredProducts.length !== 1 ? 's' : ''}
              </p>
            </div>
            {onBack && (
              <Button variant="outline" onClick={onBack}>
                Retour à l'accueil
              </Button>
            )}
          </div>

          {/* Search and Sort */}
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                type="text"
                placeholder="Rechercher un produit..."
                value={searchQuery}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-full md:w-64">
                <SelectValue placeholder="Trier par" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="name">Nom (A-Z)</SelectItem>
                <SelectItem value="price-asc">Prix croissant</SelectItem>
                <SelectItem value="price-desc">Prix décroissant</SelectItem>
              </SelectContent>
            </Select>
            
            {/* Mobile Filter Button */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" className="md:hidden">
                  <Filter className="h-4 w-4 mr-2" />
                  Filtres {activeFiltersCount > 0 && `(${activeFiltersCount})`}
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="overflow-y-auto">
                <SheetHeader>
                  <SheetTitle>Filtres</SheetTitle>
                  <SheetDescription>
                    Affinez votre recherche de produits
                  </SheetDescription>
                </SheetHeader>
                <div className="mt-6">
                  <FilterContent />
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex gap-8">
          {/* Desktop Sidebar Filters */}
          <aside className="hidden md:block w-64 flex-shrink-0">
            <Card className="sticky top-4">
              <CardHeader>
                <CardTitle>Filtres</CardTitle>
              </CardHeader>
              <CardContent>
                <FilterContent />
              </CardContent>
            </Card>
          </aside>

          {/* Products Grid */}
          <div className="flex-1">
            {filteredProducts.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-gray-500">
                  Aucun produit ne correspond à vos critères de recherche.
                </p>
                <Button variant="outline" onClick={clearAllFilters} className="mt-4">
                  Réinitialiser les filtres
                </Button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredProducts.map(product => (
                  <Card key={product.id} className="group hover:shadow-xl transition-all duration-300 flex flex-col">
                    <div className="relative h-48 overflow-hidden rounded-t-lg bg-gray-100">
                      <ImageWithFallback
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      {!product.stock && (
                        <div className="absolute top-2 right-2">
                          <Badge variant="secondary" className="bg-red-100 text-red-800">
                            Rupture
                          </Badge>
                        </div>
                      )}
                      {product.stock && (
                        <div className="absolute top-2 right-2">
                          <Badge variant="secondary" className="bg-green-100 text-green-800">
                            En stock
                          </Badge>
                        </div>
                      )}
                    </div>
                    
                    <CardHeader className="flex-grow">
                      <div className="flex items-center justify-between mb-2">
                        <Badge variant="outline" className="text-xs">
                          {product.brand}
                        </Badge>
                      </div>
                      <CardTitle className="text-lg line-clamp-2">{product.name}</CardTitle>
                      <CardDescription className="line-clamp-2">
                        {product.description}
                      </CardDescription>
                    </CardHeader>
                    
                    <CardContent>
                      {product.specs && (
                        <div className="space-y-1 mb-4">
                          {product.specs.slice(0, 3).map((spec, idx) => (
                            <p key={idx} className="text-xs text-gray-600">• {spec}</p>
                          ))}
                        </div>
                      )}
                      <div className="text-2xl text-blue-600 mb-4">
                        {product.price.toLocaleString()} FCFA
                      </div>
                    </CardContent>

                    <CardFooter className="pt-0">
                      <Button 
                        className="w-full bg-blue-600 hover:bg-blue-700" 
                        disabled={!product.stock}
                      >
                        <ShoppingCart className="h-4 w-4 mr-2" />
                        {product.stock ? "Ajouter au panier" : "Indisponible"}
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
