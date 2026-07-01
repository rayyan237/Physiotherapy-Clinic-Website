/* navbar.js */

(function initNavbarModule() {
  const navbarComponent = document.getElementById('clinic-navbar');
  if (!navbarComponent) return;

  const toggleBtn = navbarComponent.querySelector('#mobile-menu-btn');
  const mobileMenu = navbarComponent.querySelector('#mobile-menu');
  const iconMenu = navbarComponent.querySelector('#nav-icon-menu');
  const iconClose = navbarComponent.querySelector('#nav-icon-close');

  if (toggleBtn && mobileMenu) {
    toggleBtn.addEventListener('click', () => {
      const isExpanded = toggleBtn.getAttribute('aria-expanded') === 'true';
      
      // Toggle accessibility state
      toggleBtn.setAttribute('aria-expanded', !isExpanded);
      
      // Toggle visibility classes
      mobileMenu.classList.toggle('hidden');
      iconMenu.classList.toggle('hidden');
      iconClose.classList.toggle('hidden');
    });
  }
})();