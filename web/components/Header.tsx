"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { label: "Sobre", href: "/sobre" },
    { 
      label: "Histeroscopia", 
      href: "/histeroscopia",
      submenu: [
        { label: "Histeroscopia Diagnóstica", href: "/histeroscopia/diagnostica" },
        { label: "Histeroscopia Cirúrgica", href: "/histeroscopia/cirurgica" },
      ]
    },
    { label: "Infertilidade", href: "/infertilidade" },
    { label: "Cirurgia Ginecológica", href: "/cirurgia-ginecologica" },
    { label: "Pré-Natal", href: "/pre-natal" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-gold/20 bg-bg-black/95 backdrop-blur-sm" role="banner">
      <div className="container-max">
        <div className="flex items-center justify-between py-3">
          {/* Logo */}
          <Link 
            href="/"
            className="flex items-center gap-4 transition-opacity hover:opacity-80"
            aria-label="Dr. Sergio Lins - Página Inicial"
          >
            <div className="relative h-16 w-16 flex-shrink-0 sm:h-20 sm:w-20">
              <Image
                src="/logo.jpeg"
                alt="Logo Dr. Sergio Lins"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="hidden sm:block">
              <span className="block font-serif text-xl font-bold text-white lg:text-2xl">
                Dr. Sergio Lins
              </span>
              <span className="block text-xs uppercase tracking-wider text-gold lg:text-sm">
                Ginecologia e Obstetrícia
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:block" aria-label="Navegação principal">
            <ul className="flex items-center gap-8">
              {menuItems.map((item) => (
                <li key={item.href || item.label} className="group relative">
                  {item.submenu ? (
                    <button
                      className="text-sm font-semibold uppercase tracking-wider text-white transition-colors hover:text-gold"
                    >
                      {item.label}
                    </button>
                  ) : (
                    <Link
                      href={item.href}
                      className="text-sm font-semibold uppercase tracking-wider text-white transition-colors hover:text-gold"
                    >
                      {item.label}
                    </Link>
                  )}
                  
                  {/* Submenu (se existir) */}
                  {item.submenu && (
                    <ul className="absolute left-0 top-full hidden w-64 border-2 border-gold/20 bg-bg-dark pt-2 shadow-lg group-hover:block">
                      {item.submenu.map((subitem) => (
                        <li key={subitem.href}>
                          <Link
                            href={subitem.href}
                            className="block px-6 py-3 text-sm text-white transition-colors hover:bg-gold/10 hover:text-gold"
                          >
                            {subitem.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
              
              {/* CTA Button */}
              <li>
                <a
                  href="https://wa.me/5521973907869"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-gold px-6 py-2 text-sm font-semibold uppercase tracking-wider text-bg-black transition-all hover:bg-gold-light hover:shadow-gold-glow"
                >
                  Agendar Consulta
                </a>
              </li>
            </ul>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-white transition-colors hover:text-gold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
            aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav id="mobile-menu" className="border-t border-gold/20 py-4 lg:hidden" aria-label="Navegação móvel">
            <ul className="space-y-4">
              {menuItems.map((item) => (
                <li key={item.href || item.label}>
                  {!item.submenu && (
                    <Link
                      href={item.href}
                      onClick={() => setIsMenuOpen(false)}
                      className="block text-sm font-semibold uppercase tracking-wider text-white transition-colors hover:text-gold"
                    >
                      {item.label}
                    </Link>
                  )}
                  
                  {item.submenu && (
                    <div>
                      <span className="block text-sm font-semibold uppercase tracking-wider text-white">
                        {item.label}
                      </span>
                      <ul className="mt-2 ml-4 space-y-2 border-l-2 border-gold/20 pl-4">
                        {item.submenu.map((subitem) => (
                          <li key={subitem.href}>
                            <Link
                              href={subitem.href}
                              onClick={() => setIsMenuOpen(false)}
                              className="block text-sm text-white/70 transition-colors hover:text-gold"
                            >
                              {subitem.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </li>
              ))}
              
              {/* Mobile CTA */}
              <li className="pt-4">
                <a
                  href="https://wa.me/5521973907869"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-gold px-6 py-3 text-center text-sm font-semibold uppercase tracking-wider text-bg-black transition-all hover:bg-gold-light"
                >
                  Agendar Consulta
                </a>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
}
