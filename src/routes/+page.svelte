<svelte:options runes={true} />

<script lang="ts">
  import Card from "../components/Card.svelte";
  import Navbar from "../components/Navbar.svelte";
  import type { Article } from "../types/article";
  import toast from "svelte-french-toast";
  let { data }: any = $props();
  let {
    todaysNews,
    previousNews,
  }: { todaysNews: Article[]; previousNews: Article[] } = data;
  if (
    todaysNews &&
    previousNews &&
    todaysNews.length == 0 &&
    previousNews.length == 0
  ) {
    toast.error("No news found");
  }
</script>

<Navbar />

<svelte:head>
  <title>NewsDump | Topicular</title>
</svelte:head>

{#if todaysNews && todaysNews.length > 1}
  <div class="flex items-center">
    <div class="uppercase tracking-widest font-semibold text-sm p-4 opacity-50">
      Today's News
    </div>
    <div class="badge badge-outline">{todaysNews.length} new articles</div>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
    {#each todaysNews as item}
      <Card {...item} />
    {/each}
  </div>
{/if}

<div
  class="uppercase tracking-widest font-semibold text-sm p-4 {todaysNews.length >
  1
    ? 'pt-24'
    : ''} opacity-50"
>
  Previous News
</div>
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
  {#each previousNews as item}
    <Card {...item} />
  {/each}
</div>
