const fs = require("fs")

const checkFileExists = (path) =>  {
    if(!fs.existsSync(path)) fs.writeFileSync(path,"{}")
}

class ShitDB {
    constructor(path,autosave=(1000*60*5)) {
        this.path = path;
        this.autosave = autosave;
        this.data = {}
        checkFileExists(path)
        this.sync()

        setInterval(() => this.save(),autosave)
    }

    save() {
        fs.writeFileSync(this.path,JSON.stringify(this.data))
    }

    sync() {
     this.data = JSON.parse(fs.readFileSync(this.path))
    }
}

module.exports = ShitDB