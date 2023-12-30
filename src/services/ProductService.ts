// ProductService.ts
import customFetch from '@/helpers/fetchHelper'
import type { Product as ProductType } from '@/types/Product'
import type { ProductsResponse } from '@/types/ProductsResponse' // Make sure to import the ProductsResponse type

const API_BASE_URL = 'https://dummyjson.com'

const ProductService = {
  async fetchProducts(): Promise<ProductsResponse> {
    try {
      const responseData = await customFetch<any>(`${API_BASE_URL}/products`)
      return {
        products: responseData.products,
        total: responseData.total,
        skip: responseData.skip,
        limit: responseData.limit
      }
    } catch (error) {
      throw new Error(`Error fetching products: ${error}`)
    }
  },

  async fetchProductDetails(id: string): Promise<ProductType> {
    try {
      const product = await customFetch<ProductType>(`${API_BASE_URL}/products/${id}`)
      return product
    } catch (error) {
      throw new Error(`Error fetching product details: ${error}`)
    }
  }
}

export default ProductService
