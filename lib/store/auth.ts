import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface User {
  id: string;
  email: string;
  role: string;
  first_name?: string;
  last_name?: string;
  profile_image?: string;
}

interface Workspace {
  id: string;
  name: string;
  slug: string;
}

interface AuthState {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  currentWorkspace: Workspace | null;
  setAuth: (user: User, token: string) => void;
  logout: () => void;
  setWorkspace: (workspace: Workspace) => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      token: null,
      isAuthenticated: false,
      currentWorkspace: null,
      setAuth: (user, token) => set({ user, token, isAuthenticated: true }),
      logout: () => set({ user: null, token: null, isAuthenticated: false, currentWorkspace: null }),
      setWorkspace: (workspace) => set({ currentWorkspace: workspace }),
    }),
    {
      name: 'auth-storage',
    }
  )
);
