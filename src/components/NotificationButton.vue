<script setup lang="ts">
import NotificationIcon from '@/components/GeneralIcons/NotificationIcon.vue'
</script>

<template>
  <div class="relative cursor-pointer">
    <div class="circle"></div>
    <div class="notification-btn flex justify-center items-center">
      <NotificationIcon />
    </div>
  </div>
</template>

<style scoped>
.notification-btn {
  width: 52px;
  height: 52px;
  border-radius: 3px;
  background: #ffffff;
}
.circle {
  position: absolute;
  width: 10px;
  height: 10px;
  top: -3.1px;
  left: 47px;
  background-color: #ffbc0f; /* Change the color as needed */
  border-radius: 50%; /* Makes the div a circle */
  /* Other styles for your circle */
}
</style>
