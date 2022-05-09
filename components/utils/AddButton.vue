<template>
  <v-btn color="#dbff90" rounded small width="144" :height="height" @click="add">
    <img class="mx-1" src="~/assets/ic-plus.svg" alt="add" width="14">
    <p class="mb-0 ml-1 add-contact">Criar contato</p>
  </v-btn>
</template>
<script>
import { mapState } from "vuex";
export default {
  name: 'AddButton',
  props: {
    height: {
      default: '32'
    }
  },
  computed: {
    ...mapState('contacts', ['list']),
  },
  methods: {
    add() {
      this.$nuxt.$emit('add-new')
    }
  }
}
</script>