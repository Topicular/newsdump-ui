<svelte:options runes={true} />

<script>
  import moment from "moment";
  import Navbar from "../../../components/Navbar.svelte";

  let { data } = $props();
  let responseData = {
    article_id: "1",
    headline: "Samsung Harman’s AI Will Make Cars More Empathetic",
    summary:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A impedit fugiat modi voluptatibus ut, rerum, eveniet eos, harum sapiente ullam ex dolorum ducimus. Assumenda ullam hic saepe aspernatur nostrum sed?",
    date_of_article: "2025-01-17",
    scraped_at: "2025-01-17",
    source:
      "https://www.google.comLorem, ipsum dolor sit amet consectetur adipisicing elit. A impedit fugiat modi voluptatibus ut, rerum, eveniet eos",
    article_url: "https://www.google.com",
    author: "John Doe",
  };
</script>

<Navbar />
<div class="mx-auto max-w-3xl h-full min-h-screen">
  <div class="text-4xl mt-16 text-center">{responseData.headline}</div>
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
                <a class="underline line-clamp-1" href={responseData.source}>
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

      <!-- <div class="">
        <span class="opacity-50"> This content was found on </span>
        <a class="underline max-w-24 truncate" href={responseData.source}>
          {responseData.source}
        </a>
        <span class="opacity-50"> on </span>
        {moment(responseData.scraped_at).format("DD MMM, YYYY")}.
        <span class="opacity-50"> The author of this content is </span>
        {responseData.author}.
        <span class="opacity-50"> The link to the actual article is </span>
        <a class="underline max-w-24 truncate" href={responseData.article_url}>
          {responseData.article_url}
        </a>
      </div> -->
    </div>
  </div>
</div>
