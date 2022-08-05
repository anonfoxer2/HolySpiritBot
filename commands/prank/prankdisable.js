const Discord = require('discord.js');
const commando = require('discord.js-commando');

class prankDisable extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'home',
            group: 'prank',
            memberName: 'home',
            description: 'Church is over, go home!',
        })
    }

    async run(message, args) {
        console.log("prank being shut down. attempting to remove role from all members.")
        let churchRole = message.guild.roles.cache.find(r => r.name == 'Good christian <3'); //This finds the role that the prank requires to work
        let mainServerAccessRole = message.guild.roles.cache.find(r => r.name == 'voidlings'); //This role is given to all server members by default, and is removed so the prank works as intended. It probably doesnt need to actually be removed, and is probably dangerous, but we grab it just in case.
        if (message.member.hasPermission("MANAGE_SERVER")) {
        try {
            if (!role) return message.channel.send(`**${message.author.username}**, Fatal error occured, code: NR`) //Since this bot has to perform a prank, im making the code something I will know.
            message.guild.members.cache.filter(m => !m.user.bot).forEach(member => member.roles.remove(churchRole)) //Filter every member in the server, and give them the prank role.
        }
        catch(err) {
            message.reply("An error occured, contact plank#1178. Error details: " + err);
        }
    }
}
}

module.exports = prankDisable;