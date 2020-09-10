'use strict';

const connection = require('../models/connection')
var jwt = require('jsonwebtoken'),
  bcrypt = require('bcryptjs'),
  path = require('path'),
  async = require('async'),
  Joi = require('joi'),
  crypto = require('crypto'),
  _ = require('lodash'),
  hbs = require('nodemailer-express-handlebars'),
  email = process.env.MAILER_EMAIL_ID || 'adopet.suporte@gmail.com',
  pass = process.env.MAILER_PASSWORD || 'auth_email_pass',
  nodemailer = require('nodemailer');

var smtpTransport = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  auth: {
    user: "adopet.suporte@gmail.com",
    pass: "i3erocketexplosion"
  },
  tls: {
    rejectUnanthorized: false
  }
});

var handlebarOptions = {
  viewEngine: {
    extName: '.html',
    partialsDir: './templates/',
    layoutsDir: './templates/',
    defaultLayout: 'forgot-password-email.html',
  },
  viewPath: './templates/',
  extName: '.html',
};

smtpTransport.use('compile', hbs(handlebarOptions));

module.exports = {

  async forgot_password(req, res) {
    const { error } = validateForgot(req.body)
    if (error) {
      return res.status(400).send(error.details[0].message)
    }
    const user = await connection('users').where('email', req.body.email).select('*').first()
    const ong = await connection('ongs').where('email', req.body.email).select('*').first()
    if (!user & !ong) {
      return res.status(400).send({ message: "User or Ong not Found" })
    }

    // create the random token - Data_req= data atual - Data_token= data do token
    var token = crypto.randomBytes(10).toString('hex');
    var data_req = new Date;
    var data_token = new Date(data_req.getTime() + 86400000);

    try {
      if (user) {
        var envEmail = user.email, envFullName = user.fullName
        await connection('users').where('id', user.id).update({
          reset_password_token: token,
          reset_password_expires: data_token
        })
      } else {
        var envEmail = ong.email, envFullName = ong.fullName
        await connection('ongs').where('id', ong.id).update({
          reset_password_token: token,
          reset_password_expires: data_token
        })
      }
    } catch (error) {
      return res.status(400).send({ message: err })
    }

    var data = {
      to: envEmail,
      from: 'adopet.suporte@gmail.com',
      template: 'forgot-password-email',
      subject: 'Password help has arrived!',
      context: {
        url: 'http://localhost:3000/auth/reset_password?token=' + token,
        name: envFullName.split(' ')[0]
      }
    };

    smtpTransport.sendMail(data, function (err) {
      if (!err) {
        return res.json({ message: 'Kindly check your email for further instructions' });
      } else {
        return done(err);
      }
    })
  },

  async reset_password(req, res) {
    const { error } = validateReset(req.body)
    if (error) {
      return res.status(400).send(error.details[0].message)
    }

    const user = await connection('users').where('reset_password_token', req.body.token).select('*').first()
    const ong = await connection('ongs').where('reset_password_token', req.body.token).select('*').first()
    if (!user & !ong) {
      return res.status(400).send({ message: "password reset token is a invalid or has expired" })
    }

    if (req.body.newPassword === req.body.verifyPassword) {
      try {
        if (user) {

          if (!validateToken(user)) {
            return res.status(400).send({ message: "password reset token has expired" })
          }
          var envEmail = user.email, envFullName = user.fullName
          await connection('users').where('email', user.email).update({
            hash_password: bcrypt.hashSync(req.body.newPassword, 10),
            reset_password_token: null,
            reset_password_expires: null
          })

        } else {

          if (!validateToken(ong)) {
            return res.status(400).send({ message: "password reset token has expired" })
          }
          var envEmail = ong.email, envFullName = ong.fullName
          await connection('ongs').where('email', ong.email).update({
            hash_password: bcrypt.hashSync(req.body.newPassword, 10),
            reset_password_token: null,
            reset_password_expires: null
          })

        }
      } catch (err) {
        return res.status(422).send({
          massage: "not possible locate user or ong"
        })
      }
      var data = {
        to: envEmail,
        from: email,
        template: 'reset-password-email',
        subject: 'Password Reset Confirmation',
        context: {
          name: envFullName.split(' ')[0]
        }
      };

      smtpTransport.sendMail(data, function (err) {
        if (!err) {
          return res.json({ message: 'Password reset' });
        } else {
          return done(err);
        }
      });
    } else {
      return res.status(422).send({
        message: 'password do not match'
      })
    }
  },
}

function validateToken(user) {
  var data_req = new Date;
  if (user.reset_password_expires < data_req) {
    return false
  }

  return true
}

function validateForgot(request) {
  const schema = {
    email: Joi.string().min(5).max(255).required().email(),
  }
  return Joi.validate(request, schema)
}

function validateReset(request) {
  const schema = {
    token: Joi.string().required(),
    newPassword: Joi.string().required(),
    verifyPassword: Joi.string().required()
  }
}