const { SlashCommandBuilder } = require('discord.js');
const build = require('./build.js');
    module.exports = {
        data: new SlashCommandBuilder()
            .setName('brave')
            .setDescription('Get a random loadout'),
    
        async execute(interaction) {
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
            //way to keep message simpler
            const loadoutMessage = `Your random loadout:
                Category: ${randomCategory}
                Specialization: ${randomSpec}
                Weapon: ${randomWeapon}
                Gadgets: ${randomGadgets.join(', ')}`;
    
            // Send the random loadout as a reply
            await interaction.reply(loadoutMessage);
        },
    };