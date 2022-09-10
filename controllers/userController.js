const User = require('../models/user');

exports.getUser = (req, res, next) => {
  const userId = req.params.userId;
  User.findByPk(userId).then(user => {
    res.json({ user: user });
  }).catch(() => {
    res.json({
      status: false,
      message: "There is a problem!"
    })
  });
};

exports.signupUser = (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;
  const name = req.body.name;
  User.create({ name: name, email: email, password: password, role: 'user' })
    .then(result => {
      res.json({
        status: true,
        message: "user created succesfuly!"
      });
    }).catch(() => {
      res.json({
        status: false,
        message: "There is a problem!"
      })
    });
};

exports.loginUser = (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;
  User.findAll({ where: { email: email, password: password } }).then(user => {
    res.json({
      status: true,
      user: user
    });
  })
    .catch(() => {
      res.json({
        status: false,
        message: "There is a problem!"
      });
    });
};