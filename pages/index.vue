<template>
  <v-container>
    <contact-dialog
      :dialog="dialog"
      :item="contact"
      @close-dialog="dialog = false"
      @reload-table="reloadTable = true"
    />
    <empty-page v-if="list.length === 0"/>
    <list-table
      v-else
      :reload-table="reloadTable"
      @table-loaded="reloadTable = false"
      @open-dialog="openDialog"
    />
  </v-container>
</template>

<script>
import { mapState } from "vuex";
import ContactDialog from '../components/ContactDialog.vue';
import EmptyPage from '../components/EmptyPage.vue'
import ListTable from '../components/ListTable.vue';
export default {
  components: { ListTable },
  name: 'IndexPage',
  comments: { ContactDialog, EmptyPage },
  data () {
    return {
      contacts: [],
      dialog: false,
      contact: {},
      reloadTable: false,
    }
  },
  computed: {
    ...mapState('contacts', ['list']),
  },
  created() {
    this.$nuxt.$on('add-new', () => {
      this.openDialog()
    })
  },
  methods: {
    openDialog(item = {}) {
      this.contact = item
      this.dialog = true
    }
  }
}
</script>
