<!-- Please remove this file from your project -->
<template>
  <div class="flex justify-center">
    <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.1.2/dist/tailwind.min.css" rel="stylesheet">
    <div class="mt-8 mx-auto sm:px-6 lg:px-8">
      <div class="d-flex flex-column mt-8 justify-center">
        <img class="mx-0" src="~/assets/ic-book.svg" width="237">
        <h2 class="my-3 subtitle-1">
          Nenhum contato foi criado ainda
        </h2>
        <add-button class="mx-auto" :height="40"/>
      </div>
    </div>
  </div>
</template>

<script>
import AddButton from '../components/utils/AddButton.vue'
export default {
  name: 'EmptyPage',
  components: { AddButton }
}
</script>

