import createNextIntlPlugin from 'next-intl/plugin';
 
const withNextIntl = createNextIntlPlugin();
 
/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['dyq4yrh81omo6.cloudfront.net','hypnotek-admin.hypnotek.com','uploads.hypnotek.com'],
      },
};
 
export default withNextIntl(nextConfig);