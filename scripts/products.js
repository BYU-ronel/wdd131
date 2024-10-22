// Get the current year and last modified date
const yearElement = document.getElementById('year');
const lastModifiedElement = document.getElementById('last-modified');

const date = new Date();
yearElement.textContent = date.getFullYear();
lastModifiedElement.textContent = `Last Modified: ${date.toLocaleDateString()}`;

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

  const ratingContainer = document.getElementById('rating');

  // Populate the product select options
  const productSelect = document.getElementById('productName');
  products.forEach(product => {
      const option = document.createElement('option');
      option.value = product;
      option.textContent = product;
      productSelect.appendChild(option);
  });

  // Populate rating options
for (let i = 1; i <= 5; i++) {
  const radio = document.createElement('input');
  radio.type = 'radio';
  radio.id = `rating${i}`;
  radio.name = 'rating';
  radio.value = i;
  const label = document.createElement('label');
  label.htmlFor = `rating${i}`;
  label.textContent = i;
  ratingContainer.appendChild(radio);
  ratingContainer.appendChild(label);
}