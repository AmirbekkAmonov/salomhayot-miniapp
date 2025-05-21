import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import AppRouter from "./router";
import WebApp from "@twa-dev/sdk";
import Loader from "./components/ui/Loader";

const queryClient = new QueryClient();

function App() {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    // Telegram Mini App SDK tayyor bo‘lishi
    WebApp.ready();

    // Mavzuni o‘rnatish (light/dark)
    const theme = WebApp.colorScheme;
    document.documentElement.setAttribute("data-theme", theme);

    // 500ms loading effekti
    const timer = setTimeout(() => setIsReady(true), 500);

    // Tozalash (memory leak oldini olish)
    return () => clearTimeout(timer);
  }, []);

  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        {isReady ? <AppRouter /> : <Loader />}
      </QueryClientProvider>
    </BrowserRouter>
  );
}

export default App;
