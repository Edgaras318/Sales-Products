<template>
  <div class="p-10">
    <div>
      <div class="flex pb-8 pt-4 justify-between top-bar">
        <SearchBar />
        <div class="flex gap-5 top-bar-btns">
          <NotificationButton />
          <Avatar />
        </div>
      </div>
      <h1 class="product-title pb-6">Products Information</h1>
      <div class="flex gap-4 search-inputs">
        <SearchInput label="Title" inputId="titleSearch" v-model="titleSearchQuery" />
        <SearchInput label="Brand" inputId="brandSearch" v-model="brandSearchQuery" />
      </div>
    </div>
    <DashboardTable v-if="!loading" :products="products" />
    <div v-else>Loading...</div>
  </div>
</template>

<script setup lang="ts">
import DashboardTable from '@/components/DashboardTable.vue'
import SearchInput from '@/components/SearchInput.vue'
import { onMounted, ref, watch } from 'vue'
import Avatar from '@/components/Avatar.vue'
import NotificationButton from '@/components/NotificationButton.vue'
import SearchBar from '@/components/SearchBar.vue'
import type { Product } from '@/types/Product'
import ProductService from '@/services/ProductService'

const products = ref<Product[]>([])
const total = ref<number>(0)
const skip = ref<number>(0)
const limit = ref<number>(0)
const loading = ref(false)
const titleSearchQuery = ref<string>('')
const brandSearchQuery = ref<string>('')

const fetchProducts = async () => {
  try {
    loading.value = true
    const { products: fetchedProducts, total: fetchedTotal } = await ProductService.fetchProducts()

    products.value = fetchedProducts
  } catch (error: any) {
    console.error('Error fetching products:', error.message)
    // Handle error: show message to the user, log, etc.
  } finally {
    loading.value = false
  }
}

// Watch for changes in titleSearchQuery
watch([titleSearchQuery], async () => {
  try {
    loading.value = true
    // Adjust your ProductService method to accept search queries
    const { products: fetchedProducts, total: fetchedTotal } = await ProductService.fetchProducts(
      skip.value,
      limit.value,
      titleSearchQuery.value
    )

    products.value = fetchedProducts
    total.value = fetchedTotal
  } catch (error: any) {
    console.error('Error fetching products:', error.message)
    // Handle error: show message to the user, log, etc.
  } finally {
    loading.value = false
  }
})

onMounted(() => {
  fetchProducts()
})
</script>

<style scoped>
.product-title {
  font-family: Poppins;
  font-size: 24px;
  font-weight: 500;
  line-height: 36px;
  letter-spacing: 0px;
  text-align: left;
}
@media (max-width: 878px) {
  .top-bar {
    flex-direction: column-reverse;
  }
  .top-bar-btns {
    padding-bottom: 16px;
    justify-content: right;
  }
  .search-inputs {
    flex-direction: column;
  }
}
</style>
