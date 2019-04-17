<template>
  <div class="features-container">
    <b-container fluid>
      <b-row>
        <b-col>
          <div>
            <i class="fas fa-graduation-cap feature-icon"></i>
            <h5>Edukacja</h5>
            <p>W pobliżu liczne przedszkola i żłobki oraz Biblioteka Publiczna, Szkoła podstawowa publiczna, Szkoła podstawowa niepubliczna katolicka, Publiczne Katolickie Liceum Ogólnkształcące.</p>
          </div>
        </b-col>
        <b-col>
          <div>
            <i class="fas fa-clinic-medical feature-icon"></i>
            <h5>Zdrowie</h5>
            <p>Gabinety kosmetyczne i odnowy biologicznej, zakłady fryzjerskie, ośrodek zdrowia, prywatne gabinety lekarskie, ośrodek rehabilitacji.</p>
          </div>
        </b-col>
        <b-col>
          <div>
            <i class="fas fa-shopping-basket feature-icon"></i>
            <h5>Zakupy</h5>
            <p>Sklepy spożywcze Lewiatan, Żabka, Carrefour, apteka, poczta. 5 km do centrum handlowego Janki oraz do centrum konferecyjno-wystawienniczego-handlowego PTAK Nadarzyn, liczne restauracje, bary, centra konferencyjne.</p>
          </div>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <div>
            <i class="fas fa-bus-alt feature-icon"></i>
            <h5>Komunikacja miejska</h5>
            <p>W promieniu 500m przystanek autobusowy Łazy, Spokojna. Szybki dojazd do centrum, blisko trasy krakowskiej i katowickiej.</p>
          </div>
        </b-col>
        <b-col>
          <div>
            <i class="fas fa-volleyball-ball feature-icon"></i>
            <h5>Sport</h5>
            <p>W okolicy Centrum Sportu ze wszystkimi możliwymi rodzajami zajęć dla dzieci i dorosłych.</p>
          </div>
        </b-col>
        <b-col>
          <div>
            <i class="fab fa-envira feature-icon"></i>
            <h5>Natura</h5>
            <p>Zielone i ciche miejsce w bliskim sąsiedztwie z Lasami Sękocińskimi.</p>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  props: {
    text: String
  }
}
</script>

<style scoped>
.features-container {
  font-size: 16px;
  text-align: center;
  margin-top: 2.5%;
  margin-left: 10%;
  margin-right: 10%;
  margin-bottom: 10%;
}
.feature-icon {
  font-size: 2.4em;
  color: #be9844;
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
