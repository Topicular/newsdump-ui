<svelte:options runes={true} />

<script>
  import Goback from "../../components/buttons/Goback.svelte";
  import Navbar from "../../components/Navbar.svelte";
</script>

<Navbar />
<div class="mx-auto max-w-3xl h-full min-h-screen p-4">
  <Goback />
  <div class="text-2xl font-medium mb-5">Hi There!</div>

  <div class="space-y-4">
    <p>
      NewsDump is a preview of the powerful capabilities we're building for our
      main product, <a href="https://topicular.com" class="underline"
        >Topicular</a
      >.
    </p>

    <p>
      As we work towards creating a personalized news aggregation platform that
      simplifies updates and tailors them to your professional needs, NewsDump
      serves as a raw and unfiltered view of the data we collect. On NewsDump,
      you'll find all the scraped and summarized news in its simplest form—no
      personalization, just a straightforward feed of insights and updates from
      various sources.
    </p>

    <p>
      It's a glimpse into the foundational work behind
      <a href="https://topicular.com" class="underline">Topicular</a>,
      showcasing the kind of information that will eventually be curated and
      delivered in a more actionable and personalized format. While NewsDump
      focuses on providing an overview of our data, stay tuned for the launch of
      <a href="https://topicular.com" class="underline">Topicular</a>, where
      your news will be smarter, tailored, and even more impactful.
    </p>
  </div>

  <div class="mt-10">
    <button
      class="bg-black btn w-full font-medium text-white px-4 py-2 rounded-md"
    >
      Join our Topicular waitlist
    </button>
  </div>
</div>
