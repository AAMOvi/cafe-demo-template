export type OpeningHours = {
  display: string;
  note?: string;
};

export type MenuItem = {
  name: string;
  price?: string;
  description?: string;
};

export type ReviewHighlight = {
  text: string;
  author?: string;
};

export type BrandStyle = {
  theme: 'dark' | 'warm' | 'minimal';
  primaryColor: string;
  accentColor: string;
  font: 'inter' | 'playfair' | 'lora';
  rounded: 'none' | 'md' | 'xl' | 'full';
  imageStyle: 'grid' | 'large' | 'minimal';
};

export type CafeImages = {
  hero: string;
  gallery: string[];
};

export type Cafe = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  city: string;
  area: string;
  address: string;
  rating: number;
  reviewCount: number;
  priceRange?: 'AED' | 'AED AED' | 'AED AED AED';
  popularItems: MenuItem[];
  goodForTags: string[];
  reviewHighlights: ReviewHighlight[];
  openingHours: OpeningHours;
  phone: string;
  whatsapp?: string;
  whatsappMessage?: string;
  instagramUrl: string;
  googleMapsUrl: string;
  googleMapsEmbedUrl?: string;
  images: CafeImages;
  language: 'en' | 'ar';
  direction: 'ltr' | 'rtl';
  brandStyle: BrandStyle;
};
