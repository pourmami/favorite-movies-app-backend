const express = require('express')
const shopRoutes = express.Router()

shopRoutes.get('/', (req, res, next) => {
    res.send('This is main page <br> <a href="/admin/add-product/">Add Product</a>')
})

module.exports = shopRoutes