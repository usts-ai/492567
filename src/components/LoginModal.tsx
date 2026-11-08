import React from "react";
import { AnimatePresence, motion } from "framer-motion";

type LoginModalProps = {
  open: boolean;
  mode: "login" | "access";
  onClose: () => void;
  onLogin: () => void;
};

const LoginModal: React.FC<LoginModalProps> = ({
  open,
  mode,
  onClose,
  onLogin,
}) => {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center p-0 sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.button
            type="button"
            aria-label="Fermer"
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          <motion.div
            initial={{ y: 60, opacity: 0, scale: 0.98 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 40, opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full sm:max-w-md bg-[#0a0a0a] border border-white/10 p-6 sm:p-8 shadow-2xl"
          >
            <button
              type="button"
              onClick={onClose}
              className="absolute top-4 right-4 text-white/40 hover:text-white transition-colors"
              aria-label="Fermer"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>

            <p className="text-[10px] tracking-[0.25em] uppercase text-[#E60023] mb-2">
              {mode === "login" ? "Espace professionnel" : "Demande d'accès"}
            </p>
            <h2
              className="text-2xl sm:text-3xl text-white mb-2"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              {mode === "login" ? "Connexion B2B" : "Obtenir un accès"}
            </h2>
            <p className="text-sm text-white/50 mb-6">
              {mode === "login"
                ? "Les tarifs HT sont visibles uniquement pour les comptes professionnels validés."
                : "Remplissez cette demande visuelle. Un conseiller validera votre compte professionnel."}
            </p>

            <div className="space-y-3 mb-6">
              {mode === "access" && (
                <input
                  type="text"
                  placeholder="Nom de l'entreprise"
                  readOnly
                  className="w-full bg-white/5 border border-white/10 px-4 py-3 text-sm text-white placeholder:text-white/30 outline-none focus:border-[#E60023] transition-colors"
                />
              )}
              <input
                type="email"
                placeholder="Identifiant professionnel"
                readOnly
                className="w-full bg-white/5 border border-white/10 px-4 py-3 text-sm text-white placeholder:text-white/30 outline-none focus:border-[#E60023] transition-colors"
              />
              {mode === "login" && (
                <input
                  type="password"
                  placeholder="Mot de passe"
                  readOnly
                  defaultValue="••••••••"
                  className="w-full bg-white/5 border border-white/10 px-4 py-3 text-sm text-white placeholder:text-white/30 outline-none focus:border-[#E60023] transition-colors"
                />
              )}
            </div>

            <button
              type="button"
              onClick={onLogin}
              className="w-full py-3.5 text-xs tracking-[0.2em] uppercase bg-[#E60023] text-white hover:bg-[#FF6F00] transition-colors duration-300"
            >
              {mode === "login" ? "Se connecter" : "Envoyer la demande"}
            </button>

            <p className="mt-4 text-center text-xs text-white/35">
              Démo visuelle — aucune donnée n{"'"}est transmise
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoginModal;
