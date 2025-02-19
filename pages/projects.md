---
layout: base.njk
title: Projects
permalink: /projects/
---
<section class="projects-header section">
    <div class="container">
        <h1>My Projects</h1>
        <p class="lead">A collection of my work and side projects</p>
    </div>
</section>

<!-- Debug information -->
<div style="background: #f0f0f0; padding: 20px; margin: 20px;">
    <h3>Debug Info:</h3>
    <p>Number of projects: {{ collections.projects.length }}</p>
    {% if collections.projects.length > 0 %}
        <p>Projects found:</p>
        <ul>
        {% for project in collections.projects %}
            <li>
                Title: {{ project.data.title }}<br>
                Client: {{ project.data.client }}<br>
                Description: {{ project.data.description }}<br>
                Image: {{ project.data.image }}
            </li>
        {% endfor %}
        </ul>
    {% else %}
        <p>No projects found in collection</p>
    {% endif %}
</div>

<section class="projects-grid-section section">
    <div class="container">
        <div class="projects-filter">
            <button class="filter-btn active" data-filter="all">All</button>
            <button class="filter-btn" data-filter="client">Client Work</button>
            <button class="filter-btn" data-filter="self">Personal Projects</button>
        </div>

        <div class="projects-grid">
            <!-- Show all featured client projects -->
            {% for project in collections.featuredClientProjects %}
                <div class="project-card" data-type="{{ project.data.client }}">
                    <div class="project-card-header">
                        <img src="{{ project.data.image }}" alt="{{ project.data.title }}">
                        <div class="project-type-badge">{{ project.data.client }}</div>
                    </div>
                    
                    <div class="project-card-content">
                        <h2>{{ project.data.title }}</h2>
                        
                        <div class="tech-stack">
                            {%- for tech in project.data.techStack -%}
                            <span class="tech-badge">{{ tech }}</span>
                            {%- endfor -%}
                        </div>
                        
                        <p class="project-description">{{ project.data.description }}</p>
                        
                        <div class="project-links">
                            {% if project.data.links.github %}
                            <a href="{{ project.data.links.github }}" class="project-link github" target="_blank">
                                View Code
                            </a>
                            {% endif %}
                            
                            {% if project.data.links.demo %}
                            <a href="{{ project.data.links.demo }}" class="project-link demo" target="_blank">
                                Live Demo
                            </a>
                            {% endif %}
                            
                            {% if project.data.links.case-study %}
                            <a href="{{ project.data.links.case-study }}" class="project-link case-study">
                                Read Case Study
                            </a>
                            {% endif %}
                        </div>
                    </div>
                </div>
            {% endfor %}

            <!-- Show all client projects -->
            {% for project in collections.clientProjects %}
                <div class="project-card" data-type="{{ project.data.client }}">
                    <div class="project-card-header">
                        <img src="{{ project.data.image }}" alt="{{ project.data.title }}">
                        <div class="project-type-badge">{{ project.data.client }}</div>
                    </div>
                    
                    <div class="project-card-content">
                        <h2>{{ project.data.title }}</h2>
                        
                        <div class="tech-stack">
                            {%- for tech in project.data.techStack -%}
                            <span class="tech-badge">{{ tech }}</span>
                            {%- endfor -%}
                        </div>
                        
                        <p class="project-description">{{ project.data.description }}</p>
                        
                        <div class="project-links">
                            {% if project.data.links.github %}
                            <a href="{{ project.data.links.github }}" class="project-link github" target="_blank">
                                View Code
                            </a>
                            {% endif %}
                            
                            {% if project.data.links.demo %}
                            <a href="{{ project.data.links.demo }}" class="project-link demo" target="_blank">
                                Live Demo
                            </a>
                            {% endif %}
                            
                            {% if project.data.links.case-study %}
                            <a href="{{ project.data.links.case-study }}" class="project-link case-study">
                                Read Case Study
                            </a>
                            {% endif %}
                        </div>
                    </div>
                </div>
            {% endfor %}
        </div>
    </div>
</section>
