const fs = require("fs")

module.exports = (cmap) => {
    fs.readdirSync("./commands").forEach(f => {
        try {
            const cmd = require(`../commands/${f}`)
            cmap.set(cmd.meta.name,cmd)
            console.log(`loaded command "${f}"`)
        } catch(error) {
            console.error(`could not load command "${f}", ${error}`)
        }
    })
}