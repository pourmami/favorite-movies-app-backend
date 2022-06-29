const express = require('express')
const adminRoutes = express.Router()

adminRoutes.get('/add-product', (req, res, next) => {
    res.send("<form action='/product' method='post'><input type='text' name='title'><input type='submit'></form>")
})
adminRoutes.post('/product', (req, res, next) => {
    console.log(req.body.title)
    res.redirect('/')
})

module.exports = adminRoutes