/* testimonials.js */

(function initCarouselModule() {
  const container = document.getElementById('testimonial-carousel');
  if (!container) return;

  const cards = Array.from(container.querySelectorAll('.carousel-card'));
  const btnPrev = document.getElementById('carousel-prev');
  const btnNext = document.getElementById('carousel-next');
  
  let currentIndex = 0;
  const totalCards = cards.length;
  let autoPlayInterval;

  // Function to update the data-pos attributes on all cards
  function updateCarousel() {
    cards.forEach((card, index) => {
      // Reset position
      card.dataset.pos = "hidden";
      
      if (index === currentIndex) {
        card.dataset.pos = "center";
      } else if (index === (currentIndex - 1 + totalCards) % totalCards) {
        card.dataset.pos = "left";
      } else if (index === (currentIndex + 1) % totalCards) {
        card.dataset.pos = "right";
      }
    });
  }

  // Navigation Logic
  function nextCard() {
    currentIndex = (currentIndex + 1) % totalCards;
    updateCarousel();
  }

  function prevCard() {
    currentIndex = (currentIndex - 1 + totalCards) % totalCards;
    updateCarousel();
  }

  // Auto-play logic
  function startAutoPlay() {
    autoPlayInterval = setInterval(nextCard, 5000); // Swipe every 5 seconds
  }

  function stopAutoPlay() {
    clearInterval(autoPlayInterval);
  }

  // Event Listeners
  if (btnNext) btnNext.addEventListener('click', () => { nextCard(); stopAutoPlay(); startAutoPlay(); });
  if (btnPrev) btnPrev.addEventListener('click', () => { prevCard(); stopAutoPlay(); startAutoPlay(); });

  // Allow clicking a side card to bring it to center
  cards.forEach(card => {
    card.addEventListener('click', function() {
      const pos = this.dataset.pos;
      if (pos === "left") {
        prevCard();
        stopAutoPlay(); startAutoPlay();
      } else if (pos === "right") {
        nextCard();
        stopAutoPlay(); startAutoPlay();
      }
    });
  });

  // Pause on hover so the user can read the text
  container.addEventListener('mouseenter', stopAutoPlay);
  container.addEventListener('mouseleave', startAutoPlay);

  // Initialize
  updateCarousel();
  startAutoPlay();

})();