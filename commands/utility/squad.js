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
            const randomSpec = specializations[Math.floor(Math.random() * specializations.length)];

            // Get a random weapon from the chosen category
            const weapons = build[randomCategory].Weapon;
            const randomWeapon = weapons[Math.floor(Math.random() * weapons.length)];

            // Get three random gadgets from the chosen category
            const gadgets = build[randomCategory].Gadgets;
            const randomGadgets = [];
            for (let i = 0; i < 3; i++) {
                const randomGadget = gadgets[Math.floor(Math.random() * gadgets.length)];
                randomGadgets.push(randomGadget);
            }

            // Store the random loadout details
            randomLoadouts.push(`Random Loadout ${count + 1}:\nCategory: ${randomCategory}\nSpecialization: ${randomSpec}\nWeapon: ${randomWeapon}\nGadgets: ${randomGadgets.join(', ')}`);
        }

        // Send a single reply with all three random loadouts
        await interaction.reply(randomLoadouts.join('\n\n'));
    },
};