<script setup lang="ts">
const props = defineProps({
  fieldName: {
    type: String,
    required: true
  },
  sortField: {
    type: String,
    required: true
  },
  sortOrder: {
    type: String,
    required: true
  }
})

const emits = defineEmits(['sort'])

const handleSort = () => {
  emits('sort', props.fieldName)
}
</script>

<template>
  <button @click="handleSort">
    <slot></slot>
    <span v-if="props.sortField === props.fieldName">
      {{ props.sortOrder === 'asc' ? '▲' : '▼' }}
    </span>
  </button>
</template>

<style scoped></style>
