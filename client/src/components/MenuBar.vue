<template>
  <header id="menu">
    <b-navbar sticky toggleable="lg" class="nav-container" :type="toggleColor">
      <b-navbar-brand>
          <router-link to="/">
            <b-img :src="logoSrc" :key="logoSrc" left width="220"></b-img>
          </router-link>
        </b-navbar-brand>

      <b-navbar-toggle @click="toogler" class="ml-auto pt-4" target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto pt-4">
          <b-nav-item @click="toogler"  class="mr-5"><router-link :style="menuColor" class="menu-item" to="/oferty">Oferta</router-link></b-nav-item>
          <b-nav-item @click="toogler"  class="mr-5"><router-link :style="menuColor" class="menu-item" to="/aktualnosci">Aktualności</router-link></b-nav-item>
          <b-nav-item @click="toogler"  class="mr-5"><router-link :style="menuColor" class="menu-item" to="/o_nas">O nas</router-link></b-nav-item>
          <b-nav-item @click="toogler"><router-link :style="menuColor" class="menu-item" to="/kontakt">Kontakt</router-link></b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </header>
</template>

<script>
import logoWth from '.././assets/menu-logo-sm-wth.png'
import logoBlk from '.././assets/menu-logo-sm-blk.png'
import { EventBus } from '../eventBus.js'

export default {
  name: 'MenuBar',
  data () {
    return {
      menuOpen: false,
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
      this.isSmall = false
    }
  },
  computed: {
    logoSrc () {
      return this.isInvert && !this.isSmall ? logoWth : logoBlk
    },
    menuColor () {
      return this.isInvert && !this.isSmall ? { color: 'white' } : { color: 'black' }
    },
    toggleColor () {
      return this.isInvert && !this.isSmall ? 'dark' : 'light'
    }
  },
  methods: {
    handleResize () {
      this.windWidth = window.innerWidth
    },
    toogler () {
      this.menuOpen = !this.menuOpen
      EventBus.$emit('menu-toogled', this.menuOpen)
    }
  }
}
</script>

<style scoped>
  header {
    margin-left: 10%;
    margin-right: 10%;
  }
  .toggle-color {
    color: white;
  }
  .nav-container {
    padding-left: 0;
    padding-right: 0;
    z-index: 3;
  }
  .pt-4 {
    padding-top: 2rem !important;
  }
  .menu-item {
    font-weight: 500;
    font-size: 1.3em;
  }
  .menu-item:hover {
    text-shadow: 2px 2px 20px rgba(125, 125, 125, 0.5);
    text-decoration: none;
  }
</style>
