document.addEventListener('DOMContentLoaded', () => {
    
    // --- Shared Header ---
    const headerHTML = `
    <header class="site-header">
        <div class="container">
            <a href="login.html" class="mobile-login-icon" aria-label="Login">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
            </a>
            <a href="index.html" class="logo-container">
                <!-- Fallback text if image fails to load -->
                <img src="assets/logo.webp" alt="Stackly Logo" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex'">
                <div class="logo-text" style="display:none">
                    stackly
                    <span class="logo-sub">Read More, Grow More</span>
                </div>
            </a>
            
            <nav class="main-nav">
                <ul>
                    <li><a href="index.html" id="nav-home">Home</a></li>
                    <li><a href="about.html" id="nav-about">About</a></li>
                    <li><a href="books.html" id="nav-books">Books</a></li>
                    <li><a href="services.html" id="nav-services">Services</a></li>
                    <li><a href="blog.html" id="nav-blog">Blog</a></li>
                    <li><a href="contact.html" id="nav-contact">Contact</a></li>
                </ul>
            </nav>
            
            <div class="header-actions">
                <a href="login.html" class="btn-login">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                    Login
                </a>
            </div>
            
            <!-- Hamburger Menu Button -->
            <button class="hamburger-menu" aria-label="Toggle menu">
                <span></span>
                <span></span>
                <span></span>
            </button>
        </div>
    </header>

    <!-- Full Screen Mobile Overlay -->
    <div class="mobile-sidebar-overlay">
        <button class="mobile-sidebar-close" aria-label="Close menu">&times;</button>
        <div class="mobile-sidebar-content">
            <img src="assets/logo.webp" alt="Stackly Logo" style="width: 140px; margin-bottom: 10px;">
            <nav class="mobile-nav-links">
                <a href="index.html">Home</a>
                <a href="about.html">About</a>
                <a href="books.html">Books</a>
                <a href="services.html">Services</a>
                <a href="blog.html">Blog</a>
                <a href="contact.html">Contact</a>
            </nav>
            <a href="login.html" class="btn btn-primary" style="margin-top: 10px; text-align: center;">Login / Register</a>
        </div>
    </div>
    `;

    // --- Shared Footer ---
    const footerHTML = `
    <footer class="site-footer">
        <div class="container">
            <div class="footer-grid">
                <div class="footer-brand">
                    <a href="index.html" class="logo-container" style="margin-bottom: 20px; display: inline-flex;">
                        <img src="assets/logo.webp" alt="Stackly Logo" style="height: 35px; width: auto;" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex'">
                        <div class="logo-text" style="display:none; color: white;">stackly</div>
                    </a>
                    <p style="margin-bottom: 25px; line-height: 1.6; max-width: 300px; color: #a19ea5;">Premium bookstore platform delivering unforgettable stories worldwide. Your imagination, our expertise.</p>
                    <div class="footer-social-circles">
                        <a href="404.html" aria-label="Facebook"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg></a>
                        <a href="404.html" aria-label="Twitter"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg></a>
                        <a href="404.html" aria-label="Instagram"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg></a>
                        <a href="404.html" aria-label="LinkedIn"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg></a>
                    </div>
                </div>
                
                <div class="footer-links">
                    <h4>Quick Links</h4>
                    <ul>
                        <li><a href="index.html">Home</a></li>
                        <li><a href="books.html">Books</a></li>
                        <li><a href="about.html">About Us</a></li>
                        <li><a href="services.html">Services</a></li>
                        <li><a href="blog.html">Blog</a></li>
                        <li><a href="contact.html">Contact Us</a></li>
                    </ul>
                </div>
                
                <div class="footer-links">
                    <h4>Categories</h4>
                    <ul>
                        <li><a href="books.html">Fiction</a></li>
                        <li><a href="books.html">Mystery & Thriller</a></li>
                        <li><a href="books.html">Science Fiction</a></li>
                        <li><a href="books.html">Biography</a></li>
                        <li><a href="books.html">Children's</a></li>
                    </ul>
                </div>

                <div class="footer-links contact-info-col">
                    <h4>Contact Info</h4>
                    <ul>
                        <li>hello@stackly.com</li>
                        <li>+91 98765 43210</li>
                        <li>Salem, Tamil Nadu</li>
                    </ul>
                </div>
            </div>
            
            <div class="footer-bottom-new">
                <div class="copy-text">&copy; 2026 Stackly. All rights reserved.</div>
                <div class="legal-links">
                    <a href="404.html">Privacy Policy</a>
                    <a href="404.html">Terms of Service</a>
                </div>
            </div>
        </div>
    </footer>
    `;

    // Inject Header
    const headerPlaceholder = document.getElementById('header-placeholder');
    if (headerPlaceholder) {
        headerPlaceholder.outerHTML = headerHTML;
    }

    // Inject Footer
    const footerPlaceholder = document.getElementById('footer-placeholder');
    if (footerPlaceholder) {
        footerPlaceholder.outerHTML = footerHTML;
    }

    // Set active class on nav
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navIdMap = {
        'index.html': 'nav-home',
        'about.html': 'nav-about',
        'books.html': 'nav-books',
        'services.html': 'nav-services',
        'blog.html': 'nav-blog',
        'contact.html': 'nav-contact'
    };
    
    // Wait a small tick to ensure the DOM is updated after outerHTML swap
    setTimeout(() => {
        // Set active class on main nav
        const activeNavId = navIdMap[currentPage];
        if (activeNavId) {
            const activeLink = document.getElementById(activeNavId);
            if (activeLink) activeLink.classList.add('active');
        }
        
        // Set active class on mobile nav
        const mobileLinks = document.querySelectorAll('.mobile-nav-links a');
        mobileLinks.forEach(link => {
            if (link.getAttribute('href') === currentPage || (currentPage === '' && link.getAttribute('href') === 'index.html')) {
                link.classList.add('active');
            }
        });
        
        // Hide current page from footer Quick Links
        const footerLinkDivs = document.querySelectorAll('.footer-links');
        footerLinkDivs.forEach(div => {
            const h4 = div.querySelector('h4');
            if (h4 && h4.textContent.trim() === 'Quick Links') {
                const links = div.querySelectorAll('a');
                links.forEach(link => {
                    const href = link.getAttribute('href');
                    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
                        link.parentElement.style.display = 'none';
                    }
                });
            }
        });
    }, 0);
    
    // --- Header Scroll Effect ---
    window.addEventListener('scroll', () => {
        const header = document.querySelector('.site-header');
        if (header) {
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        }
    });
});

// --- Dashboard User Name from Email ---
document.addEventListener('DOMContentLoaded', () => {
    const isDashboard = window.location.pathname.includes('dashboard');
    if (isDashboard) {
        const urlParams = new URLSearchParams(window.location.search);
        const email = urlParams.get('email');
        let username = null;
        
        if (email) {
            const namePart = email.split('@')[0];
            username = namePart.split(/[._-]/).map(part => part.charAt(0).toUpperCase() + part.slice(1)).join(' ');
            localStorage.setItem('dashboard_username', username);
        } else {
            username = localStorage.getItem('dashboard_username');
        }
        
        if (username) {
            const firstLetter = username.charAt(0).toUpperCase();
            document.querySelectorAll('.dash-avatar').forEach(el => el.textContent = firstLetter);
            document.querySelectorAll('.dash-username').forEach(el => el.textContent = username);
            
            const userWelcome = document.querySelector('.dash-welcome h1');
            if (userWelcome && !window.location.pathname.includes('admin')) {
                userWelcome.textContent = `Reader Dashboard - Welcome, ${username}!`;
            }

            const adminWelcome = document.querySelector('.dash-welcome h1');
            if (adminWelcome && window.location.pathname.includes('admin')) {
                adminWelcome.textContent = `Welcome back, ${username}! Here's what's happening today.`;
            }
        }
    }
});

// --- Dashboard Navigation Logic ---
document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.dash-section');
    
    if (navLinks.length > 0) {
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                
                // Remove active class from all links
                navLinks.forEach(l => l.classList.remove('active'));
                
                // Add active class to clicked link
                link.classList.add('active');
                
                // Hide all sections
                sections.forEach(s => s.classList.remove('active'));
                
                // Show targeted section
                const targetId = link.getAttribute('data-target');
                const targetSection = document.getElementById(targetId);
                if (targetSection) {
                    targetSection.classList.add('active');
                }
            });
        });
    }
});

// --- Mobile Sidebar Logic ---
document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.querySelector('.mobile-menu-btn');
    const closeBtn = document.querySelector('.mobile-close-btn');
    const sidebar = document.querySelector('.dash-sidebar');
    const navLinks = document.querySelectorAll('.nav-link');
    
    if (menuBtn && sidebar) {
        menuBtn.addEventListener('click', () => {
            sidebar.classList.add('mobile-active');
        });
    }
    
    if (closeBtn && sidebar) {
        closeBtn.addEventListener('click', () => {
            sidebar.classList.remove('mobile-active');
        });
    }
    
    if (sidebar) {
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (window.innerWidth <= 768) {
                    sidebar.classList.remove('mobile-active');
                }
            });
        });
    }
});

// --- Main Site Mobile Navigation Logic ---
document.addEventListener('DOMContentLoaded', () => {
    // Wait slightly to ensure header is injected
    setTimeout(() => {
        const hamburgerBtn = document.querySelector('.hamburger-menu');
        const overlay = document.querySelector('.mobile-sidebar-overlay');
        const closeBtn = document.querySelector('.mobile-sidebar-close');
        
        if (hamburgerBtn && overlay) {
            hamburgerBtn.addEventListener('click', () => {
                overlay.classList.add('active');
                document.body.style.overflow = 'hidden'; // Prevent scrolling
            });
        }
        
        if (closeBtn && overlay) {
            closeBtn.addEventListener('click', () => {
                overlay.classList.remove('active');
                document.body.style.overflow = '';
            });
        }
    }, 100);
});


// --- Global Scroll Reveal Logic ---
document.addEventListener('DOMContentLoaded', () => {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                // observer.unobserve(entry.target); // Optional: if we only want it once
            }
        });
    }, observerOptions);

    // Apply to elements that already have the class
    document.querySelectorAll('.scroll-reveal').forEach(el => {
        observer.observe(el);
    });
    
    // Auto-apply to specific sections to save HTML changes
    const autoRevealElements = document.querySelectorAll('.book-card, .blog-post, .service-card, .value-card, .testimonial-card, .hero-content, .hero-image, .about-content, section h2, .process-row, .timeline-item, .feature-card, .top-picks img, .category-card, .author-image-wrapper, .author-content');
    autoRevealElements.forEach((el, i) => {
        if (!el.classList.contains('scroll-reveal')) {
            el.classList.add('scroll-reveal');
            
            // Add staggered delay for grid items
            if (el.classList.contains('book-card') || el.classList.contains('blog-post') || el.classList.contains('service-card') || el.classList.contains('value-card') || el.classList.contains('feature-card') || el.classList.contains('category-card') || el.tagName.toLowerCase() === 'img') {
                const index = i % 4; // Stagger up to 4 items
                if (index > 0) el.classList.add(`delay-${index}`);
            }
            
            observer.observe(el);
        }
    });
});


// --- Harry Potter Slideshow Logic ---
document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.hp-slide');
    if (slides.length > 0) {
        let currentSlide = 0;
        setInterval(() => {
            slides[currentSlide].classList.remove('active');
            currentSlide = (currentSlide + 1) % slides.length;
            slides[currentSlide].classList.add('active');
        }, 2000); // 2 seconds gap
    }
});
