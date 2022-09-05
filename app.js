const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const errorController = require('./controllers/error');
const sequelize = require('./util/database');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const webRoutes = require('./routes/web');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(webRoutes);

app.use(errorController.get404);

sequelize.sync()
    .then(() => {
        app.listen(3000);
    })
    .catch(err => {
    console.log(err);
})

