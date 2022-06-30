const path = require('path');
const express = require('express')
const adminRoutes = express.Router()
const products = []

adminRoutes.get('/add-product', (req, res, next) => {
    res.sendFile(path.join(__dirname,'..','views','add-product.html'))
})
adminRoutes.post('/product', (req, res, next) => {
    products.push({ title: req.body.title })
    res.redirect('/')
})

module.exports.routes = adminRoutes
module.exports.products = products