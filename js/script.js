document.addEventListener('DOMContentLoaded', () => {
    
    // --- Shared Header ---
    const headerHTML = `
    <header class="site-header">
        <div class="container">
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
            <nav class="mobile-nav-links">
                <a href="index.html">Home</a>
                <a href="about.html">About</a>
                <a href="books.html">Books</a>
                <a href="services.html">Services</a>
                <a href="blog.html">Blog</a>
                <a href="contact.html">Contact</a>
            </nav>
            <a href="login.html" class="btn btn-primary" style="margin-top: 30px; text-align: center;">Login / Register</a>
        </div>
    </div>
    `;

    // --- Shared Footer ---
    const footerHTML = `
    <footer class="site-footer">
        <div class="container">
            <div class="footer-grid">
                <div class="footer-brand">
                    <div class="logo-text">
                        stackly
                    </div>
                    <p>Discover thousands of books across all categories. Find your favorites and get them delivered to your door.</p>
                </div>
                
                <div class="footer-links">
                    <h4>Quick Links</h4>
                    <ul>
                        <li><a href="index.html">Home</a></li>
                        <li><a href="about.html">About Us</a></li>
                        <li><a href="books.html">Browse Books</a></li>
                        <li><a href="services.html">Our Services</a></li>
                    </ul>
                </div>
                
                <div class="footer-links">
                    <h4>Support</h4>
                    <ul>
                        <li><a href="contact.html">Contact Us</a></li>
                        <li><a href="404.html">FAQ</a></li>
                        <li><a href="404.html">Shipping Policy</a></li>
                        <li><a href="404.html">Returns</a></li>
                    </ul>
                </div>

                <div class="footer-links">
                    <h4>Account</h4>
                    <ul>
                        <li><a href="login.html">Login / Register</a></li>
                        <li><a href="userdashboard.html">My Dashboard</a></li>
                        <li><a href="admindashboard.html">Admin Portal</a></li>
                    </ul>
                </div>
            </div>
            
            <div class="footer-bottom">
                &copy; ${new Date().getFullYear()} Stackly. All Rights Reserved.
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
    
    const activeNavId = navIdMap[currentPage];
    if (activeNavId) {
        // Wait a small tick to ensure the DOM is updated after outerHTML swap
        setTimeout(() => {
            const activeLink = document.getElementById(activeNavId);
            if (activeLink) activeLink.classList.add('active');
        }, 0);
    }
    
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
