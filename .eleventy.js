module.exports = function(eleventyConfig) {
    // 1. Helper Functions
    eleventyConfig.addShortcode("currentYear", () => {
        return new Date().getFullYear();
    });

    // 2. Collections
    eleventyConfig.addCollection("projects", function(collectionApi) {
        return collectionApi.getFilteredByGlob("projects/*.md");
    });

    eleventyConfig.addCollection("featuredProjects", function(collectionApi) {
        return collectionApi.getFilteredByTag("project")
            .filter(item => item.data.featured)
            .sort((a, b) => b.date - a.date);
    });

    eleventyConfig.addCollection("clientProjects", function(collectionApi) {
        return collectionApi.getFilteredByTag("project")
            .filter(item => item.data.client === "client");
    });

    eleventyConfig.addCollection("featuredClientProjects", function(collectionApi) {
        return collectionApi.getFilteredByTags("project", "client", "featured")
            .sort((a, b) => b.date - a.date);
    });

    // 3. Asset Handling
    eleventyConfig.addPassthroughCopy("css");
    eleventyConfig.addPassthroughCopy("images");
    eleventyConfig.addPassthroughCopy("js");

    // 4. Directory Configuration
    return {
        dir: {
            input: ".",              // Root directory for source files
            includes: "_includes",    // Where layouts/partials live
            output: "_site",         // Where the built site goes
            data: "_data"            // Global data files
        },
        // 5. Template Engine Settings
        templateFormats: ["md", "njk", "html"],
        markdownTemplateEngine: "njk",
        htmlTemplateEngine: "njk",
        dataTemplateEngine: "njk"
    };
};
