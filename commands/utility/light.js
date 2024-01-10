const { SlashCommandBuilder } = require('discord.js');
const build = require('./build.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('light')
        .setDescription('Get a random Light loadout'),

    async execute(interaction) {
        // Get the 'light' category
        const lightCategory = 'Light';

        // Get a random specialization from the 'light' category
        const specializations = build[lightCategory].Specializations;
        const randomSpec = specializations[Math.floor(Math.random() * specializations.length)];

        // Get a random weapon from the 'light' category
        const weapons = build[lightCategory].Weapon;
        const randomWeapon = weapons[Math.floor(Math.random() * weapons.length)];

        // Get three random gadgets from the 'light' category
        const gadgets = build[lightCategory].Gadgets;
        const randomGadgets = [];
        for (let i = 0; i < 3; i++) {
            const randomGadget = gadgets[Math.floor(Math.random() * gadgets.length)];
            randomGadgets.push(randomGadget);
        }
        const loadoutMessage = `Your random loadout:
        Category: ${lightCategory}
        Specialization: ${randomSpec}
        Weapon: ${randomWeapon}
        Gadgets: ${randomGadgets.join(', ')}`;

        // Send the random loadout as a reply
        await interaction.reply(loadoutMessage);
    },
};
