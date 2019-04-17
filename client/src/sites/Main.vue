<template>
  <div id="main">
    <OfferDetails shortView :main-offer="mainOffer"/>
    <FirmCard :visualization="visualization" :aboutFirm="aboutFirm"/>
    <BlogCard :news="news"/>
  </div>
</template>

<script>
import Title from '../components/Title'
import OfferDetails from '../components/OfferDetails'
import VisualizationGallery from '../components/VisualizationGallery'
import FirmCard from '../components/FirmCard'
import BlogCard from '../components/BlogCard'
import MainButton from '../components/MainButton'
import ContactBar from '../components/ContactBar'
import SimpleCard from '../components/SimpleCard'
import about from '.././assets/about.jpg'
import tmpImg from '.././assets/tmp0.jpg'
import tmpImg2 from '.././assets/tmp1.jpg'
import tmpImg3 from '.././assets/tmp2.jpg'

export default {
  name: 'Main',
  data () {
    return {
      name: '"Osiedle przy Cichej"',
      aboutFirm: {
        title: 'O nas',
        header: 'Firma realizującą inwestycje polegające na budowaniu i ' +
              'sprzedaży budynków mieszkalnych jednorodzinnych ekologicznych i energooszczednych.'
      },
      news: {
        title: 'Aktualności',
        header: 'Projekt koncepcyjny na jednej z budynków w naszej nowej inwestycji "Osiedle przy Cichej". Chcielśmy Państwu zaprecentować formę architektoniczną tego budynku na krótkiej animacji. Zapraszamy do ogladania.',
        movieUrl: 'https://www.youtube.com/embed/meGyEoLXB04',
        img: null
      },
      mainOffer: { id: 1,
        title: '"Osielde przy Cichej"',
        imgSource: tmpImg,
        btn: 'Szczegóły oferty',
        realizationTerm: 'Termin realizacji: IV kwartał 2019',
        text: 'Ekologiczna inwestycja położona w dynamicznie rozwijajacej się podwarszawskiej gminie Lesznowola, ' +
              'w miejscowosci Łazy, sąsiadującej z legendarną Magdalenką.'
      },
      visualization: [tmpImg3, tmpImg2],
      imgFile: tmpImg,
      bImg: about,
      postText: 'Pomysłodawcą projektu są członkowie zarządu. Firma EKO-BUD INVESTMENT ' +
           'to inicjatywa rodzinna założona przez dwie współwłaścicielki, ' +
           'siostry, które wychowały się w rodzinie przedsiębiorców. ' +
           'Obie od najmłodszych lat związane z biznesem i budową przedsiębiorstw. ' +
           'Od 2005 roku właściecielki prowadzą również firmę propagującą i zajmującą ' +
           'się tematyką odnawialnych źródeł energii. Dlatego tez zbudowanie przez ' +
           'Panie energooszczędnego osiedla to kolejny etap rozwoju ...'
    }
  },
  components: {
    Title, OfferDetails, FirmCard, BlogCard, MainButton, ContactBar, SimpleCard, VisualizationGallery
  }
}
</script>
