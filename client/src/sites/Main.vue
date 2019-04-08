<template>
  <div id="main">
    <OfferDetails v-if="isSmall" :imgSource="imgFile" :title="name" :realization-term="term" :text="msg" btnName="Szczegóły oferty"/>
    <Title name="O nas" :header="header"/>
    <OfferCards :offers="offers"/>
    <MainButton btnName="Pokaż wszystkie inwestycje" url="/oferty"/>
    <ContactBar/>
    <Title name="Aktualności"/>
    <SimpleCard :imgSource="bImg" :text="msg"/>
    <MainButton btnName="Pokaż więcej" url="/aktualności"/>
  </div>
</template>

<script>
import Title from '../components/Title'
import OfferDetails from '../components/OfferDetails'
import OfferCards from '../components/OfferCards'
import MainButton from '../components/MainButton'
import ContactBar from '../components/ContactBar'
import SimpleCard from '../components/SimpleCard'
import about from '.././assets/about.jpg'
import tmpImg from '.././assets/tmp0.jpg'
import tmpImg1 from '.././assets/tmp1.jpg'
import tmpImg2 from '.././assets/tmp2.jpg'

export default {
  name: 'Main',
  data () {
    return {
      name: '"Osiedle przy Cichej"',
      offers: [
        { id: 1,
          title: '"Osielde przy Cichej"',
          imgFile: tmpImg1,
          imgSize: '300',
          btn: 'Szczegóły',
          msg: 'Zielone osiedle w dobrej lokalizacji'
        },
        { id: 2,
          title: '"Osielde przy Cichej"',
          imgFile: tmpImg2,
          imgSize: '300',
          btn: 'Szczegóły',
          msg: 'Zielone osiedle w dobrej lokalizacji'
        }
      ],
      imgFile: tmpImg,
      bImg: about,
      windWidth: 0,
      imgSize: 400,
      term: 'Termin realizacji: IV kwartał 2019',
      header: 'Lorem Ipsum jest tekstem stosowanym jako przykładowy wypełniacz w przemyśle poligraficznym. Został po raz pierwszy użyty w XV w. przez nieznanego drukarza do wypełnienia tekstem próbnej książki. ',
      msg: 'Ekologiczna inwestycja położona w dynamicznie rozwijajacej się podwarszawskiej gminie Lesznowola, ' +
             'w miejscowosci Łazy, sąsiadującej z legendarną Magdalenką.'
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
    Title, OfferDetails, OfferCards, MainButton, ContactBar, SimpleCard
  },
  methods: {
    handleResize () {
      this.windWidth = window.innerWidth
    }
  }
}
</script>
