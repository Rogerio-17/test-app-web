export type EditProductRequest = {
  productId: string
  name: string
  description?: string
  price: number
  sku: string
}