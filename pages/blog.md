---
layout: base.njk
title: Blog
permalink: /blog/
---
<section class="hero">
    <div class="hero-content">
        <h1>Blog</h1>
        <p>Thoughts and tutorials on web development</p>
    </div>
</section>

<section class="blog-section">
    <div class="blog-grid">
        {%- for post in collections.blog | reverse -%}
        <article class="blog-card">
            <img src="{{ post.data.thumbnail }}" alt="{{ post.data.title }}" class="card-image">
            <div class="card-content">
                <div class="post-meta">
                    <time>{{ post.date | dateToFormat("MMMM d, yyyy") }}</time>
                    <div class="post-tags">
                        {%- for tag in post.data.tags -%}
                        <span class="tech-tag">{{ tag }}</span>
                        {%- endfor -%}
                    </div>
                </div>
                <h3><a href="{{ post.url }}">{{ post.data.title }}</a></h3>
                <p>{{ post.data.description }}</p>
                <div class="card-links">
                    <a href="{{ post.url }}" class="card-link">Read Article →</a>
                    {%- if post.data.links.github -%}
                    <a href="{{ post.data.links.github }}" class="card-link">View Code →</a>
                    {%- endif -%}
                </div>
            </div>
        </article>
        {%- endfor -%}
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
