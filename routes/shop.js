const path = require('path');
const express = require('express')
const shopRoutes = express.Router()
const adminData = require('./admin')

shopRoutes.get('/', (req, res, next) => {
    res.render('shop', {prods: adminData.products, docTitle: "My Shop"})
})

module.exports = shopRoutes