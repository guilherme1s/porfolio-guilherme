import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

interface ThemeContextProps {
  dark: boolean;
  toggleTheme: () => void;
}

interface ThemeContextProviderProps {
  children: ReactNode;
}

const ThemeContext = createContext({} as ThemeContextProps);

export function ThemeProvider({ children }: ThemeContextProviderProps) {
  const [dark, setDark] = useState(() => {
    const saved = localStorage.getItem("darkMode");
    return saved ? JSON.parse(saved) : false;
  });

  const toggleTheme = () => setDark((prev: boolean) => !prev);

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(dark));
    document.body.classList.toggle("dark", dark);
  }, [dark]);

  return (
    <ThemeContext.Provider value={{ dark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme deve ser usado dentro de ThemeProvider");
  }
  return context;
}
