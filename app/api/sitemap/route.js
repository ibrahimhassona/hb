import { SitemapStream, streamToPromise } from 'sitemap';
async function getDynamicPagesFromStrapi() {
    const apiKey = process.env.NEXT_PUBLIC_API_KEY;
    let allProducts = [];
    let hasMore = true;
    let page = 1;

    try {
        while (hasMore) {
            const url = `${process.env.NEXT_PUBLIC_BASE_API_URL}/products?populate=*&locale=ar&pagination[page]=${page}&filters[isVisible]=true`;
            const response = await fetch(url, {
                headers: {
                    Authorization: `Bearer ${apiKey}`,
                },
            });

            if (!response.ok) {
                throw new Error(`Error fetching products: ${response.statusText}`);
            }

            const data = await response.json();
            allProducts = [...allProducts, ...data.data];
            hasMore = page < data.meta.pagination.pageCount;
            page++;
        }

        console.log("Total fetched products: ", allProducts.length);

        //--- Remove Repeated Slugs -----
        const uniqueProducts = allProducts.filter(
            (product, index, self) =>
                index === self.findIndex((p) => p.slug === product.slug)
        );

        console.log("Unique products count: ", uniqueProducts.length);
        // ----- Convert it to Sitemap ------
        return uniqueProducts.map((product) => ({
            url: `/products/${product.slug}`,
            changefreq: 'weekly',
            priority: 0.9,
        }));
    } catch (error) {
        console.error('Error fetching dynamic pages from Strapi:', error);
        return [];
    }
}


export async function GET() {
    try {
        // Create the sitemap stream
        const smStream = new SitemapStream({
            hostname: 'https://hypnotek.com', // Your live domain
        });

        // Static pages to be included in the sitemap
        const staticPages = [
            { url: '/', changefreq: 'daily', priority: 1 },
            { url: '/about', changefreq: 'monthly', priority: 0.8 },
            { url: '/contactUs', changefreq: 'monthly', priority: 0.8 },
            { url: '/cms/terms-and-conditions', changefreq: 'monthly', priority: 0.8 },
            { url: '/cms/where-to-buy', changefreq: 'monthly', priority: 0.8 },
            { url: '/news', changefreq: 'monthly', priority: 0.8 },
            { url: '/products', changefreq: 'monthly', priority: 0.8 },
            { url: '/products/feature', changefreq: 'monthly', priority: 0.8 },
        ];

        // Write static pages to the sitemap
        staticPages.forEach((page) => {
            smStream.write(page);
        });

        // Fetch dynamic pages (products) from Strapi and add them to the sitemap
        const dynamicPages = await getDynamicPagesFromStrapi();
        dynamicPages.forEach((page) => {
            smStream.write(page);
        });

        // End the stream and convert it to an XML sitemap
        smStream.end();
        const sitemap = await streamToPromise(smStream);

        // Return the sitemap as an XML response
        return new Response(sitemap, {
            headers: {
                'Content-Type': 'application/xml',
            },
        });
    } catch (error) {
        console.error('Error generating sitemap:', error);

        // Return a 500 status in case of an error
        return new Response('Error generating sitemap', { status: 500 });
    }
}
