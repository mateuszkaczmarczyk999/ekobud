<template>
  <b-modal
    id="contact-modal"
    ref="modal"
    title-tag="h3"
    size="lg"
    header-bg-variant="dark"
    header-text-variant="light"
    hide-footer
    @shown="showModal"
    @hidden="hideModal"
    :title="header"
  ><ContactForm :text="message" :title="title" :resetValidation="reset" @sent="mailSent"/>
  </b-modal>
</template>

<script>
import ContactForm from '../components/ContactForm'

export default {
  props: {
    header: { type: String, default: 'Zapytaj o cenę' },
    message: { type: String, default: '' },
    title: { type: String, default: '' }
  },
  data () {
    return {
      reset: false
    }
  },
  methods: {
    hideModal () {
      this.reset = true
    },
    showModal () {
      this.reset = false
    },
    mailSent () {
      this.$nextTick(() => {
        this.$refs.modal.hide()
      })
    }
  },
  components: {
    ContactForm
  }
}
</script>

<style scoped>
</style>
