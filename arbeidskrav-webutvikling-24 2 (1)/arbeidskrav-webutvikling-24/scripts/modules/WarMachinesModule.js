// Informationbase for war machines

const WarMachinesModule = ( () => {

    const warMachines = [
        {
            id: 7,
            machineType: "Cannon",
            priceGold: 10,
            priceMetal: 150,
            priceWood: 50,
            image: "images/cannon.png"
        },
        {
            id: 8,
            machineType: "Catapult",
            priceGold: 5,
            priceMetal: 75,
            priceWood: 100,
            image: "images/catapult.png"
        }
    ];

    const getAllWarMachines = () => structuredClone(warMachines);

    return {getAllWarMachines};

})();

export default WarMachinesModule;