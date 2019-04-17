<template>
  <div class="content-container">
    <b-img :src="imgSource" width="400" fluid class="text-wrap"></b-img>
    <p>{{ text }}</p>
  </div>
</template>

<script>
export default {
  props: {
    text: String,
    imgSource: String,
    imgHeight: Number,
    imgWidth: Number
  }
}
</script>

<style scoped>
  .content-container {
    overflow: auto;
    font-size: 16px;
    margin-bottom: 5%;
    margin-left: 10%;
    margin-right: 10%;
  }
  .text-wrap {
    float: left;
    margin-right: 5%;
    margin-bottom: 4%;
  }
  p {
    font-size: 1em;
    font-weight: 200;
    margin-bottom: 0;
    margin-top: 0;
    padding-top: 1%;
    text-align: justify;
    text-justify: inter-word;
  }
</style>
