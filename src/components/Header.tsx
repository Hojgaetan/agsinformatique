import { Button } from "./ui/button";
import { Menu, Phone, Mail } from "lucide-react";
import { useState } from "react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm border-b">
      <div className="container mx-auto px-4">
        {/* Contact info bar */}
        <div className="hidden md:flex items-center justify-end py-2 border-b border-gray-100">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Phone className="h-4 w-4 text-blue-600" />
              <span className="text-sm text-gray-600">+221 77 387 00 30</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="h-4 w-4 text-blue-600" />
              <span className="text-sm text-gray-600">contact@africasglobalservices.com</span>
            </div>
          </div>
        </div>

        {/* Main navigation */}
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center">
            <div className="bg-blue-600 text-white p-2 rounded-lg mr-3">
              <span className="font-bold text-xl">AGS</span>
            </div>
            <div>
              <h1 className="text-xl text-gray-800">Africa's Global Services</h1>
              <p className="text-sm text-gray-600">Solutions Informatiques</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#accueil" className="text-gray-700 hover:text-blue-600 transition-colors">
              Accueil
            </a>
            <a href="#services" className="text-gray-700 hover:text-blue-600 transition-colors">
              Services
            </a>
            <a href="#produits" className="text-gray-700 hover:text-blue-600 transition-colors">
              Produits
            </a>
            <a href="#apropos" className="text-gray-700 hover:text-blue-600 transition-colors">
              À propos
            </a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">
              Contact
            </a>
            <Button className="bg-blue-600 hover:bg-blue-700">
              Devis gratuit
            </Button>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden pb-4 border-t border-gray-100">
            <div className="flex flex-col space-y-4 pt-4">
              <a href="#accueil" className="text-gray-700 hover:text-blue-600">
                Accueil
              </a>
              <a href="#services" className="text-gray-700 hover:text-blue-600">
                Services
              </a>
              <a href="#produits" className="text-gray-700 hover:text-blue-600">
                Produits
              </a>
              <a href="#apropos" className="text-gray-700 hover:text-blue-600">
                À propos
              </a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600">
                Contact
              </a>
              <Button className="bg-blue-600 hover:bg-blue-700 w-fit">
                Devis gratuit
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}