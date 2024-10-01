// Informationbase for army

const ArmyModule = ( () => {

     const warriors = [
        {
            id: 1,
            categoryName: "Spy",
            priceGold: 75,
            image: "images/warrior-1.jpg"
        },
        {
            id: 2,
            categoryName: "Giant",
            priceGold: 50,
            image: "images/warrior-2.jpg"
        },
        {
            id: 3,
            categoryName: "Axe Weilder",
            priceGold: 75,
            image: "images/warrior-3.jpg"
        },
        {
            id: 4,
            categoryName: "Thief",
            priceGold: 50,
            image: "images/warrior-4.jpg"
        },
        {
            id: 5,
            categoryName: "Assasin",
            priceGold: 100,
            image: "images/warrior-5.jpg"
        },
        {
            id: 6,
            categoryName: "General",
            priceGold: 150,
            image: "images/warrior-6.jpg"
        }
    ];

    const getAllWarriors = () => structuredClone(warriors);

    return {getAllWarriors};

})();

export default ArmyModule;