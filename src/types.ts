
export interface Review {
  id: number;
  author: string;
  rating: number;
  comment: string;
}

export interface MysteryBox {
  id: number;
  category: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  detailedDescription: string;
  possibleItems: string[];
  reviews: Review[];
}

export interface CustomerInfo {
  name: string;
  mobile: string;
  address: string;
  email: string;
}

export enum Page {
  Home,
  Details,
  Address,
  Payment,
  Success,
}