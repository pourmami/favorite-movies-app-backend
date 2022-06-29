const path = require('path');
const express = require('express')
const adminRoutes = express.Router()

adminRoutes.get('/add-product', (req, res, next) => {
    res.sendFile(path.join(__dirname,'..','views','add-product.html'))
})
adminRoutes.post('/product', (req, res, next) => {
    console.log(req.body.title)
    res.redirect('/')
})

module.exports = adminRoutes