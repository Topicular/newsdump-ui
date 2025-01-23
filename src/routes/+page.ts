
import type { Article } from "../types/article";
import { loadingState } from "$lib/stores/loading.store";
import moment from "moment";
import { lastScrapeDate } from "$lib/stores/lastScrape.store";

export async function load({ fetch }) {
  let data: Article[] = [];
  loadingState.set(true);
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
          scraped_at : moment(item.created_at).format("MMMM Do YYYY, h:mm:ss a")
      });
    }
    const today = moment().startOf('day');

    const { todaysNews, previousNews } = data.reduce(
      (acc, item) => {
        const scrapedDate = moment(item.scraped_at, "MMMM Do YYYY, h:mm:ss a");
        const group = scrapedDate.isSame(today, 'day') ? 'todaysNews' : 'previousNews';
        acc[group].push(item);
        return acc;
      },
      { todaysNews: [], previousNews: [] }
    );

    // Sort the groups
    const sortByDate = (a, b) =>
      moment(b.scraped_at, "MMMM Do YYYY, h:mm:ss a").diff(
        moment(a.scraped_at, "MMMM Do YYYY, h:mm:ss a")
      );

    todaysNews.sort(sortByDate);
    previousNews.sort(sortByDate);
    lastScrapeDate.set(todaysNews[0].scraped_at);
    loadingState.set(false);
  return {
    todaysNews,
    previousNews
  };
}
