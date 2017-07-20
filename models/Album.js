const mongoose = require('mongoose')
const Schema = mongoose.Schema

const albumSchema = new Schema({
  name: String,
  genre: String,
  yearRelease: Number,
  songs: [{
    type: Schema.Type.ObjectId,
    ref: 'Song'
  }]
})

const Album = mongoose.model('Album', albumSchema)

module.exports = Album
