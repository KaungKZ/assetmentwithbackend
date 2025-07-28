/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_SELF_URL || "https://scubadiving.ae",
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
      },
      {
        userAgent: "*",
        disallow: [
          "/profile",
          "/booking/registration",
          "/payment",
          "/password",
          "/member",
          "/booking",
          "/congratulations",
          "/enrol",
          "/lp",
        ],
      },
    ],
  },
  exclude: [
    "/profile",
    "/booking/registration",
    "/payment",
    "/password",
    "/member",
    "/booking",
    "/congratulations",
    "/enrol",
    "/lp",
  ],
};
