import { create } from 'zustand';

export const useCartStore = create((set, get) => ({
  currentCanteenId: null,
  items: [], // { id, canteenId, name, price, image, quantity }

  canAddFromCanteen: (canteenId) => {
    const { items, currentCanteenId } = get();
    if (items.length === 0) return true;
    return currentCanteenId === canteenId;
  },

  setCurrentCanteen: (canteenId) => set({ currentCanteenId: canteenId }),

  addItem: (item) => set((state) => {
    const existing = state.items.find((it) => it.id === item.id);
    if (existing) {
      return {
        items: state.items.map((it) => (it.id === item.id ? { ...it, quantity: it.quantity + 1 } : it)),
      };
    }
    return {
      currentCanteenId: state.currentCanteenId ?? item.canteenId,
      items: [...state.items, { ...item, quantity: 1 }],
    };
  }),

  increment: (id) => set((state) => ({
    items: state.items.map((it) => (it.id === id ? { ...it, quantity: it.quantity + 1 } : it)),
  })),

  decrement: (id) => set((state) => ({
    items: state.items
      .map((it) => (it.id === id ? { ...it, quantity: it.quantity - 1 } : it))
      .filter((it) => it.quantity > 0),
  })),

  removeItem: (id) => set((state) => ({ items: state.items.filter((it) => it.id !== id) })),

  clearCart: () => set({ items: [], currentCanteenId: null }),

  total: () => {
    return get().items.reduce((sum, it) => sum + it.price * it.quantity, 0);
  },
}));
