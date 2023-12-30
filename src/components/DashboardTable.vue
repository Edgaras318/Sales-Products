<template>
  <div class="container p-10">
    <table class="w-full flex flex-row flex-no-wrap sm:bg-white overflow-hidden sm:shadow-lg my-5">
      <thead>
        <tr
          v-for="(header, index) in headers"
          :key="index"
          class="flex flex-col flex-no wrap sm:table-row rounded-l-lg sm:rounded-none mb-2 sm:mb-0"
        >
          <th v-for="(header, index) in headers" :key="index" class="p-3 text-left">
            {{ header }}
          </th>
        </tr>
      </thead>
      <tbody class="flex-1 sm:flex-none">
        <tr
          v-for="product in products"
          class="flex flex-col flex-no wrap sm:table-row mb-2 sm:mb-0"
        >
          <td class="hover:bg-gray-100 p-3">{{ product.title }}</td>
          <td class="hover:bg-gray-100 p-3">{{ product.category }}</td>
          <td class="hover:bg-gray-100 p-3">{{ product.brand }}</td>
          <td class="hover:bg-gray-100 p-3">{{ product.price }}</td>
          <td class="hover:bg-gray-100 p-3">{{ product.stock }}</td>
          <td class="hover:bg-gray-100 p-3">{{ product.rating }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import ProductService from '@/services/ProductService'
import { onMounted, ref } from 'vue'
import type { Product } from '@/types/Product'

const products = ref<Product[]>([])
const total = ref<number>(0)
const skip = ref<number>(0)
const limit = ref<number>(0)
const loading = ref(false)
const headers = ['Title', 'Category', 'Brand', 'Price', 'Stock', 'Rating']

onMounted(async () => {
  try {
    loading.value = true
    const {
      products: fetchedProducts,
      total: fetchedTotal,
      skip: fetchedSkip,
      limit: fetchedLimit
    } = await ProductService.fetchProducts()

    products.value = fetchedProducts
  } catch (error: any) {
    console.error('Error fetching products:', error.message)
    // Handle error: show message to the user, log, etc.
  } finally {
    loading.value = false
  }
})
</script>

<style scoped>
@media (min-width: 640px) {
  table {
    display: inline-table !important;
    border-radius: 3px;
  }

  thead tr:not(:first-child) {
    display: none;
  }
}

@media (max-width: 640px) {
  tr {
    border: 1px solid black;
  }
}

tr {
  border-bottom: 1px solid #f2f2f2;
}
</style>
