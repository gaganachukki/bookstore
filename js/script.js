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
        </div>
    </header>
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
                        <li><a href="#">FAQ</a></li>
                        <li><a href="#">Shipping Policy</a></li>
                        <li><a href="#">Returns</a></li>
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
