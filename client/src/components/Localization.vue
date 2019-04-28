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
                <b-col lg="6" sm="12" class="pb-3">
                  <div>
                    <i class="fas fa-graduation-cap feature-icon"></i>
                    <h5>Edukacja</h5>
                    <p>W pobliżu liczne przedszkola i żłobki oraz Biblioteka Publiczna, Szkoła Podstawowa Publiczna, Szkoła Podstawowa Niepubliczna Katolicka, Publiczne Katolickie Liceum Ogólnokształcące.</p>
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
                    <p>Sklepy spożywcze Lewiatan, Żabka, Carrefour, apteka, poczta. 5 km do centrum handlowego Janki oraz do centrum konferencyjno-wystawienniczo-handlowego PTAK Nadarzyn, liczne restauracje, bary, centra konferencyjne</p>
                  </div>
                </b-col>
                <b-col lg="6" sm="12" class="pb-3">
                  <div>
                    <i class="fas fa-bus-alt feature-icon"></i>
                    <h5>Komunikacja miejska</h5>
                    <p>W promieniu 500m przystanek autobusowy warszawskiej komunikacji aglomeracyjnej Łazy, Spokojna. Szybki dojazd do centrum, blisko trasy krakowskiej i katowickiej.</p>
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
