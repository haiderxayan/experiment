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
                <p>Designed experiences should work the same way. They should be capable of sensing changes in their environment and responding appropriately.</p>`
            },
            {
                content: `<p>This doesn't mean chaos or lack of planning. Natural systems have structure—they follow patterns, maintain equilibrium, and exhibit predictable behaviors. But they also have the capacity to adapt when conditions change.</p>
                <p>The key insight is that stability and adaptability aren't opposites. They're complementary forces that work together to create resilient systems.</p>
                <p>Consider how a tree responds to wind. Its trunk is rigid enough to stand upright, yet its branches bend and sway. This combination of stability and flexibility allows it to survive storms that would snap a completely rigid structure.</p>`
            },
            {
                content: `<h2>Designing for Change</h2>
                <p>When we design experiences as living systems, we shift our focus from creating perfect solutions to building adaptive capacity. This changes how we think about every aspect of the design process.</p>
                <p>First, we recognize that our initial design decisions are hypotheses, not conclusions. They represent our best understanding at a particular moment, based on the information available. As we learn more—from user behavior, market shifts, or technological advances—we should expect and welcome the need to revise these hypotheses.</p>`
            },
            {
                content: `<p>Second, we build feedback mechanisms into the system from the beginning. These aren't just analytics dashboards or user surveys, though those help. They're ways for the system to sense its own performance and communicate that information back to its designers and users.</p>
                <p>Think about how your body maintains temperature. You don't consciously monitor every degree change. Your nervous system constantly senses temperature and triggers responses—sweating when hot, shivering when cold. The feedback loop is automatic and continuous.</p>`
            },
            {
                content: `<p>Digital experiences can work similarly. They can sense patterns in user behavior, identify points of friction, and surface this information to designers. Better yet, in some cases they can adapt automatically, adjusting interfaces based on usage patterns or personalizing experiences for different user groups.</p>
                <p>This isn't about replacing designers with algorithms. It's about creating systems that help designers make better decisions by providing continuous, real-world feedback.</p>`
            },
            {
                content: `<h2>The Paradox of Completeness</h2>
                <p>There's a paradox at the heart of design: we strive for completeness knowing it's impossible to achieve. Every comprehensive design doc, every detailed specification, every polished prototype represents an attempt to account for every scenario, every edge case, every possible user need.</p>
                <p>This thoroughness is valuable—it reflects careful thinking and attention to detail. But it also creates a dangerous illusion: that if we just think hard enough, plan comprehensively enough, we can anticipate everything.</p>`
            },
            {
                content: `<p>We can't. Reality is too complex, too dynamic. Users will always surprise us. Technology will always evolve in unexpected directions. Business contexts will always shift in ways we didn't predict.</p>
                <p>The alternative isn't to stop planning or designing carefully. It's to build incompleteness into our approach. To create systems that acknowledge what they don't know and have mechanisms for learning and adapting.</p>
                <p>This means designing with seams and joints—places where the system can flex and change. It means building modular architectures that allow components to be swapped without breaking the whole. It means creating interfaces that can accommodate new features without requiring complete redesigns.</p>`
            },
            {
                content: `<h2>Learning from Failure</h2>
                <p>Living systems learn from failure. When a branch breaks in a storm, the tree doesn't fail completely—it compartmentalizes the damage and continues growing. Evolution itself is driven by failure: organisms that can't adapt to changing conditions die off, while those with useful adaptations survive and reproduce.</p>
                <p>Designed systems should embrace failure with similar resilience. Not by accepting poor quality, but by recognizing that some things won't work as expected and building capacity to learn from these moments.</p>`
            },
            {
                content: `<div class="buy-page">
                    <div class="buy-page-icon">📖</div>
                    <h2>Continue Reading</h2>
                    <p>You've reached the end of the preview. Get the full book to explore the complete chapter and unlock all the insights on designing living systems.</p>
                    <a href="https://www.amazon.com" target="_blank" rel="noopener noreferrer" class="btn-amazon-large">
                        Buy Full Book on Amazon
                    </a>
                    <div class="buy-features">
                        <ul>
                            <li>12 comprehensive chapters</li>
                            <li>Real-world case studies</li>
                            <li>Actionable frameworks</li>
                            <li>Lifetime updates</li>
                        </ul>
                    </div>
                </div>`,
                isBuyPage: true
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
                <p>Break any of these trust layers, and you damage all of them.</p>`
            },
            {
                content: `<p>Surface trust is the easiest to understand and the most commonly discussed. It's about clarity and predictability in the immediate interaction. Does this button do what its label suggests? Does this form behave the way similar forms behave elsewhere? Are the results of my action immediately visible?</p>
                <p>This layer is well-served by conventional design wisdom: use clear labels, follow established patterns, provide immediate feedback, maintain visual consistency.</p>`
            },
            {
                content: `<h2>Systemic Trust</h2>
                <p>Systemic trust runs deeper. It's about confidence in the underlying system's reliability, security, and competence. Users might not think about this consciously most of the time, but it profoundly affects how they engage with a product.</p>
                <p>When systemic trust is strong, users feel comfortable entering sensitive information, making important decisions, or relying on the system for critical tasks. When it's weak, they hesitate, double-check, and maintain backup plans.</p>`
            },
            {
                content: `<p>Building systemic trust requires demonstrating competence over time. It's not enough to claim your system is secure or reliable—you must prove it through consistent performance. This means:</p>
                <p>Never losing user data, even when things go wrong. Handling errors gracefully rather than crashing or showing cryptic error messages. Explaining what's happening when processes take time. Being transparent about limitations and risks.</p>
                <p>Systemic trust is slow to build and quick to destroy. A single data breach or major failure can erase years of careful trust-building.</p>`
            },
            {
                content: `<h2>Temporal Trust</h2>
                <p>The third layer—temporal trust—is the least discussed but perhaps most important for long-term user relationships. It's about confidence that the system you learn today will still work tomorrow, next month, next year.</p>
                <p>Every time users learn how to accomplish a task in your system, they make an investment. They're storing mental models, building muscle memory, developing workflows. If you frequently change how things work, you're invalidating that investment.</p>`
            },
            {
                content: `<p>This creates a tension with the living systems thinking from Chapter 1. If systems must evolve and adapt, how do we maintain temporal trust?</p>
                <p>The answer lies in distinguishing between surface changes and foundational changes. You can evolve and improve while maintaining consistency in core interaction patterns. You can add new capabilities without removing familiar ones. You can refine and polish without completely reimagining.</p>`
            },
            {
                content: `<p>Think about how successful platforms evolve. They might refresh their visual design, but the basic navigation remains familiar. They add new features, but place them where users expect to find them. They improve performance and reliability, which strengthens rather than disrupts trust.</p>
                <p>Temporal trust means users can depend on your system becoming better over time, not just different.</p>`
            },
            {
                content: `<h2>Trust and Transparency</h2>
                <p>One powerful way to build trust across all three layers is through transparency. Not the superficial transparency of privacy policies nobody reads, but genuine openness about how your system works, what it knows, and what it does with that knowledge.</p>
                <p>When something goes wrong, explain what happened and how you're fixing it. When you make changes, explain why. When you collect data, explain how it benefits users. This kind of transparency demonstrates respect and builds confidence.</p>`
            },
            {
                content: `<div class="buy-page">
                    <div class="buy-page-icon">📖</div>
                    <h2>Continue Reading</h2>
                    <p>You've reached the end of the preview. Get the full book to explore the complete chapter and discover how to build unshakeable trust in your designs.</p>
                    <a href="https://www.amazon.com" target="_blank" rel="noopener noreferrer" class="btn-amazon-large">
                        Buy Full Book on Amazon
                    </a>
                    <div class="buy-features">
                        <ul>
                            <li>12 comprehensive chapters</li>
                            <li>Real-world case studies</li>
                            <li>Actionable frameworks</li>
                            <li>Lifetime updates</li>
                        </ul>
                    </div>
                </div>`,
                isBuyPage: true
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
                <p>These aren't purely technical concerns—they're design decisions with profound user impact. How confident should a system be before making an autonomous decision? When should it ask for human input? How does it explain its reasoning?</p>`
            },
            {
                content: `<p>Consider recommendation systems. The basic design question isn't just "how should we display recommendations?" It's also: What signals should inform recommendations? How much should we weight recent behavior versus long-term preferences? How do we handle new users with limited data? How do we prevent filter bubbles while still being relevant?</p>
                <p>These are design decisions that shape user experience just as much as visual layout or interaction patterns.</p>`
            },
            {
                content: `<h2>Designing for Uncertainty</h2>
                <p>Traditional interfaces deal with certainty. Click this button, and this specific thing happens. Enter this data, and it goes to this specific place. The relationship between action and outcome is deterministic.</p>
                <p>AI systems introduce probabilistic outcomes. The recommendation algorithm might suggest different things to the same user at different times. The search results might vary based on subtle context. The image classifier might be 85% confident rather than absolutely certain.</p>`
            },
            {
                content: `<p>Designers must communicate this uncertainty appropriately. Sometimes we want to hide complexity and present confident results. Other times we need to surface uncertainty so users can make informed judgments.</p>
                <p>The design question is: when does each approach serve users better? There's no universal answer—it depends on context, consequences, and user expertise.</p>
                <p>For high-stakes decisions, showing confidence levels and alternative possibilities helps users stay in control. For low-stakes, frequent decisions, hiding uncertainty behind confident recommendations reduces cognitive load.</p>`
            },
            {
                content: `<h2>The Explanation Challenge</h2>
                <p>One of the hardest design challenges with AI is explanation. How do you help users understand why the system made a particular decision or recommendation?</p>
                <p>This matters for trust, debugging, and learning. Users need to understand system behavior well enough to know when to trust it, when to question it, and how to get better results.</p>
                <p>But explaining AI decisions is genuinely hard. The models are often complex, with hundreds or thousands of factors influencing each output. Even when we can trace the technical reasoning, it may not translate to human-understandable explanations.</p>`
            },
            {
                content: `<p>The solution isn't always to explain everything. Sometimes the best approach is to provide enough context for users to verify results independently. Show similar examples. Provide override mechanisms. Enable users to give feedback that improves future results.</p>
                <p>Think of it like working with a knowledgeable colleague. You don't need them to explain every step of their reasoning if you can verify their conclusions and correct course when needed.</p>`
            },
            {
                content: `<h2>Human-AI Collaboration</h2>
                <p>The most effective AI systems don't replace human judgment—they augment it. They handle the parts machines do well (processing vast amounts of data, spotting patterns, maintaining consistency) while leaving humans to do what we do well (understanding context, making nuanced judgments, handling novel situations).</p>
                <p>Designing these collaborative systems requires thinking carefully about the division of labor. What decisions should the AI make autonomously? What should it suggest for human approval? What should it simply support without taking initiative?</p>`
            },
            {
                content: `<p>This balance isn't static. As users develop trust and understanding, they may want more automation. As systems encounter edge cases, they may need more human oversight. Good designs allow this balance to shift based on user preference and system confidence.</p>
                <p>The goal isn't to create perfectly autonomous systems or to keep humans in the loop at all times. It's to create adaptive partnerships where both human and machine contribute their strengths to achieve better outcomes than either could alone.</p>`
            },
            {
                content: `<div class="buy-page">
                    <div class="buy-page-icon">📖</div>
                    <h2>Continue Reading</h2>
                    <p>You've reached the end of the preview. Get the full book to explore the complete chapter and master the art of designing with AI.</p>
                    <a href="https://www.amazon.com" target="_blank" rel="noopener noreferrer" class="btn-amazon-large">
                        Buy Full Book on Amazon
                    </a>
                    <div class="buy-features">
                        <ul>
                            <li>12 comprehensive chapters</li>
                            <li>Real-world case studies</li>
                            <li>Actionable frameworks</li>
                            <li>Lifetime updates</li>
                        </ul>
                    </div>
                </div>`,
                isBuyPage: true
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

function updateReaderDisplay(animate = false, direction = 'forward') {
    if (!currentChapter) return;

    const chapterTitleDisplay = document.querySelector('.chapter-title-display');
    const pageCounter = document.querySelector('.page-counter');
    const leftPage = document.querySelector('.left-page .page-content');
    const rightPage = document.querySelector('.right-page .page-content');
    const leftPageNumber = document.querySelector('.left-page .page-number');
    const rightPageNumber = document.querySelector('.right-page .page-number');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const rightPageElement = document.querySelector('.right-page');

    // Update header
    chapterTitleDisplay.textContent = currentChapter.title;

    const totalPages = currentChapter.pages.length;

    // Check if on mobile (single page view)
    const isMobile = window.innerWidth <= 768;

    if (isMobile) {
        // Mobile: show one page at a time
        const currentPage = currentChapter.pages[currentPageIndex];
        leftPage.innerHTML = currentPage.content;
        leftPageNumber.textContent = currentPageIndex + 1;
        pageCounter.textContent = `Page ${currentPageIndex + 1} of ${totalPages}`;

        // Hide right page on mobile
        rightPageElement.style.display = 'none';
    } else {
        // Desktop: show two-page spread
        const leftPageIndex = currentPageIndex;
        const rightPageIndex = currentPageIndex + 1;

        // Update page counter
        if (rightPageIndex < totalPages) {
            pageCounter.textContent = `Pages ${leftPageIndex + 1}-${rightPageIndex + 1} of ${totalPages}`;
        } else {
            pageCounter.textContent = `Page ${leftPageIndex + 1} of ${totalPages}`;
        }

        // Update left page
        if (leftPageIndex < totalPages) {
            leftPage.innerHTML = currentChapter.pages[leftPageIndex].content;
            leftPageNumber.textContent = leftPageIndex + 1;
        }

        // Update right page
        if (rightPageIndex < totalPages) {
            rightPage.innerHTML = currentChapter.pages[rightPageIndex].content;
            rightPageNumber.textContent = rightPageIndex + 1;
            rightPageElement.style.display = 'flex';
        } else {
            rightPage.innerHTML = '';
            rightPageNumber.textContent = '';
            rightPageElement.style.display = 'none';
        }

        // Add flip animation if requested
        if (animate) {
            const pageToAnimate = direction === 'forward' ? rightPageElement : rightPageElement;
            pageToAnimate.classList.add(`flipping-${direction}`);

            setTimeout(() => {
                pageToAnimate.classList.remove(`flipping-${direction}`);
            }, 800);
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
        const isMobile = window.innerWidth <= 768;
        currentPageIndex -= isMobile ? 1 : 2; // Move back 1 page on mobile, 2 on desktop
        if (currentPageIndex < 0) currentPageIndex = 0;
        updateReaderDisplay(true, 'backward');
    }
}

function nextPage() {
    if (currentChapter && currentPageIndex < currentChapter.pages.length - 1) {
        const isMobile = window.innerWidth <= 768;
        const increment = isMobile ? 1 : 2;

        // Don't go past the last page
        if (currentPageIndex + increment >= currentChapter.pages.length) {
            currentPageIndex = currentChapter.pages.length - 1;
        } else {
            currentPageIndex += increment;
        }

        updateReaderDisplay(true, 'forward');
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
