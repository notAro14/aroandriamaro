import rss from "@astrojs/rss";
import { getCollection } from "astro:content";

export async function GET(context) {
  const posts = await getCollection("posts");
  return rss({
    stylesheet: "/styles/rss.xsl",
    xmlns: { atom: "http://www.w3.org/2005/Atom" },
    title: "Aro Andriamaro | Blog",
    description: "Blog sur le développement web et d'autres trucs.",
    site: context.site,
    items: posts
      .sort((a, b) => b.data.pubDate.getTime() - a.data.pubDate.getTime())
      .map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      link: `/posts/${post.id}/`,
    })),
    customData: `<atom:link href="${new URL("rss.xml", context.site)}" rel="self" type="application/rss+xml"/><language>fr</language>`,
  });
}
