const { SlashCommandBuilder } = require('discord.js');
const build = require('./build.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('bravesquad')
        .setDescription('Get 3 random loadouts'),

    async execute(interaction) {
        // Generate 3 random loadouts
        const randomLoadouts = [];
        for (let count = 0; count < 3; count++) {
            // Get a random category (light, medium, or heavy)
            const categories = Object.keys(build);
            const randomCategory = categories[Math.floor(Math.random() * categories.length)];

            // Get a random specialization from the chosen category
            const specializations = build[randomCategory].Specializations;
            const randomSpec = getRandomItemAndRemove(specializations);

            // Get a random weapon from the chosen category
            const weapons = build[randomCategory].Weapon;
            const randomWeapon = getRandomItemAndRemove(weapons);

            // Get three distinct random gadgets from the chosen category
            const gadgets = build[randomCategory].Gadgets;
            const randomGadgets = getRandomDistinctItems(gadgets, 3);

            // Store the random loadout details
            randomLoadouts.push(`Random Loadout ${count + 1}:\nCategory: ${randomCategory}\nSpecialization: ${randomSpec}\nWeapon: ${randomWeapon}\nGadgets: ${randomGadgets.join(', ')}`);
        }

        // Send a single reply with all three random loadouts
        await interaction.reply(randomLoadouts.join('\n\n'));
    },
};

// Function to get a random item from an array and remove it
function getRandomItemAndRemove(array) {
    const randomIndex = Math.floor(Math.random() * array.length);
    const selectedItem = array[randomIndex];
    array.splice(randomIndex, 1);
    return selectedItem;
}

// Function to get a specified number of distinct random items from an array
function getRandomDistinctItems(array, count) {
    const copyArray = [...array];
    const result = [];
    for (let i = 0; i < count && copyArray.length > 0; i++) {
        const randomIndex = Math.floor(Math.random() * copyArray.length);
        result.push(copyArray[randomIndex]);
        copyArray.splice(randomIndex, 1);
    }
    return result;
}
