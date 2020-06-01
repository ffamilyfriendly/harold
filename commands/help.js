const commands = require("../index").commands

exports.run = (message, args) => {
    let msg = "__**harold is here to help**__\n"
    
    commands.forEach(command => {
        if(command.meta) {
            msg += `**${command.meta.name}**: *${command.meta.description}* usage: \`${command.meta.usage}\`\n`
        }
    })

    msg += `help requested by **${message.author.username}**`
    message.channel.send(msg)
}

exports.meta = {
    name:"help",
    description:"helps you with the commands",
    usage:"you already know how it works it seems"
}