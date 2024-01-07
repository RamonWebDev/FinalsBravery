const { SlashCommandBuilder } = require('discord.js');
const build = {
    "Light": {
      "Specializations": ["Cloaking Device", "Evasive Dash", "Grappling Hook"],
      "Weapon": ["V9S", "XP-54", "M11", "Throwing Knives", "SH1900", "SR-84", "LH1", "Sword", "Dagger"],
      "Gadgets": ["Breach Charge", "Flashbang", "Frag Grenade", "Gas Grenade", "Goo Grenade", "Pyro Grenade", "Thermal Vision", "Glitch Grenade", "Motion Sensor", "Smoke Grenade", "Stun Gun", "Vanishing Bomb"],
      },
    "Medium": {
      "Specializations": ["Guardian Turret", "Healing Beam", "Recon Senses"],
      "Weapon": ["AKM", "CL-40", "FCAR", "Model 1887", "R.357", "Riot Shield"],
      "Gadgets": ["Flashbang", "Frag Grenade", "Gas Grenade", "Goo Grenade", "Pyro Grenade", "APS Turret", "Defibrillator", "Explosive Mine", "Gas Mine", "Glitch Trap", "Jump Pad","Sonar Grenade", "Tracking Dart", "Zipline"],
    },
    "Heavy": {
      "Specializations": ["Charge'N'Slam", "Goo Gun", "Mesh Shield"],
      "Weapon": ["Flamethrower", "Lewis Gun", "M32GL", "M60", "SA1216", "Sledgehammer"],
      "Gadgets": ["Flashbang", "Frag Grenade", "Gas Grenade", "Goo Grenade", "Pyro Grenade", "Barricade", "C4", "Dome Shield", "Explosive Mine", "Pyro Mine", "RPG-7"],
      },   

    }


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
    
            // Send the random loadout as a reply
            await interaction.reply(`Your random loadout:\nCategory: ${randomCategory}\nSpecialization: ${randomSpec}\nWeapon: ${randomWeapon}\nGadgets: ${randomGadgets.join(', ')}`);
        },
    };