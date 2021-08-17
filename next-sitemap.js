// DOCS: https://github.com/iamvishnusankar/next-sitemap
const siteUrl = 'https://www.vincentarlou.com';
// TODO: change the default change frequency
module.exports = {
  siteUrl,
  generateRobotsTxt: true,
  additionalPaths: async (config) => [
    await config.transform(config, '/projects'),
    await config.transform(config, '/blog'),
    await config.transform(config, '/newsletter'),
    await config.transform(config, '/snippets'),
    await config.transform(config, '/uses'),
    await config.transform(config, '/about')
    // TODO: add the pages which are not committed
  ],
  robotsTxtOptions: {
    policies: [
      // { userAgent: '*', disallow: "/secret" },
      { userAgent: '*', allow: '/' }
    ],
    additionalSitemaps: [`${siteUrl}/server-sitemap.xml`]
  }
  // exclude: ["/secret"]
};
