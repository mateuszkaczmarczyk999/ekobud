<template>
  <div>
    <b-card bg-variant="light">
      <b-form-group
        label-cols-lg="3"
        label="Podstawowe informacje"
        label-size="lg"
        label-class="font-weight-bold pt-0"
        class="mb-0"
      >
        <b-form-group
          label-cols-sm="3"
          label="Pełna nazwa:"
          label-align-sm="right"
          label-for="nested-full-name"
        >
          <b-form-input id="nested-full-name" v-model="info.fullName"></b-form-input>
        </b-form-group>

        <b-form-group
          label-cols-sm="3"
          label="Skrócona nazwa:"
          label-align-sm="right"
          label-for="nested-name"
        >
          <b-form-input id="nested-name" v-model="info.name"></b-form-input>
        </b-form-group>

        <b-form-group
          label-cols-sm="3"
          label="REGON:"
          label-align-sm="right"
          label-for="nested-regon"
        >
          <b-form-input id="nested-regon" v-model="info.regon"></b-form-input>
        </b-form-group>

        <b-form-group
          label-cols-sm="3"
          label="NIP:"
          label-align-sm="right"
          label-for="nested-nip"
        >
          <b-form-input id="nested-nip" v-model="info.nip"></b-form-input>
        </b-form-group>

        <b-form-group
          label-cols-sm="3"
          label="Telefon 1:"
          label-align-sm="right"
          label-for="nested-phone1"
        >
          <b-form-input id="nested-phone1" v-model="info.phone1st"></b-form-input>
        </b-form-group>

        <b-form-group
          label-cols-sm="3"
          label="Telefon 2:"
          label-align-sm="right"
          label-for="nested-phone2"
        >
          <b-form-input id="nested-phone2" v-model="info.phone2nd"></b-form-input>
        </b-form-group>

        <b-form-group
          label-cols-sm="3"
          label="E-mail:"
          label-align-sm="right"
          label-for="nested-email"
        >
          <b-form-input id="nested-email" v-model="info.email"></b-form-input>
        </b-form-group>
      </b-form-group>
      <b-form-group
        label-cols-lg="3"
        label="Adres"
        label-size="lg"
        label-class="font-weight-bold pt-0"
        class="mb-0"
      >
        <b-form-group
          label-cols-sm="3"
          label="Ulica i numer:"
          label-align-sm="right"
          label-for="nested-street"
        >
          <b-form-input id="nested-street" v-model="info.address.street"></b-form-input>
        </b-form-group>

        <b-form-group
          label-cols-sm="3"
          label="Kod pocztowy:"
          label-align-sm="right"
          label-for="nested-postal"
        >
          <b-form-input id="nested-postal" v-model="info.address.zipCode"></b-form-input>
        </b-form-group>

        <b-form-group
          label-cols-sm="3"
          label="Miejscowość:"
          label-align-sm="right"
          label-for="nested-city"
        >
          <b-form-input id="nested-city" v-model="info.address.city"></b-form-input>
        </b-form-group>
      </b-form-group>

      <b-form-group
        label-cols-lg="3"
        label="Opis"
        label-size="lg"
        label-class="font-weight-bold pt-0"
        class="mb-0"
      >
        <b-form-group
          label-cols-sm="3"
          label="Krótki opis:"
          label-align-sm="right"
          label-for="nested-short-text"
        >
          <b-form-textarea id="nested-short-text" rows="3" v-model="info.description"></b-form-textarea>
        </b-form-group>

        <b-form-group
          label-cols-sm="3"
          label="Pełny opis:"
          label-align-sm="right"
          label-for="nested-long-text"
        >
          <b-form-textarea id="nested-long-text" rows="6" v-model="info.text"></b-form-textarea>
        </b-form-group>
      </b-form-group>
      <b-button size="md" variant="primary" @click="saveInfo(info)">Zapisz</b-button>
    </b-card>
  </div>
</template>

<script>
import FirmService from '../services/FirmService'

export default {
  data () {
    return {
      name: '',
      info: {}
    }
  },
  methods: {
    async saveInfo (info) {
      const result = await FirmService.updateFirm(info)
      console.log(result)
    }
  },
  async created () {
    try {
      this.info = await FirmService.getInformations()
    } catch (error) {
      console.log(error.message)
    }
  }
}
</script>
