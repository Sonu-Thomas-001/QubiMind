"use client";

import { useAuthStore } from "@/lib/store/auth";

export function useAuth() {
  const { user, token, isAuthenticated, setAuth, logout } = useAuthStore();
  
  // Here we could add refresh token logic or check session validity
  
  return {
    user,
    token,
    isAuthenticated,
    setAuth,
    logout,
  };
}
