<template>
  <div>
    <h2>first dose</h2>
    <p>brand: {{ patient.vaccine_brand[0] }}</p>
    <p>date: {{ patient.vaccine_date[0] }}</p>
  </div>
  <div v-if="patient.vaccine_brand[1]">
    <h2>second dose</h2>
    <p>brand: {{ patient.vaccine_brand[1] }}</p>
    <p>date: {{ patient.vaccine_date[1] }}</p>
  </div>
</template>

<script>
export default {
  props: ['id', 'patient'],
  inject: ['GStore']
}
</script>
