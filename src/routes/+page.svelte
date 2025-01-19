<svelte:options runes={true} />

<script lang="ts">
  import Card from "../components/Card.svelte";
  import Loader from "../components/Loader.svelte";
  import Navbar from "../components/Navbar.svelte";
  import type { Article } from "../types/article";
  import toast from "svelte-french-toast";
  import { loadingState } from "$lib/stores/loading.store";

  let { data }: { data: { data: Article[] } } = $props();
  if (data.data.length === 0) {
    toast.error("No news found");
  }
</script>

<Navbar />
{#if $loadingState}
  <Loader />
{:else}
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
    {#each data.data as item}
      <Card {...item} />
    {/each}
  </div>
{/if}
