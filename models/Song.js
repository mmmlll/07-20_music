const mongoose = require('mongoose')
const Schema = mongoose.Schema

const songSchema = new Schema({
  name: String,
  numPlayed: Number,
  duration: Number,
  album: {
    type: Schema.Type.ObjectId,
    ref: 'Album'
  }
})

const Song = mongoose.model('Song', songSchema)

module.exports = Song
