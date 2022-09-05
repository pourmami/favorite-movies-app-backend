const User = require('../models/user');

exports.geUser = (req, res, next) => {
  const userId = req.params.userId;
  User.findByPk(userId).then(user => {
    res.json({user:user});
  });
};

exports.signupUser = (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;
  const name = req.body.name;
  User.create({name:name, email:email, password:password})
  .then(result => {
    res.json({
      status:true,
      message:"user created succesfuly!"
    });
  });
};

exports.loginUser = (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;
  User.findAll({ where : { email:email, password:password}}).then(user => {
    res.json({
      status:true,
      user:user
    });
  });
};