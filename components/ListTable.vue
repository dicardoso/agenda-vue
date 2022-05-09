<template>
  <div>
    <confirmation-dialog
      :dialog="confirmationDialog"
      :dialog-function="dialogFunction"
      @close-dialog="confirmationDialog = false"
    />
    <v-data-table
      :headers="headers"
      :items="contacts"
      :search="search"
      hide-default-footer
      class="elevation-0"
      item-class="teste"
    >
      <template #[`item.picture`]="{ item }">
        <v-avatar
          size="30"
          class="font-weight-bold"
          :color="randomColors(item)"
        >
          <span style="color: white;">
            {{item.name ? item.name.charAt(0).toUpperCase() : ''}}
          </span>
        </v-avatar>
      </template>
      <template #[`item.name`]="{ item }">
        {{ item.name }}
      </template>
      <template #[`item.email`]="{ item }">
        {{ item.email }}
      </template>
      <template #[`item.phone`]="{ item }">
        <the-mask
          :mask="['(##) ####-####', '(##) #####-####']"
          :value="item.phone"
        />
      </template>
      <template #[`item.actions`]="{ item }">
        <tooltip bottom>
          <v-btn
            :id="'btn-edit-' + item.id"
            slot="button"
            icon
            @click="edit(item)"
          >
            <v-icon>mdi-pencil</v-icon>
          </v-btn>
          <span slot="text">
            Editar
          </span>
        </tooltip>
        <tooltip bottom>
          <v-btn
            :id="'btn-remove-' + item.id"
            slot="button"
            icon
            @click="openDeleteDialog(item)"
          >
            <v-icon>mdi-delete</v-icon>
          </v-btn>
          <span slot="text">
            Remover
          </span>
        </tooltip>
      </template>
    </v-data-table>
  </div>
</template>
<script>
import { mapState } from "vuex";
import ConfirmationDialog from '@/components/utils/ConfirmationDialog'
import Tooltip from './utils/Tooltip.vue'
export default {
  name: 'ListTable',
  components: { Tooltip, ConfirmationDialog },
  props: {
    reloadTable: {
      type: Boolean,
      required: true,
      default: false
    }
  },
  data() {
    return {
      confirmationDialog: false,
      dialogFunction: () => {},
      search: '',
      contacts: [],
      headers: [
        {
          text: '',
          value: 'picture',
          sortable: false,
          width: 40
        },
        {
          text: 'Contatos',
          value: 'name'
        },
        {
          text: 'E-mail',
          value: 'email',
          sortable: false
        },
        {
          text: 'Telefone',
          value: 'phone',
          sortable: false,
          width: 350
        },
        {
          text: '',
          value: 'actions',
          align: 'right',
          sortable: false,
          width: 120
        },
      ],
      colors: [
        "#fa8d68",
        "#90d26c",
        "#68a0fa",
        "#fab668",
        "#8368fa",
        "#fa68b5",
        "#5fe2c4",
        "#f55a5a",
      ]
    }
  },
  mounted() {
    this.$nuxt.$on('searching', (term) => {
      console.log(term)
    })
  },
  computed: {
    ...mapState('contacts', ['list', 'searchTerm'])
  },
  watch: {
    list(val) {
      this.contacts = val
    },
    reloadTable(val) {
      if(val) {
        this.contacts = this.list
      }
    },
    searchTerm(val) {
      this.search = val
    }
  },
  created() {
    this.contacts = this.list
  },
  methods: {
    openDeleteDialog(item) {
      this.confirmationDialog = true
      this.dialogFunction = () => {
        const contacts = [...this.list]
        contacts.splice(contacts.map((item) => item.id).indexOf(item.id), 1)
        this.$store.commit('contacts/setList', contacts)
        this.$nuxt.$emit(
          'active-message',
          'Contato removido',
          'warning',
          true
        )
      }
    },
    randomColors(item) {
      return this.colors[(item.id + 1) % this.colors.length]
    },
    edit(item) {
      this.$emit('open-dialog', item)
    },
    remove(item) {
      const contacts = [...this.list]
      contacts.splice(contacts.map((item) => item.id).indexOf(item.id), 1)
      this.$store.commit('contacts/setList', contacts)
    }
  }
}
</script>