
const mongoose = require('mongoose')
const mongooseDelete = require('mongoose-delete')

const ProductosScheme = new mongoose.Schema(
   {
    Tipo: {
        type: String
    },
    Nombre: {
        type: String
    },
    Fabricante: {
     type: String
     },
     Precio: {
     type: String
     },
     Descripcion:{
         type:String
     },
     imagen: {
        type: String,
      },
      Puntuacion:{
         type: String
     },

   },
   {
       timestamps: true,
       versionKey: false
   }
)

ProductosScheme.plugin(mongooseDelete, {overrideMethods: 'all'})
module.exports = mongoose.model("products" , ProductosScheme)