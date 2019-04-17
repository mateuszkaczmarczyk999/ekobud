<template>
  <div class="localization-container">
    <b-container fluid>
      <b-row>
        <b-col lg="6" sm="12" class="pb-3 pt-3 pl-0 pr-0">
          <div class="map-container">
            <iframe height="720" width="100%" frameborder="0" style="border:0"
              src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJ2USz2NkwGUcRU5qjBqNN0wQ&key=AIzaSyDnqt2uVr6FrxXHP7kJavrTroOXKHkQVaY"
              allowfullscreen>
            </iframe>
          </div>
        </b-col>
        <b-col align-self="center" lg="6" sm="12" class="pb-3 pt-3">
          <div class="features-container">
            <b-container fluid>
              <b-row>
                <b-col lg="6" sm="12" class="pb-3">
                  <div>
                    <i class="fas fa-graduation-cap feature-icon"></i>
                    <h5>Edukacja</h5>
                    <p>W pobliżu liczne przedszkola i żłobki oraz Biblioteka Publiczna, Szkoła podstawowa publiczna, Szkoła podstawowa niepubliczna katolicka, Publiczne Katolickie Liceum Ogólnkształcące.</p>
                  </div>
                </b-col>
                <b-col lg="6" sm="12" class="pb-3">
                  <div>
                    <i class="fas fa-clinic-medical feature-icon"></i>
                    <h5>Zdrowie</h5>
                    <p>Gabinety kosmetyczne i odnowy biologicznej, zakłady fryzjerskie, ośrodek zdrowia, prywatne gabinety lekarskie, ośrodek rehabilitacji.</p>
                  </div>
                </b-col>
                <b-col lg="6" sm="12" class="pb-3">
                  <div>
                    <i class="fas fa-shopping-basket feature-icon"></i>
                    <h5>Zakupy</h5>
                    <p>Sklepy spożywcze Lewiatan, Żabka, Carrefour, apteka, poczta. 5 km do centrum handlowego Janki oraz do centrum konferecyjno-wystawienniczego-handlowego PTAK Nadarzyn, liczne restauracje, bary, centra konferencyjne.</p>
                  </div>
                </b-col>
                <b-col lg="6" sm="12" class="pb-3">
                  <div>
                    <i class="fas fa-bus-alt feature-icon"></i>
                    <h5>Komunikacja miejska</h5>
                    <p>W promieniu 500m przystanek autobusowy Łazy, Spokojna. Szybki dojazd do centrum, blisko trasy krakowskiej i katowickiej.</p>
                  </div>
                </b-col>
                <b-col lg="6" sm="12" class="pb-3">
                  <div>
                    <i class="fas fa-volleyball-ball feature-icon"></i>
                    <h5>Sport</h5>
                    <p>W okolicy Centrum Sportu ze wszystkimi możliwymi rodzajami zajęć dla dzieci i dorosłych.</p>
                  </div>
                </b-col>
                <b-col lg="6" sm="12" class="pb-3">
                  <div>
                    <i class="fab fa-envira feature-icon"></i>
                    <h5>Natura</h5>
                    <p>Zielone i ciche miejsce w bliskim sąsiedztwie z Lasami Sękocińskimi.</p>
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
  data () {
    return {
      msg: ''
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
  font-size: 2em;
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
