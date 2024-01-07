const { SlashCommandBuilder } = require('discord.js') //getting slashCommandBuilder class 

module.exports = {
    data: new SlashCommandBuilder()//creating object
        .setName('hi')
        .setDescription('Replies with hi'),
        async execute(interaction){
            await interaction.reply('Hello!');
        },  
}

const build = {
    "light": {
      "Specializations": ["Cloaking Device", "Evasive Dash", "Grappling Hook"],
      "Weapon": ["V9S", "XP-54", "M11", "Throwing Knives", "SH1900", "SR-84", "LH1", "Sword", "Dagger"],
      "Gadgets": ["Breach Charge", "Flashbang", "Frag Grenade", "Gas Grenade", "Goo Grenade", "Pyro Grenade", "Thermal Vision", "Glitch Grenade", "Motion Sensor", "Smoke Grenade", "Stun Gun", "Vanishing Bomb"],
      },
    "medium": {
      "Specializations": ["Guardian Turret", "Healing Beam", "Recon Senses"],
      "Weapon": ["AKM", "CL-40", "FCAR", "Model 1887", "R.357", "Riot Shield"],
      "Gadgets": ["Flashbang", "Frag Grenade", "Gas Grenade", "Goo Grenade", "Pyro Grenade", "APS Turret", "Defibrillator", "Explosive Mine", "Gas Mine", "Glitch Trap", "Jump Pad","Sonar Grenade", "Tracking Dart", "Zipline"],
    },
    "heavy": {
      "Specializations": ["Charge'N'Slam", "Goo Gun", "Mesh Shield"],
      "Weapon": ["Flamethrower", "Lewis Gun", "M32GL", "M60", "SA1216", "Sledgehammer"],
      "Gadgets": ["Flashbang", "Frag Grenade", "Gas Grenade", "Goo Grenade", "Pyro Grenade", "Barricade", "C4", "Dome Shield", "Explosive Mine", "Pyro Mine", "RPG-7"],
      },   

    }

