import { expect, test } from 'vitest'
import customFetch from '@/helpers/fetchHelper'

test('customFetch should fetch data successfully', async () => {
  const data = await customFetch('https://dummyjson.com/products/1')
  expect(data).toBeDefined()
})

test('customFetch should throw an error on network failure', async () => {
  await expect(customFetch('https://nonexistenturl123456789.com')).rejects.toThrow()
})
