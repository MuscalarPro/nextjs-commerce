import imageFragment from "../fragments/image";
import seoFragment from "../fragments/seo";

const articleFragment = `
  fragment article on Article {
    id
    handle
    title
    content
    contentHtml
    excerpt
    excerptHtml
    publishedAt
    authorV2 {
      name
    }
    blog {
      title
      handle
    }
    image {
      ...image
    }
    seo {
      ...seo
    }
  }
  ${imageFragment}
  ${seoFragment}
`;

export const getArticlesQuery = `
  query getArticles($first: Int, $query: String, $reverse: Boolean, $sortKey: ArticleSortKeys) {
    articles(first: $first, query: $query, reverse: $reverse, sortKey: $sortKey) {
      edges {
        node {
          ...article
        }
      }
    }
  }
  ${articleFragment}
`;

export const getBlogArticlesQuery = `
  query getBlogArticles($handle: String!, $first: Int, $reverse: Boolean, $sortKey: ArticleSortKeys) {
    blog(handle: $handle) {
      articles(first: $first, reverse: $reverse, sortKey: $sortKey) {
        edges {
          node {
            ...article
          }
        }
      }
    }
  }
  ${articleFragment}
`;
