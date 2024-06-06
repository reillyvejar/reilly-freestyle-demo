<script lang="ts">
  import { useCloud } from "freestyle-sh";
  import { TheTodoList } from "../../cloudstate/todo-list";
  import TodoItem from "./TodoItem.svelte";

  export let items: ReturnType<TheTodoList["getItems"]> = [];

  const todoList = useCloud<typeof TheTodoList>("todo-list");
  let text = "";
</script>

<input type="text" bind:value={text} placeholder="Enter a new todo" class="text-black p-2 text-center rounded-md"/>
<br />
<button class="rounded-md bg-slate-700 p-1.5"
  on:click={() => {
    todoList.addItem(text).then((item) => {
      text = "";
      items = [...items, item];
    });
  }}
>
  Add Todo
</button>
<br />
<div>
  {#each items as item}
    <TodoItem {item} removeTodo={() => {
      items = items.filter((any_item) => any_item.id != item.id);
    }}/>
  {/each}
</div>
