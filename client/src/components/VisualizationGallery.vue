<template>
  <div :style="bgClass">
    <div class="visualization-container">
      <b-container fluid v-if="isLarge">
        <b-row>
          <b-col @click="selectImg(idx)" lg md="6" class="img-container" :key="idx" v-for="(img, idx) in images">
            <lightbox :thumbnail="img" :images="reorderedImgs">
              <lightbox-default-loader slot="loader"/>
            </lightbox>
          </b-col>
        </b-row>
      </b-container>
      <b-container fluid v-else>
        <b-row>
          <b-col cols="2" align-self="center">
            <i class="fas fa-chevron-left move-action" @click="goPrev"></i>
          </b-col>
          <b-col cols="8">
            <lightbox :thumbnail="images[selectedImg]" :images="reorderedImgs">
              <lightbox-default-loader slot="loader"/>
            </lightbox>
          </b-col>
          <b-col cols="2" align-self="center">
            <i class="fas fa-chevron-right move-action" @click="goNext"></i>
          </b-col>
        </b-row>
      </b-container>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    images: Array,
    background: Boolean,
    noResize: Boolean
  },
  data () {
    return {
      selectedImg: 0,
      windWidth: 0
    }
  },
  created () {
    window.addEventListener('resize', this.handleResize)
    this.handleResize()
  },
  destroyed () {
    window.removeEventListener('resize', this.handleResize)
  },
  computed: {
    isLarge () {
      return this.windWidth > 991 || this.noResize
    },
    bgClass () {
      return {
        'background-color': this.background ? 'lightgray' : 'initial',
        'padding-top': '2.5%',
        'padding-bottom': '2.5%'
      }
    },
    reorderedImgs () {
      let firstPart = this.images.slice(0, this.selectedImg)
      let secondPart = this.images.slice(this.selectedImg, this.images.length)
      return secondPart.concat(firstPart)
    }
  },
  methods: {
    selectImg (idx) {
      this.selectedImg = idx
    },
    handleResize () {
      this.windWidth = window.innerWidth
    },
    goNext () {
      if (this.selectedImg === this.images.length - 1) this.selectedImg = 0
      else this.selectedImg += 1
    },
    goPrev () {
      if (this.selectedImg === 0) this.selectedImg = this.images.length - 1
      else this.selectedImg -= 1
    }
  }
}
</script>

<style>
#app #details .container .row .col .visualization-container .lightbox {
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0,0,0,0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
}
.lightbox__thumbnail img {
  object-fit: cover;
  width: 25vw;
  height: 25vw;
  -moz-transition: all 0.3s;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
}
.lightbox__thumbnail img:hover {
  opacity: 0.6;
  box-shadow: 0 16px 32px 0 rgba(0,0,0,0.9);
  -moz-transform: scale(1.1);
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>

<style scoped>
.visualization-container {
  text-align: center;
  margin-top: 2.5%;
  margin-bottom: 2.5%;
  margin-left: 10%;
  margin-right: 10%;
}
.img-container {
  overflow: hidden;
  padding-top: 0.9%;
  padding-left: 0.9%;
  padding-right: 0.9%;
  padding-bottom: 0.9%;
}
.move-action {
  font-size: 3em;
  color: Tomato;
}
.move-action:hover {
  font-size: 3.2em;
  color: Tomato;
  cursor: pointer;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
}
</style>
