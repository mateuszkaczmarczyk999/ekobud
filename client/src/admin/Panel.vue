<template>
  <div id="admin-panel" class="admin-container">
    <b-container fluid>
      <b-row align-v="end">
        <b-col cols="8">
          <b-img :src="logoSrc" :key="logoSrc" left width="300"></b-img>
        </b-col>
        <b-col cols="4">
          <div class="text-right">
            <b-button size="lg" variant="warning">Wyloguj</b-button>
          </div>
        </b-col>
      </b-row>
      <b-row>
        <b-col cols="12">
          <hr/>
        </b-col>
      </b-row>
      <b-row>
        <b-col cols="12">
          <div>
            <b-card no-body>
              <b-tabs pills card vertical>
                <b-tab title="Firma" active><Firma/></b-tab>
                <b-tab title="Aktualności"><Blog/></b-tab>
                <b-tab title="Osiedle przy Cichej"><Oferta offer-id="osiedle_przy_cichej"/></b-tab>
              </b-tabs>
            </b-card>
          </div>
        </b-col>
      </b-row>
      <b-row>
        <b-col cols="12">
          <hr/>
        </b-col>
      </b-row>
      <b-row>
        <b-col cols="6">
          <p>©Copyright 2019</p>
        </b-col>
        <b-col cols="6" class="text-right">
          <p>autor: Virtual Architecture</p>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import logoBlk from '.././assets/menu-logo-sm-blk.png'
import Firma from '../admin/Firma'
import Blog from '../admin/Blog'
import Oferta from '../admin/Oferta'

export default {
  name: 'AdminPanel',
  data () {
    return {
      logoSrc: logoBlk
    }
  },
  components: {
    Firma, Blog, Oferta
  }
}
</script>

<style scoped>
  .admin-container {
    margin: 2% 6%;
  }
</style>
