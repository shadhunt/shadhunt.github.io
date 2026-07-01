// Fade-in on scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.card, .section-title, .about-text p, .contact-wrap')
  .forEach(el => {
    el.classList.add('fade-in');
    observer.observe(el);
  });

// Stagger card animations
document.querySelectorAll('.card').forEach((card, i) => {
  card.style.transitionDelay = `${i * 0.07}s`;
});

// Nav shrink on scroll
const nav = document.querySelector('.nav');
window.addEventListener('scroll', () => {
  nav.style.padding = window.scrollY > 60
    ? '0.9rem 4rem'
    : '1.5rem 4rem';
});
