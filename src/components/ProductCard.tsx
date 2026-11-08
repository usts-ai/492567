import React from "react";
import { motion } from "framer-motion";
import type { Product } from "../data/products";

type ProductCardProps = {
  product: Product;
  isLoggedIn: boolean;
  index: number;
  onAskAccess: () => void;
};

const ProductCard: React.FC<ProductCardProps> = ({
  product,
  isLoggedIn,
  index,
  onAskAccess,
}) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.55, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
      className="group relative"
    >
      <div className="relative overflow-hidden aspect-[4/5] bg-[#111]">
        <motion.img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.08 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />

        <div className="absolute top-3 left-3">
          <span className="text-[10px] tracking-[0.18em] uppercase px-2.5 py-1 bg-black/50 text-white/90 backdrop-blur-sm">
            {product.category}
          </span>
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5">
          <h3
            className="text-xl sm:text-2xl text-white mb-1"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            {product.name}
          </h3>
          <p className="text-xs sm:text-sm text-white/60 mb-3 line-clamp-2">
            {product.description}
          </p>
          <div className="flex items-end justify-between gap-3">
            <div>
              {isLoggedIn ? (
                <motion.p
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-lg sm:text-xl font-semibold text-white"
                >
                  {product.price.toLocaleString("fr-FR")} €
                  <span className="text-xs font-normal text-white/50 ml-1">
                    HT
                  </span>
                </motion.p>
              ) : (
                <button
                  type="button"
                  onClick={onAskAccess}
                  className="flex items-center gap-2 text-sm text-white/70 hover:text-[#FF6F00] transition-colors"
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <rect x="3" y="11" width="18" height="11" rx="2" />
                    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                  </svg>
                  Tarif réservé
                </button>
              )}
              <p className="text-[10px] text-white/40 mt-1 tracking-wide">
                {product.fabric} · {product.dimensions}
              </p>
            </div>
            <motion.button
              type="button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              className="shrink-0 w-10 h-10 border border-white/30 text-white flex items-center justify-center hover:bg-[#E60023] hover:border-[#E60023] transition-colors duration-300"
              aria-label="Voir le modèle"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </motion.button>
          </div>
        </div>
      </div>
    </motion.article>
  );
};

export default ProductCard;
