/* conditions.js */

(function initConditionsModule() {
  const conditionsSection = document.getElementById('clinic-conditions');
  if (!conditionsSection) return;

  const conditionCards = conditionsSection.querySelectorAll('.condition-card');

  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Find the index of the card to create a staggered delay
        const cardArray = Array.from(conditionCards);
        const index = cardArray.indexOf(entry.target);
        
        // Add a slight delay based on the card's position (max 10 rows to prevent infinite delay)
        const delay = (index % 14) * 50; 
        entry.target.style.transitionDelay = `${delay}ms`;
        
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  conditionCards.forEach(card => observer.observe(card));

})();