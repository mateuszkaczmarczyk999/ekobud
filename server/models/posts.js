const mongoose = require('mongoose')

const Schema = mongoose.Schema

let postSchema = new Schema({
  title: {type: String, required: true },
  description: { type: String, required: true },
  fullText: { type: String, required: false },
  movieUrl: { type: String, required: false },
  images: { type: Array, required: false },
  createDate: { type: Date, required: true, default: new Date() }
})

module.exports = mongoose.model('Post', postSchema)
