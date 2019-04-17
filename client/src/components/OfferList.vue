<template>
  <div class="list-container">
    <b-table responsive bordered hover :items="items" :fields="fields" :thead-tr-class="headClass">
      <template slot="reservation" slot-scope="data">
        <i class="fas fa-envelope action-icon" @click="sendEmail(data)"></i>
      </template>
      <template slot="plan" slot-scope="data">
        <i class="fas fa-map action-icon" @click="showPlan(data)"></i>
      </template>
    </b-table>
  </div>
</template>

<script>
export default {
  data () {
    return {
      headClass: 'thead-dark',
      fields: [
        { key: 'flat_number', label: 'Numer Lokalu' },
        { key: 'area', label: 'Powierzchnia' },
        { key: 'rooms', label: 'Ilość Pokoi' },
        { key: 'area_price', label: 'Cena za m²' },
        { key: 'price', label: 'Cena' },
        { key: 'status', label: 'Status' },
        { key: 'reservation', label: 'Rezerwacja' },
        { key: 'plan', label: 'Rzut' }
      ],
      items: [
        {flat_number: 'A1', area: '100,89 m²', rooms: 4, area_price: '6535 zł', price: '559 035 zł', status: 'dostępne'},
        {flat_number: 'A2', area: '100,89 m²', rooms: 4, area_price: '6535 zł', price: '559 035 zł', status: 'dostępne'},
        {flat_number: 'B3', area: '100,89 m²', rooms: 4, area_price: '6535 zł', price: '559 035 zł', status: 'dostępne'},
        {flat_number: 'B4', area: '100,89 m²', rooms: 4, area_price: '6535 zł', price: '559 035 zł', status: 'dostępne'},
        {flat_number: 'C5', area: '100,89 m²', rooms: 4, area_price: '6535 zł', price: '559 035 zł', status: 'dostępne'},
        {flat_number: 'C6', area: '100,89 m²', rooms: 4, area_price: '6535 zł', price: '559 035 zł', status: 'dostępne'},
        {flat_number: 'D7', area: '100,89 m²', rooms: 4, area_price: '6535 zł', price: '559 035 zł', status: 'dostępne'},
        {flat_number: 'D8', area: '100,89 m²', rooms: 4, area_price: '6535 zł', price: '559 035 zł', status: 'dostępne'}
      ]
    }
  },
  methods: {
    showPlan (el) {
      console.log('Plan')
      console.log(el)
    },
    sendEmail (el) {
      console.log('E-mail')
      console.log(el)
    }
  }
}
</script>

<style scoped>
.list-container {
  text-align: center;
  margin-top: 2.5%;
  margin-left: 10%;
  margin-right: 10%;
  margin-bottom: 5%;
}
.action-icon {
  font-size: 1.5em;
  color: #4884bd;
}
.action-icon:hover {
  font-size: 1.6em;
  color: gray;
  cursor: pointer;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
}
</style>
