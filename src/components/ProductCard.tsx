import type { Product } from "@/types/product";
import { Button } from "./ui/button";
import { Trash } from "lucide-react";
import { useDeleteProductForm } from "@/http/use-delete-product";
import { ButtonEditProduct } from "./ButtonEditProduct";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { mutate: deleteProduct } = useDeleteProductForm();

  return (
    <div className="flex  justify-between items-center bg-white rounded-lg border border-gray-100 p-6 shadow-sm hover:shadow-md transition-shadow duration-200">
      <div className="flex flex-col items-start justify-between">
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            {product.name}
          </h3>

          <div className="flex gap-1 items-center">
            <span className="font-semibold">Descrição: </span>
            <p className="text-gray-600 text-sm leading-relaxed">
              {product.description}
            </p>
          </div>

          <div className="flex gap-1 items-center">
            <span className="font-semibold">SKU: </span>
            <p className="text-gray-600 text-sm leading-relaxed">
              {product.sku}
            </p>
          </div>

          <div className="flex gap-1 items-center">
            <span className="font-semibold">Primeira letra ausente: </span>
            <p className="text-gray-600 text-sm leading-relaxed">
              {product.firstMissingLetter}
            </p>
          </div>

          <div className="flex gap-1 items-center">
            <span className="font-semibold">Preço: </span>
            <p className="text-gray-600 text-sm leading-relaxed">
              {product.price}
            </p>
          </div>
        </div>
      </div>

      <div className="flex gap-2">
        <ButtonEditProduct productId={product.id} />

        <Button
          variant="outline"
          className="mt-4"
          onClick={() => deleteProduct({ productId: product.id })}
        >
          <Trash />
        </Button>
      </div>
    </div>
  );
}
