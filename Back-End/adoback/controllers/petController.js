const connection = require('./../models/connection')
const Joi = require('joi')
const crypto = require('crypto')
const fs = require('fs')
const { imageUpload } = require('./../Google api/gdrive')
const { insideCircle } = require('geolocation-utils')
const { reject, forIn } = require('lodash')
const { resolve } = require('path')
const Knex = require('knex')

module.exports = {
    async create(req, res) {
        const userId = req.headers.userid
        if (!userId) {
            return res.status(400).send('userId is required')
        }

        const { error } = validatePet(req.body) //validação da requisição
        if (error) {
            for (var i = 0; i < req.files.length; i++)
                Deleteimg(req.files[i].path)
            return res.status(400).send(error.details[0].message);
        }

        const { localização, nome, tipo, sexo, idade, tamanho, peso, vacinação, Treinado,
            castrado, vermifugado, chipado, caracteristicas } = req.body

        try { 
            await userExist(userId)
        } catch (erro) {
            for (var i = 0; i < req.files.length; i++)
                Deleteimg(req.files[i].path)
            return res.status(404).send(erro)
        }

        const id = crypto.randomBytes(12).toString('HEX') //criação de id aleatório

        if (req.files) {
            var imagem = [req.files.length - 1]
            for (var i = 0; i < req.files.length; i++) {
                imagem[i] = await imageUpload(id + userId + i, req.files[i].path, 'pet').then()
                    .catch((error) => res.send(error))
            }
        } else var imagem = null

        try {
            await connection('pets').insert({
                id, localização: JSON.stringify(localização), imagem: JSON.stringify(imagem), id_doador: userId, nome, tipo, sexo, idade, tamanho, peso, vacinação,
                Treinado, castrado, vermifugado, chipado, caracteristicas
            })
        } catch (error) {
            return res.status(422).send(error)
        }

        res.status(200).json({
            message: 'Create post',
            id
        })
    },

    async index(req, res) {
        const userId = req.headers.userid
        if (!userId) {
            return res.status(400).send('userId is required')
        }

        const user = await connection('users').where('id', userId).select(['users.local_coords']).first()
        if (!user) 
            res.status(404).send('User not Found')
        else {
            try {
                const {page = 1} = req.query
                const [count] = await connection('pets').count()

                const pets = await connection('pets').where('adotado', 0).limit(20)
                .offset((page - 1) * 20).select(['pets.id', 'pets.id_doador',
                    'pets.imagem', 'pets.localização', 'pets.nome', 'pets.tipo',
                    'pets.sexo', 'pets.idade', 'tamanho', 'pets.vacinação',
                    'pets.Treinado', 'pets.castrado', 'pets.vermifugado',
                    'pets.chipado', 'pets.caracteristicas'])

                let petList = []

                const fistSplit = user.local_coords.split(':')
                const userCoords = {latitude: parseFloat(fistSplit[1].split(',',1)), longitude: parseFloat(fistSplit[2].split('}',1))}

                pets.forEach((pet) => {
                        const splitPet = pet.localização.split(':')
                        const petCoords = {latitude: parseFloat(splitPet[1].split(',',1)), 
                        longitude: parseFloat(splitPet[2].split('}',1))}

                        if(insideCircle(petCoords,userCoords, 10000) && pet.id_doador !== userId)
                            petList.push(pet)
                })

                if (!petList)
                    return res.status(404).send('Pets not found.')
                else {
                    res.header('X-total-count',count['count(*)'])
                    return res.status(200).json(petList)
                }

            } catch (error) {
                return res.status(400).send(error)
            }
        }

    },

    async delete(req, res) {
        const userId = req.headers.userid
        if (!userId) {
            return res.status(400).send('userId is required')
        } 

        try {
            await userExist(userId)
        } catch (erro) {
            return res.status(404).send(erro)
        }

        const { error } = validatePetID(req.body)
        if (error) {
            return res.status(400).send(error.details[0].message);
        }

        try {
            await connection('pets').where({id : req.body.id_pet, id_doador : userId}).del()
            res.status(200).send('pets delete successfully')
        } catch (error) {
            return res.status(400).send(error)
        }
    }
}

//Validações 
function validatePet(pet) {
    const schema = {
        localização: Joi.string().required(),
        nome: Joi.string().min(2).max(60).required(),
        tipo: Joi.string().min(2).max(60).required(),
        sexo: Joi.string().length(5).required(),
        idade: Joi.number().precision(2).required(),
        tamanho: Joi.string().max(20).required(),
        peso: Joi.number().required(),
        vacinação: Joi.string().required(),
        Treinado: Joi.number().required(),
        castrado: Joi.number().required(),
        vermifugado: Joi.number().required(),
        chipado: Joi.number().required(),
        caracteristicas: Joi.string().required()
    }

    return Joi.validate(pet, schema)
}

function validatePetID(pet) {
    const schema = {
        id_pet: Joi.string().length(24).required()
    }

    return Joi.validate(pet, schema)
}

function userExist(id) {
    return new Promise ( async (resolve, reject) => { 
        const user = await connection('users').where('id', id).select(['users.fullName']).first()
        if (!user) 
            reject('User no Found')
        else 
            resolve(true)
    })
}

//funções 
function Deleteimg(filePath) { //apaga a imagem que foi upada na pasta uploads no caso de erro no cadastro
    fs.unlink(filePath, () => (err) => { 
        if (err) throw err
      })
}