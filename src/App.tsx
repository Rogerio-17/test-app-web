import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ProductListing } from "./pages/ProductListing";
import { ToastContainer } from "react-toastify";

const queryClient = new QueryClient();

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ProductListing />
      <ToastContainer />
    </QueryClientProvider>
  );
}
