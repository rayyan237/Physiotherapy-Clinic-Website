/* js/contact.js */

document.addEventListener("DOMContentLoaded", function() {
  
  const animatedElements = document.querySelectorAll('.reveal-on-scroll');

  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.15 
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        // Stop observing to save performance once the animation fires
        observer.unobserve(entry.target); 
      }
    });
  }, observerOptions);

  animatedElements.forEach(el => observer.observe(el));

});