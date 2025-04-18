// Add animation to header
const header = document.querySelector('.animated-header');

window.addEventListener('load', () => {
    header.style.animation = 'slide-in 2s';
});

const readMoreLinks = document.querySelectorAll('.read-more-link');

readMoreLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const moreContent = link.parentNode.querySelector('.more-content');
        if (moreContent.style.display === 'none') {
            moreContent.style.display = 'block';
            link.textContent = 'Read Less';
        } else {
            moreContent.style.display = 'none';
            link.textContent = 'Read More';
        }
    });
});