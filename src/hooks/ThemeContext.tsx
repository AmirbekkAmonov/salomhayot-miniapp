import { create } from "zustand";
import WebApp from "@twa-dev/sdk";

type Theme = "light" | "dark";

interface ThemeState {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  detectTheme: () => void;
  init: () => void;
}

export const useThemeStore = create<ThemeState>((set, get) => ({
  theme: "light",

  setTheme: (theme) => {
    set({ theme });
    document.documentElement.setAttribute("data-theme", theme);
  },

  detectTheme: () => {
    const telegramTheme = WebApp.colorScheme;
    const browserPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

    const effectiveTheme: Theme =
      telegramTheme === "dark" || (!telegramTheme && browserPrefersDark)
        ? "dark"
        : "light";

    get().setTheme(effectiveTheme);
  },

  init: () => {
    WebApp.ready();

    get().detectTheme();

    const handleTelegramThemeChange = () => {
      get().detectTheme();
    };

    WebApp.onEvent("themeChanged", handleTelegramThemeChange);

    return () => {
      WebApp.offEvent("themeChanged", handleTelegramThemeChange);
    };
  },
}));
