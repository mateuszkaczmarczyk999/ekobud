<template>
  <div class="technology-container">
    <b-container fluid>
      <b-row>
        <b-col lg="6" sm="12" class="pb-3">
          <div>
            <i class="fas fa-tree feature-icon"></i>
            <h5>Ekologiczna konstrukcyja</h5>
            <p>Proekologicznym rozwiązania konstrukcyjne tworzą w budynku przyjazny mikroklimat.</p>
          </div>
        </b-col>
        <b-col lg="6" sm="12" class="pb-3">
          <div>
            <i class="fas fa-leaf feature-icon"></i>
            <h5>Energooszczędna architektura</h5>
            <p>Szkieletowa konstrukcji przegród oraz staranie wykonana izolacja cieplna budynku minimalizuje straty ciepła.</p>
          </div>
        </b-col>
      </b-row>
      <b-row>
        <b-col lg="6" sm="12" class="pb-3">
          <div>
            <i class="fas fa-sun feature-icon"></i>
            <h5>Odnawialne źródła ehergii</h5>
            <p>Panele fotowoltaiczne, rekuperacja, pompy ciepła umożliwiają racjonalną i zrównoważoną gospodarkę energii w domu.</p>
          </div>
        </b-col>
        <b-col lg="6" sm="12" class="pb-3">
          <div>
            <i class="fas fa-home feature-icon"></i>
            <h5>Prefabrykacja</h5>
            <p>Przyspieszona realizacja inwestycji oraz bardziej precyzyjny proces wykonastwa przegród budowlanych.</p>
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
      info: [
        { header: 40, text: 'Dickerson' }
      ]
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
  font-size: 2.4em;
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
