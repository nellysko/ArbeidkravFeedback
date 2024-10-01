// Informationbase for animals

const AnimalsModule = ( () => {

    const animals = [
        {
            id: 9,
            race: "Elephant",
            priceGold: 125,
            image: "images/elephant.png"
        },
        {
            id: 10,
            race: "Horse",
            priceGold: 75,
            image: "images/horse.png"

        }
    ];

    const getAllAnimals = () => structuredClone(animals);

    return {getAllAnimals};

})();

export default AnimalsModule;