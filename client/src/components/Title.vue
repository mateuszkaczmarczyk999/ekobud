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
    color:#33302a;
    text-align: center;
    margin-left: 10%;
    margin-right: 10%;
    margin-bottom: 2.5%;
  }
  h1 {
    font-weight: 400;
    margin-bottom: 1%;
  }
  .underline {
    border-top: 1px solid;
  }
  p {
    font-size: 1.4em;
    font-weight: 400;
    margin-bottom: 1%;
  }
</style>
