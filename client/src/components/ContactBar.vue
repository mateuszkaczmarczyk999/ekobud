<template>
  <div class="contact-container">
    <b-img class="img-cover" :src="imgSrc"></b-img>
    <div class="card-middle">
      <h1 class="pt-3 pl-0 pr-0 ml-0 mr-0">Masz pytania?</h1>
      <h4 class="pb-0 mb-0">tel: <strong>{{ phone1 }}</strong></h4>
      <h4 class="pb-0 mb-0">tel: <strong>{{ phone2 }}</strong></h4>
      <h4>e-mail:  <strong>{{ mail }}</strong></h4>
    </div>
  </div>
</template>

<script>
import contactBg from '.././assets/contact-bg.jpg'
export default {
  data () {
    return {
      imgSrc: contactBg,
      phone1: '577 530 003',
      phone2: '577 530 008',
      mail: 'kontakt@ekobud.org'
    }
  }
}
</script>

<style scoped>
  .contact-container {
    position: relative;
    width: 100%;
  }
  .img-cover {
    height: 40vh;
    width: 100%;
    object-fit: cover;
  }
  .card-middle {
    text-align: center;
    font-size: 16px;
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
    font-size: 3em;
    margin-bottom: 1%;
    text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.9);
  }
  h4 {
    font-size: 2em;
    font-weight: 400;
    margin-bottom: 1%;
    text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.9);
  }
</style>
