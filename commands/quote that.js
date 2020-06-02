const conf = require("../config")

exports.run = (message, args) => {
    if(!conf.admins.includes(message.author.id)) return
    message.channel.messages.fetch({ limit:2 })
        .then(messages => {
            const quoteMessage = messages.last()
            if(!message.client.db.users.data[quoteMessage.author.id].quotes) message.client.db.users.data[quoteMessage.author.id].quotes = []
            message.client.db.users.data[quoteMessage.author.id].quotes.push({quote:quoteMessage.content,said:quoteMessage.createdTimestamp})

            message.channel.send(`Quoted message by ${quoteMessage.author}!`)
        })
}

exports.meta = {
    name:"addquote",
    description:"quotes a message",
    usage:"please quote that quotes above message"
}