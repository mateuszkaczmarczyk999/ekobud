<template>
  <header id="menu-bar">
    <b-navbar>
      <b-navbar-brand href="#"><img src="../assets/logo.png"></b-navbar-brand>

      <b-navbar-nav class="ml-auto pt-4">
        <b-nav-item class="mr-5" href="#">Oferta</b-nav-item>
        <b-nav-item class="mr-5" href="#">Aktualności</b-nav-item>
        <b-nav-item class="mr-5" href="#"><router-link to="/o_nas">O nas</router-link></b-nav-item>
        <b-nav-item href="#">Kontakt</b-nav-item>
      </b-navbar-nav>
    </b-navbar>
  </header>
</template>

<script>
export default {
  name: 'MenuBar',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style scoped>
  .pt-4 {
    padding-top: 2rem !important;
  }
  header {
    font-weight: 300;
    font-size: 1.3em;
    margin-left: 5%;
    margin-right: 5%;
  }
</style>
