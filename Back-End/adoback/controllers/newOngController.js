const connection = require('./../models/connection')
const bcrypt = require('bcryptjs')
const Joi = require('joi')
const crypto = require('crypto')
const { imageUpload } = require('./../Google Drive api/gdrive')

module.exports = {
    async create(req, res) {
        const { error } = validateOng(req.body) //validação do body da requisição
        if (error) {
            return res.status(400).send(error.details[0].message)
        }

        const { fullName, email, password, local } = req.body 

        const salt = await bcrypt.genSalt(10); 
        const hash_password = await bcrypt.hash(password, salt) //encriptação de senha
        const id = crypto.randomBytes(4).toString('HEX') //criação de id aleatório

        const ong = await connection('ongs').where('email', email).first() //busca por recorrência de dados
        const use = await connection('users').where('email', email).first() // ^

        var imagem = null

        if (req.file) {
            imagem = await imageUpload(id+email, req.file.path).then() // faz o upload da imagem para o google drive
            .catch((error) => res.status(422).send(error)) 
        }

        if(!ong & !use) {
            try {
                await connection('ongs').insert({
                    id,
                    imagem,
                    fullName,
                    email,
                    hash_password,
                    local
                })

                res.json({
                    message: "create ong"
                })
            } catch (error) {
                return res.status(422).send(error)
            }
        } else {
            return res.status(400).json({
                message: 'this ong or user is already registered'
            })
        }
    }
}

function validateOng(ong) {
    const schema = {
        fullName: Joi.string().min(5).max(50).required(),
        email: Joi.string().min(5).max(255).required().email(),
        password: Joi.string().min(5).max(255).required(),
        local: Joi.string().required()
    }
    return Joi.validate(ong, schema)
}