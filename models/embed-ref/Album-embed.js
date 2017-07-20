const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Song = require('./Song')

const albumSchema = new Schema({
  name: String,
  genre: String,
  yearRelease: Number,
  songs: [Song.schema],
  producers: []
})

const Album = mongoose.model('Album', albumSchema)

module.exports = Album

// var newAlbum = new Album({
//   name: 'Purpose',
//   yearRelease: 2017,
//   producers: ['test', 'te1231232', '1312321312']
// // })
//
// var sorry = new Song({
//   name: 'Sorry',
//   numPlayed: 12739721839712983712,
//   duration: 180
// })
//
// newAlbum.songs.push(sorry)
//
// console.log(newAlbum.songs.id())
