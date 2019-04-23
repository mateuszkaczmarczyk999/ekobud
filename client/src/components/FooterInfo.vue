<template>
  <footer>
    <hr class="underline">
    <div class="footer-container" >
      <b-container fluid>
        <b-row>
          <b-col sm="12" lg="4" class="contact-column">
            <b-img :src="logoSrc" left height="50px"></b-img>
          </b-col>
          <b-col sm="12" lg="3" class="contact-column">
            <h4>Menu</h4>
            <p>Oferta</p>
            <p>Aktualności</p>
            <p>O nas</p>
            <p>Kontakt</p>
            <p>Regulamin</p>
            <p>Polityka prywatności i pliki cookies</p>
          </b-col>
          <b-col sm="12" lg="3" class="contact-column">
            <h4>Kontakt</h4>
            <p>EKO-BUD Investment Sp.Z O.O. Sp.K.</p>
            <p>ul. Cicha 4, 05-552 Łazy</p>
            <p>tel. +48 577 530 003</p>
            <p>e-mail: kontakt@ekobud.org</p>
            <p>NIP: 1231411749</p>
            <p>REGON: 381361518</p>
          </b-col>
          <b-col sm="12" lg="2" class="contact-column">
            <h4>Social media</h4>
            <div>
              <i class="fab fa-facebook contact-icon contact-inline"></i>
              <p class="contact-inline">Facebook</p>
            </div>
            <div>
              <i class="fab fa-instagram contact-icon contact-inline"></i>
              <p class="contact-inline">Instagram</p>
            </div>
            <div>
              <i class="fab fa-pinterest-square contact-icon contact-inline"></i>
              <p class="contact-inline">Pinterest</p>
            </div>
          </b-col>
        </b-row>
        <b-row>
          <b-col sm="12" lg="8" class="contact-column">
            <p>©Copyright 2019</p>
          </b-col>
          <b-col sm="12" lg="4" class="contact-column">
            <p>autor: Virtual Architecture</p>
          </b-col>
        </b-row>
      </b-container>
    </div>
  </footer>
</template>

<script>
import logo from '.././assets/simple-full-logo.png'

export default {
  name: 'FooterInfo',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      logoSrc: logo
    }
  }
}
</script>

<style scoped>
  footer {
    margin-left: 0;
    margin-right: 0;
  }
  .underline {
    color:black;
    border-top: 1px solid;
  }
  .footer-container {
    color:black;
    text-align: left;
    font-size: 16px;
    margin-left: 10%;
    margin-right: 10%;
  }
  .contact-inline {
    display: inline-block;
  }
  .contact-icon {
    font-size: 1em;
    padding-bottom: 2.5%;
    padding-top: 2.5%;
    padding-right: 2.5%;
  }
  .contact-column {
    padding-bottom: 5%;
    padding-top: 5%;
  }
  h4 {
    font-weight: 600;
    font-size: 1.1em;
    margin-bottom: 1em;
  }
  p {
    font-weight: 100;
    font-size: 1em;
    margin-bottom: 0;
    margin-top: 0;
    padding-bottom: 0.7em;
  }
</style>
