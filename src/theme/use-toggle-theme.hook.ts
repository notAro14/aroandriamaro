import { createContext, useContext } from 'react';

export type ToggleTheme = () => void;

export const ToggleThemeContext = createContext<ToggleTheme | null>(null);

export const useToggleTheme = () => {
  const context = useContext(ToggleThemeContext);
  if (context) return context;

  throw new Error('useToggleTheme must be called inside ToggleThemeProvider');
};

export default useToggleTheme;
