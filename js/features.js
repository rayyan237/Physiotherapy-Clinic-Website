/* features.js */

(function initFeaturesModule() {
  const featuresSection = document.getElementById('clinic-features');
  if (!featuresSection) return;

  const featureCards = featuresSection.querySelectorAll('.feature-card');

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

  featureCards.forEach(card => observer.observe(card));

})();