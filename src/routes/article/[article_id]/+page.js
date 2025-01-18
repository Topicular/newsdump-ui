/** @type {import('./$types').PageLoad} */
export function load({ params }) {
  return {
    article_id: params.article_id,
  };
}
