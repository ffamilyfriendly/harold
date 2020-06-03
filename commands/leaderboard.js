const dsc = require("discord.js")

exports.run = (message, args) => {
    const list = Object.keys(message.client.db.users.data).map(key => {return {key:key, value:message.client.db.users.data[key]}}).sort((a, b) => b.value.messages - a.value.messages)
    const embed = new dsc.MessageEmbed()
        .setColor("yellow")
        .setTitle(`**Leaderboard**`)
    for(let i = 0; (i < 25 && i < list.length); i++) {
        if(!list[i]) continue; 
        const user = message.client.users.cache.get(list[i].key)
        embed.addField(`**#${i+1}**`,`${user ? user.username : `cannot find username (${list[i].key})`} ${list[i].key == message.author.id ? "**(you)**" : ""} ${list[i].value.messages} messages`)
    }
    message.channel.send(embed)
    
}

exports.meta = {
    name:"leaderboard",
    description:"shows the chat leaderboard",
    usage:"ez pz"
}