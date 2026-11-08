import React from "react";
import { motion } from "framer-motion";

const Footer: React.FC = () => {
  const socials = [
    { name: "LinkedIn", href: "#" },
    { name: "Instagram", href: "#" },
    { name: "Pinterest", href: "#" },
  ];

  const links = [
    { label: "Mentions légales", href: "#" },
    { label: "Politique RGPD", href: "#" },
    { label: "Conditions B2B", href: "#" },
    { label: "Demande d'accès", href: "#acces" },
  ];

  return (
    <footer id="contact" className="relative bg-black text-white overflow-hidden">
      <div
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 20% 0%, #E60023 0%, transparent 50%), radial-gradient(ellipse at 80% 100%, #FF6F00 0%, transparent 45%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-14">
          <div>
            <h3
              className="text-3xl font-bold mb-3"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              FORMA
            </h3>
            <p className="text-white/60 text-sm leading-relaxed max-w-xs">
              Mobilier d{"'"}assise professionnel pour architectes, hôteliers et
              aménageurs d{"'"}espaces. Tarifs réservés aux comptes B2B validés.
            </p>
          </div>

          <div>
            <p className="text-xs tracking-[0.2em] uppercase text-[#E60023] mb-4">
              Navigation
            </p>
            <ul className="space-y-3">
              {links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="group inline-flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors duration-300"
                  >
                    <span className="w-0 h-[1px] bg-[#FF6F00] group-hover:w-4 transition-all duration-300" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs tracking-[0.2em] uppercase text-[#E60023] mb-4">
              Réseaux
            </p>
            <div className="flex flex-wrap gap-3 mb-6">
              {socials.map((s) => (
                <motion.a
                  key={s.name}
                  href={s.href}
                  whileHover={{ y: -3, scale: 1.04 }}
                  className="px-4 py-2 border border-white/20 text-xs tracking-wider uppercase text-white/80 hover:border-[#E60023] hover:text-[#E60023] transition-colors duration-300"
                >
                  {s.name}
                </motion.a>
              ))}
            </div>
            <p className="text-sm text-white/50">
              contact@forma-mobilier.fr
              <br />
              +33 1 42 00 00 00
            </p>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/40">
            © 2026 FORMA — Catalogue professionnel B2B
          </p>
          <p className="text-xs text-white/40">
            Prototypes visuels — tarifs sur connexion
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
