<template>
  <div>
    <b-card no-body>
      <b-tabs card>
        <b-tab title="Opis inwestycji" active>
          <OfferTab :offer="offer"/>
        </b-tab>
        <b-tab title="Lokale">
          <LocalsTab :locals="locals"/>
        </b-tab>
      </b-tabs>
    </b-card>
  </div>
</template>

<script>
import OfferService from '../services/OfferService'
import OfferTab from '../components/OfferTab'
import LocalsTab from '../components/LocalsTab'

export default {
  props: {
    offerId: { type: String }
  },
  data () {
    return {
      offer: '',
      locals: []
    }
  },
  async created () {
    try {
      const result = await OfferService.getOfferByNameId(this.offerId)
      this.offer = result.offerData
      this.locals = result.localsData
    } catch (error) {
      console.log(error.message)
    }
  },
  components: {
    OfferTab, LocalsTab
  }
}
</script>
