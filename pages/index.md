---
layout: base.njk
title: Home
permalink: /
---
<section class="hero">
    <div class="container">
        <h1>Hi, I'm {{ metadata.author.name }}</h1>
        <p>{{ metadata.author.tagline }}</p>
        <div class="hero-cta">
            <a href="/projects" class="cta-button">View My Work</a>
            <a href="/about" class="cta-button secondary">About Me</a>
        </div>
    </div>
</section>

<section class="section featured-projects">
    <div class="container">
        <h2>Featured Projects</h2>
        <div class="projects-grid">
            {%- for project in collections.featuredProjects -%}
            <div class="project-card">
                <img src="{{ project.data.image }}" alt="{{ project.data.title }}">
                <div class="project-card-content">
                    <div class="project-tags">
                        {%- for tech in project.data.technologies -%}
                        <span class="tech-tag">{{ tech }}</span>
                        {%- endfor -%}
                    </div>
                    <h3>{{ project.data.title }}</h3>
                    <p>{{ project.data.description }}</p>
                    <div class="project-links">
                        <a href="{{ project.data.github }}" class="github-link">View Code</a>
                        <a href="{{ project.data.demo }}" class="demo-link">Live Demo</a>
                    </div>
                </div>
            </div>
            {%- endfor -%}
        </div>
    </div>
</section>
