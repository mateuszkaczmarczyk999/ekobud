<template>
  <div class="contact-container">
    <b-container fluid>
      <b-row>
        <b-col lg="6" sm="12" class="pb-3">
          <b-row>
            <b-col>
              <h1>Kontakt</h1>
              <hr class="contact-underline">
              <h5>EKO-BUD Investment Sp.Z O.O. Sp.K.</h5>
              <p class="mb-1">NIP: 1231411749</p>
              <p class="mb-1">REGON: 381361518</p>
            </b-col>
          </b-row>
          <b-row class="mt-5">
            <b-col lg="4" sm="12" class="pb-5">
              <h5 >ADRES</h5>
              <p class="mb-1">ul. Łazy 4</p>
              <p class="mb-1">05-552 Łazy</p>
            </b-col>
            <b-col align-self="end" lg="8" sm="12" class="pb-5">
              <div class="mb-1">
                <i class="fas fa-phone contact-icon contact-inline"></i>
                <h5 class="contact-inline">+48 577 530 003</h5>
              </div>
              <div class="mb-1">
                <i class="far fa-envelope contact-icon contact-inline"></i>
                <h5 class="contact-inline">kontakt@ekobud.org</h5>
              </div>
            </b-col>
          </b-row>
        </b-col>
        <b-col lg="6" sm="12" class="pb-3">
          <b-row>
            <b-col>
              <h1>Napisz do nas</h1>
            </b-col>
          </b-row>
          <b-row>
            <ContactForm/>
          </b-row>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import ContactForm from '../components/ContactForm'

export default {
  data () {
    return {
      firmName: 'EKO-BUD INVESTMENT SP. Z O.O.',
      nip: 'NIP: 1231411749',
      regon: 'REGON: 381361518',
      email: 'kontakt@ekobud.org',
      phone: '501-501-501',
      street: 'ul. Łazy 4',
      postCode: '05-552 Łazy'
    }
  },
  components: {
    ContactForm
  }
}
</script>

<style scoped>
  .contact-container {
    margin-left: 10%;
    margin-right: 10%;
    margin-top: 5%;
    margin-bottom: 5%;
    font-size: 16px;
  }
  .contact-inline {
    display: inline-block;
    margin-bottom: 0;
  }
  .contact-icon {
    font-size: 1.5em;
    margin-right: 10px;
  }
  .contact-underline {
    border-top: 1px solid;
    margin-top: 0;
  }
  .small-p {
    font-size: 0.8em;
  }
  h1 {
    font-size: 1.9em;
    font-weight: 200;
  }
  h5 {
    font-size: 1.2em;
    font-weight: 400;
  }
  p {
    font-size: 1em;
    font-weight: 200;
  }
</style>
