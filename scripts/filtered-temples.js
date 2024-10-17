

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


function toggleActive(element) {...
}

const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
    templeName: "Urdaneta City Philippines",
    location: "Urdaneta City, Philippines",
    dedicated: "2024, April, 28",
    area: 32604,
    imageUrl:
    "https://churchofjesuschristtemples.org/urdaneta-philippines-temple/photographs/#Official-4"
  },
  {
    templeName: "Manila Philippines",
    location: "Quezon City, Philippines",
    dedicated: "1984, September, 25-27",
    area: 26683,
    imageUrl:
    "https://churchofjesuschristtemples.org/manila-philippines-temple/photographs/#Gallery-3"
  },
  {
    templeName: "Cebu City Philippines",
    location: "Cebu City, Philippines",
    dedicated: "2010, June, 13",
    area: 29556,
    imageUrl:
    "https://churchofjesuschristtemples.org/cebu-city-philippines-temple/photographs/#Official-4"
  }
];

