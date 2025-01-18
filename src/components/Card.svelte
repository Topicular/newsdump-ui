<svelte:options runes={true} />

<script>
  import moment from "moment";

  /**
   * @typedef {Object} CardProps
   * @property {string} headline - The main title of the article
   * @property {string} summary - A brief summary of the article content
   * @property {string} date_of_article - The publication date of the article
   * @property {string} scraped_at - The timestamp when the article was scraped
   * @property {string} source - The source/publisher of the article
   * @property {string} article_url - The URL of the article
   * @property {string} author - The author of the article
   * @property {string} topic - The topic of the article
   * @property {string} article_id - The ID of the article
   */

  /** @type {CardProps} */
  let {
    headline,
    summary,
    date_of_article,
    source,
    article_id,
    author,
    topic,
  } = $props();

  /**
   * @param {string} url
   * @returns {string}
   */
  function getWebsiteName(url) {
    const domain = new URL(url).hostname;
    return domain
      .replace("www.", "")
      .replace("https://", "")
      .replace("http://", "");
  }
</script>

<a
  href={`/article/${article_id}`}
  class="border max-h-80 flex flex-col border-[#d0cdcd] p-4 px-5 pt-7 pb-7 hover:border-black transition-all duration-300"
>
  <div class="text-2xl flex-1 line-clamp-2">{headline}</div>
  <div class="flex items-center gap-2">
    <p class="text-sm text-gray-500">
      {moment(date_of_article).format("DD MMM, YYYY")}
    </p>
    <div class="text-purple-800 -mt-1">•</div>
    <p class="text-sm text-gray-500">{topic}</p>
  </div>
  <p class="py-4 flex-1 opacity-65 text-lg line-clamp-3">{summary}</p>
  <div class="mt-auto"></div>

  <div class="flex my-4 mb-0 justify-between items-center">
    <div>
      <p class="text-sm text-gray-500 font-semibold">{author}</p>
      <p class="text-sm text-gray-500">{getWebsiteName(source)}</p>
    </div>
  </div>
</a>
