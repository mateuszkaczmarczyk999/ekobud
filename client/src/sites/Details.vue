<template>
  <div id="details">
    <OfferDetails v-if="isSmall" :imgSource="offer.imgFile" :title="offer.title" :realization-term="offer.term" :text="offer.msg"/>
    <Title name="Technologia"/>
    <Title name="Wizualizacja zabudowy"/>
    <BuildingsCard :buildings="buildings"/>
  </div>
</template>
<script>
import Title from '../components/Title'
import OfferDetails from '../components/OfferDetails'
import BuildingsCard from '../components/BuildingsCard'
import tmpImg1 from '.././assets/tmp0.jpg'
import tmpImgA from '.././assets/A.jpg'
import tmpImgB from '.././assets/B.jpg'
import tmpImgC from '.././assets/C.jpg'
import tmpImgD from '.././assets/D.jpg'
import tmpImgFull from '.././assets/full-view.jpg'

export default {
  name: 'Details',
  data () {
    return {
      offer: {
        id: 1,
        title: '"Osielde przy Cichej"',
        imgFile: tmpImg1,
        imgSize: '300',
        term: 'Termin realizacji: IV kwartał 2019',
        btn: 'Szczegóły',
        msg: 'Ekologiczna inwestycja położona w dynamicznie rozwijajacej się podwarszawskiej gminie Lesznowola, ' +
             'w miejscowosci Łazy, sąsiadującej z legendarną Magdalenką.' +
             'Piekna, cicha I zielona okolica pozwala na życie w spokojnym zakątku naszego kraju, zdala od zgiełku warszawskich ulic. ' +
             'Doskonałe położenie Osiedla  wynika również z możliwości szybkiego dojazdu do Centrum Warszawy, dzieki bliskosci trasy S7, ' +
             'bowiem dojazd do lotniska I Centrum Warszawy zajmuje 15 min.' +
             'Tak wiec lokalizacja pozwala na zycie w ciszy I spokoju, nie rezygnujac jednoczesnie z mozliwosci pracy i mozliwosci korzystania z  wszelkich uciech Stolicy.'
      },
      buildings: {
        'Budynek A': tmpImgA,
        'Budynek B': tmpImgB,
        'Budynek C': tmpImgC,
        'Budynek D': tmpImgD,
        'Całość': tmpImgFull
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
      return this.windWidth > 991
    }
  },
  components: {
    Title, OfferDetails, BuildingsCard
  },
  methods: {
    handleResize () {
      this.windWidth = window.innerWidth
    }
  }
}
</script>
