// window.addEventListener('DOMContentLoaded', function() {
//   var images = document.querySelectorAll('.image-container img');
//   var options = {
//     rootMargin: '0px',
//     threshold: 0.1
//   };
  
//   function onIntersection(entries) {
//     entries.forEach(function(entry) {
//       if (entry.intersectionRatio > 0) {
//         entry.target.src = entry.target.dataset.src;
//         entry.target.classList.add('loaded');
//         observer.unobserve(entry.target);
//       }
//     });
//   }
  
//   var observer = new IntersectionObserver(onIntersection, options);
  
//   images.forEach(function(image) {
//     observer.observe(image);
//   });
  
//   var lastVisit = localStorage.getItem('lastVisit');
//   if (lastVisit) {
//     var daysSinceVisit = Math.round((Date.now() - lastVisit) / (1000 * 60 * 60 * 24));
//     var visitMessage = 'Welcome back! It has been ' + daysSinceVisit + ' days since your last visit.';
//     document.querySelector('#visit-message').textContent = visitMessage;
//   }
  
//   localStorage.setItem('lastVisit', Date.now());
// });



    document.addEventListener("DOMContentLoaded", function() {
      // Lazy loading images when user scrolls
      var images = document.querySelectorAll(".image-container .image img");
      var options = {
        rootMargin: "0px",
        threshold: 0.1
      };

      var lazyLoad = function(entries, observer) {
        entries.forEach(function(entry) {
          if (entry.isIntersecting) {
            var image = entry.target;
            image.src = image.dataset.src;
            image.classList.add("loaded");
            observer.unobserve(image);
          }
        });
      };

      var observer = new IntersectionObserver(lazyLoad, options);
      images.forEach(function(image) {
        observer.observe(image);
      });

      // Track user visits using local storage
      var lastVisit = localStorage.getItem("lastVisit");
      var today = new Date().toLocaleDateString();
      if (lastVisit) {
        var daysPassed = Math.floor((Date.parse(today) - Date.parse(lastVisit)) / (1000 * 60 * 60 * 24));
        document.getElementById("visit-info").textContent = "Days since last visit: " + daysPassed;
      }
      localStorage.setItem("lastVisit", today);
    });
  