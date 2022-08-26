<template>
  <div v-if="GStore.patient">
    <h1>{{ GStore.patient.first_name }} {{ GStore.patient.last_name }}</h1>
    <div id="nav">
      <router-link :to="{ name: 'PatientDetails' }">Details</router-link>
      |
      <router-link :to="{ name: 'PatientVaccine' }">Vaccine</router-link>
      |
      <router-link :to="{ name: 'DoctorComment' }"
        >Docter's Comment</router-link
      >
    </div>
    <router-view :patient="GStore.patient" />
  </div>
</template>
<script>
export default {
  inject: ['GStore']
}
</script>
