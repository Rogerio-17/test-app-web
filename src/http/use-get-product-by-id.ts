import { useQuery } from '@tanstack/react-query'
import type { GetProductByIdRequest } from './types/get-product-by-id-request'
import type { GetProductByIdResponse } from './types/get-product-by-id-response'

export function useGetProductByIdForm({ productId }: GetProductByIdRequest) {

   return useQuery({
    queryKey: ['get-products', productId],
    queryFn: async () => {
      const response = await fetch(`http://localhost:3333/products/${productId}`)
      const result: GetProductByIdResponse = await response.json()

      return result
    },
  })
}
