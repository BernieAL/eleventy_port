module.exports = function(eleventyConfig) {
    // Add configurations here if needed

    eleventyConfig.addPassthroughCopy("css");
    return {
        dir: {
            input: "pages",      // Source files
            includes: "../_includes", // Directory for layouts
            output: "_site"  // Output files
        },
        markdownTemplateEngine: "njk",
        htmlTemplateEngine: "njk",
        dataTemplateEngine: "njk"
    };
};
