import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import App from "./App";
import "./scss/styles.scss";
import "bootstrap";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 1,
      staleTime: Infinity,
      gcTime: 1000 * 60 * 30,
    },
  },
});

const root = document.getElementById("root");
if (!root) {
  throw new Error("No se encontró el elemento #root");
}

createRoot(root).render(
  <QueryClientProvider client={queryClient}>
    <StrictMode>
      <App />
    </StrictMode>
  </QueryClientProvider>,
);
