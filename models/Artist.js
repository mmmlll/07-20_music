const mongoose = require('mongoose')
const Schema = mongoose.Schema

const mongodbUrl = 'mongodb://localhost:27017/musies'

mongoose.Promise = global.Promise
mongoose.connect(mongodbUrl, {
  useMongoClient: true
}).then(
  () => { console.log('mongodb is connected') },
  (err) => { console.log('connection err', err) }
)

// creating album schema here, cos we're embedding it

const artistSchema = new Schema({
  name: String,
  dob: Date,
  albums: [{
    type: Schema.Types.ObjectId,
    ref: 'Album'
  }]
})

const Album = require('./Album')
const Artist = mongoose.model('Artist', artistSchema)

// PUSHING AN EXISTING ALBUM INTO AN ARTIST
// finding jb in mongodb
// Artist.findOne({
//   name: 'Justin Bieb'
// }, function (err, jb) {
//   if (err) throw err
//   // finding sorry in album list
//   Album.findOne({name: 'Sorry'}, function (err, sorry) {
//     if (err) throw err
//
//     console.log('album found', sorry)
//
//     jb.albums.push(sorry.id)
//     jb.save()
//   })
// })

Artist
.findOne({ name: 'Justin Bieb' })
.populate('albums')
.exec(function (err, jb) {
  if (err) throw err

  console.log(jb)
})
