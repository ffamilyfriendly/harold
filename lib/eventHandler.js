const msgHand = require("./msgHandler.js");
const config = require("../config")

exports.init = (client) => {
    client.on("ready", () => {
        console.log(`${client.user.username} is ready to rumble!`);
        client.logchannel = client.channels.cache.get(config.logchannel)
    })

    client.on("message",msgHand)
}