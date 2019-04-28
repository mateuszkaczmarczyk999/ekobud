<template>
  <div id="details">
    <OfferDetails :main-offer="offer"/>
    <Technology data-aos="fade-left"/>
    <VisualizationGallery background :images="visualization"/>
    <Localization/>
    <BuildingsPlan :buildings="buildings" :selected="selectedBuilding"/>
    <OfferList @mail="initMessage" @plan="initPlan" @select="initSelection" data-aos="fade-left"/>
    <ContactModal :message="contactMessage"/>
    <PlanModal :header="planHeader" :planSrc="planSrc"/>
    <VisualizationGallery background :images="visualizationInt"/>
  </div>
</template>

<script>
import Title from '../components/Title'
import OfferDetails from '../components/OfferDetails'
import BuildingsPlan from '../components/BuildingsPlan'
import Localization from '../components/Localization'
import OfferList from '../components/OfferList'
import Technology from '../components/Technology'
import OfferFeatures from '../components/OfferFeatures'
import VisualizationGallery from '../components/VisualizationGallery'
import ContactModal from '../components/ContactModal'
import PlanModal from '../components/PlanModal'
import viz1 from '.././assets/viz1.jpg'
import viz2 from '.././assets/viz2.jpg'
import viz3 from '.././assets/viz3.jpg'
import viz4 from '.././assets/viz4.jpg'
import viz5 from '.././assets/viz5.jpg'
import tmpImgA from '.././assets/A.jpg'
import tmpImgB from '.././assets/B.jpg'
import tmpImgC from '.././assets/C.jpg'
import tmpImgD from '.././assets/D.jpg'
import tmpImgE from '.././assets/E.jpg'
import tmpImgF from '.././assets/F.jpg'
import tmpImgG from '.././assets/G.jpg'
import tmpImgH from '.././assets/H.jpg'
import tmpPlanA from '.././assets/planA.jpg'
import tmpPlanB from '.././assets/planB.jpg'
import tmpPlanC from '.././assets/planC.jpg'
import tmpPlanD from '.././assets/planD.jpg'
import tmpPlanE from '.././assets/planE.jpg'
import tmpPlanF from '.././assets/planF.jpg'
import tmpPlanG from '.././assets/planG.jpg'
import tmpPlanH from '.././assets/planH.jpg'
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
import i1 from '.././assets/i1.jpg'
import i2 from '.././assets/i2.jpg'
import i3 from '.././assets/i3.jpg'
import i4 from '.././assets/i4.jpg'
import i5 from '.././assets/i5.jpg'
import i6 from '.././assets/i6.jpg'

export default {
  name: 'Details',
  data () {
    return {
      offer: {
        id: 1,
        title: '"Osiedle przy Cichej"',
        imgSource: viz1,
        imgSize: '300',
        realizationTerm: 'Termin realizacji: IV kwartał 2019',
        btn: 'Szczegóły',
        text: 'Ekologiczna inwestycja położona w dynamicznie rozwijającej się podwarszawskiej gminie Lesznowola, w miejscowości Łazy, sąsiadującej z legendarną Magdalenką. Piękna, cicha i zielona okolica pozwala na życie w spokojnym zakątku naszego kraju, w izolacji od zgiełku warszawskich ulic. Doskonałe położenie Osiedla związane z bezpośrednim sąsiedztwem trasy S7 gwarantuje szybki dojazd do centrum Warszawy oraz na lotnisko Chopina, zajmuje on bowiem 15 min. Tak więc lokalizacja pozwala na życie w ciszy i spokoju, nie rezygnując jednocześnie z możliwości pracy i korzystania z atrakcji kulturalnych oraz rozrywek stolicy.'
      },
      buildings: {
        'Całość': [8, tmpImgFull, pzt],
        'A': [0, tmpImgA, pztA, tmpPlanA],
        'B': [1, tmpImgB, pztB, tmpPlanB],
        'C': [2, tmpImgC, pztC, tmpPlanC],
        'D': [3, tmpImgD, pztD, tmpPlanD],
        'E': [4, tmpImgE, pztE, tmpPlanE],
        'F': [5, tmpImgF, pztF, tmpPlanF],
        'G': [6, tmpImgG, pztG, tmpPlanG],
        'H': [7, tmpImgH, pztH, tmpPlanH]
      },
      visualization: [viz1, viz2, viz3, viz4, viz5],
      visualizationInt: [i1, i2, i3, i4, i5, i6],
      contactMessage: '',
      selectedBuilding: 'Całość',
      selectedPlan: null
    }
  },
  methods: {
    initMessage (val) {
      this.contactMessage = val
    },
    initPlan (num) {
      this.selectedPlan = num
    },
    initSelection (num) {
      this.selectedBuilding = num
    }
  },
  computed: {
    planHeader () {
      return `Karta budynku numer ${this.selectedPlan}`
    },
    planSrc () {
      if (this.selectedPlan) return this.buildings[this.selectedPlan][3]
      else return ''
    }
  },
  components: {
    Title, ContactModal, PlanModal, OfferDetails, BuildingsPlan, Localization, OfferList, Technology, OfferFeatures, VisualizationGallery
  }
}
</script>
