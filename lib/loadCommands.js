const fs = require("fs")

module.exports = (cmap) => {
    fs.readdirSync("./commands").forEach(f => {
        try {
            const cmd = require(`../commands/${f}`)
            cmap.set(f.split(".")[0],cmd)
            console.log(`loaded command "${f}"`)
        } catch(error) {
            console.error(`could not load command "${f}", ${error}`)
        }
    })
}