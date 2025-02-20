const { DateTime } = require("luxon");

module.exports = function(eleventyConfig) {
    // 1. Helper Functions
    eleventyConfig.addShortcode("currentYear", () => {
        return new Date().getFullYear();
    });

    // Add date filter
    eleventyConfig.addFilter("dateToFormat", function(date, format) {
        return DateTime.fromJSDate(date).toFormat(format);
    });

    // Add limit filter for recent posts
    eleventyConfig.addFilter("limit", function (arr, limit) {
        return arr.slice(0, limit);
    });

    // 2. Collections
    // Get all projects from projects directory
    eleventyConfig.addCollection("projects", function(collectionApi) {
        return collectionApi.getFilteredByGlob("projects/*.md");
    });

    // Get featured projects
    eleventyConfig.addCollection("featuredProjects", function(collectionApi) {
        return collectionApi.getFilteredByGlob("projects/*.md")
            .filter(item => item.data.featured)
            .sort((a, b) => b.date - a.date);
    });

    // Get client projects
    eleventyConfig.addCollection("clientProjects", function(collectionApi) {
        return collectionApi.getFilteredByGlob("projects/*.md")
            .filter(item => item.data.client === "client");
    });

    eleventyConfig.addCollection("featuredClientProjects", function(collectionApi) {
        return collectionApi.getFilteredByTags("project", "client", "featured")
            .sort((a, b) => b.date - a.date);
    });

    // Blog collections
    eleventyConfig.addCollection("blog", function(collectionApi) {
        return collectionApi.getFilteredByGlob("blog/**/*.md")
            .sort((a, b) => b.date - a.date); // Sort by date, newest first
    });

    // Get unique blog tags for filter buttons
    eleventyConfig.addCollection("blogTags", function(collectionApi) {
        const posts = collectionApi.getFilteredByGlob("blog/**/*.md");
        const tags = new Set();
        posts.forEach(post => {
            if (post.data.tags) {
                post.data.tags.forEach(tag => tags.add(tag));
            }
        });
        return Array.from(tags).sort();
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
