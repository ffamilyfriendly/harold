const place = ["church", "funeral", "wedding", "birthday party", "graduation", "meeting with the president", "fast food resturant", "date"]
const action = ["jumping out a window", "going fishing with the bois", "becoming an astronaut", "becoming a submarine"]

const topic = [
    `what are some things you ${Math.random() < 0.5 ? "should" : "should not"} say at a ${place[Math.floor(Math.random() * place.length)]}?`,
    `what do you have planned today?`,
    `what is the best about ${place[Math.floor(Math.random() * place.length)]}?`,
    `what do you do when bored?`,
    `what is something you've never done that you want to try?`,
    `have you ever though about ${action[Math.floor(Math.random() * action.length)]}`,
    `what is your favorite movie/series?`
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