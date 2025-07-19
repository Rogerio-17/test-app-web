import { useMutation, useQueryClient } from '@tanstack/react-query'
import type { EditProductRequest } from './types/edit-product-request'

export function useEditProductForm() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async (data: EditProductRequest) => {
      await fetch(
        `http://localhost:3333/products/${data.productId}`,
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        }
      )
    },

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['get-products'] })
    },
  })
}
