/** @type {import('next').NextConfig} */
const nextConfig = {};
// next.config.js
const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  assetPrefix: isProd ? '/soltek-site/' : '',
  basePath: isProd ? '/soltek-site' : '',
};


export default nextConfig;
