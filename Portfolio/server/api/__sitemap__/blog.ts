export default defineSitemapEventHandler(async (event) => {
  const posts = await queryCollection(event, "blog")
    .select("path", "publishedAt")
    .order("publishedAt", "DESC")
    .all();

  return posts.map((post) => ({
    loc: post.path,
    lastmod: post.publishedAt ?? undefined,
  }));
});
