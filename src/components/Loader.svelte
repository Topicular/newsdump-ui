<script>
  import { loadingState } from "$lib/stores/loading.store";
  import { slide } from "svelte/transition";
  import { onMount } from "svelte";
</script>

{#if $loadingState}
  <div
    class="fixed inset-0 flex items-center justify-center flex-col gap-2 bg-orange-600 z-50"
    transition:slide={{ duration: 500, axis: "y" }}
  >
    <div class="loading loading-dots loading-lg"></div>
    <div class="text-white text-2xl">NewsDump by Topicular</div>
  </div>
{/if}
