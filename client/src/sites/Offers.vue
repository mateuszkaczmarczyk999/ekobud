<template>
  <div id="offers">
    <Title name="Lista ofert"/>
    <OfferCard :key="offer.id" :offer="offer" v-for="offer in offers"/>
  </div>
</template>

<script>
import OfferCard from '../components/OfferCard'
import Title from '../components/Title'
import tmpImg1 from '.././assets/tmp0.jpg'

export default {
  name: 'Offers',
  data () {
    return {
      offers: [
        { id: 1,
          title: '"Osielde przy Cichej"',
          term: 'Termin realizacji: IV kwartał 2019',
          imgFile: tmpImg1,
          imgSize: '500',
          btn: 'Szczegóły',
          msg: 'Ekologiczna inwestycja położona w dynamicznie rozwijajacej się podwarszawskiej gminie Lesznowola, ' +
             'w miejscowosci Łazy, sąsiadującej z legendarną Magdalenką.'
        },
        { id: 2,
          title: '"Osielde przy Cichej"',
          term: 'Termin realizacji: IV kwartał 2019',
          imgFile: tmpImg1,
          imgSize: '500',
          btn: 'Szczegóły',
          msg: 'Ekologiczna inwestycja położona w dynamicznie rozwijajacej się podwarszawskiej gminie Lesznowola, ' +
             'w miejscowosci Łazy, sąsiadującej z legendarną Magdalenką.'
        },
        { id: 3,
          title: '"Osielde przy Cichej"',
          term: 'Termin realizacji: IV kwartał 2019',
          imgFile: tmpImg1,
          imgSize: '500',
          btn: 'Szczegóły',
          msg: 'Ekologiczna inwestycja położona w dynamicznie rozwijajacej się podwarszawskiej gminie Lesznowola, ' +
             'w miejscowosci Łazy, sąsiadującej z legendarną Magdalenką.'
        }
      ]
    }
  },
  components: {
    OfferCard, Title
  }
}
</script>
