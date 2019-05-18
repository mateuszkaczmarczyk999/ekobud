<template>
  <div id="main">
    <OfferDetails shortView :main-offer="mainOffer"/>
    <FirmCard :visualization="visualization" :aboutFirm="aboutFirm"/>
    <ContactBar/>
    <BlogCard :news="actualPost"/>
  </div>
</template>

<script>
import OfferService from '../services/OfferService'
import PostService from '../services/PostService'
import FirmService from '../services/FirmService'
import OfferDetails from '../components/OfferDetails'
import FirmCard from '../components/FirmCard'
import BlogCard from '../components/BlogCard'
import ContactBar from '../components/ContactBar'
import BASE_URL from '../config'
import AOS from 'aos'
import 'aos/dist/aos.css'

export default {
  name: 'Main',
  data () {
    return {
      aboutFirm: '',
      news: {
        title: 'Aktualności',
        header: 'Projekt koncepcyjny na jednej z budynków w naszej nowej inwestycji "Osiedle przy Cichej". Chcielśmy Państwu zaprecentować formę architektoniczną tego budynku na krótkiej animacji. Zapraszamy do ogladania.',
        movieUrl: 'https://www.youtube.com/embed/meGyEoLXB04',
        img: null
      },
      actualPost: {},
      mainOffer: {}
    }
  },
  components: {
    OfferDetails, FirmCard, ContactBar, BlogCard
  },
  computed: {
    visualization () {
      if (this.mainOffer.extVisualizations) {
        let result = this.mainOffer.extVisualizations.slice(0, 2).map((element) => {
          return `${BASE_URL}${element}`
        })
        return result
      } else return []
    }
  },
  async created () {
    AOS.init()
    try {
      const info = await FirmService.getInformations()
      this.mainOffer = await OfferService.getMainOffer()
      this.actualPost = await PostService.getLastAdded()
      this.aboutFirm = info.description
    } catch (error) {
      console.log(error.message)
    }
  }
}
</script>
