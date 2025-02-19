---
layout: base.njk
title: Home
---
<section class="hero">
    <div class="container">
        <h1>Welcome to My Portfolio</h1>
        <p>I'm a passionate developer creating meaningful digital experiences</p>
    </div>
</section>

<section class="section">
    <div class="container">
        <h2>Featured Projects</h2>
        <div class="projects-grid">
            {%- for project in collections.featuredProjects -%}
            <div class="project-card">
                <img src="{{ project.data.image }}" alt="{{ project.data.title }}">
                <div class="project-card-content">
                    <h3>{{ project.data.title }}</h3>
                    <p>{{ project.data.description }}</p>
                    <a href="{{ project.url }}">Learn More</a>
                </div>
            </div>
            {%- endfor -%}
        </div>
    </div>
</section>
