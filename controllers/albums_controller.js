const Album = require('../models/Album')
// need to req Song, because i need to create song obj first
const Song = require('../models/Song')

function show (req, res) {
  Album
  .findOne({
    _id: req.params.id
  })
  .populate('songs')
  .exec(function (err, theAlbum) {
    if (err) res.send(err)

    res.render('albums/show', {
      album: theAlbum
    })
  })
}

function create (req, res) {
  // 1. Create new albums
  var newAlbum = new Album({
    name: req.body.album.name,
    genre: req.body.album.genre,
    yearRelease: req.body.album.yearRelease
  })

  newAlbum.save(function (err, createdAlbum) {
    if (err) res.send(err)

    var newSong = new Song({
      name: req.body.song.name,
      album: createdAlbum.id
    })

    newSong.save(function (err, createdSong) {
      if (err) res.send(err)
      createdAlbum.songs.push(createdSong.id)
      createdAlbum.save()

      res.send('new album and one song saved')
    })
  })
}

module.exports = {
  create,
  show
}
