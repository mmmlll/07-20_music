const mongoose = require('mongoose')
const Schema = mongoose.Schema

const artistSchema = new Schema ({
  name: String,
  dob: Date,
  albums: [{        // no need to add "new Schema" again here. New feature of mongoose 4.0
    name: String,
    copies_sold: Number,
    release_year: Number
  }]
})

const Artist = mongoose.model('Artist', artistSchema)

var usher = new Artist({
  name: 'Usher',
  dob: new Date('Oct 14, 1978')   // need the "new" there
})

const newAlbum = {
  name: 'Yeah',
  copies_sold: 100000,
  release_year: 2011}

const newAlbum2 = {
  name: 'Confessions',
  copies_sold: 200000,
  release_year: 2014}

usher.albums.push(newAlbum, newAlbum2)

usher.save(function (err){
  console.log(err)
})

const newAlbumUsher = usher.albums.create({
  name: 'confessed',
  copies_sold: 100,
  release_year: 2017
})

console.log(usher)    // this will NOT include thew newAlbumUsher because console.log(usher) runs before the callback function, .create, has time to run (...???)

module.exports = Artist
