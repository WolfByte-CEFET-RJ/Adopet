const connection = require('./../models/connection')
const Joi = require('joi')
const crypto = require('crypto')
const { imageUpload } = require('./../Google api/gdrive')

module.exports = {
    async create(req, res) {
        const { error } = validatePet(req.body) //validação da requisição
        if (error) {
            return res.status(400).send(error.details[0].message);
        }

        const { localização, id_doador, nome, tipo, sexo, idade, tamanho, peso, vacinação, Treinado,
            castrado, vermifugado, chipado, caracteristicas } = req.body

        const id = crypto.randomBytes(12).toString('HEX') //criação de id aleatório

        if (req.files) {
            var imagem = [req.files.length - 1]
            for (var i = 0; i < req.files.length; i++) {
                imagem[i] = await imageUpload(id+id_doador+ i, req.files[i].path, 'pet').then()
                    .catch((error) => res.send(error))
            }
        } else var imagem = null

        try {
            await connection('pets').insert({
                id, localização, imagem: JSON.stringify(imagem), id_doador, nome, tipo, sexo, idade, tamanho, peso, vacinação,
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
        try {
            const pets = await connection('pets').where('adotado', 0).select(['pets.id_doador',
                'pets.imagem','pets.localização', 'pets.nome', 'pets.tipo',
                'pets.sexo', 'pets.idade', 'tamanho', 'pets.vacinação',
                'pets.Treinado', 'pets.castrado', 'pets.vermifugado',
                'pets.chipado', 'pets.caracteristicas'])
            res.status(200).json(pets)
        } catch (error) {
            return res.status(400).send(error)
        }

    },

    async delete(req, res) {
        const { error } = validatePetID(req.body)
        if (error) {
            return res.status(400).send(error.details[0].message);
        }

        try {
            await connection('pets').where('id', req.body.id).del()
            res.status(200).json({
                status: 'pets delete successfully'
            })
        } catch (error) {
            return res.status(400).send(error)
        }
    },

    async adopt(req, res) {
        const { error } = validateAdopt(req.body)
        if (error) {
            return res.status(400).send(error.details[0].message)
        }

        const { id_pet, id_doador, id_adotante } = req.body
        const id = crypto.randomBytes(16).toString('HEX')

        await connection('adoption').insert({
            id,
            id_pet,
            id_doador,
            id_adotante
        })
            .then(response => {
                res.status(200).json({
                    message: 'successful request'
                })
            })
            .catch(error => {
                res.status(505).json({
                    message: error
                })
            })
    },

    async myAdopts(req, res) {
        const id_adotante = req.headers.id

        const myadopts = await connection('adoption').join('pets', 'pets.id', '=', 'adoption.id_pet')
            .where('id_adotante', id_adotante)
            .select([
                'adoption.id_pet',
                'pets.imagem',
                'pets.nome',
                'pets.tipo'
            ])

        if (!myadopts) {
            res.status(500).send({
                message: 'no solicitations'
            })
        }

        res.status(200).json(myadopts)
    },

    async myDonationsNotifications(req, res) {
        const id_doador = req.headers.id

        const mydonations = await connection('adoption').join('pets', 'pets.id', '=', 'adoption.id_pet')
            .join('users', 'users.id', '=', 'adoption.id_adotante')
            .where('id_doador', id_doador).select([
                'adoption.pet_id',
                'pets.imagem',
                'pets.nome',
                'pets.tipo',
                'users.fullName'
            ])

        if (!mydonations) {
            res.status(500).send({
                message: 'no solicitations'
            })
        }

        res.status(200).json(mydonations)
    },

    async adoptionAproved(req, res) {
        const { error } = validateAdopt(req.body)
        if (error) {
            return res.status(400).send(error.details[0].message)
        }

        const id = crypto.randomBytes(16).toString('HEX')
        const { id_pet, id_adotante, id_doador } = req.body

        await connection('pets').where('id', id_pet).update({ adotado: 1 })
            .catch(erro => {
                return res.status(500).send(erro)
            })

        await connection('adoption').where('id_pet', id_pet).del()
            .catch(erro => {
                return res.status(500).send(erro)
            })

        await connection('adopted').insert({
            id,
            id_pet,
            id_adotante,
            id_doador
        })
            .then(response => {
                return res.status(200).send({
                    message: 'Parabens seu pet foi adotado'
                })
            })
            .catch(erro => {
                return res.status(500).send(erro)
            })
    }
}

//Validações 
function validatePet(pet) {
    const schema = {
        localização: Joi.string().required(),
        id_doador: Joi.string().required(),
        nome: Joi.string().min(2).max(60).required(),
        tipo: Joi.string().min(2).max(60).required(),
        sexo: Joi.string().length(5).required(),
        idade: Joi.number().precision(2).required(),
        tamanho: Joi.string().max(20),
        peso: Joi.number(),
        vacinação: Joi.string(),
        Treinado: Joi.number().required(),
        castrado: Joi.number().required(),
        vermifugado: Joi.number().required(),
        chipado: Joi.number().required(),
        caracteristicas: Joi.string()
    }

    return Joi.validate(pet, schema)
}

function validatePetID(pet) {
    const schema = {
        id: Joi.string().length(24).required()
    }

    return Joi.validate(pet, schema)
}

function validateAdopt(pet) {
    const schema = {
        id_pet: Joi.string().required(),
        id_doador: Joi.string().required(),
        id_adotante: Joi.string().required()
    }

    return Joi.validate(pet, schema)
}