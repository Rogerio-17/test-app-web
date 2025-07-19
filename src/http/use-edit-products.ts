import { useMutation, useQueryClient } from '@tanstack/react-query'
import type { EditProductRequest } from './types/edit-product-request'
import { toast } from 'react-toastify'

export function useEditProductForm(productId: string) {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async (data: EditProductRequest) => {
      const response = await fetch(
        `http://localhost:3333/products/${productId}`,
        {
          method: 'PUT',
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
      queryClient.invalidateQueries({ queryKey: ['get-products'] })
      toast.success('Produto editado com sucesso!')
    },

    onError: () => {
      toast.error(`Erro ao editar produto!`)
    },
  })
}
