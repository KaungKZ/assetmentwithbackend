/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa')({
  dest: 'public',
  disable: process.env.NODE_ENV === 'development',
  disableDevLogs: true,
});

module.exports = withPWA({
  reactStrictMode: true,
  swcMinify: true,
  env: {
    GOOGLE_PLACES_API_ENDPOINT:
      'https://maps.googleapis.com/maps/api/place/details/json',
    GOOGLE_BUSINESS_PLACE_ID: 'ChIJPbQaKElpXz4RSDAOO7_VzCU',
    GOOGLE_BUSINESS_API_KEY: 'AIzaSyAWMX-MLGLAw14tH5H42n-mrNzOkrSOi2U',
  },
  images: {
    domains: [
      'bermuda-laravel.test',
      'scubadiving.ae',
      'divetrip.ae',
      'bapi.scubadiving.ae',
      'bapi.divetrip.ae',
      'd14xs7eaxawiao.cloudfront.net',
      'bermuda-laravel.s3.ap-south-1.amazonaws.com',
      'laravel-bermuda-staging.s3.ap-south-1.amazonaws.com',
      'webarcode.com',
      'google.com',
      'lh3.googleusercontent.com',
    ],
  },
});
