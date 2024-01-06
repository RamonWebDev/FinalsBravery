//Required the necessary discord.js classes
const { Client, GatewayIntentBits } = require('discord.js');
const { token } = require('./config.json');
const { request } = require('undici');

//Create a New Client instance 
const client = new Client({ intents: [GatewayIntentBits.Guilds]});

//When Client is ready, run this code (only once)
client.once('ready', ()=> {
    console.log('Ready!');
});

async function getJSONResponse(body){//turns JSON into string
    let fullBody = '';

    for await(const data of body){ //loop through data
        fullBody += data.toString();
    }

    return JSON.parse(fullBody)
}

client.on('interactionCreate', async interaction => {
    if (!interaction.isChatInputCommand()) return;
    const { commandName } = interaction;
    
    if(commandName === 'cat'){
        const catResult = await request('https://aws.random.cat/meow');
        const { file } = await getJSONResponse(catResult.url);
        interaction.editReply({files: [file]})
    }
});

//Login to Discord with your client's token 
client.login(token);