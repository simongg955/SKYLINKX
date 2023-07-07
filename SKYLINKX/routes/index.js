const express = require("express")
const routes = express.Router()
const fs = require("fs")

const PATH_ROUTES = __dirname

const removeExtension = (fileName) => {
    return fileName.split('.').shift()
}

fs.readdirSync(PATH_ROUTES).filter((file) => {
    const name = removeExtension(file)
    if (name != 'index') {
        routes.use(`/${name}`, require(`./${file}`))
    }
})

module.exports = routes