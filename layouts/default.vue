<template>
  <v-app dark>
    <message />
    <v-app-bar
      class="pa-1"
      elevation="0"
      color="white"
      app
    >
      <v-row class="align-center">
        <v-col cols="2">
          <v-toolbar-title>
            <img src="~/assets/ic-logo.svg" alt="ubook-logo" width="140">
          </v-toolbar-title>
        </v-col>
        <v-col class="d-flex align-center" cols="10">
          <v-col cols="2">
            <add-button v-if="list.length !== 0" class="mr-6 ml-4" />
          </v-col>
          <v-col>
            <v-text-field
              v-model="search"
              class="mt-5 search-input"
              background-color="#e4e7f4"
              dense
              solo
              append-icon="mdi-magnify"
              label="Buscar..."
              @keyup="setSearch"
            />
          </v-col>
        </v-col>
      </v-row>
    </v-app-bar>
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import Message from '@/components/utils/Message'
import AddButton from '../components/utils/AddButton.vue'
export default {
  name: 'DefaultLayout',
  components: {AddButton, Message},
  data () {
    return {
      search: ''
    }
  },
  computed: {
    ...mapState('contacts', ['list']),
    ...mapMutations('contacts', ['setSearchTerm']),
  },
  methods: {
    setSearch() {
      this.$store.commit('contacts/setSearchTerm', this.search)
    }
  }
}
</script>

<style scoped>
.theme--light.v-application, .v-app-bar {
  background-color: var(--v-background-base, '#f8f9fd') !important;
}
.v-text-field__slot .v-label {
  color: '#9198af';
  font-size: 16px;
}
.v-text-field {
  box-shadow: 0px;
}
.add-contact {
  color: #fa7268;
}
</style>
