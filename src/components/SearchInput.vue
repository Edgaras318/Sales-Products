<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps({
  label: {
    type: String,
    required: true
  },
  inputId: {
    type: String,
    required: true
  },
  modelValue: {
    type: String,
    default: ''
  }
})

const emits = defineEmits(['update:modelValue'])

const searchQuery = ref<string>(props.modelValue)

const handleInput = () => {
  emits('update:modelValue', searchQuery.value)
}
</script>

<template>
  <div class="flex flex-col gap-4">
    <label :for="inputId">{{ label }}</label>
    <input
      class="search-input"
      :id="inputId"
      type="text"
      v-model="searchQuery"
      @input="handleInput"
      :placeholder="`Enter ${label}`"
    />
  </div>
</template>

<style scoped>
.search-input {
  width: 269px;
  height: 50px;
  top: 40px;
  left: 288px;
  padding: 13px 153px 13px 24px; /* top, right, bottom, left */
  border-radius: 3px;
  border: 1px solid #13131340;
}
</style>
