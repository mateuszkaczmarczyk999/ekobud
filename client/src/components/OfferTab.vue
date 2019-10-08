<template>
  <div>
    <b-card bg-variant="light">
      <b-form-group
        label-cols-lg="3"
        label="Opis inwestycji"
        label-size="lg"
        label-class="font-weight-bold pt-0"
        class="mb-0"
      >
        <b-form-group
          label-cols-sm="3"
          label="Tytuł:"
          label-align-sm="right"
          label-for="nested-title"
        >
          <b-form-input id="nested-title" v-model="offer.name"></b-form-input>
        </b-form-group>

        <b-form-group
          label-cols-sm="3"
          label="Termin realizacji:"
          label-align-sm="right"
          label-for="nested-term"
        >
          <b-form-input id="nested-term" v-model="offer.term"></b-form-input>
        </b-form-group>

        <b-form-group
          label-cols-sm="3"
          label="Krótki opis:"
          label-align-sm="right"
          label-for="nested-short"
        >
          <b-form-textarea id="nested-short" rows="3" v-model="offer.description"></b-form-textarea>
        </b-form-group>

        <b-form-group
          label-cols-sm="3"
          label="Pełny opis:"
          label-align-sm="right"
          label-for="nested-description"
        >
          <b-form-textarea id="nested-description" rows="6" v-model="offer.text"></b-form-textarea>
        </b-form-group>
      </b-form-group>
      <b-button size="md" variant="primary" @click="saveOffer">Zapisz</b-button>
    </b-card>
  </div>
</template>

<script>
import OfferService from '../services/OfferService'

export default {
  props: {
    offer: { type: Object }
  },
  data () {
    return {
      files: []
    }
  },
  methods: {
    async saveOffer () {
      const result = await OfferService.updateOffer(this.offer)
      console.log(result)
    }
  }
}
</script>
