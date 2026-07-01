/* team.js */

(function initTeamGridModule() {
  const teamSection = document.getElementById('clinic-team');
  if (!teamSection) return;

  const teamCards = teamSection.querySelectorAll('.team-card');

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

  teamCards.forEach(card => observer.observe(card));

})();