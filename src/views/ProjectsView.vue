
<template>
    <DashboardLayout>
  
      <ListingTable
        :items="projects"
        :fields="fields"
      />

    </DashboardLayout>
</template>

<script>
  import DashboardLayout from '@/layouts/DashboardLayout.vue'
  import ListingTable from '@/components/ListingTable.vue'

  import { getProjects } from '@/API/index.js'

  export default {
    name: 'ProjectView',
    components: {
      ListingTable,
      DashboardLayout
    },
    data() {
      return {
        projects: [],
        fields: [
          {
            name: 'title',
            type: 'StringImg',
            items: [ 'title', 'thumbnail' ]
          },
          {
            name: 'status',
            type: 'String',
          },
          {
            name: 'description',
            type: 'textArea',
          },
          {
            name: 'tags',
            type: 'Array',
          },
        ]
      }
    },
    async mounted() {
      let response = await getProjects()
      this.projects = response.projects
    },
  }
</script>