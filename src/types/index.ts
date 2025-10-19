export interface User {
  id: string;
  name: string;
  department: string;
  role: 'Student' | 'Faculty Member' | 'Teacher';
  created_at: string;
  updated_at: string;
}

export interface Canteen {
  id: string;
  name: string;
  deliveryTime: string;
  isOpen: boolean;
  image: string;
  rating: number;
}

export interface MenuItem {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  description: string;
  isAvailable: boolean;
}

export interface CartItem extends MenuItem {
  quantity: number;
}

export interface Order {
  id: string;
  user_id: string;
  canteen_id: string;
  canteen_name: string;
  items: CartItem[];
  total_amount: number;
  delivery_department: string;
  payment_method: string;
  status: 'Preparing' | 'With Rider' | 'Delivered' | 'Cancelled';
  created_at: string;
  updated_at: string;
}

export interface Offer {
  id: string;
  title: string;
  description: string;
  image: string;
  discount: string;
}