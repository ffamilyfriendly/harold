const request = require("request")
const discord = require("discord.js")

exports.run = (message, args) => {
    if(!args[1]) return message.channel.send("please include text to owo-ify")

    const embed = new discord.MessageEmbed()
    .setFooter("api by Wait What | https://waitwhat.xyz");
    request(`https://cursed.waitwhat.xyz/api/owofyPlus?data=${args.join(" ").substr(args[0].length)}`, (err, res, body) => {
        if(err) {
            embed.setColor("red")
            .setTitle("could not owo-ify message - API error")
            .setDescription(err)
        } else {
            embed.setColor("7289DA")
            .setTitle(message.author.tag)
            .setDescription(body)
            .setThumbnail(message.author.avatarURL())
        }
        message.channel.send(embed)
    })
}

exports.meta = {
    name:"owoify",
    description:"owo-ifies a message",
    usage:"please do not use this too much"
}