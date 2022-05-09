<template>
  <div>
    <v-dialog v-model="dialog" width="432" persistent>
      <v-card rounded="lg">
        <v-card-title
          class="d-flex justify-space-between align-center font-weight-medium"
        >
          {{ editedContact.id ? 'Editar contato' : 'Criar novo contato'}}
        </v-card-title>
        <v-divider></v-divider>
        <v-card-text class="mt-3">
          <v-col>
            <v-row class="flex-column">
              <span class="font-weight-bold">Nome</span>
              <v-text-field dense hide-details outlined v-model="editedContact.name"></v-text-field>
            </v-row>
            <v-row class="flex-column mt-6">
              <span class="font-weight-bold">E-mail</span>
              <v-text-field dense hide-details outlined v-model="editedContact.email"></v-text-field>
            </v-row>
            <v-col class="pa-0 ml-n3 mt-6" cols="7">
              <span class="font-weight-bold">Telefone</span>
              <v-text-field
                class="phone-input"
                v-model="editedContact.phone"
                type="tel"
                v-mask="['(##) ####-####', '(##) #####-####']"
                dense
                hide-details
                outlined
              ></v-text-field>
            </v-col>
          </v-col>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions class="d-flex justify-end">
          <v-btn
            id="payment-options-edit-btn-clean"
            rounded
            text
            color="primary"
            @click="closeDialog()"
          >
            Cancelar
          </v-btn>
          <v-btn
            id="payment-options-edit-btn-save"
            class="px-3"
            :disabled="!editedContact.name && !editedContact.email && !editedContact.phone"
            rounded
            color="primary"
            @click="save()"
          >
            Salvar
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
import { mapMutations, mapState } from "vuex"
export default {
  name: 'ContactDialog',
  props: {
    item: {
      type: Object,
      required: true,
      default: () => {}
    },
    dialog: {
      type: Boolean,
      required: true,
      default: false
    }
  },
  data() {
    return {
      contactDialog: false,
      editedContact: {},
    }
  },
  computed: {
    ...mapMutations('contacts', ['addContact', 'setList', 'updateContact']),
    ...mapState('contacts', ['list'])
  },
  watch: {
    dialog(val) {
      this.contactDialog = this.dialog
    },
    contactDialog(val) {
      if (!val) {
        this.closeDialog()
      }
    },
    item() {
      this.editedContact = {
        id: this.item.id,
        name: this.item.name,
        email: this.item.email,
        phone: this.item.phone,
        timestamp: this.item.timestamp
      }
    }
  },
  methods: {
    closeDialog() {
      this.$emit('close-dialog')
    },
    save() {
      if(this.item.id){
        let updateContacts = this.list
        this.list.map((contact, index) => {
          if(contact.id === this.item.id){
            updateContacts[index] = { ...this.editedContact, timestamp: new Date() }          
          }
        })
        
        this.$store.commit('contacts/setList', Object.assign([], updateContacts))
        this.$nuxt.$emit(
          'active-message',
          'Contato editado com sucesso!',
          'info',
          true
        )
      } else {
        const newContact = {
          ...this.editedContact,
          id: this.list.length > 0 ? this.list[this.list.length - 1].id + 1 : 1
        }
        this.$store.commit('contacts/addContact', newContact)
        this.$nuxt.$emit(
          'active-message',
          'Contato salvo com sucesso!',
          'success',
          true
        )
        
      }
      this.$emit('table-loaded', true)
      this.closeDialog()
    }
  }
}
</script>
<style scoped>

</style>