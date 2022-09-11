const Movie = require('../models/movie');
const User = require('../models/user');
const formidable = require('formidable');
const fs = require('fs');
const { time } = require('console');

exports.insertMovie = (req, res, next) => {
  const name = req.body.name;
  const genre = req.body.genre;
  const description = req.body.description;
  const userId = req.body.userId;
  Movie.create({ name: name, image: req.file.path, genre: genre, description: description, userId: userId })
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
};

exports.getUserMovies = (req, res, next) => {
  const userId = req.params.userId;
  User.findByPk(userId, { include: ["movies"] }).then(user => {
    res.json({
      status: true,
      movies: user.movies
    });
  })
  .catch(() => {
    res.json({
      status: false,
      message: "There is a problem!"
    });
  });
};