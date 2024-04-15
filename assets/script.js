const arrow = document.getElementById('arrow');

// scroll to top on click
arrow.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

const fadeInAnimationVariants = {
    initial: {
        opacity: 0,
        y: 100,
    },
    animate: (index) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: 0.1 * index,
        }
    })
};

//  Fade in animation for project elements on the home
document.addEventListener("DOMContentLoaded", function() {
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          const targetElement = entry.target;
          let animationSettings = fadeInAnimationVariants.animate(index);
          targetElement.style.opacity = animationSettings.opacity;
          targetElement.style.transform = `translateY(${animationSettings.y}px)`;
          targetElement.style.transitionDelay = `${animationSettings.transition.delay}s`;
  
          observer.unobserve(targetElement);
        }
      });
    }, {
      rootMargin: '0px',
      threshold: 0.5
    });
  
    document.querySelectorAll('.fade-in-section').forEach((section, index) => {
      observer.observe(section);
    });
  });
