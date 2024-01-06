const { SlashCommandBuilder } = require('discord.js') //getting slashCommandBuilder class 

module.exports = {
    data: new SlashCommandBuilder()//creating object
        .setName('ping')
        .setDescription('Replies with Pong'),
        async execute(interaction){
            await interaction.reply('Pong!');
        },  
}