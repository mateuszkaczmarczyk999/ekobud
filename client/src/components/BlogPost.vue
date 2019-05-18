<template>
  <div class="post-container">
    <h1>{{ post.title }}</h1>
    <h2>{{ post.description }}</h2>
    <VisualizationGallery :images="post.images" v-if="anyImages"/>
    <b-embed v-if="post.movieUrl" class="pt-3 pb-5" type="iframe" aspect="16by9" :src="post.movieUrl" allowfullscreen></b-embed>
    <p class="pt-5">{{ formatedDate }}</p>
  </div>
</template>

<script>
import VisualizationGallery from '../components/VisualizationGallery'

export default {
  props: {
    post: { type: Object, default: null }
  },
  data () {
    return {
      monthNames: ['Styczeń', 'Luty', 'Marzec', 'Kwiecień', 'Maj', 'Czerwiec', 'Lipiec', 'Sierpień', 'Wrzesień', 'Paźdzernik', 'Listopad', 'Grudzień']
    }
  },
  computed: {
    anyImages () {
      return this.post.images.length > 0
    },
    formatedDate () {
      if (this.post) {
        let cDate = new Date(this.post.createDate)
        const day = cDate.getDate()
        const monthIndex = cDate.getMonth()
        const year = cDate.getFullYear()
        return `${day} ${this.monthNames[monthIndex]} ${year}`
      } else {
        return ''
      }
    }
  },
  components: {
    VisualizationGallery
  }
}
</script>

<style scoped>
  .post-container {
    overflow: auto;
    margin: 1% 20% 5%;
    font-size: 16px;
  }
  h1 {
    font-weight: 400;
    font-size: 1.2em;
    padding-bottom: 2%;
    text-align: center;
  }
  h2 {
    font-weight: 200;
    font-size: 1.1em;
    padding-bottom: 2%;
    text-align: center;
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
