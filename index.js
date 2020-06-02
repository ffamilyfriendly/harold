const dsc = require("discord.js");
const client = new dsc.Client();
const commands = new Map();
const config = require("./config")

//database part
const db = require("./lib/pissDb")
const users = new db("./data/users.db")

client.db = {users}

module.exports = {commands};

require("./lib/loadCommands")(commands);
const handler = require("./lib/eventHandler");
handler.init(client);

client.login(config.token);