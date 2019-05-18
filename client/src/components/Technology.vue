<template>
  <div class="technology-container" id="tech-section">
    <b-container fluid>
      <b-row>
        <b-col lg="6" sm="12" class="pb-3" :key="item.name" v-for="item in items">
          <div>
            <i class="feature-icon" :class="featureIcons[item.name]"></i>
            <h5>{{ item.name }}</h5>
            <p>{{ item.description }}</p>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  props: {
    items: { type: Array }
  },
  computed: {
    featureIcons () {
      let icons = {}
      for (let idx in this.items) {
        let name = this.items[idx].name
        if (name === 'Ekologiczna konstrukcja') icons[name] = 'fas fa-tree'
        if (name === 'Energooszczędna architektura') icons[name] = 'fas fa-leaf'
        if (name === 'Prefabrykacja') icons[name] = 'fas fa-home'
        if (name === 'Odnawialne źródła energii') icons[name] = 'fas fa-sun'
      }
      return icons
    }
  }
}
</script>

<style scoped>
.technology-container {
  font-size: 16px;
  text-align: center;
  margin-top: 5%;
  margin-left: 10%;
  margin-right: 10%;
  margin-bottom: 5%;
}
.feature-icon {
  font-size: 2.9em;
  color: #4884bd;
  padding-bottom: 2.5%;
  padding-top: 2.5%;
}
h5 {
  font-size: 1.2em;
  font-weight: 600;
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
