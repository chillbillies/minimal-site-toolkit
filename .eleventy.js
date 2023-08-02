const siteSettings = require('./config/siteSettings');

module.exports = function(eleventyConfig) {
  eleventyConfig.addGlobalData("config", siteSettings);

  return {
      dir: {
          input: 'src',
          layouts: 'views/layout',
          includes: 'views/partials',
          output: 'build',
      }
  }
};
