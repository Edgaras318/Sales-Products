<!-- SearchBar.vue -->
<template>
  <div class="flex relative">
    <SearchIcon class="search-icon" />
    <input placeholder="Search" />
  </div>
</template>

<style scoped>
input {
  width: 655px;
  height: 52px;
  border-radius: 3px;
  border: 1px solid #13131340;
  padding: 13px 153px 13px 62px; /* top, right, bottom, left */
}
.search-icon {
  position: absolute;
  top: 14px;
  left: 20px;
}
@media (max-width: 878px) {
  input {
    width: 100%;
  }
}
</style>
<script setup lang="ts">
import SearchIcon from '@/components/GeneralIcons/SearchIcon.vue'
</script>
