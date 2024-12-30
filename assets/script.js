document.addEventListener('DOMContentLoaded', function () {
    const links = document.querySelectorAll('nav a');
    const sections = document.querySelectorAll('.section');
    const defaultSection = document.querySelector('.default-section');

    function updateActiveLink() {
        links.forEach(link => link.classList.remove('active'));
        sections.forEach(section => section.style.display = 'none');

        const hash = window.location.hash || `#${defaultSection.id}`;
        const activeLink = document.querySelector(`nav a[href="${hash}"]`);
        const activeSection = document.querySelector(hash);

        if (activeLink) {
            activeLink.classList.add('active');
        }
        if (activeSection) {
            activeSection.style.display = 'block';
        }
    }

    window.addEventListener('hashchange', updateActiveLink);
    updateActiveLink();
});
