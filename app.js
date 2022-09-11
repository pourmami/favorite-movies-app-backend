const path = require('path');
const Movie = require('./models/movie');
const User = require('./models/user');

const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');
let storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, __dirname + "/public/images/")
    },
    filename: function (req, file, cb) {
      let extArray = file.mimetype.split("/");
      let extension = extArray[extArray.length - 1];
      cb(null, file.fieldname + '-' + Date.now()+ '.' + extension)
    }
  })
const forms = multer({ storage: storage });


const errorController = require('./controllers/error');
const sequelize = require('./util/database');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const webRoutes = require('./routes/web');

app.use(bodyParser.json());
app.use(forms.single('image'));
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'public')));

app.use(webRoutes);

app.use(errorController.get404);

Movie.belongsTo(User, { foreignKey: "userId", onDelete: 'CASCADE' })
User.hasMany(Movie)

sequelize.sync()
    .then(() => {
        app.listen(3000);
    })
    .catch(err => {
        console.log(err);
    })

