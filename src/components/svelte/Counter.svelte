<script lang="ts">
  import { useCloud } from "freestyle-sh";
  import { TheCounter } from "../../cloudstate/counter";

  export let count: ReturnType<TheCounter["getCount"]> = 0;

  const theCounter = useCloud<typeof TheCounter>("counter");
</script>

<main>
  <div class="rounded-md bg-slate-700 p-4 text-4xl">
    {count}
  </div>
</main>
<br />
<div class="inline-buttons">
  <button class="rounded-md bg-slate-700 p-4 text-2xl"
  on:click={() => {
    theCounter.incrCount().then((new_count) => {
        count = new_count;
    });
  }}
  >
  +
  </button>
  &nbsp; &nbsp; &nbsp;
  <button class="rounded-md bg-slate-700 p-4 text-2xl"
  on:click={() => {
      theCounter.decrCount().then((new_count) => {
        count = new_count;
    });
  }}
  >
  -
  </button>
</div>

<style>
  .inline-buttons button {
    display: inline-block;
  }
</style>
