import { loadingState } from '$lib/stores/loading.store';
import type { Article } from '../../../types/article';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params }) => {
  loadingState.set(true);
  const response = await fetch("https://apidump.topicular.com/dumpnews/" + params.article_id);
  var item = await response.json();
  if (item) {
    item = item.news;
    console.log(item);
    let data : Article = {
      article_id: item._id,
      headline: item.title,
      summary: item.summary,
      date_of_article: item.formatted_date,
      source: item.source,
      article_url: item.link,
      author: item.author,
      scraped_at: item.scraped_at,
    }
    loadingState.set(false);
    return data;
  }else{
    loadingState.set(false);
    return {
      data: null,
    }
  }

}; 