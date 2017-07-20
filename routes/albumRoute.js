const express = require('express')
const router = express.Router()

const albumsController = require('../controllers/albums_controller')

router.get('/new', function (req, res) {
  res.render('albums/new')
})

router.post('/', albumsController.create)

module.exports = router
