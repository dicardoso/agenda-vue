<template>
  <v-tooltip :left="left" :bottom="bottom" :right="right" :top="top">
    <template #activator="{ on }">
      <div class="d-inline" v-on="on">
        <slot name="button"></slot>
      </div>
    </template>
    <slot name="text"></slot>
  </v-tooltip>
</template>

<script>
export default {
  name: 'Tooltip',
  props: {
    left: {
      type: Boolean,
      default: false
    },
    bottom: {
      type: Boolean,
      default: false
    },
    right: {
      type: Boolean,
      default: false
    },
    top: {
      type: Boolean,
      default: false
    }
  }
}
</script>
