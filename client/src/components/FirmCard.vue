<template>
  <div class="cards-container">
    <b-container fluid>
      <b-row>
        <b-col sm="12" lg="6" class="pt-5 pb-4">
          <VisualizationGallery noResize :images="visualization"/>
        </b-col>
        <b-col align-self="center" sm="12" lg="6" class="pb-5" data-aos="fade-left">
          <Title name="O nas" :header="aboutFirm"/>
          <router-link to="/o_nas">dowiedz się więcej _</router-link>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import VisualizationGallery from '../components/VisualizationGallery'
import Title from '../components/Title'

export default {
  props: {
    visualization: Array,
    aboutFirm: String
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
  .cards-container {
    margin-left: 10%;
    margin-right: 10%;
    margin-bottom: 5%;
    text-align: center;
  }
</style>
