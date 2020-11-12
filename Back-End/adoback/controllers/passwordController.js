'use strict';

const connection = require('../models/connection')
const gmailApi = require('../Google api/gGmail')

const bcrypt = require('bcryptjs'),
  fs = require('fs'),
  path = require('path'),
  Joi = require('joi'),
  crypto = require('crypto'),
  _ = require('lodash')
// hbs = require('nodemailer-express-handlebars'),
// email = process.env.MAILER_EMAIL_ID || 'adopet.suporte@gmail.com',
// pass = process.env.MAILER_PASSWORD || 'auth_email_pass',
// nodemailer = require('nodemailer');

/* Por favor não apagar os comentarios por enquanto

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

smtpTransport.use('compile', hbs(handlebarOptions)); */

module.exports = {

  async forgot_password(req, res) {
    const { error } = validateForgot(req.body) //valida os dados da requisição
    if (error) {
      return res.status(400).send(error.details[0].message)
    }
    const user = await connection('users').where('email', req.body.email).select(['users.id', 'users.fullname',
      'users.email']).first() //verifica se o usuario existe no bd e retorna as informações dele
    if (!user) {
      return res.status(404).send("User not Found")
    }

    // create the random token - Data_req= data atual - Data_token= data do token
    var token = crypto.randomBytes(10).toString('hex');
    var data_req = new Date;
    var data_token = new Date(data_req.getTime() + 86400000);

    try {
      if (user) {
        // var envEmail = user.email, envFullName = user.fullName
        await connection('users').where('id', user.id).update({
          reset_password_token: token,
          reset_password_expires: data_token
        })
      }
    } catch (error) {
      return res.status(400).send({ message: err })
    }

    sendEmail(user,'forgot')

    res.status(200).send('Kindly check your email for further instructions')

    // var data = {
    //   to: envEmail,
    //   from: 'adopet.suporte@gmail.com',
    //   template: 'forgot-password-email',
    //   subject: 'Password help has arrived!',
    //   context: {
    //     url: 'http://localhost:4000/auth/reset_password?token=' + token,
    //     name: envFullName.split(' ')[0]
    //   }
    // };

    // smtpTransport.sendMail(data, function (err) {
    //   if (!err) {
    //     return res.json({ message: 'Kindly check your email for further instructions' });
    //   } else {
    //     return console.log(err);

    //   }
    // })
  },

  async reset_password(req, res) {
    const { error } = validateReset(req.body) //valida os dados da requisição
    if (error) {
      return res.status(400).send(error.details[0].message)
    }

    const user = await connection('users').where('reset_password_token', req.body.token).select(['users.fullname',
    'users.email']).first()

    if (!user) {
      return res.status(400).send({ message: "password reset token is a invalid or has expired" })
    }

    if (req.body.newPassword === req.body.verifyPassword) {
      try {
        if (user) {
          if (!validateToken(user)) {
            return res.status(400).send({ message: "password reset token has expired" })
          }
          // var envEmail = user.email, envFullName = user.fullName
          await connection('users').where('email', user.email).update({
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

      sendEmail(user, 'reset')
      res.status(200).send('Kindly check your email')
      // var data = {
      //   to: envEmail,
      //   from: email,
      //   template: 'reset-password-email',
      //   subject: 'Password Reset Confirmation',
      //   context: {
      //     name: envFullName.split(' ')[0]
      //   }
      // };

      // smtpTransport.sendMail(data, function (err) {
      //   if (!err) {
      //     return res.json({ message: 'Password reset' });
      //   } else {
      //     return done(err);
      //   }
      // });
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
    newPassword: Joi.string().min(8).max(60).required(),
    verifyPassword: Joi.string().min(8).max(60).required()
  }
  return Joi.validate(request, schema)
}

function sendEmail(user, template) {
  fs.readFile(path.dirname('') + '/templates/'+template+'-password-email.html', 'utf-8', (err, data) => {
    if (err) throw err;
    gmailApi.sendEmail(user.email, template+' password', data.replace('{{name}}', user.fullname))
  })
}