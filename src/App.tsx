import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useEffect } from "react";
import AppRouter from "./router";
import WebApp from "@twa-dev/sdk";

const queryClient = new QueryClient();

function App() {
  useEffect(() => {
    WebApp.ready();

    // Telegram ilovasining hozirgi mavzusini oling
    const theme = WebApp.colorScheme; // 'light' yoki 'dark'

    // HTML tagga data-theme atributini o'rnating
    document.documentElement.setAttribute("data-theme", theme);
  }, []);

  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <AppRouter />
      </QueryClientProvider>
    </BrowserRouter>
  );
}

export default App;
