<template>
  <div>
    <v-dialog :value="dialog" persistent max-width="27rem">
      <v-card rounded="lg">
        <v-card-title>
          <v-row class="flex-nowrap d-flex justify-space-between">
            <span class="asus-popup-title body-1 my-3">
              {{ dialogText }}
            </span>
          </v-row>
        </v-card-title>
        <v-divider />
        <v-card-text>
          <p class="body-1 mt-4">Deseja realmente excluir o contato?</p>
        </v-card-text>
        <v-divider />
        <v-card-actions class="d-flex justify-space-around">
          <v-spacer></v-spacer>
          <v-btn
            id="dialog-decline-btn"
            text
            width="auto"
            @click="$emit('close-dialog')"
          >
            Cancelar
          </v-btn>
          <v-btn
            id="dialog-accept-btn"
            color="primary"
            :disabled="loading"
            width="'auto"
            @click="handleAccept()"
          >
            Excluir
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>

export default {
  name: 'ConfirmationDialog',
  props: {
    dialog: {
      type: Boolean,
      default: false
    },
    dialogText: {
      type: String,
      default: 'Excluir contato'
    },
    dialogFunction: {
      type: Function,
      default: () => {}
    },
    dialogAcceptColor: {
      type: String,
      default: ''
    },
    dialogAcceptText: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      dialogShow: false,
      loading: false,
      buttonAcceptText: ''
    }
  },
  watch: {
    dialog(val) {
      if (val) {
        this.setDialogAcceptText()
      }
    }
  },
  methods: {
    setDialogAcceptText() {
      this.buttonAcceptText =
        this.dialogAcceptText ||
        'Sim'
    },
    async handleAccept() {
      this.loading = true
      await this.dialogFunction()
      this.loading = false
      this.$emit('close-dialog')
      this.$emit('reload-table')
    }
  }
}
</script>
