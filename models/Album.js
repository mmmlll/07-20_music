const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Song = require('./Song')

// const songSchema = new Schema ({
//   name: String,
//   numPlayed: Number,
//   duration: Number
// })

const albumSchema = new Schema ({
  // id: Number,
  name: String,
  copies_sold: Number,
  release_year: Number,
  // artists: String,     // he said he'll park this first (as it relates to the parent model, Artist)
  producers: [],          // an array can contain any kind of data. If you want to validate what goes into the array, then you have to [{name: String}}]. That's his explanation; not sure it makes any sense
  // songs: [songSchema],
  songs: [Song.schema],
  genre: String,
  numPlayed: Number   
})

const Album = mongoose.model('Album', albumSchema)
// const Song = mongoose.model('Song', songSchema)

var confessions = new Album ({
  name: 'Confessions',
  copies_sold: 100000,
  release_year: 2014,
  artists: String,
  producers: ['producerABC', 'producerDEF'],
  songs: ['firstSong', 'secondSong']
})

// console.log(confessions)

module.exports = Album
