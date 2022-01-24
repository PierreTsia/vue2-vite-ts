<template>
  <v-container>
    <TodoItem v-for="(item, i) in list" :key="`item-${i}`" :item="item" />

    <pre>{{ JSON.stringify(list) }}</pre>
  </v-container>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";
import { useTodo } from "../composables/todo";
import TodoItem from "../components/TodoItem.vue";

export default defineComponent({
  components: { TodoItem },

  setup() {
    const { list, addItem, editItemActionName, reset, addActionId } = useTodo();
    reset();
    addItem({ label: "foo", actions: [{ name: "bar" }] });

    setTimeout(() => editItemActionName(0, 0, "foobar !"), 1000);
    setTimeout(
      () => addItem({ label: "bar", actions: [{ name: "foo" }] }),
      1500
    );
    setTimeout(() => addActionId(0, 0, 42), 2000);
    return { list, addItem };
  },
});
</script>
