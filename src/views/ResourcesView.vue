
<template>
  <DashboardLayout>

    <section class="bg-gray-50 dark:bg-gray-900 p-3 sm:p-6 flex gap-3 flex-col">
      <h1 class="text-3xl font-bold text-gray-800 dark:text-gray-100">Learning Resources</h1>
      <p class="text-gray-600 dark:text-gray-400 mt-2 max-w-3xl">
        Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor.
      </p>
    </section>


      <ListingTable 
        v-if="items && meta"
        :paginationFn="getResources"
        :items="items" 
        :meta="meta"
        :fields="fields" 
        :addNewBtnText="'Add New Resource'" 
      />


  </DashboardLayout>
</template>

<script>
import DashboardLayout from '@/layouts/DashboardLayout.vue'
import ListingTable from '@/components/ListingTable.vue'

import { getLearningResources } from '@/API/index.js'

export default {
  name: 'ResourcesView',
  components: {
    DashboardLayout,
    ListingTable
  },
  data() {
    return {
      items: null,
      meta: null,
      fields: [
        {
          name: 'title',
          type: 'StringImg',
          items: ['title']
        },
        {
          name: 'category',
          type: 'Array',
        },
        {
          name: 'description',
          type: 'textArea',
        },
        // {
        //   name: 'created_at',
        //   type: 'Date',
        // },
        {
          name: 'resources',
          type: 'ButtonsArray',
        },
      ]
    }
  },
  async mounted() {
    await this.getResources(1, 10)
  },
  methods: {
    async getResources(page, limit) {
      try {
        const res = await getLearningResources(page, limit)
        this.items = res.data.resources

        this.items.sort((a, b) => {
          return new Date(b.created_at) - new Date(a.created_at)
        })

        this.meta = res.data.meta
        this.meta.from = this.getFromTo(page, limit).from
        this.meta.to = this.getFromTo(page, limit).to

      } catch (err) {
        console.log(err)
      }
    },
    
    // get from and to from page and limit
    getFromTo(page, limit) {
      const from = (page - 1) * limit + 1
      const to = page * limit
      return { from, to }
    },
  }
}
</script>