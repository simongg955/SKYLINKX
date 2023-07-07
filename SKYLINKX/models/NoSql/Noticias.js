const mongoose = require('mongoose')
const mongooseDelete = require('mongoose-delete')

const NoticiasScheme = new mongoose.Schema(
   {
       titulo: {
           type: String
       },
       descripcion: {
           type: String
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

NoticiasScheme.plugin(mongooseDelete, {overrideMethods: 'all'})
module.exports = mongoose.model("news" , NoticiasScheme)