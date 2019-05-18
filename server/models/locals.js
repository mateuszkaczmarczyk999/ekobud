const mongoose = require('mongoose')

const Schema = mongoose.Schema

let localSchema = new Schema ({
  flatNumber: { type: String, required: true },
  area: { type: String, required: true },
  price: { type: String, required: true },
  available: { type: Boolean, required: true },
  offerId: { type: String, required: true },
  planPath: { type: String, required: true }
})

module.exports = mongoose.model('Local', localSchema)
