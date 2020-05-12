<template>
  <div>
    <Navigation />
    <b-container align="center">
      <h1>Home Page</h1>
      <b-icon icon="stopwatch" font-scale="7.5"></b-icon>
    </b-container>
  </div>
</template>

<script>
import Navigation from './Navigation.vue'
export default {
  name: 'Home',
  components: {
    Navigation
  }
}
</script>

<style scoped>
</style>
