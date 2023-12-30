import { expect, test } from 'vitest'
import ProductService from '@/services/ProductService'
import type { ProductsResponse } from '@/types/ProductsResponse' // Make sure to import the ProductsResponse type

test('fetchProducts should return an array of products', async () => {
  const response: ProductsResponse = await ProductService.fetchProducts()
  expect(Array.isArray(response.products)).toBe(true)
  expect(typeof response.total).toBe('number')
  expect(typeof response.skip).toBe('number')
  expect(typeof response.limit).toBe('number')
})
test('fetchProductDetails should return a product object', async () => {
  const productId = '1' // Replace with an existing product ID in your test environment
  const product = await ProductService.fetchProductDetails(productId)
  expect(product).toBeDefined()
  // Add more assertions based on the expected structure of the product object
})
