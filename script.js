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
// Book Preview and Reader Functionality
// ============================================

// Sample chapter data with preview pages
const bookChapters = {
    1: {
        title: 'Chapter 1: The Living System',
        pages: [
            {
                content: `<h1>Chapter 1</h1>
                <h2>The Living System</h2>
                <p>Design is never finished. This is not a philosophical statement—it's an observable fact. Every designed system, from the smallest mobile app to the largest enterprise platform, exists in a state of perpetual evolution.</p>
                <p>The moment a design is released, it begins to change. Users interact with it in unexpected ways. Technology evolves. Business requirements shift. Cultural contexts transform. What felt perfect on launch day becomes outdated within months, sometimes weeks.</p>`
            },
            {
                content: `<p>Traditional design thinking treats this as a problem to solve. We're taught to research thoroughly, design comprehensively, and deliver completely. But this approach assumes a stable world—one where user needs remain constant, technology stays predictable, and business goals don't shift.</p>
                <p>That world doesn't exist anymore, if it ever did.</p>
                <p>Instead, we must embrace design as a living system: one that breathes, adapts, and evolves. Not because we failed to get it right the first time, but because getting it right means continuously adjusting to reality.</p>`
            },
            {
                content: `<h2>Systems That Breathe</h2>
                <p>Think about how natural systems work. An ecosystem doesn't reach a final, perfect state. It constantly adjusts to environmental changes, resource availability, and new species introductions. The forest you walk through today is different from the forest that existed last year, and different still from what it will become next year.</p>
                <p>Designed experiences should work the same way. They should be capable of sensing changes in their environment and responding appropriately.</p>
                <div class="preview-notice">
                    <strong>Preview Limit Reached</strong><br>
                    This is a preview of the first few pages. To continue reading and access all chapters, purchase the full book on Amazon.
                </div>`
            }
        ]
    },
    2: {
        title: 'Chapter 2: Trust as Foundation',
        pages: [
            {
                content: `<h1>Chapter 2</h1>
                <h2>Trust as Foundation</h2>
                <p>Trust isn't built through grand gestures or marketing promises. It's constructed through thousands of tiny, consistent interactions that tell users: "This system works the way you expect it to work."</p>
                <p>Every pixel, every transition, every response time contributes to or erodes this foundation. Users don't consciously notice when things work as expected, but they immediately feel when something is off.</p>`
            },
            {
                content: `<p>In my years designing enterprise systems, I've observed that trust operates on multiple levels simultaneously. There's surface trust—the immediate confidence that a button will do what its label suggests. There's systemic trust—the belief that the platform will handle your data responsibly. And there's temporal trust—the expectation that the experience you know today won't radically change tomorrow.</p>
                <p>Most design discussions focus on the first level: surface trust. We obsess over button labels, color choices, and interaction patterns. This matters, but it's only the beginning.</p>`
            },
            {
                content: `<h2>The Three Layers of Trust</h2>
                <p>Consider a simple action: clicking "Save" in a document editor. At the surface level, the user trusts that the button will save their work. At the systemic level, they trust that the saved data won't disappear or become corrupted. At the temporal level, they trust that the "Save" button will still exist and work the same way when they return tomorrow.</p>
                <p>Break any of these trust layers, and you damage all of them.</p>
                <div class="preview-notice">
                    <strong>Preview Limit Reached</strong><br>
                    This is a preview of the first few pages. To continue reading and access all chapters, purchase the full book on Amazon.
                </div>`
            }
        ]
    },
    3: {
        title: 'Chapter 3: Designing with AI',
        pages: [
            {
                content: `<h1>Chapter 3</h1>
                <h2>Designing with AI</h2>
                <p>Artificial intelligence isn't just a new technology to integrate into existing workflows—it fundamentally changes what design can be. When systems can learn, adapt, and make decisions autonomously, the designer's role shifts from crafting specific solutions to shaping how systems evolve.</p>
                <p>This is disorienting for many designers, myself included when I first encountered it. We're trained to think in terms of defined states, predictable flows, and controlled outcomes. AI introduces uncertainty, emergence, and sometimes surprises.</p>`
            },
            {
                content: `<p>The challenge isn't making AI systems smarter—engineers and researchers are advancing that rapidly. The challenge is making AI systems trustworthy, understandable, and aligned with human needs.</p>
                <p>This requires a different design mindset. Instead of designing the interface, we're designing the boundaries. Instead of crafting each interaction, we're shaping the principles that guide thousands of interactions we'll never directly design.</p>
                <p>It's like the difference between building a house and cultivating a garden. One is about precise specifications and permanent structures. The other is about creating conditions for growth, then tending and guiding what emerges.</p>`
            },
            {
                content: `<h2>The New Design Primitives</h2>
                <p>When designing with AI, our basic building blocks change. We still care about buttons, forms, and layouts, but we also need to think about training data, feedback loops, confidence thresholds, and model behavior.</p>
                <p>These aren't purely technical concerns—they're design decisions with profound user impact. How confident should a system be before making an autonomous decision? When should it ask for human input? How does it explain its reasoning?</p>
                <div class="preview-notice">
                    <strong>Preview Limit Reached</strong><br>
                    This is a preview of the first few pages. To continue reading and access all chapters, purchase the full book on Amazon.
                </div>`
            }
        ]
    }
};

// Book reader state
let currentChapter = null;
let currentPageIndex = 0;

// Initialize book reader
function initializeBookReader() {
    const bookReader = document.getElementById('bookReader');
    const closeBtn = document.querySelector('.close-reader');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const chapterCards = document.querySelectorAll('.chapter-card');

    // Open reader when chapter card is clicked
    chapterCards.forEach(card => {
        const previewBtn = card.querySelector('.btn-preview');
        previewBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            const chapterId = parseInt(card.dataset.chapter);
            openBookReader(chapterId);
        });

        // Also allow clicking the whole card
        card.addEventListener('click', () => {
            const chapterId = parseInt(card.dataset.chapter);
            openBookReader(chapterId);
        });
    });

    // Close reader
    closeBtn.addEventListener('click', closeBookReader);

    // Close on escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && bookReader.classList.contains('active')) {
            closeBookReader();
        }
    });

    // Close on background click
    bookReader.addEventListener('click', (e) => {
        if (e.target === bookReader) {
            closeBookReader();
        }
    });

    // Navigation buttons
    prevBtn.addEventListener('click', previousPage);
    nextBtn.addEventListener('click', nextPage);

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (bookReader.classList.contains('active')) {
            if (e.key === 'ArrowLeft') previousPage();
            if (e.key === 'ArrowRight') nextPage();
        }
    });
}

function openBookReader(chapterId) {
    currentChapter = bookChapters[chapterId];
    currentPageIndex = 0;

    const bookReader = document.getElementById('bookReader');
    bookReader.classList.add('active');
    document.body.style.overflow = 'hidden'; // Prevent background scrolling

    updateReaderDisplay();
}

function closeBookReader() {
    const bookReader = document.getElementById('bookReader');
    bookReader.classList.remove('active');
    document.body.style.overflow = ''; // Restore scrolling
    currentChapter = null;
    currentPageIndex = 0;
}

function updateReaderDisplay() {
    if (!currentChapter) return;

    const chapterTitleDisplay = document.querySelector('.chapter-title-display');
    const pageCounter = document.querySelector('.page-counter');
    const leftPage = document.querySelector('.left-page .page-content');
    const rightPage = document.querySelector('.right-page .page-content');
    const leftPageNumber = document.querySelector('.left-page .page-number');
    const rightPageNumber = document.querySelector('.right-page .page-number');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');

    // Update header
    chapterTitleDisplay.textContent = currentChapter.title;

    // Calculate which pages to show (2-page spread)
    const totalPages = currentChapter.pages.length;
    const leftPageIndex = currentPageIndex;
    const rightPageIndex = currentPageIndex + 1;

    // Update page counter
    pageCounter.textContent = `Pages ${leftPageIndex + 1}-${Math.min(rightPageIndex + 1, totalPages)} of ${totalPages}`;

    // Update left page
    if (leftPageIndex < totalPages) {
        leftPage.innerHTML = currentChapter.pages[leftPageIndex].content;
        leftPageNumber.textContent = leftPageIndex + 1;
    }

    // Update right page
    if (rightPageIndex < totalPages) {
        rightPage.innerHTML = currentChapter.pages[rightPageIndex].content;
        rightPageNumber.textContent = rightPageIndex + 1;
        rightPage.parentElement.style.display = 'block';
    } else {
        rightPage.innerHTML = '';
        rightPageNumber.textContent = '';
        // On mobile, we hide the right page anyway, but on desktop we might want to show empty
        if (window.innerWidth > 768) {
            rightPage.parentElement.style.display = 'none';
        }
    }

    // Update navigation buttons
    prevBtn.disabled = currentPageIndex === 0;
    nextBtn.disabled = currentPageIndex >= totalPages - 1;

    // Scroll pages to top
    document.querySelectorAll('.book-page').forEach(page => {
        page.scrollTop = 0;
    });
}

function previousPage() {
    if (currentPageIndex > 0) {
        currentPageIndex -= 2; // Move back 2 pages (one spread)
        if (currentPageIndex < 0) currentPageIndex = 0;
        updateReaderDisplay();
    }
}

function nextPage() {
    if (currentChapter && currentPageIndex < currentChapter.pages.length - 1) {
        currentPageIndex += 2; // Move forward 2 pages (one spread)
        updateReaderDisplay();
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    initializeBookReader();
});

// ============================================
// Easter Egg: Console Message
// ============================================

console.log('%c📖 Unfinished', 'font-size: 24px; font-weight: bold; color: #2563eb;');
console.log('%cPerfection is slow. Progress teaches.', 'font-size: 14px; font-style: italic; color: #64748b;');
console.log('%c\nThis website is itself a work in progress, just like the book it represents.', 'font-size: 12px; color: #64748b;');
console.log('%c\nInterested in the source? Check out the repository!', 'font-size: 12px; color: #2563eb;');
