import createNextIntlPlugin from 'next-intl/plugin';
 
const withNextIntl = createNextIntlPlugin();
 
/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['uploads.hypnotek.com','hypnotek-admin.hypnotek.com'],
      },
};
 
export default withNextIntl(nextConfig);