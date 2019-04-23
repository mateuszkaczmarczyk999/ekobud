const mongoose = require('mongoose')
const Image = require('./images')

const Schema = mongoose.Schema

let aboutUsSchema = new Schema({
  shortDesc: { type: String, required: true },
  fullText: { type: String, required: true },
  mainImg: Image.schema
})

module.exports = mongoose.model('AboutUs', aboutUsSchema)
