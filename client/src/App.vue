<template>
  <div id="app">
    <component :is="layout">
      <router-view></router-view>
    </component>
  </div>
</template>

<script>
const defaultLayout = 'default'

export default {
  name: 'App',
  computed: {
    layout () {
      return `${(this.$route.meta.layout || defaultLayout)}-layout`
    }
  }
}
</script>

<style>
#app {
  font-family: 'Roboto', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
body {
  background-color: #eeecea;
}
.fade-enter-active, .fade-leave-active {
  -webkit-transition: opacity .4s ease;
  -moz-transition: opacity .4s ease;
  -o-transition: opacity .4s ease;
  transition: opacity .4s ease;
}
.fade-enter, .fade-leave-active {
  opacity: 0;
}
.tooltip .tooltip-inner {
  background-color: rgba(175, 25, 25, 0.7) !important;
  max-width: 500px;
  padding: 3px;
}
.tooltip .tooltip-inner:before {
  border-bottom-color:rgba(175, 25, 25, 0.7) !important;
  max-width: 500px;
  padding: 3px;
}
</style>
