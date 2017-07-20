const express = require('express')
const router = express.Router()

const albumsController = require('../controllers/albums_controller')

router.get('/new', function (req, res) {
  res.render('albums/new')
})

// router.get('/:name', function (req, res) {
//   res.send(`show album with name: ${req.params.name}`)
// })

router.get('/:id', albumsController.show)

router.post('/', albumsController.create)

module.exports = router
