// Get the current year
const currentYear = new Date().getFullYear();

// Get the last modified date
const lastModified = document.lastModified;

// Get the footer paragraphs
const footerParagraphs = document.querySelectorAll('footer p');

// Set the copyright year in the first paragraph
footerParagraphs[0].textContent = `Copyright ${currentYear}`;

// Set the last modified date in the second paragraph
footerParagraphs[1].id = 'lastModified';
footerParagraphs[1].textContent = `Last modified: ${lastModified}`;