<template>
  <div>
    <div :style="containerHeight">
      <b-img :style="imgClass" :src="imgSource"></b-img>
      <div class="menu-gradient"></div>
      <div class="details-container">
        <b-container class="info-container">
          <b-row align-h="end">
            <b-col cols="12" lg="8" v-if="shortView" class="pt-4 pb-4">
              <div>
                <h2>Nasza aktualna inwestycja</h2>
                <hr>
                <h1>{{ mainOffer.name }}</h1>
                <h3>Termin realizacji: {{ mainOffer.term }}</h3>
                <p v-if="!showText">{{ mainOffer.description }}</p>
              </div>
            </b-col>
            <b-col class="text-right pt-4 pb-4" align-self="end" v-if="shortView">
              <b-button :to="detailsUrl" size="lg" variant="outline-warning">Szczegóły oferty</b-button>
            </b-col>
            <b-col cols="12" v-if="!shortView">
              <div>
                <h1>{{ mainOffer.name }}</h1>
                <hr>
                <h3>Termin realizacji: {{ mainOffer.term }}</h3>
                <p v-if="!isSmall">{{ mainOffer.text }}</p>
              </div>
            </b-col>
          </b-row>
          <b-row class="text-center" v-if="!shortView">
            <b-col>
              <i class="fas fa-chevron-down move-action" v-scroll-to="scroll"></i>
            </b-col>
          </b-row>
        </b-container>
      </div>
      <div class="photo-gradient"></div>
    </div>
    <div v-if="isSmall && !shortView" id="text-section" class="content-small">
      <p>{{ mainOffer.text }}</p>
    </div>
  </div>
</template>

<script>
import Title from '../components/Title'
import BASE_URL from '../config'
import { EventBus } from '../eventBus.js'

export default {
  props: {
    mainOffer: Object,
    shortView: Boolean
  },
  data () {
    return {
      menuOpen: false,
      isSmall: false,
      windWidth: 0,
      isMenu: true,
      scroll: '#tech-section',
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
  mounted () {
    this.isMenu = this.$route.params.id == null
    EventBus.$on('menu-toogled', (menuOpen) => {
      this.menuOpen = menuOpen
    })
  },
  destroyed () {
    window.removeEventListener('resize', this.handleResize)
  },
  computed: {
    detailsUrl () {
      return `/oferty/${this.mainOffer.idName}`
    },
    imgSource () {
      if (this.mainOffer.extVisualizations) return `${BASE_URL}${this.mainOffer.extVisualizations[0]}`
      else return ''
    },
    containerHeight () {
      if (this.menuOpen && this.isSmall) return { 'height': 'calc(100vh - 300px)', 'margin-bottom': '2.5%' }
      else return { 'height': 'calc(100vh - 100px)', 'margin-bottom': '2.5%' }
    },
    showText () {
      return this.menuOpen && this.isSmall
    }
  },
  watch: {
    windWidth () {
      this.isSmall = this.windWidth < 767
      if (this.isSmall) {
        this.scroll = '#text-section'
      } else {
        this.scroll = '#tech-section'
        this.menuOpen = false
      }
    }
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
    background-image: linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0));
    top: 0px;
    left: 0px;
    height: 200px;
    width: 100%;
    position: absolute;
    z-index: -1;
  }
  .photo-gradient {
    background-image: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.8));
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
  .content-small {
    margin: 10%;
  }
  .content-small p {
    color: rgb(43, 43, 43);
    text-align: center;
    font-size: 1em;
    font-weight: 400;
  }
  .move-action {
    text-align: center;
    font-size: 5em;
    color: rgba(255, 255, 255, 0.6);
  }
  .move-action:hover {
    font-size: 5em;
    color:  rgba(255, 255, 255, 0.4);
    cursor: pointer;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
  }
  p {
    font-size: 1.2em;
    font-weight: 400;
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
