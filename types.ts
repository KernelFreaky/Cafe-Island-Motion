export interface MenuItem {
  id: number;
  title: string;
  price: string;
  image: string;
  description?: string;
}

export interface Review {
  id: number;
  name: string;
  text: string;
  rating: number;
}

export interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  caption?: string;
}