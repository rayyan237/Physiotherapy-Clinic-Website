/* faq.js */

(function initFaqModule() {
  const faqSection = document.getElementById('clinic-faq');
  if (!faqSection) return;

  const faqItems = faqSection.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const trigger = item.querySelector('.faq-trigger');
    const content = item.querySelector('.faq-content');

    trigger.addEventListener('click', () => {
      const isActive = item.classList.contains('is-active');

      // Close all other open items first
      faqItems.forEach(otherItem => {
        otherItem.classList.remove('is-active');
        otherItem.querySelector('.faq-trigger').setAttribute('aria-expanded', 'false');
        otherItem.querySelector('.faq-content').style.maxHeight = '0px';
      });

      // If the clicked item was not active, open it
      if (!isActive) {
        item.classList.add('is-active');
        trigger.setAttribute('aria-expanded', 'true');
        
        // Calculate the exact scroll height to animate smoothly
        content.style.maxHeight = content.scrollHeight + "px";
      }
    });
  });

  // Automatically recalculate heights on window resize to prevent text cut-offs
  window.addEventListener('resize', () => {
    const activeItem = faqSection.querySelector('.faq-item.is-active');
    if (activeItem) {
      const content = activeItem.querySelector('.faq-content');
      content.style.maxHeight = 'none'; // Temporarily unset to get natural height
      const newHeight = content.scrollHeight;
      content.style.maxHeight = newHeight + "px";
    }
  });

})();