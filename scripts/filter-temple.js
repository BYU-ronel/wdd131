// Create a JavaScript array to store the temple data
const temples = [
    { id: 1, name: "Temple 1", age: "Old", size: "Large", image: "temple1.jpg" },
    { id: 2, name: "Temple 2", age: "New", size: "Small", image: "temple2.jpg" },
    { id: 3, name: "Temple 3", age: "Old", size: "Large", image: "temple3.jpg" },
    { id: 4, name: "Temple 4", age: "New", size: "Small", image: "temple4.jpg" },
    // ...
];

// Get the temple container element
const templeContainer = document.getElementById("temple-container");

// Loop through the temple data and create HTML elements for each card
temples.forEach((temple) => {
    const templeCard = document.createElement("div");
    templeCard.className = "temple-card";
    templeCard.innerHTML = `
        <img src="${temple.image}" alt="${temple.name}">
        <h2>${temple.name}</h2>
        <p>Age: ${temple.age}</p>
        <p>Size: ${temple.size}</p>
    `;
    templeContainer.appendChild(templeCard);
});