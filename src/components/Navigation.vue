<template>
  <div>
    <b-container>
      <b-nav tabs align="center">
        <b-nav-item>
          <router-link to="/">Home</router-link>
        </b-nav-item>
        <b-nav-item>
          <router-link to="/about">About</router-link>
        </b-nav-item>
        <b-nav-item>
          <router-link to="/contact">Contact</router-link>
        </b-nav-item>
        <b-nav-item-dropdown text="Menu">
          <b-dropdown-item href="#">
            <b-icon icon="arrow-right-short" variant="primary"></b-icon>
            <router-link to="/">Home</router-link>
          </b-dropdown-item>
          <b-dropdown-item href="#">
            <b-icon icon="arrow-right-short" variant="primary"></b-icon>
            <router-link to="/about">About</router-link>
          </b-dropdown-item>
          <b-dropdown-item href="#">
            <b-icon icon="arrow-right-short" variant="primary"></b-icon>
            <router-link to="/contact">Contact</router-link>
          </b-dropdown-item>
        </b-nav-item-dropdown>
      </b-nav>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'Navigation'
}
</script>

<style scoped>
</style>
