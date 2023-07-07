const multer  = require("multer")

const storage = multer.diskStorage({
    destination: function(req, file, cb){
        const pathStorage = `${__dirname}/../storage` //Extrae la direccion
        cb(null, pathStorage) //null porque no tenemos funcion que valide el archivo 
    },
    filename: function(req, file, cb){
        const ext = file.originalname.split('.').pop()
        const filename = `file-${Date.now()}.${ext}`
        cb(null, filename)
    }
})

const uploadMiddleware = multer ({storage})

module.exports = uploadMiddleware
