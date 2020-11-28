const connection = require('./../models/connection')
const bcrypt = require('bcryptjs')
const Joi = require('joi')
const crypto = require('crypto')
const fs = require('fs')
const { imageUpload } = require('./../Google api/gdrive')

module.exports = {
    async create(req, res) {
        const { error } = validateOng(req.body) //validação do body da requisição
        if (error) {
            Deleteimg(req.file.path) //apaga a imagem que foi upada na pasta uploads no caso de erro no cadastro
            return res.status(400).send(error.details[0].message)
        }

        const { fullName, email, password, local, local_coords, phone, type, about} = req.body 

        if(type !== 'user' && type !== 'ong')
            res.status(400).send('user type is invalid')

        const salt = await bcrypt.genSalt(10); 
        const hash_password = await bcrypt.hash(password, salt) //encriptação de senha
        const id = crypto.randomBytes(4).toString('HEX') //criação de id aleatório
        const use = await connection('users').where('email', email).first() // busca por recorrência de dados

        var img_profile = null

        if(!use) {
            try {
                await connection('users').insert({
                    id,
                    type,
                    img_profile,
                    fullName,
                    email,
                    hash_password,
                    local,
                    local_coords, 
                    about,
                    phone
                })

                if (req.file) { // faz o upload da imagem para o google drive
                    img_profile = await imageUpload(id+email, req.file.path).then() 
                    .catch((error) => res.status(422).send(error)) 

                    await connection('users').where('email', email).update({img_profile})
                }
                
                res.status(201).send('User was created')

            } catch (error) {
                Deleteimg(req.file.path)
                return res.status(422).send(error)

            }

        } else {
            Deleteimg(req.file.path)
            return res.status(400).send('this ong or user is already registered')
        }
    }
}

function validateOng(user) {
    const schema = {
        fullName: Joi.string().min(5).max(60).required(),
        email: Joi.string().min(5).max(60).required().email(),
        password: Joi.string().min(8).max(255).required(),
        local: Joi.string().max(60).required(),
        local_coords: Joi.string().max(100).required(),
        phone: Joi.string().length(13).required(),
        about: Joi.string().required(),
        type: Joi.string().min(3).max(4).required(),
    }
    return Joi.validate(user, schema)
}

function Deleteimg(filePath) { //apaga a imagem que foi upada na pasta uploads no caso de erro no cadastro
    fs.unlink(filePath, () => (err) => { 
        if (err) throw err
      })
}