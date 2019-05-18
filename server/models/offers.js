const mongoose = require('mongoose')

const Schema = mongoose.Schema

let offerSchema = new Schema ({
  idName: { type: String, required: true },
  name: { type: String, required: true },
  description: { type: String, required: true },
  text: { type: String, required: true },
  term: { type: String, required: true },
  isMain: { type: Boolean, required: true },
  extVisualizations: { type: Array, required: true },
  intVisualizations: { type: Array, required: true }
})

module.exports = mongoose.model('Offer', offerSchema)
