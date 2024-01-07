// Required the necessary Node.js modules and Discord.js classes
const fs = require('node:fs');  // File system module
const path = require('node:path');  // Path module
const { Client, Collection, Events, GatewayIntentBits } = require('discord.js');  // Discord.js classes
const { token } = require('./config.json');  // Import bot token from config file

// Create a new instance of the Discord client
const client = new Client({ intents: [GatewayIntentBits.Guilds] });  // Client instance with specified intents
client.commands = new Collection();  // Create a Collection to store commands

// Define the path to the 'commands' folder and get a list of subfolders (categories)
const foldersPath = path.join(__dirname, 'commands');
const commandFolders = fs.readdirSync(foldersPath);

// Loop through each subfolder (category) in the 'commands' folder
for (const folder of commandFolders) {
    const commandsPath = path.join(foldersPath, folder);
    const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));

    // Loop through each command file in the current subfolder
    for (const file of commandFiles) {
        const filePath = path.join(commandsPath, file);
        const command = require(filePath);

        // Check if the required properties ('data' and 'execute') are present in the command
        if ('data' in command && 'execute' in command) {
            // Set a new item in the Collection with the key as the command name and the value as the exported module
            client.commands.set(command.data.name, command);
        } else {
            // Log a warning if the command is missing required properties
            console.log(`[WARNING] The command at ${filePath} is missing a required "data" or "execute" property.`);
        }
    }
}

// Event: When the client is ready, run this code (only once)
client.on(Events.InteractionCreate, async interaction => {

    // Check if the interaction is a chat command
    if (!interaction.isChatInputCommand()) return;

    // Get the command based on the interaction's command name
    const command = interaction.client.commands.get(interaction.commandName);

    // If the command is not found, log an error
    if (!command) {
        console.error(`No command matching ${interaction.commandName} was found.`);
        return;
    }

    // Try to execute the command, handle errors if any
    try {
        await command.execute(interaction);
    } catch (error) {
        console.error(error);

        // Respond with an error message if possible, otherwise reply with a generic error
        if (interaction.replied || interaction.deferred) {
            await interaction.followUp({ content: 'There was an error while executing this command!', ephemeral: true });
        } else {
            await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
        }
    }
});

// Login to Discord with your client's token
client.login(token);
