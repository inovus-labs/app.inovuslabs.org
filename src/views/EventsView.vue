
<template>
  <DashboardLayout>

    <ListingTable
      :items="items.activities"
      :fields="fields"
    />

  </DashboardLayout>
</template>

<script>
  import DashboardLayout from '@/layouts/DashboardLayout.vue'
  import ListingTable from '@/components/ListingTable.vue'

  import { getActivity } from '@/API/index.js'

  export default {
    name: 'HomeView',
    components: {
      DashboardLayout,
      ListingTable
    },
    data() {
      return {
        items: [],
      }
    },
    async mounted() {
      this.items = await getActivity()
    },
  }
</script>