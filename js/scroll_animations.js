
document.addEventListener('DOMContentLoaded', () => {
    // Select elements to animate on scroll
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                observer.unobserve(entry.target); // Only animate once
            }
        });
    }, observerOptions);

    // Function to apply scroll-reveal class and observe
    const applyScrollReveal = () => {
        const elements = document.querySelectorAll('.ui-card, .dash-stat-card, .dash-panel, .finance-card, .book-cover-container');
        elements.forEach((el, index) => {
            if (!el.classList.contains('scroll-reveal')) {
                el.classList.add('scroll-reveal');
                // Add staggered transition delay based on horizontal position or index if desired
                // For simplicity, just observe them
                observer.observe(el);
            }
        });
    };

    applyScrollReveal();
    
    // Re-apply when a sidebar tab is clicked (so newly visible elements animate)
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            setTimeout(() => {
                // Remove revealed class from elements in the new section to re-trigger
                const activeSection = document.querySelector('.dash-section.active');
                if (activeSection) {
                    const elements = activeSection.querySelectorAll('.scroll-reveal');
                    elements.forEach(el => {
                        el.classList.remove('revealed');
                        observer.observe(el);
                    });
                }
            }, 50);
        });
    });
});
