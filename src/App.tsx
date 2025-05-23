import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import AppRouter from "./router";
import Loader from "./components/ui/Loader";
import { useThemeStore } from "./hooks/ThemeContext";

const queryClient = new QueryClient();

function App() {
  const [isReady, setIsReady] = useState(false);
  const detectTheme = useThemeStore((state) => state.detectTheme);

  useEffect(() => {
    detectTheme();
    const timer = setTimeout(() => setIsReady(true), 500);
    return () => clearTimeout(timer);
  }, [detectTheme]);

  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        {isReady ? <AppRouter /> : <Loader />}
      </QueryClientProvider>
    </BrowserRouter>
  );
}

export default App;
