<template>
  <div v-if="GStore.patient">
    <div class="nav">
      <router-link :to="{ name: 'PatientDetails' }">DETAILS</router-link>

      <router-link :to="{ name: 'PatientVaccine' }"
        >VACCINATION STATUS</router-link
      >

      <router-link :to="{ name: 'DoctorComment' }"
        >DOCTOR'S COMMENT</router-link
      >
    </div>
    <h1>{{ GStore.patient.first_name }} {{ GStore.patient.last_name }}</h1>
    <router-view :patient="GStore.patient" />
  </div>
</template>
<script>
export default {
  inject: ['GStore']
}
</script>

<style scoped>
.nav {
  margin: 20px;
}
.nav a {
  float: center;
  padding: 16px 14px;
  text-decoration: none;
  color: #2c3e50;
  font-weight: 700;
}
.nav a:hover {
  color: skyblue;
}

.nav a.router-link-exact-active {
  color: skyblue;
}
h1 {
  font-weight: 400;
}
</style>
