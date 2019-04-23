const mongoose = require('mongoose')
const Image = require('./images')

const Schema = mongoose.Schema

let postSchema = new Schema({
  title: {type: String, required: true },
  shortDesc: { type: String, required: true },
  fullText: { type: String, required: false },
  movieUrl: { type: String, required: false },
  imgPaths: [Image.schema]
})

module.exports = mongoose.model('Post', postSchema)
