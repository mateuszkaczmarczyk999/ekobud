const mongoose = require('mongoose')

const Schema = mongoose.Schema

let addressSchema = new Schema({
  street: { type: String, required: true },
  city: { type: String, required: true },
  zipCode: { type: String, required: true }
})

let firmInformationSchema = new Schema({
  name: { type: String, required: true },
  fullName: { type: String, required: true },
  regon: { type: String, required: true },
  nip: { type: String, required: true },
  phone1st: { type: String, required: true },
  phone2nd: { type: String, required: true },
  email: { type: String, required: true },
  description: { type: String, required: true },
  text: { type: String, required: true },
  address: addressSchema
})

module.exports = mongoose.model('FirmInformation', firmInformationSchema)
