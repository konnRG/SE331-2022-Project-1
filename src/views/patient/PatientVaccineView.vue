<template>
  <div class="block">
    <div id="block">
      <h2>First dose:</h2>
      <p>brand: {{ patient.vaccine_brand[0] }}</p>
      <p>date: {{ patient.vaccine_date[0] }}</p>
    </div>
    <div id="block" v-if="patient.vaccine_brand[1]">
      <h2>Second dose:</h2>
      <p>brand: {{ patient.vaccine_brand[1] }}</p>
      <p>date: {{ patient.vaccine_date[1] }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ['id', 'patient'],
  inject: ['GStore']
}
</script>
<style scoped>
#block {
  display: inline-block;
  padding-left: 16px;
  padding-right: 16px;
}
.block {
  border: 1px solid #000;
  align-items: center;
  padding-top: 10px;
  margin-left: 35%;
  margin-right: 35%;
}
h2 {
  margin-top: 0;
  margin-bottom: 10px;
  font-weight: 700;
}
</style>
