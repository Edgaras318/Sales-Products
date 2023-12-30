<script setup lang="ts">
import DashboardIcons from '@/components/Sidebar/SidebarIcons/DashboardIcon.vue'
import AppointmentIcon from '@/components/Sidebar/SidebarIcons/AppointmentIcon.vue'
import LabTestIcon from '@/components/Sidebar/SidebarIcons/LabTestIcon.vue'
import MedicineOrderIcon from '@/components/Sidebar/SidebarIcons/MedicineOrderIcon.vue'
import MessageIcon from '@/components/Sidebar/SidebarIcons/MessageIcon.vue'
import PaymentIcon from '@/components/Sidebar/SidebarIcons/PaymentIcon.vue'
import SettingsIcon from '@/components/Sidebar/SidebarIcons/SettingsIcon.vue'
import helpIcon from '@/components/Sidebar/SidebarIcons/HelpIcon.vue'
</script>

<template>
  <aside class="h-screen">
    <h1 class="title font-medium py-10 px-6 text-2xl">Sales.</h1>
    <nav class="navbar pl-10 pr-5 text-nowrap flex flex-col justify-between">
      <div class="flex flex-col gap-10">
        <router-link class="flex gap-4" to="/">
          <DashboardIcons />
          <span>Dashboard</span>
        </router-link>
        <span class="flex gap-4">
          <AppointmentIcon />
          <span>Lab Test</span>
        </span>
        <span class="flex gap-4">
          <LabTestIcon />
          <span>Appointment</span>
        </span>
        <span class="flex gap-4">
          <MedicineOrderIcon />
          <span>Medicine Order</span>
        </span>
        <span class="flex gap-4">
          <MessageIcon />
          <span>Message</span>
        </span>
        <span class="flex gap-4" t>
          <PaymentIcon />
          <span>Payment</span>
        </span>
        <span class="flex gap-4">
          <SettingsIcon />
          <span>Settings</span>
        </span>
      </div>
      <span class="flex gap-4 pb-8">
        <helpIcon />
        <span> Help </span>
      </span>
    </nav>
  </aside>
</template>

<style scoped>
.title {
  color: #013cc6;
  height: 15%;
}
.navbar {
  height: 85%;
}
a.router-link-active {
  color: #0b63f8;
  font-weight: 400;

  svg {
    fill: #0b63f8;
  }
}
</style>
