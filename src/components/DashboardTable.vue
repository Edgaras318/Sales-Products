<template>
  <div class="flex flex-col overflow-x-auto">
    <div class="inline-block">
      <div class="overflow-x-auto">
        <table
          class="min-w-full flex flex-row flex-no-wrap sm:bg-white overflow-hidden sm:shadow-lg my-5"
        >
          <thead>
            <tr
              v-for="(product, index) in sortedProducts"
              :key="index"
              class="flex flex-col flex-no wrap sm:table-row rounded-l-lg mb-2 sm:mb-0"
            >
              <th>
                <input class="checkbox" type="checkbox" />
              </th>
              <th v-for="(header, index) in headers" :key="index" class="text-left">
                <SortButton
                  v-if="header == 'Title' || header == 'Brand'"
                  :fieldName="header"
                  :sortField="header"
                  :sortOrder="sortOrders[header]"
                  @sort="handleSort(header)"
                />
                <span>{{ header }}</span>
              </th>
            </tr>
          </thead>
          <tbody class="flex-1 sm:flex-none">
            <tr
              v-for="product in sortedProducts"
              class="flex flex-col flex-no wrap sm:table-row mb-2 sm:mb-0"
            >
              <td class="truncate">
                <input class="checkbox" type="checkbox" />
              </td>
              <td class="truncate">
                <router-link
                  :to="'/product/' + product.id"
                  class="text-blue-600 dark:text-blue-500 hover:underline cursor-pointer"
                >
                  {{ product.title }}</router-link
                >
              </td>
              <td class="truncate">
                <span> {{ product.category }} </span>
              </td>
              <td class="truncate">
                <span>{{ product.brand }}</span>
              </td>
              <td class="truncate">
                <span>{{ product.price }}</span>
              </td>
              <td class="truncate">
                <span>{{ product.stock }}</span>
              </td>
              <td class="truncate">
                <span> {{ product.rating }} </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import SortButton from '@/components/SortButton.vue'
import type { Product } from '@/types/Product'
import { ref } from 'vue'
import type { SortOrders } from '@/types/SortOrder'

const props = defineProps({
  products: {
    type: Array as () => Product[],
    required: true
  }
})

const headers = ['Title', 'Category', 'Brand', 'Price', 'Stock', 'Rating']

// const sortOrder = ref<'asc' | 'desc'>('asc')

const sortedProducts = ref<Product[]>(props.products)

const sortOrders = ref<SortOrders>({
  Title: 'asc',
  Category: 'asc',
  Brand: 'asc',
  Price: 'asc',
  Stock: 'asc',
  Rating: 'asc'
})

const handleSort = (field: string) => {
  const currentSortOrder = sortOrders.value[field]
  const nextSortOrder = currentSortOrder === 'asc' ? 'desc' : 'asc'

  // Update sortOrders for the field
  sortOrders.value = {
    ...sortOrders.value,
    [field]: nextSortOrder
  }

  sortProducts(field, nextSortOrder)
}

const sortProducts = (field: string, sortOrder: 'asc' | 'desc') => {
  const fieldName = field.toLowerCase()
  sortedProducts.value.sort((a, b) => {
    const fieldA = a[fieldName].toUpperCase()
    const fieldB = b[fieldName].toUpperCase()
    let comparison = 0
    if (fieldA > fieldB) {
      comparison = 1
    } else if (fieldA < fieldB) {
      comparison = -1
    }
    return sortOrder === 'asc' ? comparison : -comparison
  })
}
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

td,
th {
  padding: 24px;
}

@media (max-width: 640px) {
  tr {
    background: white;
    border-radius: 3px;
  }
  td,
  th {
    border-bottom: 1px solid #f2f2f2;
  }
}

tr {
  border-bottom: 1px solid #f2f2f2;
}

.checkbox {
  width: 24px;
  height: 24px;
}

th.span {
  font-family: Lato;
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 0px;
  text-align: left;
}

td.span {
  /* If you want to apply these styles to specific elements */
  font-family: 'Poppins', sans-serif;
  font-size: 16px;
  font-weight: 400;
  letter-spacing: 0px;
  text-align: left;
}
</style>
