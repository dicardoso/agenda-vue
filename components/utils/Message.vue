<template>
  <div>
    <v-snackbar
      id="message-snackbar"
      v-model="snackbar"
      :timeout="snackbarProperty.timeout"
      :color="
        snackbarProperty.type === 'error'
          ? 'red darken-3'
          : snackbarProperty.type === 'warning'
          ? '#ebbe38'
          : snackbarProperty.type === 'info'
          ? '#386ed1'
          : '#39b33d'
      "
      content-class="snackbar-content justify-center"
      multi-line
      top
      width=70
    >
      <v-icon color="white" class="mr-2">mdi-information</v-icon>
      <v-row v-if="Array.isArray(snackbarProperty.body)">
        <v-col
          v-for="(body, index) in snackbarProperty.body"
          :key="index"
          cols="12"
          class="mx-3 py-1 width-100"
        >
          {{ '- ' + body }}
        </v-col>
      </v-row>
      <div v-else class="mx-3 text-center">
        {{ snackbarProperty.body }}
      </div>
    </v-snackbar>
  </div>
</template>
<script>
export default {
  data() {
    return {
      snackbar: false,
      snackbarProperty: {
        body: '',
        type: '',
        dark: true,
        timeout: 6000
      }
    }
  },
  mounted() {
    this.$nuxt.$on(
      'active-message',
      (body, type = 'info', dark = true, timeout = 2000) => {
        this.snackbar = true
        this.snackbarProperty.body = body
        this.snackbarProperty.type = type
        this.snackbarProperty.dark = dark
        this.snackbarProperty.timeout = timeout
      }
    )
  }
}
</script>
<style lang="scss">
.snackbar-content {
  display: flex;
  align-items: center;
  color: white;
}
</style>
