<script lang="ts">
  import moment from "moment";
  import type { Article } from "../types/article";

  let {
    article_id,
    headline,
    summary,
    date_of_article,
    source,
    author,
    scraped_at,
  } = $props();

  function getWebsiteName(url: string): string {
    const domain = new URL(url).hostname;
    return domain
      .replace("www.", "")
      .replace("https://", "")
      .replace("http://", "");
  }
</script>

<a
  href={`/article/${article_id}`}
  data-sveltekit-preserve-scroll
  data-sveltekit-preload-data="false"
  class="border flex flex-col border-[#d0cdcd] p-4 px-5 pt-7 pb-7 hover:border-black transition-all duration-300"
>
  <div class="tooltip text-left" data-tip={headline}>
    <div class="text-2xl md:line-clamp-2">{headline}</div>
  </div>
  <div class="flex items-center gap-2">
    <p class="text-sm text-gray-500">
      {moment(date_of_article).format("DD MMM, YYYY")}
    </p>
    <div class="text-purple-800 -mt-1">•</div>
    <!-- <p class="text-sm text-gray-500">{topic}</p> -->
  </div>
  <p class="line-clamp-5 my-4 opacity-65">{summary}</p>

  <div class="mt-auto"></div>

  <div class="flex my-4 mb-0 gap-2 justify-between items-center">
    <div>
      <p class="text-sm text-gray-500 font-semibold">
        {author ? author : "Unknown"}
      </p>
      <p class="text-sm text-gray-500">{getWebsiteName(source)}</p>
    </div>
    <div class="text-xs text-right text-gray-500">
      <div class="">Scraped</div>
      <div class="font-semibold">
        {moment(scraped_at, "MMMM Do YYYY, h:mm:ss a").fromNow()}
      </div>
    </div>
  </div>
</a>
