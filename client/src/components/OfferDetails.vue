<template>
  <div class="main-offer-container">
    <b-img :style="imgClass" :src="imgSource"></b-img>
    <div class="menu-gradient"></div>
    <div class="details-container">
      <b-container class="info-container">
        <b-row align-h="end">
          <b-col cols="12" lg="8">
            <div v-if="isMenu">
              <h1>Nasza aktualna inwestycja</h1>
              <hr>
              <h2>{{ title }}</h2>
              <h3>{{ realizationTerm }}</h3>
              <p>{{ text }}</p>
            </div>
            <div v-else>
              <h1>{{ title }}</h1>
              <hr>
              <h3>{{ realizationTerm }}</h3>
              <p>{{ text }}</p>
            </div>
          </b-col>
          <b-col class="text-right" align-self="end">
            <b-button to="/oferty/1" v-if="btnName" size="lg" variant="outline-warning">{{ btnName }}</b-button>
          </b-col>
        </b-row>
      </b-container>
    </div>
    <div class="photo-gradient"></div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    realizationTerm: String,
    text: String,
    imgSource: String,
    btnName: String
  },
  data () {
    return {
      isMenu: true,
      imgClass: {
        'position': 'absolute',
        'left': '0px',
        'top': '0px',
        'z-index': '-1',
        'height': 'auto',
        'width': '100%'
      }
    }
  },
  mounted () {
    this.isMenu = this.$route.params.id == null
  }
}
</script>

<style scoped>
  .menu-gradient {
    background-image: linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0));
    top: 0px;
    left: 0px;
    height: 200px;
    width: 100%;
    position: absolute;
    z-index: -1;
  }
  .photo-gradient {
    background-image: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.7));
    top: calc(50vw - 606px);
    left: 0px;
    height: 600px;
    width: 100%;
    position: absolute;
    z-index: -1;
  }
  .main-offer-container {
    height: calc(50vw - 100px);
    margin-bottom: 2.5%;
  }
  .details-container {
    position: relative;
    margin-left: 10%;
    margin-right: 10%;
    height: 100%;
  }
  .info-container {
    width: 100%;
    position: absolute;
    bottom: 0px;
    padding-bottom: 8%;
    padding-left: 0;
    padding-right: 0;
    color:rgb(255, 255, 255);
  }
  .container {
    max-width: 100%;
  }
  p {
    font-size: 1.4em;
    font-weight: 200;
    padding-top: 1%;
    margin-bottom: 0;
    margin-top: 0;
  }
  h3 {
    color:rgb(230, 230, 230);
    font-weight: 400;
  }
  hr {
    color: aliceblue;
    border-top: 1px solid;
  }
</style>
