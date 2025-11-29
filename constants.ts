import { MenuItem, Review, GalleryImage } from './types';

// Image Prompts referenced in comments for clarity
// Hero: "Sunny tropical café in Siquijor with wooden furniture..."
// Menu: "Artisan café dish on wooden table..."
// Gallery: "Aesthetic tropical café interior..."

export const MENU_ITEMS: MenuItem[] = [
  {
    id: 1,
    title: "Signature Cappuccino",
    price: "₱263.86",
    image: "/capuccino.jpeg", // Placeholder for coffee
    description: "Espresso with steamed milk and microfoam."
  },
  {
    id: 2,
    title: "Island Breakfast Plate",
    price: "₱250.00",
    image: "/breakfast.jpeg", // Placeholder for breakfast
    description: "Fresh fruits, sourdough, and local eggs."
  },
  {
    id: 3,
    title: "Siquijor Cold Brew",
    price: "₱150.00",
    image: "/brew.jpeg", // Placeholder for cold brew
    description: "Steeped for 24h with a hint of coconut."
  }
];

export const REVIEWS: Review[] = [
  { id: 1, name: "Elena R.", text: "The most peaceful morning of my life. The latte art is perfection.", rating: 5 },
  { id: 2, name: "Marc D.", text: "A hidden gem in Siquijor. The aesthetics are unmatched.", rating: 5 },
  { id: 3, name: "Sarah J.", text: "Feels like time stops here. The breeze, the coffee, everything.", rating: 5 },
  { id: 4, name: "James T.", text: "Incredible design and even better pastries.", rating: 5 },
];

export const GALLERY_IMAGES: GalleryImage[] = [
  { id: 1, src: "/interior.jpeg", alt: "Interior Seating" },
  { id: 2, src: "/barista.jpeg", alt: "Barista Pouring" },
  { id: 3, src: "/patio.jpeg", alt: "Outdoor Patio" },
  { id: 4, src: "/beans.jpeg", alt: "Coffee Beans" },
  { id: 5, src: "/morning.jpeg", alt: "Morning Sun" },
];