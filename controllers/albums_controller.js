const Album = require('../models/Album')

function create (req, res) {
  // 1. Create new albums
  var newAlbum = new Album({
    name: req.body.album.name,
    genre: req.body.album.genre,
    yearRelease: req.body.album.yearRelease
  })

  newAlbum.save(function (err, data) {
    if (err) res.send(err)

    res.send('new album saved')
  })

  // 2. Create new songs

  // res.send({
  //   msg: 'create song and album',
  //   reqbody: req.body
  // })
}

module.exports = {
  create
}
