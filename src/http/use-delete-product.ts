import { useMutation, useQueryClient } from '@tanstack/react-query'
import type { DeleteProductRequest } from './types/delete-product-request'
import { toast } from 'react-toastify'

export function useDeleteProductForm() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async (data: DeleteProductRequest) => {
      const response = await fetch(
        `http://localhost:3333/products/${data.productId}`,
        {
          method: 'DELETE',
        }
      )

      if (!response.ok) {
        throw new Error('Network response was not ok')
      }

    },

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['get-products'] })
      toast.success('Produto deletado com sucesso!')
    },

    onError: () => {
      toast.error(`Erro ao deletar produto!`)
    },
  })
}
