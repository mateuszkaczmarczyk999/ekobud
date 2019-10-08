<template>
  <div id="details">
    <OfferDetails :main-offer="offer"/>
    <Technology :items="technology" data-aos="fade-left"/>
    <VisualizationGallery background :images="visualizationExt"/>
    <Localization :items="localization"/>
    <BuildingsPlan :buildings="buildings" :selected="selectedBuilding"/>
    <OfferList @mail="initMessage" @view="initView" @plan="initPlan" @select="initSelection" :items="locals" data-aos="fade-left"/>
    <ContactModal :message="contactMessage" :title="buildingNum"/>
    <PlanModal id="plan-modal" :header="planHeader" :planSrc="planSrc"/>
    <PlanModal id="view-modal" :header="view3dHeader" :planSrc="view3dSrc"/>
    <VisualizationGallery background :images="visualizationInt"/>
  </div>
</template>

<script>
import AOS from 'aos'
import 'aos/dist/aos.css'
import BASE_URL from '../config'
import OfferService from '../services/OfferService'
import Title from '../components/Title'
import OfferDetails from '../components/OfferDetails'
import BuildingsPlan from '../components/BuildingsPlan'
import Localization from '../components/Localization'
import OfferList from '../components/OfferList'
import Technology from '../components/Technology'
import VisualizationGallery from '../components/VisualizationGallery'
import ContactModal from '../components/ContactModal'
import PlanModal from '../components/PlanModal'
import tmpImgA from '.././assets/A.jpg'
import tmpImgB from '.././assets/B.jpg'
import tmpImgC from '.././assets/C.jpg'
import tmpImgD from '.././assets/D.jpg'
import tmpImgE from '.././assets/E.jpg'
import tmpImgF from '.././assets/F.jpg'
import tmpImgG from '.././assets/G.jpg'
import tmpImgH from '.././assets/H.jpg'
import tmpImgFull from '.././assets/pzt.jpg'
import pztA from '.././assets/A.png'
import pztB from '.././assets/B.png'
import pztC from '.././assets/C.png'
import pztD from '.././assets/D.png'
import pztE from '.././assets/E.png'
import pztF from '.././assets/F.png'
import pztG from '.././assets/G.png'
import pztH from '.././assets/H.png'
import pzt from '.././assets/pzt.png'

export default {
  name: 'Details',
  data () {
    return {
      offer: {},
      locals: [],
      technology: [],
      localization: [],
      buildings: {
        'Całość': [tmpImgFull, pzt],
        'A': [tmpImgA, pztA],
        'B': [tmpImgB, pztB],
        'C': [tmpImgC, pztC],
        'D': [tmpImgD, pztD],
        'E': [tmpImgE, pztE],
        'F': [tmpImgF, pztF],
        'G': [tmpImgG, pztG],
        'H': [tmpImgH, pztH]
      },
      contactMessage: '',
      buildingNum: '',
      selectedBuilding: 'Całość',
      selectedPlan: null,
      selectedView: null
    }
  },
  methods: {
    initMessage (val, num) {
      this.contactMessage = val
      this.buildingNum = num
    },
    initPlan (num) {
      this.selectedPlan = num
    },
    initView (num) {
      this.selectedView = num
    },
    initSelection (num) {
      this.selectedBuilding = num
    },
    getTechFeatures (el) {
      return el.name === 'Ekologiczna konstrukcja' || el.name === 'Energooszczędna architektura' ||
             el.name === 'Odnawialne źródła energii' || el.name === 'Prefabrykacja'
    },
    getLocalizationFeatures (el) {
      return el.name === 'Edukacja' || el.name === 'Zdrowie' ||
             el.name === 'Zakupy' || el.name === 'Komunikacja miejska' ||
             el.name === 'Sport' || el.name === 'Natura'
    },
    prepareVisualization (arr) {
      if (arr) {
        let result = arr.map(element => {
          return `${BASE_URL}${element}`
        })
        return result
      } else return []
    }
  },
  computed: {
    planHeader () {
      return `Karta budynku numer ${this.selectedPlan}`
    },
    planSrc () {
      if (this.selectedPlan) {
        let pickedLocals = this.locals.find((el) => {
          return el.flatNumber === this.selectedPlan
        })
        return `${BASE_URL}${pickedLocals.planPath}`
      } else return ''
    },
    view3dHeader () {
      return `Widok 3d wnętrza budynku numer ${this.selectedPlan}`
    },
    view3dSrc () {
      if (this.selectedView) {
        let pickedLocals = this.locals.find((el) => {
          return el.flatNumber === this.selectedView
        })
        return `${BASE_URL}${pickedLocals.viewPath}`
      } else return ''
    },
    visualizationExt () {
      return this.prepareVisualization(this.offer.extVisualizations)
    },
    visualizationInt () {
      return this.prepareVisualization(this.offer.intVisualizations)
    }
  },
  components: {
    Title, ContactModal, PlanModal, OfferDetails, BuildingsPlan, Localization, OfferList, Technology, VisualizationGallery
  },
  async created () {
    AOS.init()
    try {
      const result = await OfferService.getOfferByNameId(this.$route.params.id)
      this.offer = result.offerData
      this.locals = result.localsData
      this.technology = result.featuresData.filter(this.getTechFeatures)
      this.localization = result.featuresData.filter(this.getLocalizationFeatures)
    } catch (error) {
      console.log(error.message)
    }
  }
}
</script>
