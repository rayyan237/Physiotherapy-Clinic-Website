/* js/appointment.js */

document.addEventListener("DOMContentLoaded", function() {
  
  const animatedElements = document.querySelectorAll('.reveal-on-scroll');

  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1 
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target); 
      }
    });
  }, observerOptions);

  animatedElements.forEach(el => observer.observe(el));

  const appointmentForm = document.getElementById('appointment-form');
  
  if (appointmentForm) {
    appointmentForm.addEventListener('submit', function(e) {
      e.preventDefault(); 
      
      const submitBtn = appointmentForm.querySelector('button[type="submit"]');
      const originalText = submitBtn.innerHTML;
      
      submitBtn.innerHTML = `
        <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white inline-block" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
        Processing...
      `;
      submitBtn.classList.add('opacity-80', 'cursor-not-allowed');
      submitBtn.disabled = true;
      
      setTimeout(() => {
        submitBtn.innerHTML = "Request Confirmed!";
        submitBtn.classList.replace('bg-primary', 'bg-green-600');
        submitBtn.classList.replace('hover:bg-primary-hover', 'hover:bg-green-700');
        appointmentForm.reset();
        
        setTimeout(() => {
          submitBtn.innerHTML = originalText;
          submitBtn.classList.replace('bg-green-600', 'bg-primary');
          submitBtn.classList.replace('hover:bg-green-700', 'hover:bg-primary-hover');
          submitBtn.classList.remove('opacity-80', 'cursor-not-allowed');
          submitBtn.disabled = false;
        }, 4000);
      }, 1500);

    });
  }
});