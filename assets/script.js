// Select the arrow element
const arrow = document.getElementById('arrow');

// Add click event listener to the arrow
arrow.addEventListener('click', function() {
    // Scroll to the top of the page smoothly
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
