"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "pentagone-admin-session";

export function useAuth() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const session = window.localStorage.getItem(STORAGE_KEY);
    setIsAuthenticated(Boolean(session));
    setIsReady(true);
  }, []);

  const login = (payload: object) => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
    setIsAuthenticated(true);
  };

  const logout = () => {
    window.localStorage.removeItem(STORAGE_KEY);
    setIsAuthenticated(false);
  };

  return {
    isAuthenticated,
    isReady,
    login,
    logout
  };
}
