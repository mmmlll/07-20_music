const mongoose = require('mongoose')
const Schema = mongoose.Schema

// creating album schema here, cos we're embedding it

const artistSchema = new Schema({
  name: String,
  dob: Date,
  albums: [{
    name: {
      type: String,
      required: true
    },
    copy_sold: Number,
    release_year: Number
  }]
})

const Artist = mongoose.model('Artist', artistSchema)

var usher = new Artist({
  name: 'Usher',
  dob: '1978-10-14'
})

var newAlbum = {
  name: 'Confession Pt.2',
  copy_sold: 10,
  release_year: 2014
}

var newAlbum2 = {
  name: 'Yeah!',
  copy_sold: 1000000,
  release_year: 2011
}

usher.albums.push(newAlbum, newAlbum2)

console.log('usher', usher)

var newAlbumUsher = usher.albums.create({
  name: 'Confessed Already',
  copy_sold: 123,
  year: 2017
})

// console.log('usher new album', newAlbumUsher)

var albumPulled = usher.albums.pull()
console.log('after pulling', albumPulled)

module.exports = Artist
