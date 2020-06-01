const discord = require("discord.js")
const conf = require("../config")

exports.run = (message, args) => {
    if(!conf.admins.includes(message.author.id) || !args[2]) return
    const m = args.join(" ").substr((args[0] + " " + args[1]).length)
    const embed = new discord.MessageEmbed()
    .setColor("7289DA")
    .setTitle(message.author.tag)
    .setThumbnail(message.author.avatarURL())
    .setDescription(m)
    try {
        message.client.users.cache.get(args[1]).send(embed)
    } catch(error) {
        message.reply(`could not respond: ${error}`)
    }
    
}

exports.meta = {
    name:"respond",
    description:"responds to the user",
    usage:"yea"
}