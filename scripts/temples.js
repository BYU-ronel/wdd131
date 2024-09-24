

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

// Update the footer copyright year and date last modified
document.querySelector('footer p:first-child').textContent = `© ${currentYear} 🌴 Ronel Espaldon, 🌴 Philippines`;
document.querySelector('footer p:nth-child(2)').textContent = `Last Modified: ${lastModified}`;

// Add event listener to hamburger button
const hamburgerButton = document.querySelector('.hamburger');
hamburgerButton.addEventListener('click', toggleNavMenu);

// Function to toggle navigation menu
function toggleNavMenu() {
  const navMenu = document.querySelector('nav ul');
  navMenu.classList.toggle('show');
  hamburgerButton.textContent = navMenu.classList.contains('show') ? 'X' : '';
}

// Add hamburger button to navigation menu
const navMenu = document.querySelector('nav');
const hamburgerHTML = '<button class="hamburger"></button>';
navMenu.insertAdjacentHTML('afterbegin', hamburgerHTML);

// Hide navigation menu items in mobile view
const navItems = document.querySelectorAll('nav li');
navItems.forEach((item) => {
  item.style.display = 'none';
});

// Show navigation menu items when hamburger button is clicked
document.addEventListener('click', (e) => {
  if (e.target.classList.contains('hamburger')) {
    navItems.forEach((item) => {
      item.style.display = 'block';
    });
  }
});

// Media query to show hamburger button only in mobile view
const mediaQuery = window.matchMedia('(max-width: 767px)');
mediaQuery.addListener((e) => {
  if (e.matches) {
    hamburgerButton.style.display = 'block';
  } else {
    hamburgerButton.style.display = 'none';
  }
});