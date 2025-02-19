---
layout: base.njk
title: Projects
---
<section class="section">
    <div class="container">
        <h1>My Projects</h1>
        <div class="projects-grid">
            {%- for project in collections.projects -%}
            <div class="project-card">
                <img src="{{ project.data.image }}" alt="{{ project.data.title }}">
                <div class="project-card-content">
                    <h3>{{ project.data.title }}</h3>
                    <p>{{ project.data.description }}</p>
                    <a href="{{ project.url }}">View Project</a>
                </div>
            </div>
            {%- endfor -%}
        </div>
    </div>
</section>
