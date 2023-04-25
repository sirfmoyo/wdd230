// Get the current year
const currentYear = new Date().getFullYear();

// Set the current year in the footer
document.getElementById('current-year').textContent = currentYear;

// Get the last modified date of the current page
const lastModified = new Date(document.lastModified);

// Format the last modified date as a string
const lastModifiedString = `${lastModified.toLocaleDateString()} at ${lastModified.toLocaleTimeString()}`;

// Set the last modified date in the footer
document.getElementById('last-modified').textContent = lastModifiedString;

