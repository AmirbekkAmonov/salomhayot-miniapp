import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import WebApp from "@twa-dev/sdk";

type Theme = "light" | "dark";

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType>({
  theme: "light",
  setTheme: () => {},
});

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    WebApp.ready();
  
    const detectTheme = () => {
      const telegramTheme = WebApp.colorScheme; // hozirgi Telegram mavzusi
      const browserPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  
      const effectiveTheme: Theme =
        telegramTheme === "dark" || (!telegramTheme && browserPrefersDark)
          ? "dark"
          : "light";
  
      setTheme(effectiveTheme);
      document.documentElement.setAttribute("data-theme", effectiveTheme); // mini app uchun
    };
  
    detectTheme();
  
    const handleTelegramThemeChange = () => {
      detectTheme();
    };
  
    WebApp.onEvent("themeChanged", handleTelegramThemeChange);
  
    return () => {
      WebApp.offEvent("themeChanged", handleTelegramThemeChange);
    };
  }, []);
  
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
