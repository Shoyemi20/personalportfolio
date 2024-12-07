
document.addEventListener('DOMContentLoaded', () => {
    console.log('Website is loaded and ready!');
});

const scrollTopButton = document.getElementById('scrollTop');

window.addEventListener('scroll', () => {
    scrollTopButton.style.display = window.scrollY > 300 ? 'block' : 'none';
});

scrollTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

const text = "Frontend Developer";
let index = 0;

function typeEffect() {
    if (index < text.length) {
        document.querySelector('header p').textContent += text[index];
        index++;
        setTimeout(typeEffect, 100);
    }
}

document.addEventListener('DOMContentLoaded', typeEffect);

const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightboxImage');
const closeLightbox = document.getElementById('closeLightbox');

document.querySelectorAll('#gallery img').forEach(img => {
    img.addEventListener('click', () => {
        lightbox.style.display = 'flex';
        lightboxImage.src = img.src;
    });
});

closeLightbox.addEventListener('click', () => {
    lightbox.style.display = 'none';
});
