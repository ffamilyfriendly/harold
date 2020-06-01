const config = require("../config")
const discord = require("discord.js")
const commands = require("../index.js").commands

module.exports = (message) => {
    if(message.author.id == message.client.user.id || message.author.bot) return
    if(!message.content.startsWith(config.prefix)) {
        if(message.channel.type === "dm") {
                const embed = new discord.MessageEmbed()
                .setColor("7289DA")
                .setTitle(message.author.tag)
                .setThumbnail(message.author.avatarURL())
                .setDescription(message.content)
                .setFooter(`harold please respond ${message.author.id} <content> to respond`)
                message.client.logchannel.send(embed)
        }
    }
    const args = message.content.substr(config.prefix.length).split(" ")
    if(commands.has(args[0])) {
        commands.get(args[0]).run(message,args)
    }
}