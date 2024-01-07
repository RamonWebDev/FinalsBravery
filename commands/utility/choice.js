const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('gif')
        .setDescription('Sends a random gif!')
        .addStringOption(option =>
            option.setName('category')
                .setDescription('The gif category')
                .setRequired(true)
                .addChoices(
                    { name: 'Funny', value: 'gif_funny' },
                    { name: 'Meme', value: 'gif_meme' },
                    { name: 'Movie', value: 'gif_movie' },
                )),
    async execute(interaction) {
        const category = interaction.options.getString('category');

        // Placeholder message while fetching a random gif (replace this with actual logic)
        await interaction.reply(`Fetching a random gif in the category: ${category}`);

        // Add logic to fetch a random gif based on the selected category
        // Replace the following line with your actual logic to send a random gif
        // For example, you can use a GIF API or a library to fetch a random gif URL
        const randomGifUrl = 'https://example.com/random-gif-url';

        // Send the actual random gif
        await interaction.followUp({ content: `Here's a random gif in the category: ${category}`, files: [randomGifUrl] });
    },
};