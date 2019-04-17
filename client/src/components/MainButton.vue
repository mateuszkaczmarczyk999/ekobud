<template>
  <div class="text-center pb-5 pt-3">
    <b-button :to="url" size="lg" variant="warning">{{ btnName }}</b-button>
  </div>
</template>

<script>
export default {
  props: {
    btnName: String,
    url: String
  }
}
</script>
