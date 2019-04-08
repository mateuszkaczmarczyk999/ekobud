<template>
  <header>
    <b-navbar toggleable="lg" class="nav-container">
      <b-navbar-brand>
          <router-link to="/">
            <b-img :src="logoSrc" left></b-img>
          </router-link>
        </b-navbar-brand>

      <b-navbar-toggle class="ml-auto pt-4" target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto pt-4">
          <b-nav-item class="mr-5"><router-link :style="menuColor" class="menu-item" to="/oferty">Oferta</router-link></b-nav-item>
          <b-nav-item class="mr-5"><router-link :style="menuColor" class="menu-item" to="/aktualności">Aktualności</router-link></b-nav-item>
          <b-nav-item class="mr-5"><router-link :style="menuColor" class="menu-item" to="/o_nas">O nas</router-link></b-nav-item>
          <b-nav-item><router-link :style="menuColor" class="menu-item" to="/kontakt">Kontakt</router-link></b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </header>
</template>

<script>
import logoWth from '.././assets/menu-logo-sm-wth.png'
import logoBlk from '.././assets/menu-logo-sm-blk.png'

export default {
  name: 'MenuBar',
  data () {
    return {
      isInvert: false,
      isSmall: false,
      windWidth: 0
    }
  },
  created () {
    window.addEventListener('resize', this.handleResize)
    this.handleResize()
  },
  mounted () {
    this.isInvert = this.$route.name === 'Main' || this.$route.name === 'Details'
  },
  destroyed () {
    window.removeEventListener('resize', this.handleResize)
  },
  watch: {
    $route (to, from) {
      this.isInvert = to.name === 'Main' || to.name === 'Details'
    },
    windWidth () {
      this.isSmall = this.windWidth < 992
    }
  },
  computed: {
    logoSrc () {
      return this.isInvert && !this.isSmall ? logoWth : logoBlk
    },
    menuColor () {
      return this.isInvert && !this.isSmall ? { color: 'white' } : { color: 'black' }
    }
  },
  methods: {
    handleResize () {
      this.windWidth = window.innerWidth
    }
  }
}
</script>

<style scoped>
  header {
    margin-left: 10%;
    margin-right: 10%;
  }
  .nav-container {
    padding-left: 0;
    padding-right: 0;
  }
  .pt-4 {
    padding-top: 2rem !important;
  }
  .menu-item {
    font-weight: 300;
    font-size: 1.3em;
  }
  .menu-item:hover {
    font-weight: bolder;
    text-decoration: none;
  }
</style>
