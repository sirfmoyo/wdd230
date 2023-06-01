// Function to handle the intersection changes
function handleIntersection(entries, observer) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        // Replace placeholder with the real image
        var img = entry.target.querySelector('img');
        img.src = img.dataset.src;
        img.classList.add('loaded');
        observer.unobserve(entry.target);
      }
    });
  }
  
  // Create an instance of IntersectionObserver
  var observer = new IntersectionObserver(handleIntersection);
  
  // Find all the image elements
  var images = document.querySelectorAll('.image');
  
  // Add the images to the IntersectionObserver
  images.forEach(function(image) {
    observer.observe(image);
  });
  