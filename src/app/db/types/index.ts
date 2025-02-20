export interface User {
  _id: string;
  name: string;
  email: string;
  password: string;
  type: string;
  registration_dt: string;
}

export interface Review {
  _id: string;
  product_id: string;
  description: string;
  rating: number;
  created_at: Date;
}

export interface Product {
  _id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  reviews: Review[];
  created_at: Date;
  owner_id: string;
}
