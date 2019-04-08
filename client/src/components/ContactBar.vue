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
import contactbg from '.././assets/contact-bg.jpg'
export default {
  data () {
    return {
      imgSrc: contactbg
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
  h4 {
    font-weight: 400;
  }
</style>
