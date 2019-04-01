<template>
    <footer>
        <b-container class="footer-container">
            <b-row>
                <b-col>
                    <h4>Menu</h4>
                    <p>Oferta</p>
                    <p>Aktualności</p>
                    <p>O nas</p>
                    <p>Kontakt</p>
                    <p>Regulamin</p>
                    <p>Polityka prywatności i pliki cookies</p>
                </b-col>
                <b-col>
                    <h4>Kontakt</h4>
                    <p>EKO-BUD Investment Sp. z o.o.</p>
                    <p>ul. Cicha 4, 05-552 Łazy</p>
                    <p>tel. +48 501 025 014</p>
                    <p>e-mail: kontakt@ekobud.org</p>
                    <p>NIP: 1231411749</p>
                    <p>REGON: 380837150</p>
                </b-col>
                <b-col>
                    <h4>Social media</h4>
                    <p>Facebook</p>
                    <p>Instagram</p>
                    <p>Pinterest</p>
                </b-col>
            </b-row>
        </b-container>
        <p>©Copyright 2019</p>
    </footer>
</template>

<script>
export default {
  name: 'FooterInfo',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style scoped>
  footer {
    text-align: center;
    color: aliceblue;
    background-color: #3a3d32;
    margin-left: 0em;
    margin-right: 0em;
  }
  .footer-container {
    display: inline;
    margin-left: 5%;
    margin-right: 5%;
  }
  .row {
    margin-left: 0em;
    margin-right: 0em;
  }
  h4 {
    font-weight: 300;
    font-size: 1.7em;
    margin-bottom: 1em;
  }
  p {
    font-weight: 100;
    font-size: 1em;
    margin-bottom: 0em;
    margin-top: 0em;
    padding-bottom: 0.7em;
  }
</style>
