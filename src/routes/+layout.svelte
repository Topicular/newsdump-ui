<script>
  import "../app.css";
  let { children } = $props();
</script>

<svelte:head>
  <title>NewsDump | Topicular</title>
</svelte:head>
{@render children()}
