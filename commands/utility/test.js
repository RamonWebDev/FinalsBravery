const { SlashCommandBuilder } = require('discord.js') //getting slashCommandBuilder class 

module.exports = {
    data: new SlashCommandBuilder()//creating object
        .setName('hi')
        .setDescription('Replies with hi'),
        async execute(interaction){
            await interaction.reply('Hello!');
        },  
}