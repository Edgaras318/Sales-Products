<template>
  <div v-if="!loading">{{ product }}</div>
  <div v-else>loading...</div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import ProductService from '@/services/ProductService'
const route = useRoute()
const loading = ref<Boolean>(false)
const product = ref<any>(null)

onMounted(async () => {
  try {
    loading.value = true
    const fetchedProduct = await ProductService.fetchProductDetails(route.params.id)

    product.value = fetchedProduct
  } catch (error: any) {
    console.error('Error fetching products:', error.message)
    // Handle error: show message to the user, log, etc.
  } finally {
    loading.value = false
  }
})
</script>
