const mongoose = require('mongoose')

const Schema = mongoose.Schema

let featureSchema = new Schema({
  siteId: { type: String, required: true },
  name: {type: String, required: true },
  description: { type: String, required: true }
})

module.exports = mongoose.model('Feature', featureSchema)
