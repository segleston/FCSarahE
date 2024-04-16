const arrow = document.getElementById('arrow');

// Scroll to top on click
arrow.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
// Function to handle fade-in animation
function fadeIn(element) {
  element.style.opacity = 0;
  element.style.transform = 'translateY(100px)';
  element.style.transition = 'opacity 0.5s ease-out, transform 0.5s ease-out';

  // Trigger the animation when the element is intersecting
  const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              element.style.opacity = 1;
              element.style.transform = 'translateY(0)';
              observer.unobserve(entry.target);
          }
      });
  }, {
      threshold: 0.5
  });

  observer.observe(element);
}

// Apply fade-in animation to elements with the class 'fade-in-section'
document.addEventListener("DOMContentLoaded", function() {
  const fadeInSectionElements = document.querySelectorAll('.fade-in-section');
  fadeInSectionElements.forEach(fadeIn);
});


