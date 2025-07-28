const bconfig = {
  urls: {
    origin: process.env.NEXT_PUBLIC_SELF_URL,
  },
  integrations: {
    google: {
      business: {
        placeId: process.env.GOOGLE_BUSINESS_PLACE_ID,
        apiKey: process.env.GOOGLE_BUSINESS_API_KEY,
      },
      places: {
        endpoint: process.env.GOOGLE_PLACES_API_ENDPOINT,
      },
    },
  },
  env: {
    isProduction: process.env.NODE_ENV === 'production',
    isStaging: process.env.NODE_ENV === 'test',
    isDevelopment: process.env.NODE_ENV === 'development',
  },
};

export default bconfig;
