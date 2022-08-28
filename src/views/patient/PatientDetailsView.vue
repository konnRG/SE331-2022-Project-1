<template>
  <p>Age: {{ patient.age }}</p>
  <p>Hometown: {{ patient.hometown }}</p>
</template>

<script>
export default {
  props: ['id', 'patient'],
  inject: ['GStore']
}
</script>
