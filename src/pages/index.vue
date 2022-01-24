<template>
  <v-container>
    <div class="nav">
      <router-link to="/about">About !</router-link>
      <router-link to="/todo" class="ml-4">Todo list</router-link>
    </div>
    Count: {{ count }}

    <v-btn class="increment" icon small @click="increment"><v-icon small>mdi-plus</v-icon></v-btn>
    <v-btn class="increment" icon small @click="decrement"><v-icon small>mdi-minus</v-icon></v-btn>
  </v-container>
</template>

<script lang="ts">
import { defineComponent, onMounted } from '@vue/composition-api'

import { useToolbar } from '../composables/toolbar'
import { useCounter } from '@//composables/increment'

export default defineComponent({
  components: {},

  setup() {
    const { setTitle } = useToolbar()

    onMounted(() => setTitle('Home page'))
    return useCounter()
  },
})
</script>

<style lang="scss" scoped>
$color: #ffd54f;
$img-width: 200px;

.container {
  margin: 50px;

  img {
    margin-left: calc(50% - #{$img-width} / 2);
  }

  ::v-deep h1 {
    color: $color;
  }
}

.nav {
  width: 100%;
  margin-top: 64px;
  text-align: center;
  font-size: 1.5em;

  a {
    text-decoration: none;
  }
}
</style>
