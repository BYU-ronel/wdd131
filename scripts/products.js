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

const products = [
    {
      id: "fc-1888",
      name: "flux capacitor",
      averagerating: 4.5
    },
    {
      id: "fc-2050",
      name: "power laces",
      averagerating: 4.7
    },
    {
      id: "fs-1987",
      name: "time circuits",
      averagerating: 3.5
    },
    {
      id: "ac-2000",
      name: "low voltage reactor",
      averagerating: 3.9
    },
    {
      id: "jj-1969",
      name: "warp equalizer",
      averagerating: 5.0
    }
  ];

  // Populate the product select options
const productSelect = document.getElementById('productName');
products.forEach(product => {
    const option = document.createElement