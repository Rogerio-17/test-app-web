import { useMutation, useQueryClient } from '@tanstack/react-query'
import type { CreateProductRequest } from './types/create-products-request'

export function useCreateProductForm() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async (data: CreateProductRequest) => {
      await fetch(
        `http://localhost:3333/products`,
        {
          method: 'POST',
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
