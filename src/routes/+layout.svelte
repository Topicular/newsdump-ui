<script>
  import "../app.css";
  let { children } = $props();
  import { Toaster } from "svelte-french-toast";
  import Loader from "../components/Loader.svelte";
</script>

<svelte:head>
  <title>NewsDump | Topicular</title>
</svelte:head>
<Loader />
<Toaster />
{@render children()}
