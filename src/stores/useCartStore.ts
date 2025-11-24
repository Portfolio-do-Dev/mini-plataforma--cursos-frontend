// src/stores/useCartStore.ts

import { create } from 'zustand';
import { persist } from 'zustand/middleware';

// 1. Tipagem do Item do Carrinho
interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

// 2. Tipagem do Estado
interface CartState {
  items: CartItem[];
  addItem: (item: Omit<CartItem, 'quantity'>) => void;
  removeItem: (itemId: string) => void;
  clearCart: () => void;
  totalItems: number;
}

// 3. Criação do Store com Persistência
export const useCartStore = create<CartState>()(
  persist(
    (set) => ({
      items: [],
      totalItems: 0,

      addItem: (item) => set((state) => {
        const existingItem = state.items.find(i => i.id === item.id);
        let newItems;

        if (existingItem) {
          newItems = state.items.map(i =>
            i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
          );
        } else {
          newItems = [...state.items, { ...item, quantity: 1 }];
        }

        return {
          items: newItems,
          totalItems: newItems.reduce((sum, i) => sum + i.quantity, 0),
        };
      }),

      removeItem: (itemId) => set((state) => {
        const newItems = state.items.filter(i => i.id !== itemId);
        return {
          items: newItems,
          totalItems: newItems.reduce((sum, i) => sum + i.quantity, 0),
        };
      }),

      clearCart: () => set({ items: [], totalItems: 0 }),
    }),
    {
      name: 'cart-storage', // Nome da chave no localStorage
    }
  )
);
