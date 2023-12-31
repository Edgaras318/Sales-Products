import customFetch from '@/helpers/fetchHelper'
import type { Product as ProductType } from '@/types/Product'
import type { ProductsResponse } from '@/types/ProductsResponse'

const API_BASE_URL = 'https://dummyjson.com'

const ProductService = {
  async fetchProducts(
    skip: number = 0,
    limit: number = 10,
    query: string = ''
  ): Promise<ProductsResponse> {
    try {
      let apiUrl = `${API_BASE_URL}/products`

      // Check if a query is provided, and construct the API URL accordingly
      if (query) {
        apiUrl += `/search?q=${query}&limit=${limit}&skip=${skip}`
      } else {
        apiUrl += `?limit=${limit}&skip=${skip}`
      }

      const responseData = await customFetch<any>(apiUrl)

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

  async fetchProductDetails(id: any): Promise<ProductType> {
    try {
      const product = await customFetch<ProductType>(`${API_BASE_URL}/products/${id}`)
      return product
    } catch (error) {
      throw new Error(`Error fetching product details: ${error}`)
    }
  }
}

export default ProductService
