<template>
  <v-btn color="info">
    <slot />
  </v-btn>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  name: 'ButtonTwo',
})
</script>
