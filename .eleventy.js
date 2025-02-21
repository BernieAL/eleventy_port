const { DateTime } = require("luxon");
const cheerio = require('cheerio');
const markdownIt = require('markdown-it');
const md = new markdownIt({
    html: true,
    breaks: true,
    linkify: true
});

module.exports = function(eleventyConfig) {
    // 1. Helper Functions
    eleventyConfig.addShortcode("currentYear", () => {
        return new Date().getFullYear();
    });

    // Add date filter
    eleventyConfig.addFilter("dateToFormat", function(date) {
        return DateTime.fromJSDate(date).toFormat("MMMM d, yyyy");
    });

    // Add limit filter for recent posts
    eleventyConfig.addFilter("limit", function (arr, limit) {
        return arr.slice(0, limit);
    });

    // Add filter to extract headings from content
    eleventyConfig.addFilter('getHeadings', function(content) {
        // Convert markdown to HTML if content is a string
        if (typeof content !== 'string') {
            return [];
        }

        const html = md.render(content);
        const $ = cheerio.load(html);
        const headings = [];
        
        // Find all h2 and h3 headings
        $('h2, h3').each((i, elem) => {
            const $elem = $(elem);
            const text = $elem.text().trim();
            const id = text.toLowerCase().replace(/[^\w]+/g, '-');
            
            // Add ID to the heading element
            $elem.attr('id', id);
            
            headings.push({
                id: id,
                text: text,
                level: elem.name.slice(1)
            });
        });
        
        return headings;
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
            .filter(item => item.data.tags.includes("client"));
    });

    eleventyConfig.addCollection("featuredClientProjects", function(collectionApi) {
        return collectionApi.getFilteredByTags("project", "client", "featured")
            .sort((a, b) => b.date - a.date);
    });

    // Get personal projects
    eleventyConfig.addCollection("personalProjects", function(collectionApi) {
        return collectionApi.getFilteredByGlob("projects/*.md")
            .filter(item => item.data.tags.includes("personal"));
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
            input: ".",
            output: "_site",
            includes: "_includes",  // This is where all templates live
            data: "_data"
        },
        // 5. Template Engine Settings
        templateFormats: ["md", "njk", "html"],
        markdownTemplateEngine: "njk",
        htmlTemplateEngine: "njk",
        dataTemplateEngine: "njk"
    };
};
