<template>
  <div id="contact">
    <BusinessCard/>
  </div>
</template>

<script>
import BusinessCard from '../components/BusinessCard'

export default {
  name: 'Main',
  data () {
    return {
      name: 'DUPA'
    }
  },
  components: {
    BusinessCard
  }
}
</script>
