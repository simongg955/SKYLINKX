
const mongoose = require('mongoose')
const mongooseDelete = require('mongoose-delete')

const CursosScheme = new mongoose.Schema(
   {
       titulo: {
        type: String
       },
       url: {
        type: String
        },
        duracion: {
        type: String
        },
        descripcion:{
            type:String
        },
        imagen: {
        type: String,
            
         },
   },
   {
       timestamps: true,
       versionKey: false
   }
)

CursosScheme.plugin(mongooseDelete, {overrideMethods: 'all'})
module.exports = mongoose.model("cursos" , CursosScheme)