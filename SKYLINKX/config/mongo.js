// const { response } = require("express")
const mongoose = require("mongoose")

const dbConnect = () => {
    const DB_URI = process.env.DB_URI
    mongoose.set('strictQuery', true)

    mongoose.connect(DB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true, //Completa la indicacion para recibir la conexion de cualquier otro lugar
    }, (err, res) => {
        if (!err) {
            console.log("Conexion Correcta :)")
        } else {
            console.log("No se pudo conectar a la bd")
            console.log(err)
        }
    })
}

module.exports = dbConnect