<template>
  <div id="offers">
    <Title name="Lista ofert"/>
    <OfferCards :offers="offers"/>
  </div>
</template>

<script>
import OfferCards from '../components/OfferCards'
import Title from '../components/Title'
import tmpImg from '.././assets/about.jpg'

export default {
  name: 'Offers',
  data () {
    return {
      offers: [
        { id: 1,
          title: '"Osielde przy Cichej"',
          imgFile: tmpImg,
          imgSize: '500',
          btn: 'Szczegóły',
          msg: 'Lorem Ipsum jest tekstem wypełniacz w przemyśle poligraficznym. Został po raz pierwszy użyty w XV w. przez nieznanego drukarza do wypełnienia tekstem próbnej książki. Pięć wieków później zaczął być używany przemyśle elektronicznym, pozostając praktycznie niezmienionym. Spopularyzował się w latach 60. XX w. wraz z publikacją arkuszy Letrasetu, zawierających fragmenty Lorem Ipsum, a ostatnio z zawierającym różne wersje Lorem Ipsum oprogramowaniem przeznaczonym do realizacji druków na komputerach osobistych, jak Aldus PageMaker'
        },
        { id: 2,
          title: '"Osielde przy Cichej"',
          imgFile: tmpImg,
          imgSize: '500',
          btn: 'Szczegóły',
          msg: 'Lorem Ipsum jest tekstem wypełniacz w przemyśle poligraficznym. Został po raz pierwszy użyty w XV w. przez nieznanego drukarza do wypełnienia tekstem próbnej książki. Pięć wieków później zaczął być używany przemyśle elektronicznym, pozostając praktycznie niezmienionym. Spopularyzował się w latach 60. XX w. wraz z publikacją arkuszy Letrasetu, zawierających fragmenty Lorem Ipsum, a ostatnio z zawierającym różne wersje Lorem Ipsum oprogramowaniem przeznaczonym do realizacji druków na komputerach osobistych, jak Aldus PageMaker'
        },
        { id: 3,
          title: '"Osielde przy Cichej"',
          imgFile: tmpImg,
          imgSize: '500',
          btn: 'Szczegóły',
          msg: 'Lorem Ipsum jest tekstem wypełniacz w przemyśle poligraficznym. Został po raz pierwszy użyty w XV w. przez nieznanego drukarza do wypełnienia tekstem próbnej książki. Pięć wieków później zaczął być używany przemyśle elektronicznym, pozostając praktycznie niezmienionym. Spopularyzował się w latach 60. XX w. wraz z publikacją arkuszy Letrasetu, zawierających fragmenty Lorem Ipsum, a ostatnio z zawierającym różne wersje Lorem Ipsum oprogramowaniem przeznaczonym do realizacji druków na komputerach osobistych, jak Aldus PageMaker'
        }
      ]
    }
  },
  components: {
    OfferCards, Title
  }
}
</script>
