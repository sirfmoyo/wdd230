// Get the current year
var currentYear = new Date().getFullYear();

// Get the last modified date of the HTML file
var lastModified = new Date(document.lastModified);

// Format the date as Wednesday, 24 July 2020
var options = {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'};
var formattedLastModified = lastModified.toLocaleDateString('en-US', options);

// Update the year and last modified date in the footer
document.getElementById("year").innerHTML = currentYear;
document.getElementById("last-modified").innerHTML = formattedLastModified;
document.getElementById("last-modified1").innerHTML = formattedLastModified;



// not so sure about this 

// Toggle menu items
document.getElementById("navbar-toggle").addEventListener("click", function() {
  var navbarMenu = document.getElementById("navbar-menu");
  if (navbarMenu.style.display === "flex") {
    navbarMenu.style.display = "none";
  } else {
    navbarMenu.style.display = "flex";
  }
});