// Animated Portfolio - JavaScript

document.addEventListener('DOMContentLoaded', () => {
    initParticles();
    initNavbar();
    initScrollAnimations();
    initSmoothScroll();
    initActiveNavLink(); // Active nav link highlighting
    initMobileMenu();
    initLastUpdated();
    initFormHandler();
    initFooterGlow(); // Footer glow effect
    initFloatingButtons(); // Floating action buttons
});

// ============================================
// GLOBAL PARTICLE NETWORK SYSTEM
// ============================================

function initParticles() {
    const canvas = document.getElementById('particle-network');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let particles = [];
    let animationId;

    const config = {
        particleCount: window.innerWidth <= 768 ? 40 : 80,
        connectionDistance: 150,
        mouseRadius: 200,
        particleSize: { min: 1, max: 3 },
        speed: { min: 0.2, max: 0.8 },
        colors: [
            'rgba(0, 217, 255, ',
            'rgba(0, 255, 136, ',
            'rgba(138, 43, 226, ',
            'rgba(255, 255, 255, '
        ]
    };

    let mouse = { x: null, y: null };

    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    resizeCanvas();
    window.addEventListener('resize', () => {
        resizeCanvas();
        initParticleArray();
    });

    document.addEventListener('mousemove', (e) => {
        mouse.x = e.clientX;
        mouse.y = e.clientY;
    });

    document.addEventListener('mouseleave', () => {
        mouse.x = null;
        mouse.y = null;
    });

    class Particle {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.vx = (Math.random() - 0.5) * config.speed.max;
            this.vy = (Math.random() - 0.5) * config.speed.max;
            this.size = Math.random() * (config.particleSize.max - config.particleSize.min) + config.particleSize.min;
            this.baseColor = config.colors[Math.floor(Math.random() * config.colors.length)];
            this.alpha = Math.random() * 0.5 + 0.3;
            this.pulseSpeed = Math.random() * 0.02 + 0.01;
            this.pulseAngle = Math.random() * Math.PI * 2;
        }

        update() {
            this.x += this.vx;
            this.y += this.vy;

            if (this.x < 0 || this.x > canvas.width) {
                this.vx *= -1;
                this.x = Math.max(0, Math.min(canvas.width, this.x));
            }
            if (this.y < 0 || this.y > canvas.height) {
                this.vy *= -1;
                this.y = Math.max(0, Math.min(canvas.height, this.y));
            }

            this.pulseAngle += this.pulseSpeed;
            this.currentAlpha = this.alpha + Math.sin(this.pulseAngle) * 0.2;

            if (mouse.x != null) {
                const dx = mouse.x - this.x;
                const dy = mouse.y - this.y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < config.mouseRadius) {
                    const force = (config.mouseRadius - distance) / config.mouseRadius;
                    this.vx += (dx / distance) * force * 0.05;
                    this.vy += (dy / distance) * force * 0.05;
                }
            }

            const speed = Math.sqrt(this.vx * this.vx + this.vy * this.vy);
            if (speed > config.speed.max) {
                this.vx = (this.vx / speed) * config.speed.max;
                this.vy = (this.vy / speed) * config.speed.max;
            }
        }

        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fillStyle = this.baseColor + this.currentAlpha + ')';
            ctx.fill();

            ctx.shadowBlur = 10;
            ctx.shadowColor = this.baseColor + '0.5)';
        }
    }

    function initParticleArray() {
        particles = [];
        for (let i = 0; i < config.particleCount; i++) {
            particles.push(new Particle());
        }
    }

    function drawConnections() {
        for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
                const dx = particles[j].x - particles[i].x;
                const dy = particles[j].y - particles[i].y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < config.connectionDistance) {
                    const opacity = (1 - distance / config.connectionDistance) * 0.3;
                    ctx.beginPath();
                    ctx.strokeStyle = `rgba(0, 217, 255, ${opacity})`;
                    ctx.lineWidth = 1;
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.stroke();
                }
            }

            if (mouse.x != null) {
                const dx = mouse.x - particles[i].x;
                const dy = mouse.y - particles[i].y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < config.mouseRadius) {
                    const opacity = (1 - distance / config.mouseRadius) * 0.6;
                    ctx.beginPath();
                    ctx.strokeStyle = `rgba(0, 255, 136, ${opacity})`;
                    ctx.lineWidth = 1.5;
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(mouse.x, mouse.y);
                    ctx.stroke();
                }
            }
        }
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        particles.forEach(particle => {
            particle.update();
            particle.draw();
        });

        drawConnections();
        animationId = requestAnimationFrame(animate);
    }

    initParticleArray();
    animate();
}

// ============================================
// NAVBAR WITH AUTO-HIDE
// ============================================

function initNavbar() {
    const navbar = document.querySelector('.navbar');
    if (!navbar) return;

    let lastScrollY = window.scrollY;
    let ticking = false;
    let hideTimeout;

    const hideNavbar = () => navbar.classList.add('hidden');
    const showNavbar = () => navbar.classList.remove('hidden');

    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                const currentScrollY = window.scrollY;
                const scrollDifference = currentScrollY - lastScrollY;

                if (currentScrollY > 100) {
                    if (scrollDifference > 10) {
                        hideNavbar();
                    } else if (scrollDifference < -10) {
                        showNavbar();
                    }
                } else {
                    showNavbar();
                }

                if (currentScrollY > 50) {
                    navbar.classList.add('scrolled');
                } else {
                    navbar.classList.remove('scrolled');
                }

                lastScrollY = currentScrollY;
                ticking = false;
            });
            ticking = true;
        }
    });

    document.addEventListener('mousemove', (e) => {
        if (e.clientY < 50 && window.scrollY > 100) {
            showNavbar();
            clearTimeout(hideTimeout);
            hideTimeout = setTimeout(hideNavbar, 2000);
        }
    });
}

// ============================================
// SCROLL ANIMATIONS WITH INTERSECTION OBSERVER
// ============================================

function initScrollAnimations() {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animationPlayState = 'running';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const animatedElements = document.querySelectorAll(
        '.fade-in, .fade-in-delay, .slide-up, .slide-in-left, .slide-in-right, .scale-in'
    );

    animatedElements.forEach(el => {
        el.style.animationPlayState = 'paused';
        observer.observe(el);
    });
}

// ============================================
// SMOOTH SCROLLING FOR NAVIGATION
// ============================================

function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                const navbarHeight = document.querySelector('.navbar').offsetHeight;
                const targetPosition = targetElement.offsetTop - navbarHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });

                const navMenu = document.getElementById('nav-menu');
                const hamburger = document.getElementById('hamburger');
                if (navMenu && navMenu.classList.contains('active')) {
                    navMenu.classList.remove('active');
                    hamburger.classList.remove('active');
                    document.body.style.overflow = '';
                }
            }
        });
    });
}

// ============================================
// ACTIVE NAV LINK HIGHLIGHTING (SCROLLSPY)
// ============================================

function initActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    const navbarHeight = document.querySelector('.navbar')?.offsetHeight || 0;

    function updateActiveLink() {
        let currentSection = '';
        const scrollPosition = window.scrollY + navbarHeight + 10;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                currentSection = sectionId;
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSection}`) {
                link.classList.add('active');
            }
        });
    }

    // Throttle scroll events for performance
    let ticking = false;
    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                updateActiveLink();
                ticking = false;
            });
            ticking = true;
        }
    });

    // Check on page load (in case page loads with hash or at specific position)
    updateActiveLink();

    // Update when clicking nav links for immediate feedback
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // Handle page load with hash
    if (window.location.hash) {
        const targetSection = document.querySelector(window.location.hash);
        if (targetSection) {
            setTimeout(updateActiveLink, 100); // Small delay to ensure proper positioning
        }
    }
}

// ============================================
// MOBILE HAMBURGER MENU
// ============================================

function initMobileMenu() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');

    if (!hamburger || !navMenu) return;

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');

        if (navMenu.classList.contains('active')) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && navMenu.classList.contains('active')) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = '';
        }
    });

    document.addEventListener('click', (e) => {
        if (navMenu.classList.contains('active') &&
            !navMenu.contains(e.target) &&
            !hamburger.contains(e.target)) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
}

// ============================================
// LAST UPDATED DATE
// ============================================

function initLastUpdated() {
    const dateElement = document.getElementById('last-update-date');
    if (!dateElement) return;

    // Get the last modified date from the document, fallback to current date
    const lastModified = document.lastModified || new Date().toISOString();
    const date = new Date(lastModified);

    // Format: DD/MM/YYYY
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();

    dateElement.textContent = `${day}/${month}/${year}`;
}

// ============================================
// CONTACT FORM HANDLER
// ============================================

function initFormHandler() {
    const form = document.querySelector('.contact-form-galaxy');
    if (!form) return;

    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        const button = form.querySelector('.launch-button');
        const originalContent = button.querySelector('.button-text').textContent;
        const formData = new FormData(form);

        button.querySelector('.button-text').textContent = 'Launching...';
        button.style.opacity = '0.7';
        button.disabled = true;

        try {
            const response = await fetch(form.action, {
                method: form.method,
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            const data = await response.json();

            if (response.ok && data.success) {
                button.querySelector('.button-text').textContent = 'Message Launched!';
                button.style.background = 'linear-gradient(135deg, #00ff88 0%, #00d9ff 100%)';
                form.reset();
            } else {
                throw new Error(data.message || 'Form submission failed');
            }
        } catch (error) {
            console.error('Form error:', error);
            button.querySelector('.button-text').textContent = 'Failed to Send';
            button.style.background = 'linear-gradient(135deg, #ff6b6b 0%, #ffa500 100%)';
        }

        setTimeout(() => {
            button.querySelector('.button-text').textContent = originalContent;
            button.style.background = '';
            button.style.opacity = '1';
            button.disabled = false;
        }, 3000);
    });
}

// ============================================
// PROJECT CARD FLIP ANIMATION
// ============================================


// ============================================
// FOOTER GLOW EFFECT
// ============================================
function initFooterGlow() {
    const footer = document.querySelector('.footer');
    if (!footer) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                footer.classList.add('scrolled');
            } else {
                footer.classList.remove('scrolled');
            }
        });
    }, {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    });

    observer.observe(footer);
}

// ============================================
// FLOATING ACTION BUTTONS
// ============================================
function initFloatingButtons() {
    const backToTopBtn = document.getElementById('backToTop');
    if (!backToTopBtn) return;

    // Back to top functionality
    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Show/hide button based on scroll position
    const toggleVisibility = () => {
        if (window.scrollY > 500) {
            backToTopBtn.style.opacity = '1';
            backToTopBtn.style.pointerEvents = 'auto';
        } else {
            backToTopBtn.style.opacity = '0';
            backToTopBtn.style.pointerEvents = 'none';
        }
    };

    // Initial check
    toggleVisibility();

    // Listen for scroll
    window.addEventListener('scroll', toggleVisibility);
}
