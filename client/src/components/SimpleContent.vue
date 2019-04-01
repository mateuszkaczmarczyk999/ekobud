<template>
  <div>
    <h3>O nas</h3>
    <hr class="title-underline">
    <h5>{{ msg }}</h5>
    <b-container class="content">
      <b-row>
        <b-col>
          <img src=".././assets/about.jpg" width="400" height="300">
        </b-col>
        <b-col><p>{{ desc }}</p></b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    }
  }
}
</script>

<style scoped>
  div {
    text-align: center;
    margin-top: 5%;
    margin-bottom: 5%;
    margin-left: 5%;
    margin-right: 5%;
  }
  h3 {
    font-weight: 100;
    font-size: 2.4em;
    margin-bottom: 1%;
  }
  h5 {
    margin-bottom: 1%;
    margin-top: 1%;
  }
  hr {
    border-top: 2px solid #8c8b8b;
    margin-left: 30%;
    margin-right: 30%;
  }
  p {
    text-align: left;
  }
</style>
