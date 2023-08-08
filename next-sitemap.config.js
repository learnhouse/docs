/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || "https://docs.learnhouse.app",
  generateRobotsTxt: true, // (optional)
  changefreq: "daily",
  priority: 0.7,
  sitemapSize: 5000,
};
