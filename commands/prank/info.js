const Discord = require('discord.js');
const commando = require('discord.js-commando');

class godHelp extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'help',
            group: 'prank',
            memberName: 'help',
            description: 'Help command',
        })
    }

    async run(message, args) {
        const jesusEmbed = new Discord.MessageEmbed
        .setColor('#9342f5')
        .setTitle('G3T 1N LXXS3R W3\'R3 GX1NG 2 CHVRCH')
        .setURL('https://astolfo.lgbt')
        .setAuthor('The Holy Spirit', 'https://imgur.com/Ttxg7cc', 'https://astolfo.lgbt')
        .setDescription('Bot information')
            .addFields(
                { name: 'What is this?', value: 'This bot was made by anonfoxer#8098. It\'s current purpose is a secret, but rest assured it is not harmful!'}
            )
        try {
            message.channel.send(jesusEmbed);
        }
        catch(err) {
            message.reply("An error occured, contact anonfoxer#8098. Error details: " + err)
        }
}
}

module.exports = godHelp;