---
layout: base.njk
title: About Me
---
<section class="about-header section">
    <div class="container">
        <h1>About Me</h1>
        <p class="lead">{{ metadata.author.tagline }}</p>
    </div>
</section>

<section class="about-content section">
    <div class="container">
        <div class="about-grid">
            <div class="about-text">
                <h2>My Journey</h2>
                <p>I'm a Full Stack Developer with a passion for building innovative web applications. With a strong foundation in both frontend and backend technologies, I create scalable solutions that solve real-world problems.</p>
                
                <p>My approach combines technical expertise with creative problem-solving, ensuring that every project I work on is both functionally robust and user-friendly.</p>

                <div class="about-cta">
                    <a href="{{ metadata.author.linkedin }}" class="social-button linkedin">Connect on LinkedIn</a>
                    <a href="{{ metadata.author.github }}" class="social-button github">Follow on GitHub</a>
                </div>
            </div>
        </div>
    </div>
</section>

<section class="skills-section section">
    <div class="container">
        <h2>Technical Expertise</h2>
        
        <div class="skills-grid">
            <div class="skill-category">
                <h3>Programming Languages</h3>
                <div class="skill-bars">
                    <div class="skill-item">
                        <span class="skill-label">JavaScript</span>
                        <div class="skill-bar" data-level="90">
                            <div class="skill-level"></div>
                        </div>
                    </div>
                    <div class="skill-item">
                        <span class="skill-label">Python</span>
                        <div class="skill-bar" data-level="85">
                            <div class="skill-level"></div>
                        </div>
                    </div>
                    <div class="skill-item">
                        <span class="skill-label">Java</span>
                        <div class="skill-bar" data-level="75">
                            <div class="skill-level"></div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="skill-category">
                <h3>Frontend Development</h3>
                <div class="skill-tags">
                    <span class="skill-tag">React.js</span>
                    <span class="skill-tag">Vue.js</span>
                    <span class="skill-tag">HTML5</span>
                    <span class="skill-tag">CSS3/SASS</span>
                    <span class="skill-tag">JavaScript (ES6+)</span>
                    <span class="skill-tag">TypeScript</span>
                    <span class="skill-tag">Responsive Design</span>
                    <span class="skill-tag">Web Accessibility</span>
                </div>
            </div>

            <div class="skill-category">
                <h3>Backend Development</h3>
                <div class="skill-tags">
                    <span class="skill-tag">Node.js</span>
                    <span class="skill-tag">Express.js</span>
                    <span class="skill-tag">Python/Django</span>
                    <span class="skill-tag">RESTful APIs</span>
                    <span class="skill-tag">GraphQL</span>
                    <span class="skill-tag">MongoDB</span>
                    <span class="skill-tag">PostgreSQL</span>
                </div>
            </div>

            <div class="skill-category">
                <h3>DevOps & Tools</h3>
                <div class="skill-tags">
                    <span class="skill-tag">Git</span>
                    <span class="skill-tag">Docker</span>
                    <span class="skill-tag">AWS</span>
                    <span class="skill-tag">CI/CD</span>
                    <span class="skill-tag">Linux</span>
                    <span class="skill-tag">Webpack</span>
                    <span class="skill-tag">Jest</span>
                </div>
            </div>
        </div>
    </div>
</section>
