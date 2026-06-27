import { Cafe } from '@/types/cafe'

const cafes: Cafe[] = [
  {
    slug: 'sample-cafe',
    name: 'Sands & Brews',
    tagline: 'Artisan coffee rooted in UAE tradition',
    description:
      "A warm, modern specialty cafe tucked in the heart of Dubai Marina. We source single-origin beans from across the Middle East and serve them alongside house-baked pastries inspired by Emirati flavours. Whether you're here for a quiet morning espresso or a long afternoon catch-up, Sands & Brews is your home away from home.",
    city: 'Dubai',
    area: 'Dubai Marina',
    address: 'Marina Walk, Shop 12, Dubai Marina, Dubai, UAE',
    rating: 4.8,
    reviewCount: 312,
    priceRange: 'AED AED',
    popularItems: [
      {
        name: 'Signature Date Latte',
        price: 'AED 28',
        description: 'Espresso, steamed milk, Medjool date syrup',
      },
      {
        name: 'Cardamom Cold Brew',
        price: 'AED 32',
        description: '18-hour cold brew with cardamom simple syrup',
      },
      {
        name: 'Saffron Croissant',
        price: 'AED 18',
        description: 'Flaky butter croissant with saffron cream',
      },
      {
        name: 'Halloumi Toast',
        price: 'AED 38',
        description: "Sourdough, grilled halloumi, za'atar honey",
      },
      {
        name: 'Flat White',
        price: 'AED 22',
        description: 'Double ristretto, silky steamed milk',
      },
      {
        name: 'Pistachio Knafeh',
        price: 'AED 25',
        description: 'House-made, warm, served with cream',
      },
    ],
    goodForTags: [
      'Specialty Coffee',
      'Brunch',
      'Remote Work',
      'Date Spot',
      'Pastries',
      'Instagrammable',
    ],
    reviewHighlights: [
      {
        text: 'Customers often mention the signature date latte — a standout drink that keeps people coming back.',
      },
      {
        text: 'Customers often mention how easy it is to spend hours here, thanks to the relaxed atmosphere and attentive staff.',
      },
      {
        text: 'Customers often mention the consistency — high-quality drinks and a welcoming experience every visit.',
      },
    ],
    openingHours: {
      display: 'Daily 8:00 AM – 11:00 PM',
      note: 'Closed on select public holidays',
    },
    phone: '+971 50 123 4567',
    whatsapp: '+971501234567',
    whatsappMessage: "Hi, I'd like to know more about Sands & Brews!",
    instagramUrl: 'https://www.instagram.com/',
    googleMapsUrl: 'https://maps.google.com/',
    googleMapsEmbedUrl: '',
    images: {
      hero: 'https://picsum.photos/seed/cafe-hero/1200/800',
      gallery: [
        'https://picsum.photos/seed/cafe-g1/800/600',
        'https://picsum.photos/seed/cafe-g2/800/600',
        'https://picsum.photos/seed/cafe-g3/800/600',
      ],
    },
    language: 'en',
    direction: 'ltr',
    brandStyle: {
      theme: 'warm',
      primaryColor: '#2c1810',
      accentColor: '#c8a97e',
      font: 'playfair',
      rounded: 'md',
      imageStyle: 'grid',
    },
  },
  {
    slug: 'fairmont-cafe-sharjah',
    name: 'Fairmont Cafe',
    tagline: 'A 24-hour Sharjah coffee spot for desserts, coffee, and late-night cravings.',
    description:
      'Fairmont Cafe is a popular 24-hour coffee shop in Sharjah, known for desserts, coffee, waffles, pistachio milk cake, and a relaxed atmosphere. Guests often mention the friendly staff, quality desserts, smooth coffee, and the convenience of being open late at night.',
    city: 'Sharjah',
    area: 'Al Sharq',
    address: 'Shop no.13 - Al Sharq St - Sharjah - United Arab Emirates',
    rating: 4.6,
    reviewCount: 865,
    priceRange: 'AED AED',
    popularItems: [
      {
        name: 'Pistachio Milk Cake',
        description: 'A popular dessert highlight mentioned by many guests.',
      },
      {
        name: 'Nutella Waffle',
        description: 'Sweet waffle option for dessert lovers.',
      },
      {
        name: 'Acai Bowl',
        description: 'A lighter cafe option from the menu highlights.',
      },
      {
        name: 'Pistachio Shake',
        description: 'A rich pistachio drink recommended by guests.',
      },
      {
        name: 'Lava Cake',
        description: 'Chocolate dessert option mentioned in reviews.',
      },
      {
        name: 'Coffee',
        description: 'Smooth brewed coffee served throughout the day.',
      },
      {
        name: 'Kunafa',
        description: 'Dessert item frequently mentioned by customers.',
      },
      {
        name: 'Muffins',
        description: 'Fresh soft muffins paired with coffee.',
      },
    ],
    goodForTags: [
      '24 Hours',
      'Desserts',
      'Coffee',
      'Late Night',
      'Waffles',
      'Sharjah Cafe',
    ],
    reviewHighlights: [
      {
        text: 'Customers often mention the pistachio milk cake, waffles, kunafa, and desserts.',
      },
      {
        text: 'Guests highlight the friendly staff and hospitable service.',
      },
      {
        text: 'The cafe is appreciated as a 24-hour spot for late-night coffee and desserts.',
      },
      {
        text: 'Visitors describe the atmosphere as relaxing and suitable for casual visits.',
      },
    ],
    openingHours: {
      display: 'Open 24 hours',
      note: 'Confirm exact holiday hours with the cafe before final launch.',
    },
    phone: '+971 6 551 1177',
    whatsapp: undefined,
    whatsappMessage: 'Hi Fairmont Cafe, I would like to know more about your menu.',
    instagramUrl: 'https://www.instagram.com/fairmont_cafe/?hl=en',
    googleMapsUrl: 'https://maps.app.goo.gl/Wmdp1xJofmDkPEdS7',
    googleMapsEmbedUrl: undefined,
    images: {
      hero: 'https://picsum.photos/seed/fairmont-cafe-hero/1200/800',
      gallery: [
        'https://picsum.photos/seed/fairmont-cafe-1/800/600',
        'https://picsum.photos/seed/fairmont-cafe-2/800/600',
        'https://picsum.photos/seed/fairmont-cafe-3/800/600',
      ],
    },
    language: 'en',
    direction: 'ltr',
    brandStyle: {
      theme: 'warm',
      primaryColor: '#2b2118',
      accentColor: '#b88954',
      font: 'lora',
      rounded: 'xl',
      imageStyle: 'large',
    },
  },
]

export function getCafeBySlug(slug: string): Cafe | undefined {
  return cafes.find((c) => c.slug === slug)
}

export function getAllSlugs(): string[] {
  return cafes.map((c) => c.slug)
}
