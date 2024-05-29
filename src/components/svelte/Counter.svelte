<script lang="ts">
  import { useCloud } from "freestyle-sh";
  import { TheCounter } from "../../cloudstate/counter";

  export let count: ReturnType<TheCounter["getCount"]> = 0;

  const theCounter = useCloud<typeof TheCounter>("counter");
</script>

<main>
  <div>
    {count}
  </div>
</main>
<br />
<div class="inline-buttons">
  <button
  on:click={() => {
    theCounter.incrCount().then((new_count) => {
        count = new_count;
    });
  }}
  >
  +
  </button>
  &nbsp;
  <button
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
