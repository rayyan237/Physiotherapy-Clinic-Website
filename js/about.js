/* js/about.js */

document.addEventListener("DOMContentLoaded", function() {
  const animatedElements = document.querySelectorAll('.reveal-on-scroll, .bento-cell');

  // 1. Setup the Intersection Observer (Your existing code)
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.15 
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target); 
      }
    });
  }, observerOptions);

  animatedElements.forEach(el => observer.observe(el));

  // 2. NEW: Show More Button Logic
  const showMoreBtn = document.getElementById('show-more-btn');
  const hiddenItems = document.querySelectorAll('.hidden-item');

  if (showMoreBtn) {
    showMoreBtn.addEventListener('click', function() {
      hiddenItems.forEach(item => {
        // Remove the tailwind 'hidden' class to render the element in the grid
        item.classList.remove('hidden');
        
        // Force the observer to watch the newly revealed item so it animates in properly
        observer.observe(item);
      });

      // Hide the button permanently since all photos are now loaded
      this.style.display = 'none';
    });
  }
});