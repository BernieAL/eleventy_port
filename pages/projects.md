---
layout: base.njk
title: Projects
permalink: /projects/
---
<section class="hero">
    <div class="hero-content">
        <h1>Projects</h1>
        <p>A collection of things I've built</p>
    </div>
</section>

<section class="page-intro">
    <div class="page-intro-content">
        <h2>My Work</h2>
        <p>Here you'll find a selection of my projects, ranging from client work to personal experiments. Each project represents a unique challenge and solution, showcasing different aspects of my technical expertise and problem-solving abilities.</p>
    </div>
</section>

<section class="projects-section">
    <div class="project-filters">
        <button class="filter-button active" data-filter="all">All</button>
        <button class="filter-button" data-filter="client">Client</button>
        <button class="filter-button" data-filter="personal">Personal</button>
    </div>
    <div class="projects-grid">
        {%- for project in collections.projects | reverse -%}
        <article class="project-card" data-type="{% if project.data.tags and 'client' in project.data.tags %}client{% else %}personal{% endif %}">
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

<script>
document.addEventListener('DOMContentLoaded', () => {
    const filterButtons = document.querySelectorAll('.filter-button');
    const projects = document.querySelectorAll('.project-card');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            // Filter projects
            const filter = button.dataset.filter;
            projects.forEach(project => {
                if (filter === 'all' || project.dataset.type === filter) {
                    project.style.display = '';
                } else {
                    project.style.display = 'none';
                }
            });
        });
    });
});
</script>
