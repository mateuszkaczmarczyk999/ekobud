<template>
  <div class="form-container">
    <b-container fluid>
      <b-row>
        <b-col class="pb-2">
          <b-form-textarea
            id="message"
            v-model="message"
            placeholder="Treść wiadomości ..."
            rows="6"
            max-rows="10"
          ></b-form-textarea>
        </b-col>
      </b-row>
      <b-row>
        <b-col class="pb-2">
          <b-form-input id="fullName" v-model="fullName" placeholder="imię i nazwisko"></b-form-input>
        </b-col>
        <b-col class="pb-2">
          <b-form-input id="email" v-model="email" placeholder="e-mail"></b-form-input>
        </b-col>
        <b-col class="pb-2">
          <b-form-input  id="phone" v-model="phone" placeholder="telefon"></b-form-input>
        </b-col>
      </b-row>
      <b-row>
        <b-col lg="8" sm="12">
          <b-form-checkbox
            id="privacyConfirmed"
            v-model="privacyConfirmed"
            value="accepted"
            unchecked-value="not_accepted"
          ><p class="small-p" :class="{ 'error': notConfirmed }">{{ privacyStatement }}</p>
          </b-form-checkbox>
        </b-col>
        <b-col lg="4" sm="12" class="text-right" align-self="start">
          <b-button variant="warning" @click="sendMail">Wyślij</b-button>
        </b-col>
      </b-row>
      <b-row v-if="mailSent">
        <b-col cols=12>
          <p class="succes">Wiadomość została wysłana.</p>
        </b-col>
      </b-row>
    </b-container>
    <b-tooltip :show.sync="showNameValidations" v-if="showNameValidations" target="fullName" placement="top">
      <p class="validation">{{ errors.fullName }}</p>
    </b-tooltip>
    <b-tooltip :show.sync="showEmailValidations" v-if="showEmailValidations" target="email" placement="top">
      <p class="validation">{{ errors.email }}</p>
    </b-tooltip>
    <b-tooltip :show.sync="showPhoneValidations" v-if="showPhoneValidations" target="phone" placement="top">
      <p class="validation">{{ errors.phone }}</p>
    </b-tooltip>
    <b-tooltip :show.sync="showMessageValidations" v-if="showMessageValidations" target="message" placement="top" offset=100>
      <p class="validation">{{ errors.message }}</p>
    </b-tooltip>
  </div>
</template>

<script>
export default {
  props: {
    text: { type: String, default: '' },
    resetValidation: { type: Boolean, default: false }
  },
  data () {
    return {
      message: '',
      fullName: '',
      email: '',
      phone: '',
      privacyConfirmed: 'not_accepted',
      privacyStatement: 'Wyrażam zgodę na przetwarzanie moich danych osobowych zawartych ' +
            'w formularzu do celów udzielania mi odpowiedzi na zapytanie.',
      errors: {},
      showNameValidations: false,
      showEmailValidations: false,
      showPhoneValidations: false,
      showMessageValidations: false,
      notConfirmed: false,
      mailSent: false
    }
  },
  methods: {
    sendMail () {
      if (this.validate()) {
        console.log(this.fullName)
        console.log(this.email)
        console.log(this.phone)
        console.log(this.message)
        this.mailSent = true
        this.$emit('sent')
      } else {
        this.mailSent = false
      }
    },
    validate () {
      this.showNameValidations = false
      this.showEmailValidations = false
      this.showPhoneValidations = false
      this.showMessageValidations = false
      this.resetValidation = false

      if (this.fullName === '') {
        this.errors['fullName'] = 'Pole jest wymagane'
        this.showNameValidations = true
      }
      if (this.phone === '') {
        this.errors['phone'] = 'Pole jest wymagane'
        this.showPhoneValidations = true
      }
      if (this.message === '') {
        this.errors['message'] = 'Treść wiadomości jest wymagana'
        this.showMessageValidations = true
      }
      if (this.email === '') {
        this.errors['email'] = 'Pole jest wymagane'
        this.showEmailValidations = true
        // eslint-disable-next-line
      } else if (!this.email.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
        this.errors['email'] = 'Niepoprawny format adresu e-mail'
        this.showEmailValidations = true
      }
      this.notConfirmed = this.privacyConfirmed === 'not_accepted'
      const valid = !(this.notConfirmed || this.showEmailValidations || this.showNameValidations || this.showPhoneValidations || this.showMessageValidations)
      console.log(valid)
      return valid
    }
  },
  watch: {
    text (val) {
      if (val !== '') this.message = val
    },
    resetValidation (val) {
      if (val) {
        this.showNameValidations = false
        this.showEmailValidations = false
        this.showPhoneValidations = false
        this.showMessageValidations = false
      }
    }
  }
}
</script>

<style scoped>
  .form-container {
    display: inline-block;
    margin-bottom: 0;
    font-size: 16px;
  }
  .small-p {
    font-size: 0.8em;
    font-weight: 100;
  }
  .validation {
    font-size: 0.9em;
    font-weight: 600;
  }
  .error {
    color:rgba(175, 25, 25, 0.7);
    font-size: 0.8em;
    font-weight: 400;
  }
  .succes {
    color:rgba(38, 175, 25, 0.7);
    text-align: center;
    font-size: 1em;
    font-weight: 400;
  }
  p {
    font-size: 1em;
    font-weight: 200;
  }
</style>
