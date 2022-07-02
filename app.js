const path = require('path');
const shopRoutes = require("./routes/shop");
const adminRoutes = require("./routes/admin");

const express = require('express')
const app = express()
app.set('views','views')
app.set('view engine', 'ejs')
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended: false}))
app.use(express.static(path.join(__dirname,'public')))
app.use('/admin',adminRoutes.routes)
app.use(shopRoutes)

app.use('/', (req, res, next) => {
    res.status(404).render('404', {pageTitle: 'Page Not Found'});
})

app.listen(3000);
