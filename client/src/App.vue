<template>
  <div id="app">
    <MenuBar/>
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
    <FooterInfo/>
  </div>
</template>

<script>
import MenuBar from './components/MenuBar'
import FooterInfo from './components/FooterInfo'

export default {
  name: 'App',
  components: {
    MenuBar, FooterInfo
  }
}
</script>

<style>
#app {
  font-family: 'Roboto', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
body{
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
