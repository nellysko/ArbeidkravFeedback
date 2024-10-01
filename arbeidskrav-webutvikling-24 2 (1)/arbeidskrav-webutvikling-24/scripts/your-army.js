

document.addEventListener('DOMContentLoaded', () => {
    const warriorsContainer = document.querySelector(".warriorsDisplay");
    const machinesContainer = document.querySelector(".machinesDisplay");
    const animalsContainer = document.querySelector(".animalsDisplay");
    const searchInput = document.getElementById("searchInput");

    function updateResourceDisplay() {
        document.getElementById('goldCoinCount').textContent = localStorage.getItem('gold') || 0;
        document.getElementById('metalCount').textContent = localStorage.getItem('metal') || 0;
        document.getElementById('woodCount').textContent = localStorage.getItem('wood') || 0;
    }
    updateResourceDisplay();

    // Log containers to ensure they are selected
    console.log(warriorsContainer, machinesContainer, animalsContainer);

    const purchasedItems = JSON.parse(localStorage.getItem("purchasedItems")) || [];

    // Log purchased items to ensure data is retrieved correctly
    console.log("Purchased items:", purchasedItems);

    if (purchasedItems.length === 0) {
        console.log("No items found in localStorage.");
    }
    
    // Allows the user to search by item name ex. 'Giant'
    const searchByType = (filter = "") => {
        warriorsContainer.innerHTML = '';
        machinesContainer.innerHTML = '';
        animalsContainer.innerHTML = '';
        
        purchasedItems.forEach(item => {
            // Create a new div for each item
            if (filter.length === 0 || item.name.toLowerCase().includes(filter.toLowerCase())) {
                const itemElement = document.createElement("div");
                itemElement.classList.add("itemBox");
                itemElement.innerHTML = `
                    <img src="${item.image}" alt="${item.name} image" class="armyImg">
                    `;
                    
                // Append the item to the correct section based on its type
                if (item.type === 'warrior') {
                    warriorsContainer.appendChild(itemElement);
                } else if (item.type === 'machine') {
                    machinesContainer.appendChild(itemElement);
                } else if (item.type === 'animal') {
                    animalsContainer.appendChild(itemElement);
                }
            }
            console.log("Appending item:", item);
        });
    };


    searchByType();

    searchInput.addEventListener('input', () => {
        searchByType(searchInput.value);
    });
    

});


