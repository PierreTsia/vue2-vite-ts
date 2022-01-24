import { ref, watch } from '@vue/composition-api'

export function useCounter() {
  const count = ref(0)

  const increment = () => (count.value += 1)
  const decrement = () => (count.value -= 1)

  watch(count, (newValue, oldValue) => {
    console.log(`${oldValue} -> ${newValue}`)
  })

  return { count, increment, decrement }
}
