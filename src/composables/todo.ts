import { computed, Ref, ref } from '@vue/composition-api'
import Vue from 'vue'

type TodoAction = {
  name: string
  id?: number
}

export type TodoItem = {
  label: string
  actions: TodoAction[]
}

const list: Ref<TodoItem[]> = ref([])

export function useTodo() {
  const addItem = (item: TodoItem) => list.value.push(item)

  const editItemActionName = (itemIdx: number, actionIdx: number, name: string) =>
    (list.value[itemIdx].actions[actionIdx].name = name)

  const addActionId = (itemIdx: number, actionIdx: number, id: number) =>
    Vue.set(list.value[itemIdx].actions[actionIdx], 'id', id)

  const reset = () => {
    list.value = []
  }

  return {
    list: computed(() => list.value), // makes it immutable outside
    addItem,
    editItemActionName,
    reset,
    addActionId,
  }
}

// [{"label":"foo","actions":[{"name":"foobar !","id":42}]},{"label":"bar","actions":[{"name":"foo"}]}]
