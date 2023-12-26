
<template>
  <DashboardLayout>

    <section class="bg-gray-50 dark:bg-gray-900 p-3 sm:p-6 flex gap-3 flex-col">
      <h1 class="text-3xl font-bold text-gray-800 dark:text-gray-100">Events & Activities</h1>
      <p class="text-gray-600 dark:text-gray-400 mt-2 max-w-3xl">
        Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor.
      </p>
    </section>

    <ListingTable
      :items="items"
      :fields="fields"
      :addNewBtnText="'Add New Event'"
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
        fields: [
          {
            name: 'title',
            type: 'StringImg',
            items: [ 'title', 'thumbnail' ]
          },
          {
            name: 'tags',
            type: 'Array',
          },
          {
            name: 'description',
            type: 'textArea',
          },
          {
            name: 'category',
            type: 'String',
          },
          {
            name: 'date',
            type: 'dateArray',
          },
        ]
      }
    },
    async mounted() {
      let response = await getActivity()
      this.items = response.activities
    },
  }
</script>