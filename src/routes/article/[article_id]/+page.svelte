<svelte:options runes={true} />

<script lang="ts">
  import moment from "moment";
  import Navbar from "../../../components/Navbar.svelte";
  import type { Article } from "../../../types/article";
  import Goback from "../../../components/buttons/Goback.svelte";

  let { data } = $props();
  console.log(data);

  let responseData: Article = {
    article_id: data.article_id,
    headline: data.headline,
    summary: data.summary,
    date_of_article: data.date_of_article,
    source: data.source,
    article_url: data.article_url,
    author: data.author,
    scraped_at: data.scraped_at,
  };
</script>

<svelte:head>
  <title>NewsDump | Topicular | {responseData.headline}</title>
</svelte:head>
<Navbar />
<div class="mx-auto max-w-3xl h-full min-h-screen p-4">
  <!-- svelte-ignore a11y_consider_explicit_label -->
  <Goback />

  <div class="text-4xl text-center mt-4">{responseData.headline}</div>
  <div class="flex justify-center items-center gap-2">
    <div class="text-sm text-gray-500 text-center mt-2">
      {moment(responseData.date_of_article).format("DD MMM, YYYY")}
    </div>
    <div class="text-purple-800 -mb-1">/</div>
    <div class="text-sm text-gray-500 text-center mt-2">
      {responseData.author}
    </div>
  </div>
  <div class="text-lg mt-8">{responseData.summary}</div>
  <div class="collapse border rounded-none border-gray-400 mt-8">
    <input type="checkbox" />
    <div class="collapse-title font-medium">Website Details</div>
    <div class="collapse-content w-full max-w-full">
      <div class="">
        <table class="table">
          <tbody>
            <tr class="border border-gray-400">
              <th class="text-left text-gray-500 font-medium">Article Link</th>
              <td class="border border-gray-400">
                <a
                  data-sveltekit-preload-data="viewport"
                  class="underline line-clamp-1"
                  href={responseData.article_url}
                >
                  {responseData.article_url}
                </a>
              </td>
            </tr>
            <tr class="border border-gray-400">
              <th class="text-left text-gray-500 font-medium">Source Link</th>
              <td class="border border-gray-400">
                <a
                  data-sveltekit-preload-data="false"
                  class="underline line-clamp-1"
                  href={responseData.source}
                >
                  {responseData.source}
                </a>
              </td>
            </tr>
            <tr class="border border-gray-400">
              <th class="text-left text-gray-500 font-medium">Date Published</th
              >
              <td class="border border-gray-400">
                {moment(responseData.date_of_article).format("DD MMM, YYYY")}
              </td>
            </tr>
            <tr class="border border-gray-400">
              <th class="text-left text-gray-500 font-medium">Date Scraped</th>
              <td class="border border-gray-400">
                {moment(responseData.scraped_at).format("DD MMM, YYYY")}
              </td>
            </tr>
            <tr class="border border-gray-400">
              <th class="text-left text-gray-500 font-medium">Author</th>
              <td class="border border-gray-400">
                {responseData.author}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>
