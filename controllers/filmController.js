const Movie = require('../models/movie');
const User = require('../models/user');
const formidable = require('formidable');

exports.insertMovie = (req, res, next) => {
  var form = new formidable.IncomingForm();
  form.parse(req, function (err, fields, files) {
    const name = req.body.name;
    const genre = req.body.genre;
    const description = req.body.description;
    const userId = req.body.userId;
    var oldpath = files.image.filepath;
    var newpath = __dirname + "/../public/images/" + files.image.originalFilename;
    fs.rename(oldpath, newpath, function (err) {
      if (err) throw err;
      Movie.create({ name: name, image: newpath, genre: genre, description: description, userId: userId })
        .then(result => {
          res.json({
            status: true,
            message: "movie created succesfuly!"
          });
        }).catch(() => {
          res.json({
            status: false,
            message: "There is a problem!"
          })
        });
    });
  });
};

exports.getUserMovies = (req, res, next) => {
  const userId = req.body.userId;
  User.findByPk(userId).then(user => {
    res.json({
      status: true,
      movies: user.getMovies
    });
  })
  .catch(() => {
    res.json({
      status: false,
      message: "There is a problem!"
    });
  });
};