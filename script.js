// ============================================
// Smooth Scroll for Anchor Links
// ============================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');

        // Don't prevent default for disabled links
        if (this.classList.contains('disabled')) {
            e.preventDefault();
            return;
        }

        // Only handle internal anchor links
        if (href !== '#' && href.startsWith('#')) {
            e.preventDefault();
            const target = document.querySelector(href);

            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// ============================================
// Intersection Observer for Fade-in Animations
// ============================================

const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all sections for fade-in effect
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        observer.observe(section);
    });
});

// ============================================
// Dynamic Version Badge Update
// ============================================

const versionBadge = document.querySelector('.version-badge');
if (versionBadge) {
    versionBadge.addEventListener('click', () => {
        const releaseNotes = document.querySelector('#release-notes');
        if (releaseNotes) {
            releaseNotes.scrollIntoView({ behavior: 'smooth' });
        }
    });

    // Make it look clickable
    versionBadge.style.cursor = 'pointer';
    versionBadge.title = 'View release notes';
}

// ============================================
// Add Hover Effect to Feature Cards
// ============================================

const featureCards = document.querySelectorAll('.feature-card, .topic-card');
featureCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transition = 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
    });
});

// ============================================
// Scroll Progress Indicator (Optional)
// ============================================

function updateScrollProgress() {
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight - windowHeight;
    const scrolled = window.scrollY;
    const progress = (scrolled / documentHeight) * 100;

    // You can use this to create a progress bar if needed
    // For now, we'll just log it for potential future use
    return progress;
}

window.addEventListener('scroll', () => {
    const progress = updateScrollProgress();
    // Future: Could add a progress bar at the top of the page
});

// ============================================
// Handle External Links (Open in New Tab)
// ============================================

document.querySelectorAll('a').forEach(link => {
    const href = link.getAttribute('href');
    if (href && (href.startsWith('http://') || href.startsWith('https://'))) {
        link.setAttribute('target', '_blank');
        link.setAttribute('rel', 'noopener noreferrer');
    }
});

// ============================================
// Add Animation Delay to Feature Cards
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.feature-card, .topic-card');
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.5s ease-out, transform 0.5s ease-out';

        setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, 100 * index);
    });
});

// ============================================
// Easter Egg: Console Message
// ============================================

console.log('%c📖 Unfinished', 'font-size: 24px; font-weight: bold; color: #2563eb;');
console.log('%cPerfection is slow. Progress teaches.', 'font-size: 14px; font-style: italic; color: #64748b;');
console.log('%c\nThis website is itself a work in progress, just like the book it represents.', 'font-size: 12px; color: #64748b;');
console.log('%c\nInterested in the source? Check out the repository!', 'font-size: 12px; color: #2563eb;');
