const connection = require('./../models/connection')
const bcrypt = require('bcryptjs')
const Joi = require('joi')
const crypto = require('crypto')
const { imageUpload } = require('./../Google Drive api/gdrive')
const fs = require('fs')

module.exports = {
  async create(req, res) {
    const { error } = validateUser(req.body); //validação do body da requisição
    if (error) {
        return res.status(400).send(error.details[0].message);
    }
    const { fullName, email, password, cpf } = req.body

    const validCPF = validateCpf(cpf) //validação de cpf
    if (!validCPF) {
        return res.status(400).json({message: 'CPF is invalid'})
    } 

    const salt = await bcrypt.genSalt(10);
    const hash_password = await bcrypt.hash(password, salt) //encriptação de senha
    const id = crypto.randomBytes(8).toString('HEX')  //criação de id aleatório

    const user = await connection('users').where('email', email).first() //busca por recorrência de dados 
    const ong = await connection('ongs').where('email', email).first()  // ^
    const usercpf = await connection('users').where('cpf', cpf).first() // ^
    
    var imagem = null

    if (req.file) {
        imagem = await imageUpload(id+email, req.file.path).then() // faz o upload da imagem para o google drive
        .catch((error) => res.status(422).send(error)) 
    }

    if (!user & !usercpf & !ong) {
      try {
        await connection.insert({
          id,
          imagem,
          fullName,
          email,
          hash_password, 
          cpf
        }).into('users')

        res.json({
          message: "created user"
        })

      } catch (error) {
        res.status(422).send(error)
      }
    } else {
      res.status(400).json({
        message: "this user or ong is already registered"
      })
    }
  }
}

function validateUser(user) {
  const schema = {
      fullName: Joi.string().min(5).max(50).required(),
      email: Joi.string().min(5).max(255).required().email(),
      password: Joi.string().min(5).max(255).required(),
      cpf: Joi.string().length(11).required()
  };
  return Joi.validate(user, schema);
}

function validateCpf (strCPF) {
    var Soma;
    var Resto;
    Soma = 0;   
    
    //strCPF  = RetiraCaracteresInvalidos(strCPF,11);
    if (strCPF == "00000000000")
  return false;
    for (i=1; i<=9; i++)
  Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (11 - i); 
    Resto = (Soma * 10) % 11;
    if ((Resto == 10) || (Resto == 11)) 
  Resto = 0;
    if (Resto != parseInt(strCPF.substring(9, 10)) )
  return false;
  Soma = 0;
    for (i = 1; i <= 10; i++)
      Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (12 - i);
    Resto = (Soma * 10) % 11;
    if ((Resto == 10) || (Resto == 11)) 
  Resto = 0;
    if (Resto != parseInt(strCPF.substring(10, 11) ) )
        return false;
    return true;
}