<template>
  <div class="form-container">
    <b-container fluid>
      <b-row>
        <b-col class="pb-2">
          <b-form-textarea
            v-model="message"
            placeholder="Treść wiadomości ..."
            rows="5"
            max-rows="10"
          ></b-form-textarea>
        </b-col>
      </b-row>
      <b-row>
        <b-col class="pb-2">
          <b-form-input v-model="fullName" placeholder="imię i nazwisko"></b-form-input>
        </b-col>
        <b-col class="pb-2">
          <b-form-input v-model="email" placeholder="e-mail"></b-form-input>
        </b-col>
        <b-col class="pb-2">
          <b-form-input v-model="phone" placeholder="telefon"></b-form-input>
        </b-col>
      </b-row>
      <b-row>
        <b-col lg="8" sm="12">
          <b-form-checkbox
            v-model="privacyConfirmed"
            value="accepted"
            unchecked-value="not_accepted"
          ><p class="small-p">{{ privacyStatement }}</p>
          </b-form-checkbox>
        </b-col>
        <b-col lg="4" sm="12" class="text-right" align-self="start">
          <b-button variant="outline-warning">Wyślij</b-button>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  data () {
    return {
      message: '',
      fullName: '',
      email: '',
      phone: '',
      privacyConfirmed: false,
      privacyStatement: 'Wyrażam zgodę na przetwarzanie moich danych osobowych zawartych ' +
            'w formularzu do celów udzielania mi odpowiedzi na zapytanie.'
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
    font-size: 0.7em;
    font-weight: 100;
  }
  p {
    font-size: 1em;
    font-weight: 200;
  }
</style>
