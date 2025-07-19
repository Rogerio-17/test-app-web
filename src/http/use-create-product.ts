import { useMutation, useQueryClient } from '@tanstack/react-query'
import type { CreateProductRequest } from './types/create-products-request'
import { toast } from 'react-toastify'

export function useCreateProductForm() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async (data: CreateProductRequest) => {
      const response = await fetch(
        `http://localhost:3333/products`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        }
      )

      if (!response.ok) {
        throw new Error('Network response was not ok')
      }
    },

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['get-products']})
      toast.success('Produto criado com sucesso!')
    },

    onError: () => {
      toast.error(`Erro ao criar produto!`)
    },
  })
}
