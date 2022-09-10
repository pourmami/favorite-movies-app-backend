const path = require('path');
const Movie = require('./models/movie');
const User = require('./models/user');

const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');
const forms = multer();


const errorController = require('./controllers/error');
const sequelize = require('./util/database');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const webRoutes = require('./routes/web');

app.use(bodyParser.json());
app.use(forms.array()); 
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'public')));

app.use(webRoutes);

app.use(errorController.get404);

Movie.belongsTo(User, { constraints: true, onDelete: 'CASCADE' })
User.hasMany(Movie)

sequelize.sync()
    .then(() => {
        app.listen(3000);
    })
    .catch(err => {
        console.log(err);
    })

