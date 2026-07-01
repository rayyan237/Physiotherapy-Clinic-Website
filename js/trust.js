/* trust.js */

(function initTrustModule() {
  const trustSection = document.getElementById('clinic-trust');
  if (!trustSection) return;

  // Select elements to animate
  const trustContent = trustSection.querySelector('.trust-content');
  const trustCards = trustSection.querySelectorAll('.trust-card');

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

  // Observe the left text column
  if (trustContent) observer.observe(trustContent);

  // Observe each card in the grid
  trustCards.forEach(card => observer.observe(card));

})();