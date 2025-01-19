
import type { Article } from "../types/article";
import { loadingState } from "$lib/stores/loading.store";

export async function load({ fetch }) {
  let data: Article[] = [];
  await loadingState.set(true);
  const response = await fetch("https://apidump.topicular.com/all_news");
  var response_data: any = await response.json();
  if (
      response_data &&
      response_data.news &&
      response_data.news.length === 0
    ) {
      loadingState.set(false);
      return;
    }
    
    for (const item of response_data.news) {
      data.push({
          article_id: item._id,
          headline: item.title,
          summary: item.summary,
          date_of_article: item.formatted_date,
          source: item.source,
          article_url: item.link,
          author: item.author,
      });
    }
  loadingState.set(false);
  return {
    data,
  };
}
