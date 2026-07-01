/* process.js */

(function initProcessModule() {
  const processSection = document.getElementById('clinic-process');
  if (!processSection) return;

  const processSteps = processSection.querySelectorAll('.process-step');

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

  processSteps.forEach(step => observer.observe(step));

})();