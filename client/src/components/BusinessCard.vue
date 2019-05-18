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
              <p class="mb-1">NIP: {{ nip }}</p>
              <p class="mb-1">REGON: {{ regon }}</p>
            </b-col>
          </b-row>
          <b-row class="mt-5">
            <b-col lg="4" sm="12" class="pb-5">
              <h5 >ADRES</h5>
              <p class="mb-1">{{ street }}</p>
              <p class="mb-1">{{ city }}</p>
            </b-col>
            <b-col align-self="end" lg="8" sm="12" class="pb-5">
              <div class="mb-1">
                <i class="far fa-envelope contact-icon contact-inline"></i>
                <h5 class="contact-inline">{{ email }}</h5>
              </div>
              <div class="mb-1">
                <i class="fas fa-phone contact-icon contact-inline"></i>
                <h5 class="contact-inline">
                  <a :href="'tel:'+phone1st"  data-rel="external">{{ phone1st }}</a>
                </h5>
              </div>
              <div class="mb-1">
                <i class="fas fa-phone contact-icon contact-inline"></i>
                <h5 class="contact-inline">
                  <a :href="'tel:'+phone2nd"  data-rel="external">{{ phone2nd }}</a>
                </h5>
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
import FirmService from '../services/FirmService'

export default {
  data () {
    return {
      fullName: 'EKO-BUD INVESTMENT SP. Z O.O.',
      nip: 'NIP: 1231411749',
      regon: 'REGON: 381361518',
      email: 'kontakt@ekobud.org',
      phone1st: '577 530 003',
      phone2nd: '577 530 008',
      addressInfo: null
    }
  },
  computed: {
    street () {
      if (this.addressInfo) return `${this.addressInfo.street}`
      else return ''
    },
    city () {
      if (this.addressInfo) return `${this.addressInfo.zipCode} ${this.addressInfo.city}`
      else return ''
    }
  },
  components: {
    ContactForm
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
  a {
    color: black;
  }
</style>
