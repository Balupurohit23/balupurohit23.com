const config = {
  siteTitle: "BaluPurohit23", // Site title.
  siteTitleShort: "balupurohit23", // Short site title for homescreen (PWA). Preferably should be under 12 characters to prevent truncation.
  siteTitleAlt: "Balu Purohit Personal Blog", // Alternative site title for SEO.
  siteLogo: "/icons/favicon.ico", // Logo used for SEO and manifest.
  siteUrl: "https://www.balupurohit23.com", // Domain of your website without pathPrefix.
  pathPrefix: "/", // Prefixes all links. For cases when deployed to example.github.io/gatsby-advanced-starter/.
  siteDescription: "The personal blog of Balu Purohit.", // Website description used for RSS feeds/meta description tag.
  siteRss: "/rss.xml", // Path to the RSS file.
  // siteFBAppID: "1825356251115265", // FB Application ID for using app insights
  googleAnalyticsID: "UA-148025931-1", // GA tracking ID.
  disqusShortname: "balupurohit23", // Disqus shortname.
  postDefaultCategoryID: "Tech", // Default category for posts.
  dateFromFormat: "YYYY-MM-DD", // Date format used in the frontmatter.
  dateFormat: "DD/MM/YYYY", // Date format for display.
  userName: "Balu Purohit", // Username to display in the author segment.
  userEmail: "balupurohit23@gmail.com", // Email used for RSS feed's author segment
  userTwitter: "https://twitter.com/balupurohit23", // Optionally renders "Follow Me" in the UserInfo segment.
  userLocation: "India", // User location to display in the author segment.
  userAvatar: "/icons/avatar.png", // User avatar to display in the author segment.
  userDescription:
    "I like photography, animals, travelling, AI and bunch of other stuffs too.", // User description to display in the author segment.
  // Links to social profiles/projects you want to display in the author segment/navigation bar.
  userLinks: [
    {
      label: "GitHub",
      url: "https://github.com/balupurohit23",
      iconClassName: "fa fa-github"
    },
    {
      label: "Twitter",
      url: "https://twitter.com/balupurohit23",
      iconClassName: "fa fa-twitter"
    },
    {
      label: "Email",
      url: "mailto:balupurohit23@gmail.com",
      iconClassName: "fa fa-envelope"
    }
  ],
  copyright: "Copyright © 2019. Balu Purohit", // Copyright string for the footer of the website and RSS feed.
  themeColor: "#c62828", // Used for setting manifest and progress theme colors.
  backgroundColor: "#e0e0e0" // Used for setting manifest background color.
};

// Validate

// Make sure pathPrefix is empty if not needed
if (config.pathPrefix === "/") {
  config.pathPrefix = "";
} else {
  // Make sure pathPrefix only contains the first forward slash
  config.pathPrefix = `/${config.pathPrefix.replace(/^\/|\/$/g, "")}`;
}

// Make sure siteUrl doesn't have an ending forward slash
if (config.siteUrl.substr(-1) === "/")
  config.siteUrl = config.siteUrl.slice(0, -1);

// Make sure siteRss has a starting forward slash
if (config.siteRss && config.siteRss[0] !== "/")
  config.siteRss = `/${config.siteRss}`;

module.exports = config;
