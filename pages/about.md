---
layout: base.njk
title: About
permalink: /about/
---
<section class="hero">
    <div class="hero-content">
        <h1>About Me</h1>
        <p>Full Stack Developer with a passion for building modern web applications</p>
    </div>
</section>

<section class="page-intro">
    <div class="page-intro-content">
        <h2>Who I Am</h2>
        <p>I'm a software developer focused on creating efficient, user-friendly web applications. With experience across the full stack, I enjoy tackling complex problems and turning ideas into reality through clean, maintainable code.</p>
    </div>
</section>

<section class="about-section">
    <div class="about-container">
        <div class="about-content">
            <h2>Background</h2>
            <p>I'm a software developer specializing in full-stack web development. With experience in both frontend and backend technologies, I focus on creating efficient, scalable, and user-friendly applications.</p>
            
            <h2>Skills</h2>
            <div class="skills-grid">
                <div class="skill-category">
                    <h3>Frontend</h3>
                    <ul>
                        <li>React.js</li>
                        <li>TypeScript</li>
                        <li>Next.js</li>
                        <li>CSS/SASS</li>
                    </ul>
                </div>
                
                <div class="skill-category">
                    <h3>Backend</h3>
                    <ul>
                        <li>Node.js</li>
                        <li>Python</li>
                        <li>PostgreSQL</li>
                        <li>MongoDB</li>
                    </ul>
                </div>
                
                <div class="skill-category">
                    <h3>Tools & Others</h3>
                    <ul>
                        <li>Git</li>
                        <li>Docker</li>
                        <li>AWS</li>
                        <li>CI/CD</li>
                    </ul>
                </div>
            </div>

            <h2>Get in Touch</h2>
            <div class="contact-links">
                <a href="{{ metadata.author.github }}" class="contact-link">GitHub</a>
                <a href="{{ metadata.author.linkedin }}" class="contact-link">LinkedIn</a>
                <a href="mailto:{{ metadata.author.email }}" class="contact-link">Email</a>
            </div>
        </div>
    </div>
</section>
