'use client';

import { createContext, useContext, useEffect, useState } from 'react';

interface ThemeContextType {
  theme: 'light';
  toggleTheme: () => void;
  setTheme: (theme: 'light') => void;
  mounted: boolean;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<'light'>('light');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Always use light theme globally
    document.documentElement.classList.remove('dark');
    setThemeState('light');
  }, []);

  const setTheme = (_newTheme: 'light') => {
    // Theme is fixed to light; keep API for compatibility
    setThemeState('light');
    document.documentElement.classList.remove('dark');
  };

  const toggleTheme = () => {
    // No-op: theming is fixed to light
    setTheme('light');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, setTheme, mounted }}>
      <div style={{ visibility: mounted ? 'visible' : 'hidden' }}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
