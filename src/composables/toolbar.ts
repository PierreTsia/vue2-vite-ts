import { computed, Ref, ref } from '@vue/composition-api'
import { randomQuote, sleep } from './../utils/demo'

const title: Ref<string> = ref(null)

type ToolbarComposition = {
  title: Ref<string>
  setTitle: (_: string) => void
  generateRandomTitle: () => Promise<void>
}

export function useToolbar(): ToolbarComposition {
  const setTitle = (str: string) => (title.value = str)

  const generateRandomTitle = async () => {
    await sleep(500) // simulate http fetch
    setTitle(randomQuote())
  }

  return {
    title: computed(() => title.value), // makes it immutable outside
    setTitle, // mutation
    generateRandomTitle, // action
  }
}
