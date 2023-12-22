
<template>
  <DashboardLayout>
    
    <h1 class="text-blue-400">Message from HomeView...</h1>

    <TestComponent />

  </DashboardLayout>
</template>

<script>

  import DashboardLayout from '@/layouts/DashboardLayout.vue'
  import TestComponent from '@/components/TestComponent.vue'

  export default {
    name: 'HomeView',
    components: {
      DashboardLayout,
      TestComponent
    }
  }
</script>