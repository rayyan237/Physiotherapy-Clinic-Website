/* js/condition-logic.js */

document.addEventListener('DOMContentLoaded', () => {
  const params = new URLSearchParams(window.location.search);
  const conditionId = params.get('id');
  const data = clinicData.conditions[conditionId];

  if (data) {
    // 1. Inject Content
    document.getElementById('dynamic-title').textContent = data.title;
    document.getElementById('dynamic-subtitle').textContent = data.subtitle;
    document.getElementById('dynamic-description').textContent = data.description;
    document.getElementById('dynamic-treatment').textContent = data.treatment;

    // 2. Handle Image Loading gracefully
    const imgElement = document.getElementById('dynamic-image');
    imgElement.src = data.image;
    imgElement.alt = `${data.title} - Patient Treatment`;
    imgElement.onload = () => {
      imgElement.classList.remove('opacity-0');
      imgElement.classList.add('opacity-100');
    };

    // 3. Inject SEO & Open Graph Data dynamically
    const pageTitle = `${data.title} | [Your Clinic Name]`;
    const cleanDesc = data.description.substring(0, 155) + '...';

    document.getElementById('meta-title').textContent = pageTitle;
    document.getElementById('meta-description').setAttribute('content', cleanDesc);
    
    document.getElementById('og-title').setAttribute('content', pageTitle);
    document.getElementById('og-description').setAttribute('content', cleanDesc);
    document.getElementById('og-image').setAttribute('content', data.image);
    
  } else {
    // 4. 404 Fallback State
    document.getElementById('dynamic-title').textContent = "Treatment Not Found";
    document.getElementById('dynamic-subtitle').textContent = "We couldn't locate that specific condition.";
    document.getElementById('dynamic-description').innerHTML = "Please return to our <a href='index.html#clinic-conditions' class='text-blue-600 underline font-semibold'>home page</a> to view our full list of specialized treatments.";
    document.getElementById('dynamic-image').style.display = 'none';
  }
});