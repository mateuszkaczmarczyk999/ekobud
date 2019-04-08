<template>
  <div class="cards-container">
    <b-container fluid>
      <b-row class="text-center" :key="index" v-for="(chunked, index) in chunkedOffers">
        <b-col cols="12" lg="6" class="pt-4" :key="offer.id" v-for="offer in chunked">
          <div class="card-container">
            <b-img class="card-image" :src="offer.imgFile" fluid></b-img>
            <div class="card-middle">
              <h3>{{ offer.title }}</h3>
              <p>Oddanie II kwartał 2019</p>
              <b-button to="/oferty/1" variant="outline-warning">{{ offer.btn }}</b-button>
            </div>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  props: {
    offers: Array
  },
  computed: {
    chunkedOffers () {
      return this.chunkOffers(2)
    }
  },
  methods: {
    chunkOffers (chunkSize) {
      var index = 0
      var arrayLength = this.offers.length
      var tempArray = []

      for (index = 0; index < arrayLength; index += chunkSize) {
        let myChunk = this.offers.slice(index, index + chunkSize)
        tempArray.push(myChunk)
      }

      return tempArray
    }
  }
}
</script>

<style scoped>
  .cards-container {
    margin-left: 10%;
    margin-right: 10%;
    margin-bottom: 2.5%;
    text-align: center;
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
  p {
    color: aliceblue;
  }
  h3 {
    color: aliceblue;
  }
</style>
