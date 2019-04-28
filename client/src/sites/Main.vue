<template>
  <div id="main">
    <OfferDetails shortView :main-offer="mainOffer"/>
    <FirmCard :visualization="visualization" :aboutFirm="aboutFirm"/>
    <ContactBar/>
    <BlogCard :news="news"/>
  </div>
</template>

<script>
import OfferDetails from '../components/OfferDetails'
import FirmCard from '../components/FirmCard'
import BlogCard from '../components/BlogCard'
import ContactBar from '../components/ContactBar'
import viz1 from '.././assets/viz1.jpg'
import viz3 from '.././assets/viz3.jpg'
import viz4 from '.././assets/viz4.jpg'
import AOS from 'aos'
import 'aos/dist/aos.css'

export default {
  name: 'Main',
  data () {
    return {
      name: '"Osiedle przy Cichej"',
      aboutFirm: {
        title: 'O nas',
        header: 'Jesteśmy firmą realizującą inwestycje polegające na budowaniu i sprzedaży budynków mieszkalnych jednorodzinnych ekologicznych i energooszczędnych.'
      },
      news: {
        title: 'Aktualności',
        header: 'Projekt koncepcyjny na jednej z budynków w naszej nowej inwestycji "Osiedle przy Cichej". Chcielśmy Państwu zaprecentować formę architektoniczną tego budynku na krótkiej animacji. Zapraszamy do ogladania.',
        movieUrl: 'https://www.youtube.com/embed/meGyEoLXB04',
        img: null
      },
      mainOffer: { id: 1,
        title: '"Osiedle przy Cichej"',
        imgSource: viz1,
        btn: 'Szczegóły oferty',
        realizationTerm: 'Termin realizacji: IV kwartał 2019',
        text: 'Ekologiczna inwestycja położona w dynamicznie rozwijajacej się podwarszawskiej gminie Lesznowola, ' +
              'w miejscowosci Łazy, sąsiadującej z legendarną Magdalenką.'
      },
      visualization: [viz3, viz4],
      imgFile: viz1,
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
    OfferDetails, FirmCard, ContactBar, BlogCard
  },
  created () {
    AOS.init()
  }
}
</script>
