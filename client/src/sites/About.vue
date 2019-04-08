<template>
  <div id="about">
    <Title name="O nas" :header="header"/>
    <SimpleCard :text="msg" :imgSource="imgFile" :imgWidth="imgSize"/>
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
      imgSize: 400,
      header: 'Lorem Ipsum jest tekstem stosowanym jako przykładowy wypełniacz w przemyśle poligraficznym. Został po raz pierwszy użyty w XV w. przez nieznanego drukarza do wypełnienia tekstem próbnej książki. ',
      msg: 'Lorem Ipsum jest tekstem stosowanym jako przykładowy wypełniacz w przemyśle poligraficznym. Został po raz pierwszy użyty w XV w. przez nieznanego drukarza do wypełnienia tekstem próbnej książki. Pięć wieków później zaczął być używany przemyśle elektronicznym, pozostając praktycznie niezmienionym. Spopularyzował się w latach 60. XX w. wraz z publikacją arkuszy Letrasetu, zawierających fragmenty Lorem Ipsum, a ostatnio z zawierającym różne wersje Lorem Ipsum oprogramowaniem przeznaczonym do realizacji druków na komputerach osobistych, jak Aldus PageMaker'
    }
  },
  components: {
    SimpleCard, Title
  }
}
</script>
