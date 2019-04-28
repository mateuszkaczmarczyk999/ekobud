<template>
  <div class="title-container">
    <h1>{{ name }}</h1>
    <hr class="underline">
    <p>{{ header }}</p>
  </div>
</template>

<script>
export default {
  props: {
    name: String,
    header: String
  }
}
</script>

<style scoped>
  .title-container {
    font-size: 16px;
    color:#33302a;
    text-align: center;
    margin-left: 10%;
    margin-right: 10%;
    margin-top: 5%;
    margin-bottom: 2%;
  }
  h1 {
    font-weight: 900;
    font-size: 2.4em;
    margin-bottom: 1%;
  }
  .underline {
    border-top: 1px solid;
  }
  p {
    font-weight: 300;
    font-size: 1.2em;
    margin-bottom: 1%;
  }
</style>
