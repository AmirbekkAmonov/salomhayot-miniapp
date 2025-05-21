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
    WebApp.ready(); // Telegram'ga tayyorligini bildiradi
    document.documentElement.setAttribute("data-theme", WebApp.colorScheme);
    // 500ms kechikish bilan loading yo‘qoladi
    setTimeout(() => setIsReady(true), 500); 
  }, []);

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
      {isReady ? <AppRouter /> : <Loader />}
      </QueryClientProvider>
    </BrowserRouter>
  );
}

export default App;
