const { SlashCommandBuilder } = require('discord.js');
const build = require('./build.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('medium')
        .setDescription('Get a random medium loadout'),

    async execute(interaction) {
        // Get the 'light' category
        const mediumCategory = 'medium';

        // Get a random specialization from the 'light' category
        const specializations = build[mediumCategory].Specializations;
        const randomSpec = specializations[Math.floor(Math.random() * specializations.length)];

        // Get a random weapon from the 'light' category
        const weapons = build[mediumCategory].Weapon;
        const randomWeapon = weapons[Math.floor(Math.random() * weapons.length)];

        // Get three random gadgets from the 'light' category
        const gadgets = build[mediumCategory].Gadgets;
        const randomGadgets = [];
        for (let i = 0; i < 3; i++) {
            const randomGadget = gadgets[Math.floor(Math.random() * gadgets.length)];
            randomGadgets.push(randomGadget);
        }

        // Send the random loadout as a reply
        await interaction.reply(`Your random loadout:\nCategory: ${mediumCategory}\nSpecialization: ${randomSpec}\nWeapon: ${randomWeapon}\nGadgets: ${randomGadgets.join(', ')}`);
    },
};
