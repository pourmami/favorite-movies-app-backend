const path = require('path');
const express = require('express')
const adminRoutes = express.Router()
const products = []

adminRoutes.get('/add-product', (req, res, next) => {
    res.render('add-product', {
        pageTitle: 'Add Product',
        path: '/admin/add-product',
        formsCSS: true,
        productCSS: true,
        activeAddProduct: true
    });
});

adminRoutes.post('/add-product', (req, res, next) => {
    products.push({ title: req.body.title })
    res.redirect('/')
})

module.exports.routes = adminRoutes
module.exports.products = products