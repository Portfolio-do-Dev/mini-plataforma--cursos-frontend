// src/stores/useUIStore.ts

import { create } from 'zustand';

// 1. Tipagem do Estado
interface UIState {
  isSidebarOpen: boolean;
  theme: 'light' | 'dark';
  toggleSidebar: () => void;
  setTheme: (theme: 'light' | 'dark') => void;
}

// 2. Criação do Store
export const useUIStore = create<UIState>((set) => ({
  isSidebarOpen: false,
  theme: 'light',

  toggleSidebar: () => set((state) => ({ isSidebarOpen: !state.isSidebarOpen })),
  setTheme: (theme) => set({ theme }),
}));
