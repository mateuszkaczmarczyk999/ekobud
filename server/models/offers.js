const mongoose = require('mongoose')
const Image = require('./images')

const Schema = mongoose.Schema

let pztSwitcherSchema = new Schema({
  name: { type: String, required: true },
  visualization: Image.schema,
  plan: Image.schema
})

let featureSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  icon: { type: String, required: true }
})

let featureGroupSchema = new Schema({
  name: { type: String, required: true },
  features: [featureSchema]
})

let offerSchema = new Schema({
  title: { type: String, required: true },
  subTitle: { type: String, required: true },
  description: { type: String, required: true },
  mainImg: Image.schema,
  deadline: { type: String, required: true },
  exteriorViz: [Image.schema],
  interiorViz: [Image.schema],
  features: [featureGroupSchema],
  pztSwitcher: [pztSwitcherSchema]
})

module.exports = mongoose.model('Offer', offerSchema)
