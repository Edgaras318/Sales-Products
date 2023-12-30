<template>
  <div className="flex">
    <Sidebar />
    <main class="bg-gray-100 w-full font-normal">
      <router-view></router-view>
    </main>
  </div>
</template>

<script setup lang="ts">
import Sidebar from '@/components/Sidebar/Sidebar.vue'
</script>

<style scoped></style>
