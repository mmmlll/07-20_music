const mongoose = require('mongoose')
const Schema = mongoose.Schema
const Album = require('./Album.js')

const mongodbUrl = 'mongodb://localhost:27017/music'
mongoose.Promise = global.Promise
mongoose.connect(mongodbUrl, {
  useMongoClient: true
}).then(
  () => {console.log('mongodb is connected')},
  (err) => {console.log('connection err', err)}
)       // this checks if the connection above worked out

const artistSchema = new Schema ({
  name: String,
  dob: Date,
  // albums: [{        // no need to add "new Schema" again here. New feature of mongoose 4.0
  //   name: String,
  //   copies_sold: Number,
  //   release_year: Number
  // }]
  albums: [{                          // if there is only one album per artist, then skip the [ ] notation
    type: Schema.Types.ObjectId,
    ref: 'Album'
  }]
})

const Artist = mongoose.model('Artist', artistSchema)

Artist.find({}, function(err, allArtists){
  if (err) throw err
  // console.log(`allArtists are ${allArtists}`)
})

Album.find({}, function(err, allAlbums){
  if (err) throw err
  // console.log(`allAlbums are ${allAlbums}`)
})

var newAlbum = new Album({
  name: 'new album',
  numPlayed: 1000
})

// Artist.findOne({
//   name: 'justin bieber'
// }, function (err, jb){
//   if (err) throw err
//   // console.log(`Artist.findOne gives ${jb}`);
//   Album.findOne({name: 'Sorry'}, function (err, sorry){
//     // console.log(`Album.findOne gives ${sorry}`);
//     jb.albums.push(sorry.id)    // this is not working. DB doesn't update, until you .SAVE jb! Mongoose needs to see .save, to save the new info into the db
//     // console.log(jb)
//     jb.save()
//   })
// })

Artist
  .findOne({name: 'justin bieber'})
  .populate('albums')       // albums is the collection in the DB. what does .populate do???
  .exec({})

var usher = new Artist({
  name: 'Usher',
  dob: new Date('Oct 14, 1978')   // need the "new" there
})

// const newAlbum = {
//   name: 'Yeah',
//   copies_sold: 100000,
//   release_year: 2011}

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

// console.log(usher)    // this will NOT include thew newAlbumUsher because console.log(usher) runs before the callback function, .create, has time to run (...???)

module.exports = Artist
