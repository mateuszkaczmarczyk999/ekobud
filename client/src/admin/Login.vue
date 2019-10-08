<template>
  <div class="login-container">
    <b-container fluid>
      <b-row class="logo-row">
        <b-col cols=12 class="p-0 m-0">
          <b-img :src="logoSrc" :key="logoSrc" left width="300" class="p-0 m-0"></b-img>
        </b-col>
      </b-row>
      <b-row>
        <b-col cols=12>
          <b-form @submit="onLogin">
            <b-form-group label="E-mail:" label-for="email">
              <b-form-input
                id="email"
                v-model="form.email"
                type="email"
                required
                placeholder="Wprowadź adres e-mail."
              ></b-form-input>
            </b-form-group>

            <b-form-group label="Hasło:" label-for="password">
              <b-form-input
                id="password"
                v-model="form.password"
                required
                placeholder="Wprowadź hasło."
              ></b-form-input>
            </b-form-group>

            <b-button type="submit" variant="primary">Zaloguj się</b-button>
          </b-form>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import logoBlk from '.././assets/menu-logo-sm-blk.png'
export default {
  data () {
    return {
      logoSrc: logoBlk,
      submitted: false,
      form: {
        email: '',
        password: ''
      }
    }
  },
  created () {
    this.$store.dispatch('logout')
  },
  computed: {
    loggingIn () {
      return this.$store.isLoggedIn
    }
  },
  methods: {
    onLogin (evt) {
      evt.preventDefault()
      this.submitted = true
      if (this.form.email && this.form.password) {
        this.$store.dispatch('login', this.form)
      }
    }
  }
}
</script>

<style scoped>
.login-container {
  margin: 10% 30%
}
.logo-row {
  margin: 0%;
  padding: 5% 0%;
}
</style>
