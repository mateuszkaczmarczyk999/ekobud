<template>
  <div>
    <b-table hover :items="locals" :fields="fields" bordered>
      <template slot="area" slot-scope="data">
        <b-form-input v-model="data.item.area"></b-form-input>
      </template>
      <template slot="available" slot-scope="data">
        <b-form-checkbox v-model="data.item.available">
          Dostępne
        </b-form-checkbox>
      </template>
      <template slot="price" slot-scope="data">
        <b-form-input v-model="data.item.price"></b-form-input>
      </template>
      <template slot="actions" slot-scope="data">
        <b-button size="sm" variant="primary" @click="saveLocal(data.item)">Zapisz</b-button>
      </template>
    </b-table>
  </div>
</template>

<script>
import OfferService from '../services/OfferService'

export default {
  props: {
    locals: { type: Array }
  },
  data () {
    return {
      fields: [
        { key: 'flatNumber', label: 'Numer domu' },
        { key: 'area', label: 'Powierzchnia' },
        { key: 'price', label: 'Cena' },
        { key: 'available', label: 'Status' },
        { key: 'actions', label: '' }
      ],
      status: false
    }
  },
  methods: {
    async saveLocal (local) {
      const result = await OfferService.updateLocal(local)
      console.log(result)
    }
  }
}
</script>
