<template>
  <div id="about">
    <Title name="O nas"/>
    <div class="about-container">
      <b-container fluid>
        <b-row>
          <div class="pb-5">
            <h4>{{ generalInfo }}</h4>
          </div>
        </b-row>
        <b-row>
          <b-col lg="4" sm="12" class="pb-0 pt-0" :key="item.name" v-for="item in features">
            <div>
              <i class="feature-icon" :class="featureIcons[item.name]"></i>
              <h5>{{ item.name }}</h5>
              <p>{{ item.description }}</p>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </div>
  </div>
</template>

<script>
import Title from '../components/Title'
import FirmService from '../services/FirmService'

export default {
  name: 'About',
  data () {
    return {
      features: [],
      generalInfo: ''
    }
  },
  components: {
    Title
  },
  computed: {
    featureIcons () {
      let icons = {}
      for (let idx in this.features) {
        let name = this.features[idx].name
        if (name === 'Komfort') icons[name] = 'fas fa-home'
        if (name === 'Ekologia') icons[name] = 'fas fa-tree'
        if (name === 'Jakość') icons[name] = 'fas fa-medal'
      }
      return icons
    }
  },
  async created () {
    try {
      const info = await FirmService.getInformations()
      this.features = await FirmService.getMainFeatures()
      this.generalInfo = info.text
    } catch (error) {
      console.log(error.message)
    }
  }
}
</script>

<style scoped>
.about-container {
  margin-left: 10%;
  margin-right: 10%;
  margin-bottom: 10%;
  text-align: center;
  font-size: 16px;
}
.feature-icon {
  font-size: 4em;
  color: #F1B900;
  padding-bottom: 5%;
  padding-top: 0;
}
h5 {
  font-size: 2em;
  font-weight: 400;
  padding-top: 1%;
  padding-bottom: 1%;
}
h4 {
  font-size: 1.5em;
  color: rgb(82, 82, 82);
  font-weight: 400;
  padding-top: 1%;
  padding-bottom: 1%;
}
p {
  font-size: 1em;
  font-weight: 200;
  margin-bottom: 0;
  margin-top: 0;
}
</style>
