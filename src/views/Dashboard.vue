<template>
  <div class="p-10">
    <div>
      <div class="flex gap-5 pb-8 pt-4">
        <NotificationButton />
        <Avatar />
      </div>
      <h1 class="product-title pb-6">Products Information</h1>
      <div class="flex gap-4">
        <SearchInput label="Title" inputId="titleSearch" v-model="titleSearchQuery" />
        <SearchInput label="Brand" inputId="brandSearch" v-model="brandSearchQuery" />
      </div>
    </div>
    <DashboardTable />
  </div>
</template>

<script setup lang="ts">
import DashboardTable from '@/components/DashboardTable.vue'
import SearchInput from '@/components/SearchInput.vue'
import { ref } from 'vue'
import Avatar from '@/components/Avatar.vue'
import NotificationButton from '@/components/NotificationButton.vue'

const titleSearchQuery = ref<string>('')
const brandSearchQuery = ref<string>('')
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
</style>
