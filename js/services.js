/* services.js */

(function initServicesModule() {
  const servicesSection = document.getElementById('clinic-services');
  if (!servicesSection) return;

  const serviceCards = servicesSection.querySelectorAll('.service-card');

  // Trigger animation when 15% of the card enters the viewport
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.15
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Apply the visibility class to trigger the CSS transition
        entry.target.classList.add('is-visible');
        
        // Stop observing this element once animated
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  serviceCards.forEach(card => observer.observe(card));

})();