<template>
  <div id="details">
    <OfferDetails :main-offer="offer"/>
    <!-- <Title name="Technologia"/> -->
    <Technology/>
    <VisualizationGallery background :images="visualization"/>
    <Localization/>
    <!-- <OfferFeatures/> -->
    <!-- <VisualizationGallery background :images="visualization"/> -->
    <!-- <Title name="Lokalizacja"/> -->
    <!-- <OfferFeatures/> -->
    <!-- <Localization/> -->
    <!-- <Title name="Wybierz mieszkanie dla swojej rodziny"/> -->
    <!-- <BuildingsPlan :buildings="buildings"/> -->
    <BuildingsPlan :buildings="buildings"/>
    <OfferList/>
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
import viz1 from '.././assets/viz1.jpg'
import viz2 from '.././assets/viz2.jpg'
import viz3 from '.././assets/viz3.jpg'
import viz4 from '.././assets/viz4.jpg'
import viz5 from '.././assets/viz5.jpg'
import tmpImgA from '.././assets/A.jpg'
import tmpImgB from '.././assets/B.jpg'
import tmpImgC from '.././assets/C.jpg'
import tmpImgD from '.././assets/D.jpg'
import tmpImgFull from '.././assets/full-view.jpg'
import pztA from '.././assets/pztA.png'
import pztB from '.././assets/pztB.png'
import pztC from '.././assets/pztC.png'
import pztD from '.././assets/pztD.png'
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
        title: '"Osielde przy Cichej"',
        imgSource: viz1,
        imgSize: '300',
        realizationTerm: 'Termin realizacji: IV kwartał 2019',
        btn: 'Szczegóły',
        text: 'Ekologiczna inwestycja położona w dynamicznie rozwijajacej się podwarszawskiej gminie Lesznowola, ' +
             'w miejscowosci Łazy, sąsiadującej z legendarną Magdalenką.' +
             'Piekna, cicha I zielona okolica pozwala na życie w spokojnym zakątku naszego kraju, zdala od zgiełku warszawskich ulic. ' +
             'Doskonałe położenie Osiedla  wynika również z możliwości szybkiego dojazdu do Centrum Warszawy, dzieki bliskosci trasy S7, ' +
             'bowiem dojazd do lotniska I Centrum Warszawy zajmuje 15 min.' +
             'Tak wiec lokalizacja pozwala na zycie w ciszy I spokoju, nie rezygnujac jednoczesnie z mozliwosci pracy i mozliwosci korzystania z  wszelkich uciech Stolicy.'
      },
      buildings: {
        'Całość': [tmpImgFull, pzt],
        'Budynek A': [tmpImgA, pztA],
        'Budynek B': [tmpImgB, pztB],
        'Budynek C': [tmpImgC, pztC],
        'Budynek D': [tmpImgD, pztD]
      },
      visualization: [viz1, viz2, viz3, viz4, viz5],
      visualizationInt: [i1, i2, i3, i4, i5, i6]
    }
  },
  components: {
    Title, OfferDetails, BuildingsPlan, Localization, OfferList, Technology, OfferFeatures, VisualizationGallery
  }
}
</script>
