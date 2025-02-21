---
layout: base.njk
title: Home
permalink: /
---
<section class="hero">
    <div class="hero-content">
        <h1>Hi, I'm {{ metadata.author.name }}</h1>
        <p>Full Stack Developer passionate about creating impactful web applications</p>
        <a href="/projects" class="cta-button">View My Work</a>
    </div>
</section>

<section class="featured-projects">
    <h2 class="section-title">Featured Projects</h2>
    <div class="projects-grid">
        {%- for project in collections.featuredProjects -%}
        <article class="project-card">
            <img src="{{ project.data.image }}" alt="{{ project.data.title }}" class="card-image">
            <div class="card-content">
                <h3>{{ project.data.title }}</h3>
                <p>{{ project.data.description }}</p>
                <div class="tech-stack">
                    {%- for tech in project.data.techStack -%}
                    <span class="tech-tag">{{ tech }}</span>
                    {%- endfor -%}
                </div>
                <div class="card-links">
                    {%- if project.data.links.github -%}
                    <a href="{{ project.data.links.github }}" class="card-link">View Code →</a>
                    {%- endif -%}
                    {%- if project.data.links.demo -%}
                    <a href="{{ project.data.links.demo }}" class="card-link">Live Demo →</a>
                    {%- endif -%}
                </div>
            </div>
        </article>
        {%- endfor -%}
    </div>
</section>
