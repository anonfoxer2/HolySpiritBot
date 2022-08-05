//a lot of the boilerplate for this bot is the same as Flume. The more interesting code will be in the commands.

const Discord = require('discord.js'); //create client
const commando = require('discord.js-commando');
const {TOKEN} = require('./secret');
const {OWNERID} = require('./secret');


const bot = new commando.Client({
    commandPrefix: 'god>',
    
    owner: OWNERID,

    disableEveryone: true
});


bot.on('ready', ( ) => {
    bot.user.setActivity('Im quite hungry!');
    console.log("Praise jesus!");
})



/* allocate commands */
registerCommands();

function registerCommands() { //registers all commands. 
    bot.registry.registerGroup('prank', 'Prank');
    bot.registry.registerCommandsIn(__dirname + "/commands"); //commands found in <dicrec>\commands.
}


bot.login(TOKEN);