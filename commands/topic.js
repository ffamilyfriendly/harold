const topic = [
    "What was the last funny video you saw?",
    "What three words best describe you?",
    "What would be your perfect weekend?",
    "What’s your favorite way to waste time?",
    "What’s the best / worst thing about your work/school?",
    "What makes harold so much better then gilbert?",
    "What is the strangest dream you have ever had?",
    "What hermitcraft season is your favorite and why?",
    "When did you start playing minecraft",
    "What weird or useless talent do you have?"
]

const dsc = require("discord.js")

exports.run = (message, args) => {
    const embed = new dsc.MessageEmbed()
        .setColor("yellow")
        .setTitle(`**${topic[Math.floor(Math.random() * topic.length)]}**`)
        .setDescription("discuss this")
    message.channel.send(embed)
    
}

exports.meta = {
    name:"topic",
    description:"randomises a topic",
    usage:""
}