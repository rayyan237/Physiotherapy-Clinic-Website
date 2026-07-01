/* cta.js */

(function initCtaModule() {
  const ctaSection = document.getElementById('clinic-cta');
  if (!ctaSection) return;

  const ctaContent = ctaSection.querySelector('.cta-content');

  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.2 
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target); 
      }
    });
  }, observerOptions);

  if (ctaContent) observer.observe(ctaContent);

})();