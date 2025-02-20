---
layout: base.njk
title: About
permalink: /about/
---
<section class="about-header">
    <div class="container">
        <h1>About Me</h1>
    </div>
</section>

<section class="about-content">
    <div class="container">
        <div class="about-text">
            <p>{{ metadata.author.tagline }}</p>
            
            <h2>Skills</h2>
            <div class="skills-list">
                <div class="skill-category">
                    <h3>Frontend</h3>
                    <div class="tech-tags">
                        <span class="tech-tag">React</span>
                        <span class="tech-tag">TypeScript</span>
                        <span class="tech-tag">Next.js</span>
                    </div>
                </div>
                
                <div class="skill-category">
                    <h3>Backend</h3>
                    <div class="tech-tags">
                        <span class="tech-tag">Node.js</span>
                        <span class="tech-tag">Python</span>
                        <span class="tech-tag">PostgreSQL</span>
                    </div>
                </div>
            </div>

            <div class="about-links">
                <a href="{{ metadata.author.github }}" class="about-link">GitHub →</a>
                <a href="{{ metadata.author.linkedin }}" class="about-link">LinkedIn →</a>
            </div>
        </div>
    </div>
</section>
