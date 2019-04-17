<template>
  <div id="about">
    <Title name="O nas" :header="header"/>
    <SimpleCard :text="msg" :imgSource="imgFile"/>
  </div>
</template>

<script>
import SimpleCard from '../components/SimpleCard'
import Title from '../components/Title'
import tmpImg from '.././assets/about.jpg'

export default {
  name: 'About',
  data () {
    return {
      imgFile: tmpImg,
      header: 'Firma realizującą inwestycje polegające na budowaniu i ' +
              'sprzedaży budynków mieszkalnych jednorodzinnych ekologicznych i energooszczednych.',
      msg: 'Pomysłodawcą projektu są członkowie zarządu. Firma EKO-BUD INVESTMENT ' +
           'to inicjatywa rodzinna założona przez dwie współwłaścicielki, ' +
           'siostry, które wychowały się w rodzinie przedsiębiorców. ' +
           'Obie od najmłodszych lat związane z biznesem i budową przedsiębiorstw. ' +
           'Od 2005 roku właściecielki prowadzą również firmę propagującą i zajmującą ' +
           'się tematyką odnawialnych źródeł energii. Dlatego tez zbudowanie przez ' +
           'Panie energooszczędnego osiedla to kolejny etap rozwoju w zakresie ' +
           'ochrony środowiska. Całe osiedle powstanie w konwencji szeroko pojętej ' +
           'ochrony środowiska, bowiem domy wyposażone będę w pompę ciepła, ' +
           'rekuperację, dodatkowo na życzenie klienta w panele fotowoltaiczne. ' +
           'Firma EKO-BUD INVESTMENT Sp. z o.o. sp. k. i jej właścicielki wykorzystując ' +
           'rodzinne tradycje i ponad 30-letnie doświadczenie w budowaniu różnego ' +
           'rodzaju przedsięwzięć, mają liczne kontakty z wykonawcami oraz ' +
           'rozbudowaną sieć sprawdzonych podwykonawców w zakresie ' +
           'specjalistycznych usług instalacyjnych i wykończeniowych. Pozwala to ' +
           'realizować i kompleksowo nadzorować cały proces inwestycyjny, egzekwując ' +
           'jego fachową realizację zgodną ze sztuką budowlaną. W budynkach będą ' +
           'przykładać szczególną wagę do funkcjonalności i komfortu domów, a ' +
           'wybierane przez Firmę rozwiązania techniczne i estetyczne pozwolą osiągnąć ' +
           'efekt energooszczędności budynków i atrakcyjny wygląd zewnętrzny.'
    }
  },
  components: {
    SimpleCard, Title
  }
}
</script>
