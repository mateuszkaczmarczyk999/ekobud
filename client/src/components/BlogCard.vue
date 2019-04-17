<template>
  <div class="card-background">
    <div class="card-container">
      <b-container fluid>
        <b-row>
          <b-col sm="12" lg="6" class="pt-4 pb-4">
            <Title :name="news.title" :header="news.header"/>
            <router-link to="/aktualności">dowiedz się więcej _</router-link>
          </b-col>
          <b-col align-self="center" sm="12" lg="6">
            <b-img v-if="news.img" :src="news.img" height="25vw" fluid></b-img>
            <b-embed v-if="news.movieUrl" type="iframe" aspect="16by9" :src="news.movieUrl" allowfullscreen></b-embed>
          </b-col>
        </b-row>
      </b-container>
    </div>
  </div>
</template>

<script>
import VisualizationGallery from '../components/VisualizationGallery'
import Title from '../components/Title'

export default {
  props: {
    news: Object
  },
  data () {
    return {
      selectedImg: 0
    }
  },
  methods: {
    selectImg (idx) {
      this.selectedImg = idx
    }
  },
  computed: {
    reorderedImgs () {
      let firstPart = this.images.slice(0, this.selectedImg)
      let secondPart = this.images.slice(this.selectedImg, this.images.length)
      return secondPart.concat(firstPart)
    }
  },
  components: {
    VisualizationGallery, Title
  }
}
</script>

<style scoped>
  .card-background {
    background-color: lightgray;
  }
  .card-container {
    padding-top: 5%;
    padding-bottom: 5%;
    margin-left: 10%;
    margin-right: 10%;
    text-align: center;
  }
</style>
