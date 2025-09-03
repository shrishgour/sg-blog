import client from "./contentful";

export function mapPost(entry) {
  return {
    id: entry.sys.id,
    title: entry.fields.title,
    slug: entry.fields.slug,
    excerpt: entry.fields.excerpt,
    content: entry.fields.content,
    author: entry.fields.author,
    publishedDate: entry.fields.publishedDate,
    featuredImage: entry.fields.featuredImage,
    category: entry.fields.category?.fields.category,
  };
}

export function mapPostPreview(entry) {
  return {
    id: entry.sys.id,
    title: entry.fields.title,
    slug: entry.fields.slug,
    excerpt: entry.fields.excerpt,
    publishedDate: entry.fields.publishedDate,
    category: entry.fields.category?.fields.category,
  };
}

// export async function getPosts() {
//   const res = await client.getEntries({ content_type: "blogPost" });
//   return res.items.map(mapPost);
// }
export async function getPosts() {
  const res = await client.getEntries({
    content_type: "blogPost",
    select:
      "fields.title,fields.slug,fields.excerpt,fields.publishedDate,fields.category",
    order: "-fields.publishedDate", // newest first
  });

  return res.items.map(mapPostPreview);
}

export async function getPostBySlug(slug) {
  const res = await client.getEntries({
    content_type: "blogPost",
    "fields.slug": slug,
    include: 2, // pulls linked entries like category
    limit: 1,
  });

  return mapPost(res.items[0]);
}

export async function getPostsByCategory(categoryName) {
  const posts = await getPosts();
  if (!categoryName || categoryName === "All") return posts;

  return posts.filter((post) => post.category === categoryName);
}
