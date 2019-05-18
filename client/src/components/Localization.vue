<template>
  <div class="localization-container">
    <b-container fluid>
      <b-row>
        <b-col lg="6" sm="12" class="pb-3 pt-3 pl-0 pr-0" data-aos="fade-right">
          <div class="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d610.3144745617689!2d20.871376421528264!3d52.07744834437591!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471930da62028b3d%3A0x92a6e9443aa6802d!2sCicha+2%2C+05-552+%C5%81azy!5e0!3m2!1spl!2spl!4v1556471040482!5m2!1spl!2spl"
              width="100%"
              height="720"
              frameborder="0"
              style="border:0"
              allowfullscreen>
            </iframe>
          </div>
        </b-col>
        <b-col align-self="center" lg="6" sm="12" class="pb-3 pt-3" data-aos="fade-left">
          <div class="features-container">
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
        if (name === 'Edukacja') icons[name] = 'fas fa-graduation-cap'
        if (name === 'Zakupy') icons[name] = 'fas fa-shopping-basket'
        if (name === 'Sport') icons[name] = 'fas fa-volleyball-ball'
        if (name === 'Zdrowie') icons[name] = 'fas fa-clinic-medical'
        if (name === 'Natura') icons[name] = 'fab fa-envira'
        if (name === 'Komunikacja miejska') icons[name] = 'fas fa-bus-alt'
      }
      return icons
    }
  }
}
</script>

<style scoped>
.localization-container {
  margin-top: 5%;
  margin-bottom: 5%;
}
.map-container {
  text-align: right;
  /* box-shadow: 16px 0 16px 0 rgba(0,0,0,0.2); */
}
.features-container {
  font-size: 16px;
  text-align: center;
  margin-top: 2.5%;
  margin-left: 10%;
  margin-right: 10%;
  margin-bottom: 10%;
}
.feature-icon {
  font-size: 2.9em;
  color: #be9844;
  padding-bottom: 2.5%;
  padding-top: 2.5%;
}
h5 {
  font-size: 1em;
  font-weight: 600;
  padding-top: 1%;
  padding-bottom: 1%;
}
p {
  font-size: 0.8em;
  font-weight: 200;
  margin-bottom: 0;
  margin-top: 0;
}
</style>
