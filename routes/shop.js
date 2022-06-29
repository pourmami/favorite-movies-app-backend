const express = require('express')
const shopRoutes = express.Router()

shopRoutes.use('/', (req, res, next) => {
    res.send('This is main page <br> <a href="/add-product/">Add Product</a>')
})

module.exports = shopRoutes