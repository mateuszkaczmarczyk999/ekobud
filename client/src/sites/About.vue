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
          <b-col lg="4" sm="12" class="pb-0 pt-0">
            <div class="pb-5">
              <i class="fas fa-home feature-icon"></i>
              <h5>Komfort</h5>
              <hr>
              <p>{{ comfortInfo }}</p>
            </div>
          </b-col>
          <b-col lg="4" sm="12" class="pb-0 pt-0">
            <div class="pb-5">
              <i class="fas fa-tree feature-icon"></i>
              <h5>Ekologia</h5>
              <hr>
              <p>{{ ecologyInfo }}</p>
            </div>
          </b-col>
          <b-col lg="4" sm="12" class="pb-0 pt-0">
            <div class="pb-5">
              <i class="fas fa-medal feature-icon"></i>
              <h5>Jakość</h5>
              <hr>
              <p>{{ networkInfo }}</p>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </div>
  </div>
</template>

<script>
import Title from '../components/Title'

export default {
  name: 'About',
  data () {
    return {
      generalInfo: 'Jesteśmy firmą realizującą inwestycje polegające na budowaniu i sprzedaży budynków mieszkalnych jednorodzinnych ekologicznych i energooszczędnych. Firma EKO-BUD INVESTMENT to inicjatywa rodzinna. Jesteśmy siostrami, które wychowywały się w rodzinie przedsiębiorców. Obie od najmłodszych lat jesteśmy związane z biznesem i budową przedsiębiorstw, stąd inicjatywa powołania do życia firmy deweloperskiej.',
      ecologyInfo: 'Od 2005 roku prowadzimy działalność propagującą i zajmującą się tematyką odnawialnych źródeł energii, dlatego też budowane przez nas energooszczędne osiedle to kolejny etap rozwoju w zakresie ochrony środowiska. Chcemy aby projektowane przez nas budynki powstawały w konwencji szeroko pojętej ekologii, bowiem domy wyposażone będą w pompę ciepła, rekuperację, dodatkowo na życzenie klienta w panele fotowoltaiczne. Dzięki zastosowaniu konstrukcji szkieletowej drewnianej, budynki będą nie tylko energooszczędne na etapie użytkowania, ale także nieszkodliwe dla środowiska podczas procesu budowy.',
      networkInfo: 'Nasza firma wykorzystując rodzinne tradycje i nasze ponad 30-letnie doświadczenie w budowaniu różnego rodzaju przedsięwzięć́, dysponuje rozbudowaną siecią sprawdzonych podwykonawców w zakresie specjalistycznych usług konstrukcyjnych, instalacyjnych i wykończeniowych. Pozwala to na kompleksowy nadzór procesu inwestycyjnego, i egzekwowanie jego fachowej realizacji zgodnie ze sztuką budowlaną.',
      comfortInfo: 'Zadowolenie klientów jest dla nas bardzo istotne, dlatego w budowanych przez nas domach będziemy przykładać́ szczególną wagę do funkcjonalności i komfortu. Wybierane przez EKO-BUD INVESTMENT rozwiązania techniczne i estetyczne pozwolą osiągnąć́ efekt energooszczędności budynków i atrakcyjny wygląd zewnętrzny.'
    }
  },
  components: {
    Title
  }
}
</script>

<style scoped>
.about-container {
  margin-left: 10%;
  margin-right: 10%;
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
