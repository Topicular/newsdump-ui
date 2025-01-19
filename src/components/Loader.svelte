<script>
  import { loadingState } from "$lib/stores/loading.store";
  import { slide } from "svelte/transition";
</script>

{#if $loadingState}
  <div
    class="fixed inset-0 flex items-center justify-center flex-col gap-2 backdrop-blur-xl z-50"
    transition:slide={{ duration: 500, axis: "y" }}
  >
    <div class="loading loading-dots loading-lg"></div>
    <div class="text-2xl text-black">NewsDump by Topicular</div>
  </div>
{/if}
