<template>
  <div>
    <Navigation />
    <b-container align="center">
      <h1>About Us</h1>
      <b-icon icon="person-check" font-scale="7.5"></b-icon>
    </b-container>
  </div>
</template>

<script>
import Navigation from './Navigation.vue'
export default {
  name: 'About',
  components: {
    Navigation
  }
}
</script>

<style scoped>
</style>
