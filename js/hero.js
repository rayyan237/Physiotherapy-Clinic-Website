/* hero.js 
  Self-contained module for Hero Section interactivity
*/

(function initHeroModule() {
  // Scope all selections to the hero component ID
  const heroSection = document.getElementById('clinic-hero');
  
  // Abort execution if the component isn't on the current page
  if (!heroSection) return;

  const primaryBtn = heroSection.querySelector('.btn-primary');
  const whatsappBtn = heroSection.querySelector('.btn-whatsapp');

  // Modular event tracking function
  function trackClick(eventName) {
    // Placeholder for future analytics integration
    console.log(`[Hero Module] Action: ${eventName}`);
  }

  // Attach isolated event listeners
  if (primaryBtn) {
    primaryBtn.addEventListener('click', () => {
      trackClick('Book Appointment Clicked');
    });
  }

  if (whatsappBtn) {
    whatsappBtn.addEventListener('click', () => {
      trackClick('WhatsApp Button Clicked');
    });
  }

})();