// import { SitemapStream, streamToPromise } from 'sitemap';

// // Function to fetch products from Strapi
// async function getDynamicPagesFromStrapi() {
//     let allProducts = [];
//     let hasMore = true;
//     let start = 0;
  
//     while (hasMore) {
//       const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/products?populate=*&pagination[start]=${start}&pagination[limit]=100`);
//       const data = await response.json();
  
//       allProducts = [...allProducts, ...data.data];
//       start += 100; // Move to the next batch
//       hasMore = data.data.length > 0; // Stop if no more products
//     }
//     console.log("all",allProducts.length)
//     return allProducts.map((product) => ({
//       url: `/products/${product.slug}`,
//       changefreq: 'weekly',
//       priority: 0.9,
//     }));
  
// }

// export async function GET() {
//   try {
//     // Create the sitemap stream
//     const smStream = new SitemapStream({
//       hostname: 'https://hypnotek.com', // Your live domain
//     });

//     // Static pages to be included in the sitemap
//     const staticPages = [
//       { url: '/', changefreq: 'daily', priority: 1 },
//       { url: '/about', changefreq: 'monthly', priority: 0.8 },
//       { url: '/contactUs', changefreq: 'monthly', priority: 0.8 },
//       { url: '/cms/terms-and-conditions', changefreq: 'monthly', priority: 0.8 },
//       { url: '/cms/where-to-buy', changefreq: 'monthly', priority: 0.8 },
//       { url: '/news', changefreq: 'monthly', priority: 0.8 },
//       { url: '/products', changefreq: 'monthly', priority: 0.8 },
//     ];

//     // Write static pages to the sitemap
//     staticPages.forEach((page) => {
//       if (page && page.url) {
//         smStream.write(page);
//       }
//     });

//     // Fetch dynamic pages (products) from Strapi and add them to the sitemap
//     const dynamicPages = await getDynamicPagesFromStrapi();
//     dynamicPages.forEach((page) => {
//       if (page && page.url) {
//         smStream.write(page);
//       }
//     });

//     // End the stream and convert it to an XML sitemap
//     smStream.end();
//     const sitemap = await streamToPromise(smStream);

//     // Return the sitemap as an XML response
//     return new Response(sitemap, {
//       headers: {
//         'Content-Type': 'application/xml',
//       },
//     });
//   } catch (error) {
//     console.error('Error generating sitemap:', error);

//     // Return a 500 status in case of an error
//     return new Response('Error generating sitemap', { status: 500 });
//   }
// }
