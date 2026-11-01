'use client';

import React, { createContext, useCallback, useContext, useEffect, useState } from 'react';

type Theme = 'light' | 'dark';

type ThemeContextType = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

/**
 * Applies the theme class to <html> and persists the choice.
 */
function applyTheme(theme: Theme) {
  document.documentElement.classList.toggle('dark', theme === 'dark');
  document.documentElement.style.colorScheme = theme;
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  // The site is dark-first: start dark, then sync with the persisted/system
  // theme after mount. A blocking script in the root layout has already set
  // the correct class on <html> before first paint, so there is no flash of
  // the wrong theme.
  const [theme, setThemeState] = useState<Theme>('dark');

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    const isDark = document.documentElement.classList.contains('dark');
    const initial: Theme = isDark
      ? 'dark'
      : storedTheme === 'light'
        ? 'light'
        : 'dark';
    setThemeState(initial);
  }, []);

  // Keep multiple tabs in sync
  useEffect(() => {
    const onStorage = (event: StorageEvent) => {
      if (event.key === 'theme' && (event.newValue === 'light' || event.newValue === 'dark')) {
        setThemeState(event.newValue);
        applyTheme(event.newValue);
      }
    };
    window.addEventListener('storage', onStorage);
    return () => window.removeEventListener('storage', onStorage);
  }, []);

  const setTheme = useCallback((newTheme: Theme) => {
    setThemeState(newTheme);
    localStorage.setItem('theme', newTheme);
    applyTheme(newTheme);
  }, []);

  return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
