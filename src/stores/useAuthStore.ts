// src/stores/useAuthStore.ts

import { create } from 'zustand';
import { persist } from 'zustand/middleware';

// 1. Tipagem do Estado
interface AuthState {
  isAuthenticated: boolean;
  user: { id: string; name: string; email: string } | null;
  token: string | null;
  login: (user: AuthState['user'], token: string) => void;
  logout: () => void;
}

// 2. Criação do Store com Persistência
export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      isAuthenticated: false,
      user: null,
      token: null,

      login: (user, token) => set({
        isAuthenticated: true,
        user,
        token,
      }),

      logout: () => set({
        isAuthenticated: false,
        user: null,
        token: null,
      }),
    }),
    {
      name: 'auth-storage', // Nome da chave no localStorage
      // Opcional: whitelist para persistir apenas certas chaves
      // partialize: (state) => ({ token: state.token, isAuthenticated: state.isAuthenticated }),
    }
  )
);
