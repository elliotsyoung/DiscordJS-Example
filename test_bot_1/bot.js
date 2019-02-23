const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require("fs");

const saveData = () => {
    //TO DO, WRITE CODE THAT SAVES THE NEW DATA INTO THE custom_data.json
    const data_to_write = JSON.stringify(temporary_data);
    fs.writeFileSync(__dirname + "/custom_data.json", data_to_write);
}

const custom_data = fs.readFileSync(__dirname + "/custom_data.json");

let temporary_data = JSON.parse(custom_data.toString())


const playSound = (msg, soundPath) => {
    msg.member.voiceChannel.join()
    .then(connection => { // Connection is an instance of VoiceConnection
        msg.reply('I have successfully connected to the channel!');
        const dispatcher = connection.playFile(soundPath);
        dispatcher.on('end', () => {
            msg.member.voiceChannel.leave()
        });
    })
    .catch(console.log);
}
// END OF UTILITY FUNCTIONS

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {

    for(trigger in temporary_data){
        if(msg.content === trigger){
            console.log("Custom Trigger Activated: " + trigger);
            const response = temporary_data[trigger];
            console.log(response);
            msg.reply(response);
        }
    }


    if (msg.content === 'bb8') {
        playSound(msg, "/Users/elliotyoung/Main/fusion-palo-alto/Colton Langedyk/DiscordJS Bot/test_bot_1/bb8-1.mp3");
    }
    if (msg.content === 'aquarium') {
        playSound(msg, "/Users/elliotyoung/Main/fusion-palo-alto/Colton Langedyk/DiscordJS Bot/test_bot_1/aquarium.mp3");
    }

    if (msg.content.includes("wire++")) {
        msg.reply("I heard a wire!")
        const trigger = msg.content.split(" ")[1];
        const response = msg.content.split(" ")[2];
        temporary_data[trigger] = response;
        saveData();
    }

});

client.login('NTQ3NTAzOTgxODMyNjk5OTI1.D03ucg.71hnKvkN8lBprmlZPmc1Zlk8Ofg');