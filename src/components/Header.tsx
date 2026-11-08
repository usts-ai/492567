import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

type HeaderProps = {
  isLoggedIn: boolean;
  onLoginClick: () => void;
  onLogout: () => void;
};

const navLinks = [
  { label: "Collection", href: "#collection" },
  { label: "Catégories", href: "#categories" },
  { label: "Accès pro", href: "#acces" },
  { label: "Contact", href: "#contact" },
];

const Header: React.FC<HeaderProps> = ({
  isLoggedIn,
  onLoginClick,
  onLogout,
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-black/90 backdrop-blur-md border-b border-white/10 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <a href="#top" className="group flex items-baseline gap-1">
          <span
            className="text-2xl sm:text-3xl font-bold tracking-tight text-white"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            FORMA
          </span>
          <span className="text-[10px] sm:text-xs tracking-[0.25em] uppercase text-[#E60023] group-hover:tracking-[0.35em] transition-all duration-300">
            B2B
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative text-sm tracking-wide text-white/80 hover:text-white transition-colors duration-300 group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#E60023] group-hover:w-full transition-all duration-400" />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          {isLoggedIn ? (
            <button
              type="button"
              onClick={onLogout}
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 text-xs tracking-widest uppercase border border-[#4CAF50]/60 text-[#4CAF50] hover:bg-[#4CAF50] hover:text-black transition-all duration-300"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#4CAF50] animate-pulse" />
              Compte pro
            </button>
          ) : (
            <button
              type="button"
              onClick={onLoginClick}
              className="hidden sm:inline-flex px-5 py-2.5 text-xs tracking-widest uppercase bg-[#E60023] text-white hover:bg-[#FF6F00] transition-colors duration-300"
            >
              Espace pro
            </button>
          )}

          <button
            type="button"
            aria-label="Menu"
            onClick={() => setMenuOpen((v) => !v)}
            className="lg:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5"
          >
            <motion.span
              animate={menuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
              className="block w-6 h-[1.5px] bg-white origin-center"
            />
            <motion.span
              animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
              className="block w-6 h-[1.5px] bg-white"
            />
            <motion.span
              animate={menuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
              className="block w-6 h-[1.5px] bg-white origin-center"
            />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="lg:hidden overflow-hidden bg-black/95 border-t border-white/10"
          >
            <div className="px-6 py-6 flex flex-col gap-5">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.06 }}
                  className="text-lg text-white/90 hover:text-[#E60023] transition-colors"
                  style={{ fontFamily: "'Syne', sans-serif" }}
                >
                  {link.label}
                </motion.a>
              ))}
              <button
                type="button"
                onClick={() => {
                  setMenuOpen(false);
                  if (isLoggedIn) onLogout();
                  else onLoginClick();
                }}
                className="mt-2 w-full py-3 text-xs tracking-widest uppercase bg-[#E60023] text-white"
              >
                {isLoggedIn ? "Se déconnecter" : "Espace pro"}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
