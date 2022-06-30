const path = require('path');
const express = require('express')
const shopRoutes = express.Router()

shopRoutes.get('/', (req, res, next) => {
    res.render('shop')
})

module.exports = shopRoutes