import ArmyModule from "./modules/armyModule.js";
import WarMachinesModule from "./modules/WarMachinesModule.js";
import AnimalsModule from "./modules/AnimalsModule.js";

function updateResourceDisplay() {
    document.getElementById('goldCoinCount').textContent = localStorage.getItem('gold') || 0;
    document.getElementById('metalCount').textContent = localStorage.getItem('metal') || 0;
    document.getElementById('woodCount').textContent = localStorage.getItem('wood') || 0;
}

function initializeShop() {
    const warriorSection = document.querySelector(".shopSection--1");
    const machineSection = document.querySelector(".shopSection--2");
    const animalsSection = document.querySelector(".shopSection--3");

    function purchase(event) {
        const button = event.target.closest('.buyButton');
        const priceWood = parseInt(button.dataset.priceWood, 10) || 0;
        const priceMetal = parseInt(button.dataset.priceMetal, 10) || 0;
        const priceGold = parseInt(button.dataset.priceGold, 10) || 0;

        let currentWood = parseInt(localStorage.getItem('wood'), 10) || 0;
        let currentMetal = parseInt(localStorage.getItem('metal'), 10) || 0;
        let currentGold = parseInt(localStorage.getItem('gold'), 10) || 0;

        if (currentGold >= priceGold && currentMetal >= priceMetal && currentWood >= priceWood) {
            currentGold -= priceGold;
            currentMetal -= priceMetal;
            currentWood -= priceWood;

            localStorage.setItem('gold', currentGold);
            localStorage.setItem('metal', currentMetal);
            localStorage.setItem('wood', currentWood);

            const itemId = button.dataset.id;
            let purchasedItem = {};

        // Determine item type and save corresponding data
        if (button.closest('.shopSection--1')) {
            // Warrior
            const warrior = ArmyModule.getAllWarriors().find(war => war.id == itemId);
            purchasedItem = { id: warrior.id, type: 'warrior', name: warrior.categoryName, image: warrior.image };
        } else if (button.closest('.shopSection--2')) {
           
            const machine = WarMachinesModule.getAllWarMachines().find(machine => machine.id == itemId);
            purchasedItem = { id: machine.id, type: 'machine', name: machine.machineType, image: machine.image };
        } else if (button.closest('.shopSection--3')) {
            // Animal
            const animal = AnimalsModule.getAllAnimals().find(animal => animal.id == itemId);
            purchasedItem = { id: animal.id, type: 'animal', name: animal.race, image: animal.image };
        }

        // Retrieve existing purchases from localStorage
        let purchases = JSON.parse(localStorage.getItem('purchasedItems')) || [];
        purchases.push(purchasedItem);

        // Store the updated array in localStorage
        localStorage.setItem('purchasedItems', JSON.stringify(purchases));

            updateResourceDisplay();
    
        } else {
            alert("Not enough resources!");
        }
    }


    function addEventListeners() {
        document.querySelectorAll('.buyButton').forEach(button => {
            button.addEventListener('click', purchase);
        });
    }


    function showAllWarriors() {
        const warriors = ArmyModule.getAllWarriors();

        let htmlTxt = "";

        warriors.forEach(warrior => {
            htmlTxt += `
                <article class="product-box col-sm-12">
                    <h3 class="category">${warrior.categoryName}</h3>
                    <img src="${warrior.image}" class="shopImg" alt="${warrior.categoryName} image">
                    <button class="buyButton" data-id="${warrior.id}" data-price-gold="${warrior.priceGold}">Buy ${warrior.priceGold}
                        <img src="images/gold-coin.png" style="height: 16px">
                    </button>
                </article>
            `;
        });

        warriorSection.innerHTML = htmlTxt;
    }

    function showMachines() {
        const machines = WarMachinesModule.getAllWarMachines();

        let htmlTxt = "";

        machines.forEach(machine => {
            htmlTxt += `
                <article class="product-box col-sm-12">
                    <h3 class="category">${machine.machineType}</h3>
                    <img src="${machine.image}" class="shopImg" alt="${machine.machineType} image">
                    <button class="buyButton buyButton--machine"
                    data-id="${machine.id}"
                    data-price-gold="${machine.priceGold}" 
                    data-price-metal="${machine.priceMetal}" 
                    data-price-wood="${machine.priceWood}">
                    Buy <br>
                    ${machine.priceGold} <img src="images/gold-coin.png" style="height: 16px"> <br>
                    ${machine.priceMetal} <img src="images/metal.png" style="height: 16px"> <br>
                    ${machine.priceWood} <img src="images/wood.png" style="height: 16px">
                    </button>
                </article>
            `;
        });

        machineSection.innerHTML = htmlTxt;
    }

    function showAnimals() {
        const animals = AnimalsModule.getAllAnimals();

        let htmlTxt = "";

        animals.forEach(animal => {
            htmlTxt += `
                <article class="product-box col-sm-12">
                    <h3 class="category">${animal.race}</h3>
                    <img src="${animal.image}" class="shopImg" alt="${animal.race} image">
                    <button class="buyButton" data-id="${animal.id}" data-price-gold="${animal.priceGold}" >Buy ${animal.priceGold}
                        <img src="images/gold-coin.png" style="height: 16px">
                    </button>
                </article>
            `;
        });

        animalsSection.innerHTML = htmlTxt;
    }

    showAllWarriors();
    showMachines();
    showAnimals();
    setTimeout(addEventListeners, 0);
    updateResourceDisplay();
}

document.addEventListener('DOMContentLoaded', initializeShop);
