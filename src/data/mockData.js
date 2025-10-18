export const canteens = [
  { id: 'canteen-1', name: 'Main Campus Canteen', eta: '~15 mins', open: true },
  { id: 'canteen-2', name: 'North Block Canteen', eta: '~20 mins', open: true },
  { id: 'canteen-3', name: 'Library Cafe', eta: '~10 mins', open: false },
];

export const menus = {
  'canteen-1': [
    { id: 'm1', canteenId: 'canteen-1', name: 'Veg Sandwich', price: 60, image: 'https://picsum.photos/seed/sandwich/400/300' },
    { id: 'm2', canteenId: 'canteen-1', name: 'Cold Coffee', price: 80, image: 'https://picsum.photos/seed/coffee/400/300' },
    { id: 'm3', canteenId: 'canteen-1', name: 'Samosa', price: 20, image: 'https://picsum.photos/seed/samosa/400/300' },
  ],
  'canteen-2': [
    { id: 'n1', canteenId: 'canteen-2', name: 'Masala Dosa', price: 120, image: 'https://picsum.photos/seed/dosa/400/300' },
    { id: 'n2', canteenId: 'canteen-2', name: 'Tea', price: 20, image: 'https://picsum.photos/seed/tea/400/300' },
    { id: 'n3', canteenId: 'canteen-2', name: 'Poha', price: 50, image: 'https://picsum.photos/seed/poha/400/300' },
  ],
  'canteen-3': [
    { id: 'l1', canteenId: 'canteen-3', name: 'Blueberry Muffin', price: 90, image: 'https://picsum.photos/seed/muffin/400/300' },
    { id: 'l2', canteenId: 'canteen-3', name: 'Hot Chocolate', price: 100, image: 'https://picsum.photos/seed/chocolate/400/300' },
  ],
};
