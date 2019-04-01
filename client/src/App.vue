<template>
  <div id="app">
    <MenuBar/>
    <router-view></router-view>
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
  },
  mounted () {
    console.log(MenuBar)
    console.log(FooterInfo)
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
</style>
