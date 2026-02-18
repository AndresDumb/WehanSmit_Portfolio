// Initialize Lenis for smooth scrolling
let lenis;
if (typeof Lenis !== 'undefined') {
  lenis = new Lenis({
    autoRaf: true,
  });
}

// Intersection Observer for scroll-reveal animations
const observerOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('reveal-visible');
      // Stop observing after it's visible to save resources
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Select all sections and headers to reveal
document.querySelectorAll('section, header, nav, footer').forEach(el => {
  el.classList.add('reveal');
  observer.observe(el);
});

// Dropdown Logic
const dropdown = document.querySelector('.dropdown');
const dropbtn = document.querySelector('.dropbtn');
const dropdownLinks = document.querySelectorAll('.dropdown-content a');

if (dropbtn && dropdown) {
  dropbtn.addEventListener('click', (e) => {
    e.stopPropagation();
    dropdown.classList.toggle('show');
  });
}

dropdownLinks.forEach(link => {
  link.addEventListener('click', () => {
    dropdown.classList.remove('show');
  });
});

// Close dropdown when clicking outside
window.addEventListener('click', () => {
  if (dropdown && dropdown.classList.contains('show')) {
    dropdown.classList.remove('show');
  }
});
