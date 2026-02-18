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

// GSAP Hover Animations
document.addEventListener('DOMContentLoaded', () => {
  if (typeof gsap !== 'undefined') {
    // Nav links and dropbtn
    const navItems = document.querySelectorAll('nav a, .dropbtn');
    navItems.forEach(item => {
      item.addEventListener('mouseenter', () => {
        gsap.to(item, {
          duration: 0.3,
          y: -2,
          color: '#aaa',
          ease: 'power2.out'
        });
      });
      item.addEventListener('mouseleave', () => {
        gsap.to(item, {
          duration: 0.3,
          y: 0,
          color: '#fff',
          ease: 'power2.out'
        });
      });
    });

    // Project cards
    const projects = document.querySelectorAll('.project');
    projects.forEach(project => {
      project.addEventListener('mouseenter', () => {
        gsap.to(project, {
          duration: 0.4,
          scale: 1.02,
          backgroundColor: 'rgba(255, 255, 255, 0.1)',
          borderColor: '#aaa',
          ease: 'power2.out'
        });
      });
      project.addEventListener('mouseleave', () => {
        gsap.to(project, {
          duration: 0.4,
          scale: 1,
          backgroundColor: 'transparent',
          borderColor: '#fff',
          ease: 'power2.out'
        });
      });
    });

    // General links in content, footer and dropdown
    const generalLinks = document.querySelectorAll('.content a, footer a, .dropdown-content a');
    generalLinks.forEach(link => {
      // Skip project links as they contain the project card
      if (link.classList.contains('project-link')) return;

      link.addEventListener('mouseenter', () => {
        gsap.to(link, {
          duration: 0.3,
          backgroundColor: '#fff',
          color: '#000',
          ease: 'power2.out'
        });
      });
      link.addEventListener('mouseleave', () => {
        gsap.to(link, {
          duration: 0.3,
          backgroundColor: 'transparent',
          color: '#fff',
          ease: 'power2.out'
        });
      });
    });
  }
});
