<template>
  <div class="card-row">
    <b-container fluid>
      <b-row>
        <b-col sm="12" lg="6">
          <div class="card-container">
            <b-img class="card-image" :src="offer.imgFile" fluid></b-img>
            <div class="card-middle">
              <b-button to="/oferty/1" size="lg" variant="outline-warning">{{ offer.btn }}</b-button>
            </div>
          </div>
        </b-col>
        <b-col sm="12" lg="6">
          <div class="text-container">
            <h1>{{ offer.title }}</h1>
            <h2>{{ offer.term }}</h2>
            <p>{{ offer.msg }}</p>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  props: {
    offer: Object
  }
}
</script>

<style scoped>
  .card-row {
    margin-left: 10.5%;
    margin-right: 10.5%;
    margin-top: 5%;
    margin-bottom: 5%;
  }
  .card-container {
    position: relative;
    width: 100%;
    background-color: rgb(0,0,0);
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  }
  .card-image {
    opacity: 1;
    display: block;
    width: 100%;
    height: auto;
    transition: .5s ease;
    backface-visibility: hidden;
  }
  .card-middle {
    transition: .5s ease;
    opacity: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100%;
    transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    text-align: center;
  }
  .card-container:hover .card-image {
    opacity: 0.3;
    box-shadow: 0 16px 32px 0 rgba(0,0,0,0.2);
  }
  .card-container:hover .card-middle {
    opacity: 1;
  }
  .text-container {
    color: rgb(0, 0, 0);
    font-size: 16px;
  }
  h1 {
    font-weight: 400;
    font-size: 1.5em;
    padding-bottom: 2%;
    margin-top: 2%;
  }
  h2 {
    font-weight: 300;
    font-size: 1.2em;
    padding-bottom: 5%;
  }
  p {
    font-size: 1em;
    font-weight: 200;
    text-align: justify;
    text-justify:inter-word;
    margin-bottom: 0;
    margin-top: 0;
  }
</style>
