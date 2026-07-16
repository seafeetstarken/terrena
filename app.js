document.addEventListener('DOMContentLoaded', () => {

    /* ==========================================================================
       SIDEBAR SCROLL SPY & NAVIGATION
       ========================================================================== */
    const mainContent = document.querySelector('.main-content');
    const navLinks = document.querySelectorAll('.nav-link');
    const docSections = document.querySelectorAll('.doc-section');

    // Intercept clicks on links for custom smooth scrolling inside the scrollable main container
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });

                // Update active class immediately on click
                navLinks.forEach(l => l.classList.remove('active'));
                link.classList.add('active');
            }
        });
    });

    // Scrollspy: update active menu item based on current scrolled position
    if (mainContent) {
        mainContent.addEventListener('scroll', () => {
            let currentActiveSectionId = '';

            docSections.forEach(section => {
                const sectionTop = section.offsetTop;
                // Add a small threshold (150px) to make activation feel responsive
                if (mainContent.scrollTop >= (sectionTop - 150)) {
                    currentActiveSectionId = section.getAttribute('id');
                }
            });

            if (currentActiveSectionId) {
                navLinks.forEach(link => {
                    const href = link.getAttribute('href');
                    if (href === `#${currentActiveSectionId}`) {
                        link.classList.add('active');
                    } else {
                        link.classList.remove('active');
                    }
                });
            }
        });
    }


});
