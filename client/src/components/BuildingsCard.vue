<template>
  <div class="text-center">
    <b-form-group>
      <b-form-radio-group
        id="btn-radios-2"
        v-model="selected"
        :options="options"
        buttons
        button-variant="outline-warning"
        size="sm"
        name="radio-btn-outline"
      ></b-form-radio-group>
    </b-form-group>
    <b-img :src="imgSource" fluid width="1000"></b-img>
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
      return this.buildings[this.selected]
    }
  },
  methods: {
    createRadioOptions () {
      for (var property in this.buildings) {
        if (this.buildings.hasOwnProperty(property)) {
          this.options.push({ text: property, value: property })
        }
      }
    }
  }
}
</script>

<style scoped>

</style>
