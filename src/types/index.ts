export interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  originalPrice?: number;
  image: string;
  badge?: 'sale' | 'new' | 'hot';
  rating: number;
  reviews: number;
  size?: string;
  condition: 'Excellent' | 'Good' | 'Very Good';
  isNew?: boolean;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  count: number;
  gradient: string;
}

export interface Testimonial {
  id: number;
  name: string;
  avatar: string;
  rating: number;
  comment: string;
  location: string;
  date: string;
}
