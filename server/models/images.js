const mongoose = require('mongoose')

const Schema = mongoose.Schema

let imageSchema = new Schema({
  path: { type: String, required: true }
})

module.exports = mongoose.model('Image', imageSchema)
