export type Product = {
  id: string;
  name: string;
  category: string;
  description: string;
  fabric: string;
  dimensions: string;
  price: number;
  image: string;
  featured?: boolean;
};

export const categories = [
  "Tous",
  "Canapés droits",
  "Canapés d'angle",
  "Modulaires",
  "Fauteuils",
] as const;

export const products: Product[] = [
  {
    id: "1",
    name: "Velours Méridien",
    category: "Canapés droits",
    description:
      "Lignes épurées, assise profonde et velours dense pour les espaces d'accueil haut de gamme.",
    fabric: "Velours côtelé",
    dimensions: "220 x 95 x 82 cm",
    price: 1890,
    image:
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=900&q=80",
    featured: true,
  },
  {
    id: "2",
    name: "Nordic Lounge",
    category: "Canapés droits",
    description:
      "Silhouette scandinave, confort ferme et finitions précises pour les open spaces premium.",
    fabric: "Tissu bouclé",
    dimensions: "210 x 90 x 78 cm",
    price: 1640,
    image:
      "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=900&q=80",
    featured: true,
  },
  {
    id: "3",
    name: "Atelier Angle",
    category: "Canapés d'angle",
    description:
      "Composition d'angle modulable, idéale pour les lounges d'entreprise et suites hôtelières.",
    fabric: "Lin lavé",
    dimensions: "280 x 220 x 80 cm",
    price: 2790,
    image:
      "https://images.unsplash.com/photo-1567016432779-094069958ea5?w=900&q=80",
    featured: true,
  },
  {
    id: "4",
    name: "Cuir Signature",
    category: "Canapés droits",
    description:
      "Cuir pleine fleur, structure renforcée et présence architecturale pour les halls prestige.",
    fabric: "Cuir aniline",
    dimensions: "230 x 98 x 85 cm",
    price: 3490,
    image:
      "https://images.unsplash.com/photo-1540574163026-643ea20ade25?w=900&q=80",
  },
  {
    id: "5",
    name: "Studio Modular",
    category: "Modulaires",
    description:
      "Modules reconfigurables pour adapter rapidement les espaces de réunion et de détente.",
    fabric: "Tissu technique",
    dimensions: "Modules 90 x 90 cm",
    price: 980,
    image:
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=900&q=80",
  },
  {
    id: "6",
    name: "Fauteuil Orbit",
    category: "Fauteuils",
    description:
      "Assise sculpturale, pivot silencieux et finitions soignées pour les espaces VIP.",
    fabric: "Velours mat",
    dimensions: "78 x 82 x 86 cm",
    price: 890,
    image:
      "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=900&q=80",
  },
  {
    id: "7",
    name: "Horizon Soft",
    category: "Canapés d'angle",
    description:
      "Volume généreux, coutures invisibles et confort longue durée pour les salons collectifs.",
    fabric: "Chenille premium",
    dimensions: "300 x 210 x 84 cm",
    price: 3120,
    image:
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=900&q=80",
  },
  {
    id: "8",
    name: "Capsule Club",
    category: "Fauteuils",
    description:
      "Fauteuil club contemporain, densité haute et silhouette assertive pour les bureaux direction.",
    fabric: "Cuir grainé",
    dimensions: "85 x 88 x 90 cm",
    price: 1120,
    image:
      "https://images.unsplash.com/photo-1550254478-ead40cc54513?w=900&q=80",
  },
];

export const heroImage =
  "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1600&q=80";

export const showcaseImage =
  "https://images.unsplash.com/photo-1618220179428-22790b461013?w=1400&q=80";
