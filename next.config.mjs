import createNextIntlPlugin from 'next-intl/plugin';
 
const withNextIntl = createNextIntlPlugin();
 
/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['hypnotek-admin.hypnotek.com'],
      },
};
 
export default withNextIntl(nextConfig);