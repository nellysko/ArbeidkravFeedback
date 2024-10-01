const woodSound = new Audio('./audio/woodChop.mp3')
const mineSound = new Audio('./audio/mineSound.mp3')
const goldSound = new Audio('./audio/caChing.mp3')

function updateResourceDisplay() {
    document.getElementById('goldCoinCount').textContent = localStorage.getItem('gold') || 0;
    document.getElementById('metalCount').textContent = localStorage.getItem('metal') || 0;
    document.getElementById('woodCount').textContent = localStorage.getItem('wood') || 0;
}

function gatherResource(resource, amount) {
    let currentCount = parseInt(localStorage.getItem(resource)) || 0;
    currentCount += amount;
    localStorage.setItem(resource, currentCount);
    updateResourceDisplay();
}

function mineResources() {
    const randomAmount = Math.floor(Math.random() * 10) + 1;  
    const chance = Math.random(); 

    if (chance < 0.75) {
        gatherResource('metal', randomAmount); 
        mineSound.play()
    } else {
        gatherResource('gold', randomAmount); 
        goldSound.play()  
    }
    
}

function gatherWood() {
    const randomAmount = Math.floor(Math.random() * 10) + 1;  
    gatherResource('wood', randomAmount);

    woodSound.play()
}

window.onload = function() {
    updateResourceDisplay();
    document.getElementById('mine').addEventListener('click', mineResources);
            document.getElementById('forest').addEventListener('click', gatherWood);
        };


