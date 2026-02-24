require('dotenv').config({ path: '.env.local' });
fetch(process.env.SHOPIFY_STORE_DOMAIN + '/api/2024-01/graphql.json', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'X-Shopify-Storefront-Access-Token': process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN
  },
  body: JSON.stringify({
    query: `
      query getMenu($handle: String!) {
        menu(handle: $handle) {
          items {
            title
            url
          }
        }
      }
    `,
    variables: { handle: "next-js-frontend-header-menu" }
  })
}).then(r => r.json()).then(console.log).catch(console.error);
