exports.run = (message, args) => {
    if(!conf.admins.includes(message.author.id)) return
    
}

exports.meta = {
    name:"quote",
    description:"qoutes a message",
    usage:"please qote that quotes above message"
}