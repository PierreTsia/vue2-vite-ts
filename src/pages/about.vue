<template>
  <section>
    <div class="m-10">
      <div>
        <h1>From template : {{ $t('helloWord.message') }}</h1>
        <h1>From script : {{ trad }}</h1>
        <p class="mb-8 leading-relaxed dark:text-gray-300">
          This starter template will help you to easily create a Vue2 application bundled by the lightning fast build
          tool called Vite. Besides Vite this template also provides typescript support, auto-route, auto store, vueuse
          and the vue composition-api for Vue2.
        </p>
        <div class="flex justify-center">
          <a href="https://github.com/byoungd/vite-vue2-typescript" target="_blank">
            <button>GitHub</button>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import { useI18n } from 'vue-i18n-composable'

export default defineComponent({
  name: 'About',
  setup() {
    const { t } = useI18n()

    const trad = t('helloWord.message')
    return { trad }
  },
})
</script>
