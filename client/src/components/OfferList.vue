<template>
  <div class="list-container pl-0 pr-0">
    <b-table
      select-mode="single"
      responsive
      bordered
      hover
      :items="items"
      :fields="fields"
      thead-tr-class="thead-dark"
    >
      <template slot="HEAD_pzt" slot-scope="data">
        <b-button size="sm" variant="secondary" v-scroll-to="'#pzt'" @click="showOnPlan(data.item)">Plan zagospodarowania</b-button>
      </template>
      <template slot="reservation" slot-scope="data">
        <i v-if="data.item.available" v-b-modal.contact-modal @click="openModal(data.item)" class="fas fa-envelope action-icon"></i>
      </template>
      <template slot="available" slot-scope="data">
        <p v-if="data.item.available">Dostępne</p>
        <p v-else>Zarezerwowane</p>
      </template>
      <template slot="plan" slot-scope="data">
        <i class="fas fa-map action-icon" v-b-modal.plan-modal @click="openPlan(data.item)"></i>
      </template>
      <template slot="pzt" slot-scope="data">
        <b-button size="sm" variant="secondary" v-scroll-to="'#pzt'" @click="showOnPlan(data.item)">Pokaż na planie</b-button>
      </template>
    </b-table>
  </div>
</template>

<script>
export default {
  props: {
    items: { type: Array }
  },
  data () {
    return {
      fields: [
        { key: 'flatNumber', label: 'Numer domu' },
        { key: 'area', label: 'Powierzchnia' },
        { key: 'available', label: 'Status' },
        { key: 'reservation', label: 'Zapytaj o cenę' },
        { key: 'plan', label: 'Rzut' },
        { key: 'pzt', label: 'Plan zagospodarowania' }
      ]
    }
  },
  methods: {
    openModal (el) {
      const message = `Dzień Dobry, interesuje mnie budynek o numerze "${el.flatNumber}" w inwestycji "Osiedle przy Cichej". Proszę o kontakt.`
      this.$emit('mail', message, el.flatNumber)
    },
    openPlan (el) {
      this.$emit('plan', el.flatNumber)
    },
    showOnPlan (el) {
      if (el) this.$emit('select', el.flatNumber)
      else this.$emit('select', 'Całość')
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
  color: #0081a1;
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
