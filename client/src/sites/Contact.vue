<template>
  <div id="contact">
    <BusinessCard/>
  </div>
</template>

<script>
import BusinessCard from '../components/BusinessCard'

export default {
  name: 'Contact',
  data () {
    return {
      name: ''
    }
  },
  components: {
    BusinessCard
  }
}
</script>
