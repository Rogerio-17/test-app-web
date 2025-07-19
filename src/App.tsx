import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ProductListing } from "./pages/ProductListing";

const queryClient = new QueryClient();

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ProductListing />
    </QueryClientProvider>
  );
}
