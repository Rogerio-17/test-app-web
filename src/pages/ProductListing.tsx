import { Search, Plus } from "lucide-react";
import { ProductCard } from "../components/ProductCard";
import { useProducts } from "@/http/use-products";
import { ButtonCreateProduct } from "@/components/ButtonCreateProduct";

export function ProductListing() {
  const { data } = useProducts()

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                Listagem de Produtos
              </h1>
            </div>

            <ButtonCreateProduct />
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Products Grid */}
        {data && data.products.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {data.products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="text-gray-400" size={32} />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              Nenhum produto encontrado
            </h3>
            <p className="text-gray-600">
              Tente ajustar os termos de busca ou adicione novos produtos
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
