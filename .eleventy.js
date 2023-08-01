module.exports = function(eleventyConfig) {
  return {
      dir: {
          input: 'src',
          includes: 'views/partials',
          output: 'build',
      }
  }
};
