<template>
  <div id="app">
    <MenuBar/>
  </div>
</template>

<script>
import MenuBar from './components/MenuBar'

export default {
  name: 'App',
  components: {
    MenuBar
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 25px;
  margin-left: 75px;
  margin-right: 75px;
}
</style>
