/*
 * BlogPosting
 * source: https://developers.google.com/search/docs/appearance/structured-data/article
 */
type BlogPosting = {
  type: "blog_posting";
  item: BlogPostingListItem;
};

export type BlogPostingListItem = {
  author: ArticleAuthor;
  headline: string;
  image: string[];
  datePublished: string;
  dateModified: string;
};

export type ArticleAuthor = {
  name: string;
  url: string;
};

type JsonLdBlogPosting = {
  "@context": "https://schema.org";
  "@type": "BlogPosting";
  headline: string;
  image: string[];
  datePublished: string;
  dateModified: string;
  author: {
    "@type": "Person";
    name: string;
    url: string;
  }[];
};

// E.g. FAQ | Website | Company | etc
export type Data = BlogPosting;

// E.g. JsonLdFAQ | JsonLdWebsite | JsonLdCompany | etc
export type StructuredDataJsonLd = JsonLdBlogPosting;
