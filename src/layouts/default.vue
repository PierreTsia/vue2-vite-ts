<template>
  <v-app>
    <NavBar />
    <router-view />
  </v-app>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import NavBar from "@/components/Navbar.vue";

export default defineComponent({
  components: {
    NavBar,
  },
})
</script>
