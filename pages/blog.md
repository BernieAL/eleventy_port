---
layout: base.njk
title: Blog
permalink: /blog/
---
<section class="blog-header section">
    <div class="container">
        <h1>Blog</h1>
        <p class="lead">Thoughts and tutorials on web development</p>
    </div>
</section>

<!-- Debug information -->
<div style="background: #f0f0f0; padding: 20px; margin: 20px;">
    <h3>Debug Info:</h3>
    <p>Number of posts: {{ collections.blog.length }}</p>
    {% if collections.blog.length > 0 %}
        <p>Posts found:</p>
        <ul>
        {% for post in collections.blog %}
            <li>
                Title: {{ post.data.title }}<br>
                Date: {{ post.date | dateToFormat("yyyy-MM-dd") }}<br>
                Description: {{ post.data.description }}<br>
                Thumbnail: {{ post.data.thumbnail }}
            </li>
        {% endfor %}
        </ul>
    {% else %}
        <p>No blog posts found</p>
    {% endif %}
</div>

<section class="blog-grid-section">
    <div class="blog-grid">
        {% for post in collections.blog | reverse %}
        <article class="blog-card">
            <div class="post-meta">
                <time>{{ post.date | dateToFormat("MMMM d, yyyy") }}</time>
                <div class="post-tags">
                    {% for tag in post.data.tags %}
                    <span class="tag-badge">{{ tag }}</span>
                    {% endfor %}
                </div>
            </div>
            
            <h2>
                <a href="{{ post.url }}">{{ post.data.title }}</a>
            </h2>
            
            <p class="post-description">{{ post.data.description }}</p>
            
            <div class="post-links">
                <a href="{{ post.url }}" class="read-more">
                    Read Article →
                </a>
                {% if post.data.links.github %}
                <a href="{{ post.data.links.github }}" class="post-link github" target="_blank">
                    View Code
                </a>
                {% endif %}
            </div>
        </article>
        {% endfor %}
    </div>
</section>
