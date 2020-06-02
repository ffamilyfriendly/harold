const dsc = require("discord.js")

exports.run = (message, args) => {
    const list = Object.keys(message.client.db.users.data).map(key => {return {key:key, value:message.client.db.users.data[key]}}).sort((a, b) => b.value.messages - a.value.messages)
    const embed = new dsc.MessageEmbed()
        .setColor("yellow")
        .setTitle(`**Leaderboard**`)
    for(let i = 0; (i < 25 && i < list.length); i++) {
        embed.addField(`**#${i+1}**`,`${message.client.users.cache.get(list[i].key).username} ${list[i].key == message.author.id ? "**(you)**" : ""} ${list[i].value.messages} messages`)
    }
    message.channel.send(embed)
    
}

exports.meta = {
    name:"leaderboard",
    description:"shows the chat leaderboard",
    usage:"ez pz"
}