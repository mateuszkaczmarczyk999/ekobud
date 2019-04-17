<template>
  <div class="plan-container">
    <b-container fluid>
      <b-row>
        <b-col lg md="6" class="pt-2 pb-2 pl-0 pr-0">
          <div class="bg-container">
            <b-img :src="imgSource" fluid></b-img>
            <!-- <lightbox style="'width': 50vw" :thumbnail="imgSource" :images="imgSourceAr">
              <lightbox-default-loader slot="loader"/>
            </lightbox> -->
          </div>
        </b-col>
        <b-col lg md="6" class="pt-2 pb-2" align-self="center">
          <div class="plan-selection">
            <b-img :src="planSource" fluid></b-img>
            <b-form-group>
              <b-form-radio-group
                id="btn-radios-2"
                v-model="selected"
                :options="options"
                plain
                size="sm"
                name="radio-btn-outline"
                ></b-form-radio-group>
              </b-form-group>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  props: {
    buildings: Object
  },
  data () {
    return {
      selected: 'Całość',
      options: []
    }
  },
  mounted () {
    this.createRadioOptions()
  },
  computed: {
    imgSource () {
      return this.buildings[this.selected][0]
    },
    imgSourceAr () {
      return [this.buildings[this.selected][0]]
    },
    planSource () {
      return this.buildings[this.selected][1]
    }
  },
  methods: {
    createRadioOptions () {
      for (const property in this.buildings) {
        if (this.buildings.hasOwnProperty(property)) {
          this.options.push({ text: property, value: property })
        }
      }
    }
  }
}
</script>

<style scoped>
.bg-container {
  background-color: lightgray;
  padding-left: 10%;
  padding-right: 5%;
  padding-top: 5%;
  padding-bottom: 5%;
}
.plan-container {
  text-align: center;
}
.plan-selection {
  padding-left: 10%;
  padding-right: 10%;
  padding-bottom: 10%;
  padding-top: 5%;
}
</style>
