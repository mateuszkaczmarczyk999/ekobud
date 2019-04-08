<template>
  <div class="content-container">
    <b-container class="info-container">
      <b-row>
        <b-col cols="12" lg="6">
          <b-img :src="imgSource" fluid></b-img>
        </b-col>
        <b-col>
          <p>{{ text }}</p>
        </b-col>
      </b-row>
    </b-container>
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
    margin-top: 5%;
    margin-bottom: 5%;
    margin-left: 10%;
    margin-right: 10%;
  }
  p {
    font-size: 1.2em;
    font-weight: 400;
    margin-bottom: 1%;
    text-align: left;
  }
</style>
