<template>
  <h2>Patients:</h2>
  <div class="patients">
    <PatientCard
      v-for="patient in patients"
      :key="patient.id"
      :patient="patient"
    ></PatientCard>

    <div class="pagination">
      <router-link
        id="page-prev"
        :to="{ name: 'PatientList', query: { page: page - 1 } }"
        rel="prev"
        v-if="page != 1"
      >
        Prev Page
      </router-link>

      <router-link
        id="page-next"
        :to="{ name: 'PatientList', query: { page: page + 1 } }"
        rel="next"
        v-if="hasNextPage"
      >
        Next Page
      </router-link>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import PatientCard from '@/components/PatientCard.vue'
import PatientService from '@/services/PatientService.js'
// import { watchEffect } from '@vue/runtime-core'
export default {
  name: 'PatientListView',
  props: {
    page: {
      type: Number,
      required: true
    }
  },
  components: {
    PatientCard
  },
  data() {
    return {
      patients: null,
      totalPatients: 0
    }
  },
  beforeRouteEnter(routeTo, routeFrom, next) {
    PatientService.getPatients(4, parseInt(routeTo.query.page) || 1)
      .then((response) => {
        next((comp) => {
          comp.patients = response.data
          comp.totalPatients = response.headers['x-total-count']
        })
      })
      .catch(() => {
        next({ name: 'NetworkError' })
      })
  },
  beforeRouteUpdate(routeTo, routeFrom, next) {
    PatientService.getPatients(4, parseInt(routeTo.query.page) || 1)
      .then((response) => {
        this.patients = response.data
        this.totalPatients = response.headers['x-total-count']
        next()
      })
      .catch(() => {
        next({ name: 'NetworkError' })
      })
  },
  computed: {
    hasNextPage() {
      let totalPages = Math.ceil(this.totalPatients / 4)
      return this.page < totalPages
    }
  }
}
</script>
<style scoped>
h2 {
  text-align: left;
  padding-left: 300px;
}
.patients {
  display: flex;
  flex-direction: column;
  align-items: left;
  padding-left: 300px;
  padding-right: 300px;
}
.pagination {
  display: flex;
  width: 100%;
  margin-bottom: 20px;
}

.pagination a {
  flex: 1;
  text-decoration: none;
  color: #3c3e50;
}

#page-prev {
  text-align: left;
}
#page-prev:hover {
  color: skyblue;
}
#page-next {
  text-align: right;
}
#page-next:hover {
  color: skyblue;
}
</style>
