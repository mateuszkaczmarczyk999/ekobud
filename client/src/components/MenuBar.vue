<template>
  <div>
    <b-navbar>
      <b-navbar-brand href="#"><img src=".././assets/menu-logo.png"></b-navbar-brand>

      <b-navbar-nav class="ml-auto pt-4">
        <b-nav-item class="mr-5" href="#">Oferta</b-nav-item>
        <b-nav-item class="mr-5" href="#">Aktualności</b-nav-item>
        <b-nav-item class="mr-5" href="#">O nas</b-nav-item>
        <b-nav-item class="mr-5" href="#">Kontakt</b-nav-item>
      </b-navbar-nav>
    </b-navbar>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style scoped>
  @import url('https://fonts.googleapis.com/css?family=Roboto');

  div {
    font-family: 'Roboto', Helvetica, Arial, sans-serif;
    font-weight: 100;
    font-size: 25px;
  }
</style>
