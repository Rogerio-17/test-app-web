export type GetProductsResponse = {
  products: Array<{
    id: string
    name: string
    price: number
    sku: string
    description: string
    firstMissingLetter: string
    createdAt: Date
    updatedAt?: Date | null
}>
}
