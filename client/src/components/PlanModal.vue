<template>
  <b-modal
    id="plan-modal"
    ref="plan"
    size="lg"
    hide-header
    hide-footer
    :title="header"
  ><b-img :src="planSrc" fluid></b-img>
  </b-modal>
</template>

<script>
export default {
  props: {
    header: { type: String, default: '' },
    planSrc: { type: String, default: '' }
  }
}
</script>

<style scoped>
</style>
