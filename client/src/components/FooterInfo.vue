<template>
  <footer>
    <hr class="underline">
    <div class="footer-container" >
      <b-container fluid>
        <b-row>
          <b-col md="12" lg="4" class="contact-column">
            <b-img :src="logoSrc" left width="220"></b-img>
          </b-col>
          <b-col md="12" lg="3" class="contact-column">
            <h4>Menu</h4>
            <p><router-link class="footer-item" to="/">Strona główna</router-link></p>
            <p><router-link class="footer-item" to="/oferty">Oferta</router-link></p>
            <p><router-link class="footer-item" to="/aktualnosci">Aktualności</router-link></p>
            <p><router-link class="footer-item" to="/o_nas">O nas</router-link></p>
            <p><router-link class="footer-item" to="/kontakt">Kontakt</router-link></p>
            <p>Polityka prywatności i pliki cookies</p>
          </b-col>
          <b-col md="12" lg="4" class="contact-column">
            <h4>Kontakt</h4>
            <p>{{ fullName }}</p>
            <p>{{ address }}</p>
            <p>tel. {{ phone1st }}</p>
            <p>tel. {{ phone2nd }}</p>
            <p>e-mail: {{ email }}</p>
            <p>NIP: {{ nip }}</p>
            <p>REGON: {{ regon }}</p>
          </b-col>
          <b-col md="12" lg="1" class="contact-column text-right" align-self="end">
            <div>
              <b-link href="https://www.facebook.com/deweloper.ekobud.investment/" class="contact-icon" style="color:#29487D;">
                <i class="fab fa-facebook"></i>
              </b-link>
            </div>
            <div>
              <b-link href="https://www.instagram.com/ekobud.investment_deweloper/" class="contact-icon" style="color:#8134AF;">
                <i class="fab fa-instagram"></i>
              </b-link>
            </div>
            <div>
              <b-link href="https://pl.pinterest.com/ekobud_investment/" class="contact-icon" style="color:#c8232C;">
                <i class="fab fa-pinterest-square"></i>
              </b-link>
            </div>
          </b-col>
        </b-row>
        <b-row>
          <b-col md="12" lg="8" class="contact-column">
            <p>©Copyright 2019</p>
          </b-col>
          <b-col md="12" lg="4" class="contact-column text-right">
            <p>autor: Virtual Architecture</p>
          </b-col>
        </b-row>
      </b-container>
    </div>
  </footer>
</template>

<script>
import logo from '.././assets/simple-full-logo.png'
import FirmService from '../services/FirmService'

export default {
  name: 'FooterInfo',
  data () {
    return {
      fullName: '',
      phone1st: '',
      phone2nd: '',
      email: '',
      nip: '',
      regon: '',
      addressInfo: null,
      logoSrc: logo
    }
  },
  computed: {
    address () {
      if (this.addressInfo) return `${this.addressInfo.street}, ${this.addressInfo.zipCode} ${this.addressInfo.city}`
      else return ''
    }
  },
  async created () {
    try {
      const info = await FirmService.getInformations()
      this.fullName = info.fullName
      this.phone1st = info.phone1st
      this.phone2nd = info.phone2nd
      this.email = info.email
      this.nip = info.nip
      this.regon = info.regon
      this.addressInfo = info.address
    } catch (error) {
      console.log(error.message)
    }
  }
}
</script>

<style scoped>
  footer {
    margin: 0;
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
    text-align: center;
    font-size: 2.8em;
    padding-bottom: 2.5%;
    padding-top: 2.5%;
    padding-right: 2.5%;
  }
  .contact-icon:hover {
    color: rgb(75, 75, 75);
    text-decoration: none;
    cursor: pointer;
  }
  .contact-column {
    padding-bottom: 5%;
    padding-top: 5%;
  }
  h4 {
    font-weight: 600;
    font-size: 1.5em;
    margin-bottom: 1em;
  }
  p {
    font-weight: 100;
    font-size: 1em;
    margin-bottom: 0;
    margin-top: 0;
    padding-bottom: 0.7em;
  }
  .footer-item {
    color:black;
  }
  .footer-item:hover {
    text-shadow: 2px 2px 20px rgba(125, 125, 125, 0.5);
    text-decoration: none;
  }
</style>
