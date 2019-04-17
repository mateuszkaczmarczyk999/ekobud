<template>
  <div v-if="isSmall" class="main-offer-container">
    <b-img :style="imgClass" :src="mainOffer.imgSource"></b-img>
    <div class="menu-gradient"></div>
    <div class="details-container">
      <b-container class="info-container">
        <b-row align-h="end">
          <b-col cols="12" lg="8" v-if="shortView" class="pt-4 pb-4">
            <div>
              <h2>Nasza aktualna inwestycja</h2>
              <hr>
              <h1>{{ mainOffer.title }}</h1>
              <h3>{{ mainOffer.realizationTerm }}</h3>
              <p>{{ mainOffer.text }}</p>
            </div>
          </b-col>
          <b-col class="text-right pt-4 pb-4" align-self="end" v-if="shortView">
            <b-button to="/oferty/1" size="lg" variant="outline-warning">{{ mainOffer.btn }}</b-button>
          </b-col>
          <b-col cols="12" v-else>
            <div>
              <h1>{{ mainOffer.title }}</h1>
              <hr>
              <h3>{{ mainOffer.realizationTerm }}</h3>
              <p>{{ mainOffer.text }}</p>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </div>
    <div class="photo-gradient"></div>
  </div>
  <div v-else>
    <div>
      <Title :name="mainOffer.title"/>
      <p class="simple-text" >{{ mainOffer.text }}</p>
    </div>
  </div>
</template>

<script>
import Title from '../components/Title'

export default {
  props: {
    mainOffer: Object,
    shortView: Boolean
  },
  data () {
    return {
      windWidth: 0,
      offers: [this.mainOffer],
      isMenu: true,
      imgClass: {
        'position': 'absolute',
        'left': '0px',
        'top': '0px',
        'z-index': '-1',
        'width': '100vw',
        'height': '100vh',
        'object-fit': 'cover'
      }
    }
  },
  created () {
    window.addEventListener('resize', this.handleResize)
    this.handleResize()
  },
  destroyed () {
    window.removeEventListener('resize', this.handleResize)
  },
  computed: {
    isSmall () {
      return true
    },
    offer () {
      return [
        { id: 1,
          title: this.title,
          imgFile: this.imgSource,
          imgSize: '300',
          btn: 'Szczegóły',
          msg: this.realizationTerm
        }
      ]
    }
  },
  mounted () {
    this.isMenu = this.$route.params.id == null
  },
  methods: {
    handleResize () {
      this.windWidth = window.innerWidth
    }
  },
  components: {
    Title
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
    top: 200px;
    left: 0px;
    height: calc(100vh - 200px);
    width: 100%;
    position: absolute;
    z-index: -1;
  }
  .main-offer-container {
    height: calc(100vh - 100px);
    margin-bottom: 2.5%;
  }
  .details-container {
    position: relative;
    margin-left: 10%;
    margin-right: 10%;
    height: 100%;
  }
  .simple-text {
    margin-left: 10%;
    margin-right: 10%;
  }
  .info-container {
    font-size: 16px;
    width: 100%;
    position: absolute;
    bottom: 0px;
    padding-bottom: 8%;
    padding-left: 0;
    padding-right: 0;
    color:rgb(230, 230, 230);
  }
  .container {
    max-width: 100%;
  }
  p {
    font-size: 1.2em;
    font-weight: 200;
    padding-top: 1%;
    margin-bottom: 0;
    margin-top: 0;
    text-align: justify;
    text-justify:inter-word;
  }
  h3 {
    color:rgb(230, 230, 230);
    font-weight: 300;
    font-size: 1.5em;
  }
  h1 {
    font-weight: 600;
    font-size: 2.3em;
  }
  h2 {
    font-weight: 400;
    font-size: 1.5em;
  }
  hr {
    color: aliceblue;
    border-top: 1px solid;
  }
</style>
