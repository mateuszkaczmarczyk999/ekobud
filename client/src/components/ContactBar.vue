<template>
  <div class="contact-container">
    <b-img class="img-cover" :src="imgSrc" fluid-grow></b-img>
    <div class="card-middle">
      <h1 class="pt-3">Masz pytania?</h1>
      <h4 class="pb-0 mb-0">tel: 501-501-501</h4>
      <h4>e-mail: kontak@ekobud.org</h4>
    </div>
  </div>
</template>

<script>
import contactBg from '.././assets/contact-bg.jpg'
export default {
  data () {
    return {
      imgSrc: contactBg
    }
  }
}
</script>

<style scoped>
  .contact-container {
    position: relative;
    width: 100%;
    margin-bottom: 2.5%;
  }
  .card-middle {
    text-align: center;
    color: aliceblue;
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100%;
    transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
  }
  h1 {
    font-weight: 600;
    font-size: 4vw;
    margin-bottom: 1%;
    text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.9);
  }
  h4 {
    font-size: 2vw;
    font-weight: 600;
    margin-bottom: 1%;
    text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.9);
  }
</style>
