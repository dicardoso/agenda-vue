export default {
  setList(state, value) {
    state.list = value
  },
  addContact(state, value) {
    state.list.push(value)
  },
  updateContact(state, value) {
    state.list.map((contact, index) => {
      if(contact.id === value.id){
        state.list[index] = value            
      }
    })
  },
  setSearchTerm(state, value) {
    state.searchTerm = value
  }
}