<template>
  <div>
    <h2>{{ item.label }}</h2>
    <p v-for="(action, i) in item.actions" :key="`item${item.label}-action-${i}`">
      {{ action.name }} <span v-if="action.id">{{ action.id }}</span>
    </p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  props: ['item'],
})
</script>
