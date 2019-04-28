<template>
  <div class="plan-container">
    <b-container fluid>
      <b-row class="bg-container">
        <b-col cols="6">
          <div class="plan-selection">
            <b-img :src="planSource" fluid></b-img>
          </div>
        </b-col>
        <b-col cols="6" align-self="center" >
          <div>
            <b-img thumbnail :src="imgSource" fluid></b-img>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import OfferList from '../components/OfferList'

export default {
  props: {
    buildings: Object,
    selected: { type: String, default: 'Całość' }
  },
  data () {
    return {
      options: []
    }
  },
  mounted () {
    this.createRadioOptions()
  },
  computed: {
    indexSource () {
      return this.buildings[this.selected][0]
    },
    imgSource () {
      return this.buildings[this.selected][1]
    },
    planSource () {
      return this.buildings[this.selected][2]
    }
  },
  methods: {
    createRadioOptions () {
      for (const property in this.buildings) {
        if (this.buildings.hasOwnProperty(property)) {
          this.options.push({ text: property, value: property })
        }
      }
    },
    switchBuilding (newVal) {
      this.$emit('building-change', newVal)
    },
    passMessage (val) {
      this.$emit('show-modal', val)
    }
  },
  components: {
    OfferList
  }
}
</script>

<style scoped>
.bg-container {
  background-color: rgb(49, 49, 49);
  padding-left: 10%;
  padding-right: 10%;
  padding-top: 5%;
  padding-bottom: 5%;
}
.plan-container {
  text-align: center;
}
.parent-switch {
  position: relative;
}
.child-switch {
  position: absolute;
  top: 0;
  left: 0;
}
.plan-selection {
  padding-left: 1%;
  padding-right: 1%;
  padding-bottom: 1%;
  padding-top: 1%;
}
.fade-enter-active, .fade-leave-active {
  -webkit-transition: opacity .6s ease-in-out;
  -moz-transition: opacity .6s ease-in-out;
  -o-transition: opacity .6s ease-in-out;
  transition: opacity .6s ease-in-out;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
