<template>
  <div id="blog">
    <Title name="Aktualności"/>
    <BlogPost :post="post"/>
    <!-- <b-pagination-nav size="sm" :link-gen="linkGen" :number-of-pages="3" use-router align="center"></b-pagination-nav> -->
  </div>
</template>

<script>
import BlogPost from '../components/BlogPost'
import Title from '../components/Title'

export default {
  name: 'Blog',
  data () {
    return {
      post: {
        title: 'Nowe zdjęcia z budowy',
        imgFiles: [],
        movieUrl: 'https://www.youtube.com/embed/meGyEoLXB04',
        subTitle: 'Projekt koncepcyjny na jednej z budynków w naszej nowej inwestycji "Osiedle przy Cichej". Chcielśmy Państwu zaprecentować formę architektoniczną tego budynku na krótkiej animacji. Zapraszamy do ogladania.',
        text: 'Pomysłodawcą projektu są członkowie zarządu. Firma EKO-BUD INVESTMENT ' +
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
           'efekt energooszczędności budynków i atrakcyjny wygląd zewnętrzny.',
        date: '2019.04.05'
      }
    }
  },
  methods: {
    linkGen (pageNum) {
      return pageNum === 1 ? '?' : `?page=${pageNum}`
    }
  },
  components: {
    BlogPost, Title
  }
}
</script>
