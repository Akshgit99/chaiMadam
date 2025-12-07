// Mobile Menu Toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Close mobile menu when clicking on a nav link
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Navbar scroll effect
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll <= 0) {
        navbar.classList.remove('scrolled');
        navbar.style.boxShadow = 'var(--shadow-sm)';
    } else {
        navbar.classList.add('scrolled');
        navbar.style.boxShadow = 'var(--shadow-lg)';
    }
    
    lastScroll = currentScroll;
});

// Form submission handler
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(contactForm);
        
        // Here you would typically send the form data to a server
        // For now, we'll just show a success message
        alert('Thank you for your message! We will get back to you soon.');
        
        // Reset the form
        contactForm.reset();
    });
}

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe service cards
const serviceCards = document.querySelectorAll('.service-card');
serviceCards.forEach((card, index) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = `all 0.6s cubic-bezier(0.4, 0, 0.2, 1) ${index * 0.15}s`;
    observer.observe(card);
});

// Observe client cards
const clientCards = document.querySelectorAll('.client-card');
clientCards.forEach((card, index) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px) scale(0.95)';
    card.style.transition = `all 0.6s cubic-bezier(0.4, 0, 0.2, 1) ${index * 0.1}s`;
    observer.observe(card);
});

// Observe about features
const aboutFeatures = document.querySelectorAll('.about-feature');
aboutFeatures.forEach((feature, index) => {
    feature.style.opacity = '0';
    feature.style.transform = 'translateX(-30px)';
    feature.style.transition = `all 0.6s cubic-bezier(0.4, 0, 0.2, 1) ${index * 0.1}s`;
    observer.observe(feature);
});

// Observe contact items
const contactItems = document.querySelectorAll('.contact-item');
contactItems.forEach((item, index) => {
    item.style.opacity = '0';
    item.style.transform = 'translateX(-20px)';
    item.style.transition = `all 0.6s cubic-bezier(0.4, 0, 0.2, 1) ${index * 0.1}s`;
    observer.observe(item);
});

// Active nav link on scroll
const sections = document.querySelectorAll('section[id]');

function updateActiveLink() {
    const scrollPosition = window.scrollY + 100;

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

window.addEventListener('scroll', updateActiveLink);

// Counter animation for stats
function animateCounter(element, target, duration = 2000) {
    let current = 0;
    const increment = target / (duration / 16);
    const isPercentage = element.textContent.includes('%');
    const hasPlus = element.textContent.includes('+');
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            current = target;
            clearInterval(timer);
        }
        
        let displayValue = Math.floor(current);
        if (hasPlus) displayValue += '+';
        if (isPercentage) displayValue += '%';
        
        element.textContent = displayValue;
    }, 16);
}

// Trigger counter animation when stats section is visible
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const statNumbers = entry.target.querySelectorAll('.stat h3');
            statNumbers.forEach(stat => {
                const text = stat.textContent;
                const number = parseInt(text.replace(/\D/g, ''));
                animateCounter(stat, number);
            });
            statsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

const heroStats = document.querySelector('.hero-stats');
if (heroStats) {
    statsObserver.observe(heroStats);
}

// Parallax effect for gradient blobs
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const blobs = document.querySelectorAll('.gradient-blob');
    
    blobs.forEach((blob, index) => {
        const speed = 0.5 + (index * 0.1);
        blob.style.transform = `translateY(${scrolled * speed}px)`;
    });
});

// Add smooth reveal animation for sections
const allSections = document.querySelectorAll('section');
const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.1 });

allSections.forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
    sectionObserver.observe(section);
});

// Mouse follow effect for gradient blobs
document.addEventListener('mousemove', (e) => {
    const blob1 = document.querySelector('.blob-1');
    const blob2 = document.querySelector('.blob-2');
    const blob3 = document.querySelector('.blob-3');
    
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;
    
    if (blob1) blob1.style.transform = `translate(${x * 30}px, ${y * 30}px)`;
    if (blob2) blob2.style.transform = `translate(${x * -20}px, ${y * -20}px)`;
    if (blob3) blob3.style.transform = `translate(${x * 15}px, ${y * -15}px)`;
});

// Add ripple effect to buttons
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function(e) {
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.classList.add('ripple');
        
        this.appendChild(ripple);
        
        setTimeout(() => ripple.remove(), 600);
    });
});

// Typing effect for hero title (optional - can be enabled)
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.textContent = '';
    
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Lazy load images when they come into view
const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            if (img.dataset.src) {
                img.src = img.dataset.src;
                img.classList.add('loaded');
                imageObserver.unobserve(img);
            }
        }
    });
});

document.querySelectorAll('img[data-src]').forEach(img => {
    imageObserver.observe(img);
});

// Add parallax effect to floating cards
window.addEventListener('scroll', () => {
    const cards = document.querySelectorAll('.floating-card');
    const scrolled = window.pageYOffset;
    
    cards.forEach((card, index) => {
        const speed = 0.05 + (index * 0.02);
        const yPos = -(scrolled * speed);
        card.style.transform = `translateY(${yPos}px)`;
    });
});

// Animate numbers in stats on scroll
function animateValue(element, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        const value = Math.floor(progress * (end - start) + start);
        element.textContent = value + (element.dataset.suffix || '');
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
}

// Enhanced scroll progress indicator
const createScrollProgress = () => {
    const progressBar = document.createElement('div');
    progressBar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        height: 3px;
        background: linear-gradient(90deg, #0066FF, #7C3AED, #FF3366);
        z-index: 9999;
        transition: width 0.2s ease;
    `;
    document.body.appendChild(progressBar);
    
    window.addEventListener('scroll', () => {
        const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
        progressBar.style.width = scrollPercent + '%';
    });
};

createScrollProgress();
