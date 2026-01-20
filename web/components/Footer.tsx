"use client";

import { MapPin, Phone, Mail, Clock } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-gold/20 bg-bg-dark text-white" role="contentinfo">
      <div className="container-max py-16">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Sobre */}
          <div className="space-y-4">
            <h3 className="font-serif text-xl font-bold text-gold">Dr. Sergio Lins</h3>
            <p className="text-sm leading-relaxed text-white/70">
              Ginecologia e Obstetrícia com dedicação exclusiva à saúde da mulher.
              Atendimento técnico, acolhedor e humanizado.
            </p>
          </div>

          {/* Links Rápidos */}
          <div className="space-y-4">
            <h3 className="font-serif text-xl font-bold text-gold">Links Rápidos</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/sobre" className="text-white/70 transition-colors hover:text-gold">
                  Sobre o Dr. Sérgio
                </Link>
              </li>
              <li>
                <Link href="/histeroscopia" className="text-white/70 transition-colors hover:text-gold">
                  Histeroscopia
                </Link>
              </li>
              <li>
                <Link href="/infertilidade" className="text-white/70 transition-colors hover:text-gold">
                  Infertilidade
                </Link>
              </li>
              <li>
                <Link href="/pre-natal" className="text-white/70 transition-colors hover:text-gold">
                  Pré-Natal
                </Link>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div className="space-y-4">
            <h3 className="font-serif text-xl font-bold text-gold">Contato</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <Phone className="mt-1 h-4 w-4 flex-shrink-0 text-gold" />
                <a 
                  href="https://wa.me/5521973907869" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 transition-colors hover:text-gold"
                >
                  (21) 97390-7869
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="mt-1 h-4 w-4 flex-shrink-0 text-gold" />
                <span className="text-white/70">clinicasvlins@gmail.com</span>
              </li>
            </ul>
          </div>

          {/* Horário */}
          <div className="space-y-4">
            <h3 className="font-serif text-xl font-bold text-gold">Horário</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <Clock className="mt-1 h-4 w-4 flex-shrink-0 text-gold" />
                <div className="text-white/70">
                  <p>Segunda a Sexta</p>
                  <p className="text-xs">Agendamento via WhatsApp</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gold/20 bg-bg-black py-6">
        <div className="container-max">
          <p className="text-center text-sm text-white/50">
            © {new Date().getFullYear()} Clínica SVLins. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
