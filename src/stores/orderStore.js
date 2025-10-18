import { create } from 'zustand';

export const useOrderStore = create((set, get) => ({
  orders: [], // { id, canteenId, canteenName, items, total, status, createdAt }

  placeOrder: ({ canteenId, canteenName, items, total }) => {
    const id = 'ord-' + Math.random().toString(36).slice(2);
    const newOrder = {
      id,
      canteenId,
      canteenName,
      items,
      total,
      status: 'Processing',
      createdAt: new Date().toISOString(),
    };
    set((state) => ({ orders: [newOrder, ...state.orders] }));
    return newOrder;
  },

  updateOrderStatus: (orderId, status) => {
    set((state) => ({
      orders: state.orders.map((o) => (o.id === orderId ? { ...o, status } : o)),
    }));
  },

  reorder: (orderId) => {
    const order = get().orders.find((o) => o.id === orderId);
    return order || null;
  },
}));
