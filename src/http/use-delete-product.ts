import { useMutation, useQueryClient } from '@tanstack/react-query'
import type { DeleteProductRequest } from './types/delete-product-request'

export function useDeleteProductForm() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async (data: DeleteProductRequest) => {
      await fetch(
        `http://localhost:3333/products/${data.productId}`,
        {
          method: 'DELETE',
        }
      )
    },

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['get-products'] })
    },
  })
}
