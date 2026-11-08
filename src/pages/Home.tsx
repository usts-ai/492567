import React, { useMemo, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";
import LoginModal from "../components/LoginModal";
import {
  categories,
  heroImage,
  products,
  showcaseImage,
} from "../data/products";

const Home: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState<"login" | "access">("login");
  const [activeCategory, setActiveCategory] = useState<string>("Tous");
  const [query, setQuery] = useState("");

  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 600], [0, 180]);
  const heroOpacity = useTransform(scrollY, [0, 500], [1, 0.35]);
  const titleY = useTransform(scrollY, [0, 400], [0, -60]);

  const filtered = useMemo(() => {
    return products.filter((p) => {
      const catOk =
        activeCategory === "Tous" || p.category === activeCategory;
      const q = query.trim().toLowerCase();
      const searchOk =
        !q ||
        p.name.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q);
      return catOk && searchOk;
    });
  }, [activeCategory, query]);

  const openLogin = () => {
    setModalMode("login");
    setModalOpen(true);
  };

  const openAccess = () => {
    setModalMode("access");
    setModalOpen(true);
  };

  const handleAuthSuccess = () => {
    setIsLoggedIn(true);
    setModalOpen(false);
  };

  return (
    <div id="top" className="min-h-screen bg-[#050505] text-white overflow-x-hidden">
      <Header
        isLoggedIn={isLoggedIn}
        onLoginClick={openLogin}
        onLogout={() => setIsLoggedIn(false)}
      />

      <section className="relative h-[100svh] min-h-[560px] flex items-end overflow-hidden">
        <motion.div style={{ y: heroY }} className="absolute inset-0">
          <img
            src={heroImage}
            alt="Salon professionnel FORMA"
            className="w-full h-full object-cover scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/35 to-[#050505]" />
          <div
            className="absolute inset-0 opacity-40"
            style={{
              background:
                "linear-gradient(120deg, rgba(230,0,35,0.35) 0%, transparent 40%, rgba(255,111,0,0.2) 100%)",
            }}
          />
        </motion.div>

        <motion.div
          style={{ opacity: heroOpacity, y: titleY }}
          className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 sm:pb-24"
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="text-[10px] sm:text-xs tracking-[0.35em] uppercase text-[#FF6F00] mb-4"
          >
            Catalogue canapés · Clientèle professionnelle
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
            className="text-[12vw] sm:text-7xl lg:text-8xl leading-[0.9] font-bold max-w-4xl"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            FORMA
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.7 }}
            className="mt-4 sm:mt-6 max-w-xl text-base sm:text-lg text-white/70 leading-relaxed"
          >
            Modèles d{"'"}assise sélectionnés pour hôtels, bureaux et projets
            d{"'"}aménagement. Les tarifs apparaissent après connexion
            professionnelle.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.75, duration: 0.6 }}
            className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4"
          >
            <a
              href="#collection"
              className="inline-flex items-center justify-center px-7 py-3.5 text-xs tracking-[0.2em] uppercase bg-[#E60023] text-white hover:bg-[#FF6F00] transition-colors duration-300"
            >
              Explorer la collection
            </a>
            <button
              type="button"
              onClick={openAccess}
              className="inline-flex items-center justify-center px-7 py-3.5 text-xs tracking-[0.2em] uppercase border border-white/30 text-white hover:border-[#E60023] hover:text-[#E60023] transition-colors duration-300"
            >
              Demander un accès
            </button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-6 right-6 hidden sm:flex flex-col items-center gap-2 text-white/40"
        >
          <span className="text-[10px] tracking-[0.3em] uppercase rotate-90 origin-center mb-8">
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.6 }}
            className="w-[1px] h-10 bg-gradient-to-b from-white/50 to-transparent"
          />
        </motion.div>
      </section>

      <section className="relative py-16 sm:py-24 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-10">
            {[
              { value: "120+", label: "Modèles référencés" },
              { value: "B2B", label: "Tarifs protégés" },
              { value: "48h", label: "Validation compte" },
              { value: "EU", label: "Livraison réseaux pro" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="text-center lg:text-left"
              >
                <p
                  className="text-3xl sm:text-4xl text-[#E60023] font-bold"
                  style={{ fontFamily: "'Syne', sans-serif" }}
                >
                  {stat.value}
                </p>
                <p className="mt-1 text-xs sm:text-sm text-white/45 tracking-wide">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="categories" className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative overflow-hidden aspect-[4/5] sm:aspect-[5/4] lg:aspect-[4/5]"
            >
              <img
                src={showcaseImage}
                alt="Intérieur contemporain"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-black/50 to-transparent" />
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "40%" }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="absolute bottom-6 left-6 h-[2px] bg-[#E60023]"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <p className="text-[10px] tracking-[0.3em] uppercase text-[#FF6F00] mb-3">
                Expérience pro
              </p>
              <h2
                className="text-3xl sm:text-5xl font-bold leading-tight mb-5"
                style={{ fontFamily: "'Syne', sans-serif" }}
              >
                Des canapés pensés pour les projets exigeants
              </h2>
              <p className="text-white/55 leading-relaxed mb-8">
                Parcourez le catalogue, filtrez par typologie et consultez les
                fiches détaillées. Les prix HT restent masqués jusqu{"'"}à la
                validation de votre identifiant professionnel.
              </p>
              <ul className="space-y-4">
                {[
                  "Fiches produits complètes : tissus, dimensions, usages",
                  "Recherche rapide par modèle et catégorie",
                  "Affichage des tarifs uniquement après connexion",
                ].map((item, i) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: 16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.15 * i }}
                    className="flex items-start gap-3 text-sm text-white/75"
                  >
                    <span className="mt-1.5 w-1.5 h-1.5 shrink-0 bg-[#E60023]" />
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="collection" className="py-16 sm:py-24 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-10">
            <div>
              <p className="text-[10px] tracking-[0.3em] uppercase text-[#E60023] mb-3">
                Collection
              </p>
              <h2
                className="text-3xl sm:text-5xl font-bold"
                style={{ fontFamily: "'Syne', sans-serif" }}
              >
                Modèles phares
              </h2>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
              <div className="relative flex-1 sm:min-w-[220px]">
                <input
                  type="search"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Rechercher un modèle..."
                  className="w-full bg-white/5 border border-white/10 px-4 py-3 text-sm text-white placeholder:text-white/30 outline-none focus:border-[#E60023] transition-colors"
                />
              </div>
              {!isLoggedIn && (
                <button
                  type="button"
                  onClick={openLogin}
                  className="px-5 py-3 text-xs tracking-[0.15em] uppercase border border-[#FF6F00]/50 text-[#FF6F00] hover:bg-[#FF6F00] hover:text-black transition-colors"
                >
                  Voir les tarifs
                </button>
              )}
            </div>
          </div>

          <div className="flex gap-2 overflow-x-auto pb-4 mb-8 scrollbar-hide -mx-4 px-4 sm:mx-0 sm:px-0">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`shrink-0 px-4 py-2 text-xs tracking-wide uppercase transition-all duration-300 ${
                  activeCategory === cat
                    ? "bg-[#E60023] text-white"
                    : "bg-white/5 text-white/60 hover:text-white hover:bg-white/10"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {isLoggedIn && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              className="mb-8 flex items-center gap-3 px-4 py-3 bg-[#4CAF50]/10 border border-[#4CAF50]/30"
            >
              <span className="w-2 h-2 rounded-full bg-[#4CAF50] animate-pulse" />
              <p className="text-sm text-[#4CAF50]">
                Compte professionnel actif — tarifs HT affichés
              </p>
            </motion.div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5">
            {filtered.map((product, index) => (
              <ProductCard
                key={product.id}
                product={product}
                isLoggedIn={isLoggedIn}
                index={index}
                onAskAccess={openAccess}
              />
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="text-center text-white/40 py-16">
              Aucun modèle ne correspond à votre recherche.
            </p>
          )}
        </div>
      </section>

      <section id="acces" className="relative py-20 sm:py-28 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, #111 0%, #1a0508 45%, #1a0f05 100%)",
          }}
        />
        <div
          className="absolute -top-32 -right-32 w-96 h-96 rounded-full opacity-30 blur-3xl"
          style={{ background: "#E60023" }}
        />
        <div
          className="absolute -bottom-40 -left-20 w-80 h-80 rounded-full opacity-20 blur-3xl"
          style={{ background: "#FF6F00" }}
        />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[10px] tracking-[0.3em] uppercase text-[#FF6F00] mb-4"
          >
            Accès professionnel
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-bold mb-5"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            Débloquez les tarifs B2B
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/55 max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Connectez-vous avec votre identifiant ou demandez la création d{"'"}un
            compte. Après validation par notre équipe, chaque fiche produit
            révèle son tarif HT.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4"
          >
            <button
              type="button"
              onClick={openLogin}
              className="px-8 py-4 text-xs tracking-[0.2em] uppercase bg-[#E60023] text-white hover:bg-[#FF6F00] transition-colors duration-300"
            >
              Se connecter
            </button>
            <button
              type="button"
              onClick={openAccess}
              className="px-8 py-4 text-xs tracking-[0.2em] uppercase border border-white/25 text-white hover:border-white transition-colors duration-300"
            >
              Créer un accès
            </button>
          </motion.div>

          <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
            {[
              {
                step: "01",
                title: "Parcourir",
                text: "Explorez les modèles sans afficher les prix.",
              },
              {
                step: "02",
                title: "Demander",
                text: "Soumettez votre accès professionnel.",
              },
              {
                step: "03",
                title: "Consulter",
                text: "Visualisez les tarifs HT une fois validé.",
              },
            ].map((s, i) => (
              <motion.div
                key={s.step}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * i }}
                className="p-5 border border-white/10 bg-white/[0.03] hover:border-[#E60023]/50 transition-colors duration-300"
              >
                <p className="text-[#E60023] text-xs tracking-[0.2em] mb-3">
                  {s.step}
                </p>
                <h3
                  className="text-lg mb-2"
                  style={{ fontFamily: "'Syne', sans-serif" }}
                >
                  {s.title}
                </h3>
                <p className="text-sm text-white/45">{s.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />

      <LoginModal
        open={modalOpen}
        mode={modalMode}
        onClose={() => setModalOpen(false)}
        onLogin={handleAuthSuccess}
      />
    </div>
  );
};

export default Home;
