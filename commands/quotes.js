const dsc = require("discord.js")

exports.run = (message, args) => {
    if(!args[1]) return
    const user = message.mentions.members.first() || message.client.users.cache.get(args[1])
    const embed = new dsc.MessageEmbed()
    const quotes = message.client.db.users.data[user.id].quotes
    for(let i = 0; (i < 25 && i < quotes.length); i++) {
        const ti = new Date(quotes[i].said);
        embed.addField(`**#${i+1} - said on ${ti.toLocaleString()}**`,quotes[i].quote)
    }

    message.channel.send(embed)
}

exports.meta = {
    name:"quote",
    description:"shows quotes from selected user",
    usage:"quotes <@ping/id>"
}