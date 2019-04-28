<template>
  <div class="list-container pl-0 pr-0">
    <b-table
      selectable
      select-mode="single"
      @row-selected="rowSelected"
      responsive
      bordered
      hover
      :items="items"
      :fields="fields"
      thead-tr-class="thead-dark"
    >
      <template slot="reservation" slot-scope="data">
        <i v-if="data.item.available" v-b-modal.contact-modal @click="openModal(data.item)" class="fas fa-envelope action-icon"></i>
      </template>
      <template slot="plan" slot-scope="data">
        <i class="fas fa-map action-icon" v-b-modal.plan-modal @click="openPlan(data.item)"></i>
      </template>
    </b-table>
  </div>
</template>

<script>
export default {
  props: {
    buildingIdx: { type: Number, default: 8 }
  },
  data () {
    return {
      fields: [
        { key: 'flat_number', label: 'Numer domu' },
        { key: 'area', label: 'Powierzchnia' },
        // { key: 'area_price', label: 'Cena za m²' },
        // { key: 'price', label: 'Cena' },
        { key: 'status', label: 'Status' },
        { key: 'reservation', label: 'Zapytaj o cenę' },
        { key: 'plan', label: 'Rzut' }
      ],
      items: []
    }
  },
  created () {
    this.initTable()
  },
  methods: {
    openModal (el) {
      const message = `Dzień Dobry, interesuje mnie budynek o numerze "${el.flat_number}" z inwestycji "Osiedle przy Cichej". Proszę o kontakt.`
      this.$emit('mail', message)
    },
    openPlan (el) {
      this.$emit('plan', el.flat_number)
    },
    rowSelected (el) {
      if (el.length > 0) this.$emit('select', el[0].flat_number)
      else this.$emit('select', 'Całość')
    },
    initTable () {
      this.items = [
        {flat_number: 'A', area: '135,55 m²', area_price: '6535 zł', price: '559 035 zł', status: 'dostępne', available: true, _rowVariant: ''},
        {flat_number: 'B', area: '135,55 m²', area_price: '6535 zł', price: '559 035 zł', status: 'dostępne', available: true, _rowVariant: ''},
        {flat_number: 'C', area: '135,55 m²', area_price: '6535 zł', price: '559 035 zł', status: 'dostępne', available: true, _rowVariant: ''},
        {flat_number: 'D', area: '135,55 m²', area_price: '6535 zł', price: '559 035 zł', status: 'dostępne', available: true, _rowVariant: ''},
        {flat_number: 'E', area: '135,55 m²', area_price: '6535 zł', price: '559 035 zł', status: 'dostępne', available: true, _rowVariant: ''},
        {flat_number: 'F', area: '135,55 m²', area_price: '6535 zł', price: '559 035 zł', status: 'dostępne', available: true, _rowVariant: ''},
        {flat_number: 'G', area: '159,90 m²', area_price: '6535 zł', price: '559 035 zł', status: 'niedostępne', available: false, _rowVariant: ''},
        {flat_number: 'H', area: '159,90 m²', area_price: '6535 zł', price: '559 035 zł', status: 'dostępne', available: true, _rowVariant: ''}
      ]
    },
    coloritem (idx) {
      // this.initTable()
      // if (idx < this.items.length) this.items[idx]['_rowVariant'] = 'warning'
    }
  },
  watch: {
    buildingIdx (val) {
      this.coloritem(val)
    }
  }
}
</script>

<style scoped>
.list-container {
  text-align: center;
  margin-left: 10%;
  margin-right: 10%;
  margin-top: 5%;
  margin-bottom: 5%;
}
.action-icon {
  font-size: 1.5em;
  color: #4884bd;
}
.action-icon:hover {
  color: gray;
  cursor: pointer;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
}
.backdrop {
  z-index: 2000;
  padding: 0;
  margin: 0;
}
</style>
