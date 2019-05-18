<template>
  <div id="offers">
    <Title name="Lista ofert"/>
    <OfferCard :key="offer.id" :offer="offer" v-for="offer in offers"/>
    <div class="additional-info">
      <h5>Budujemy również na działce klienta, projekty indywidualne lub projekty domów, które posiadamy w ofercie. O szczegóły oferty zapytaj poprzez formularz kontaktowy.</h5>
    </div>
  </div>
</template>

<script>
import OfferService from '../services/OfferService'
import OfferCard from '../components/OfferCard'
import Title from '../components/Title'

export default {
  name: 'Offers',
  data () {
    return {
      offers: []
    }
  },
  components: {
    OfferCard, Title
  },
  async created () {
    try {
      this.offers = await OfferService.getAllOffers()
    } catch (error) {
      console.log(error.message)
    }
  }
}
</script>

<style scoped>
  .additional-info {
    margin: 5% 10%;
    text-align: center;
    font-style: italic;
    font-weight: 100;
  }
</style>
