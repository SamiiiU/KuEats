import { Canteen, MenuItem, Offer } from '../types';

export const mockCanteens: Canteen[] = [
  {
    id: 'canteen-1',
    name: 'Central Canteen',
    deliveryTime: '~15 mins',
    isOpen: true,
    image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 4.5
  },
  {
    id: 'canteen-2',
    name: 'Engineering Block Cafe',
    deliveryTime: '~12 mins',
    isOpen: true,
    image: 'https://images.pexels.com/photos/1307698/pexels-photo-1307698.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 4.2
  },
  {
    id: 'canteen-3',
    name: 'Library Snack Bar',
    deliveryTime: '~8 mins',
    isOpen: false,
    image: 'https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 4.0
  },
  {
    id: 'canteen-4',
    name: 'Hostel Food Court',
    deliveryTime: '~20 mins',
    isOpen: true,
    image: 'https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 4.3
  }
];

export const mockMenuItems: Record<string, MenuItem[]> = {
  'canteen-1': [
    {
      id: 'item-1',
      name: 'Chicken Biryani',
      price: 120,
      image: 'https://images.pexels.com/photos/1893556/pexels-photo-1893556.jpeg?auto=compress&cs=tinysrgb&w=300',
      category: 'Main Course',
      description: 'Aromatic basmati rice with tender chicken pieces',
      isAvailable: true
    },
    {
      id: 'item-2',
      name: 'Veg Thali',
      price: 80,
      image: 'https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=300',
      category: 'Main Course',
      description: 'Complete vegetarian meal with dal, sabzi, roti, and rice',
      isAvailable: true
    },
    {
      id: 'item-3',
      name: 'Masala Chai',
      price: 15,
      image: 'https://images.pexels.com/photos/1638280/pexels-photo-1638280.jpeg?auto=compress&cs=tinysrgb&w=300',
      category: 'Beverages',
      description: 'Hot spiced tea with milk',
      isAvailable: true
    },
    {
      id: 'item-4',
      name: 'Samosa',
      price: 25,
      image: 'https://images.pexels.com/photos/14477/pexels-photo-14477.jpeg?auto=compress&cs=tinysrgb&w=300',
      category: 'Snacks',
      description: 'Crispy fried pastry with spiced potato filling',
      isAvailable: false
    }
  ],
  'canteen-2': [
    {
      id: 'item-5',
      name: 'Club Sandwich',
      price: 90,
      image: 'https://images.pexels.com/photos/1633525/pexels-photo-1633525.jpeg?auto=compress&cs=tinysrgb&w=300',
      category: 'Snacks',
      description: 'Triple-layered sandwich with chicken, lettuce, and tomato',
      isAvailable: true
    },
    {
      id: 'item-6',
      name: 'Cold Coffee',
      price: 45,
      image: 'https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?auto=compress&cs=tinysrgb&w=300',
      category: 'Beverages',
      description: 'Chilled coffee with ice cream and whipped cream',
      isAvailable: true
    },
    {
      id: 'item-7',
      name: 'Pasta',
      price: 110,
      image: 'https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=300',
      category: 'Main Course',
      description: 'Creamy white sauce pasta with vegetables',
      isAvailable: true
    }
  ],
  'canteen-3': [
    {
      id: 'item-8',
      name: 'Maggi Noodles',
      price: 35,
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=300',
      category: 'Snacks',
      description: 'Instant noodles with vegetables and spices',
      isAvailable: true
    },
    {
      id: 'item-9',
      name: 'Fresh Lime Soda',
      price: 30,
      image: 'https://images.pexels.com/photos/1233319/pexels-photo-1233319.jpeg?auto=compress&cs=tinysrgb&w=300',
      category: 'Beverages',
      description: 'Refreshing lime juice with soda water',
      isAvailable: true
    }
  ],
  'canteen-4': [
    {
      id: 'item-10',
      name: 'Paneer Butter Masala',
      price: 140,
      image: 'https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg?auto=compress&cs=tinysrgb&w=300',
      category: 'Main Course',
      description: 'Rich and creamy paneer curry with butter and tomatoes',
      isAvailable: true
    },
    {
      id: 'item-11',
      name: 'Gulab Jamun',
      price: 40,
      image: 'https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg?auto=compress&cs=tinysrgb&w=300',
      category: 'Desserts',
      description: 'Sweet milk dumplings in sugar syrup',
      isAvailable: true
    }
  ]
};

export const mockOffers: Offer[] = [
  {
    id: 'offer-1',
    title: 'Student Special',
    description: 'Get 20% off on orders above ₹100',
    image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400',
    discount: '20% OFF'
  },
  {
    id: 'offer-2',
    title: 'Weekend Combo',
    description: 'Buy 2 meals and get 1 free beverage',
    image: 'https://images.pexels.com/photos/1307698/pexels-photo-1307698.jpeg?auto=compress&cs=tinysrgb&w=400',
    discount: 'FREE DRINK'
  },
  {
    id: 'offer-3',
    title: 'First Order',
    description: 'New users get ₹50 off on first order',
    image: 'https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg?auto=compress&cs=tinysrgb&w=400',
    discount: '₹50 OFF'
  }
];

export const departments = [
  'Computer Science',
  'Engineering',
  'Business Administration',
  'Medicine',
  'Law',
  'Arts & Social Sciences',
  'Sciences',
  'Architecture',
  'Education',
  'Other'
];