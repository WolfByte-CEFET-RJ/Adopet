const connection = require('./../models/connection')
const Joi = require('joi')
const crypto = require('crypto')

module.exports = {
    async adopt(req, res) {
        const userId = req.headers.userid
        if (!userId) 
            return res.status(400).send('userId is required')
        
        //validação de usuario
        try {
            await userExist(userId)
        } catch (erro) {
            return res.status(404).send(erro)
        }

        const { error } = validateAdopt(req.body)
        if (error) 
            return res.status(400).send(error.details[0].message)

        const { id_pet, id_doador } = req.body
        
        if(userId === id_doador)
            return res.status(403).send('it is not possible to adopt')

        //validação do doador
        try {
            await userExist(id_doador)
        } catch { 
            return res.status(404).send('donor not Found')
        }

        const pet = await connection('pets').where('id', id_pet).select(['pets.id_doador']).first()
        if(!pet)
            return res.status(404).send('Pet not Found')

        if(pet.id_doador !== id_doador)
            return res.status(400).send('This pet is not from this user')

        const petSolicitation = await connection('adoption').where({id_pet, id_doador, id_adotante: userId}).select('id').first()
        if(petSolicitation)
            return res.status(403).send('You already requested this pet')

        const id = crypto.randomBytes(16).toString('HEX')

        await connection('adoption').insert({
            id,
            id_pet,
            id_doador,
            id_adotante: userId
        })
            .then(response => {
                res.status(200).send('successful request')
            })
            .catch(error => {
                res.status(505).json({
                    message: error
                })
            })
    },

    async deleteAdopt(req, res) {
        const userId = req.headers.userid
        if (!userId) 
            return res.status(400).send('userId is required')
        
        //validação de usuario
        try {
            await userExist(userId)
        } catch (erro) {
            return res.status(404).send(erro)
        }

        const { error } = validateAdopt(req.body)
        if (error) 
            return res.status(400).send(error.details[0].message)

        const { id_pet, id_doador } = req.body
        
        if(userId === id_doador)
            return res.status(404).send('it is not possible')

        //validação do doador
        try {
            await userExist(id_doador)
        } catch { 
            return res.status(404).send('donor not Found')
        }

        const pet = await connection('pets').where('id', id_pet).select(['pets.id_doador']).first()
        if(!pet)
            return res.status(404).send('Pet not Found')

        if(pet.id_doador !== id_doador)
            return res.status(400).send('This pet is not from this user')

        try {
            await connection('adoption').where({id_pet, id_doador, id_adotante: userId}).del()
            res.status(200).send('adoption request canceled')
        } catch (erro) {
            res.status(500).send(erro)
        }
    },

    async myAdopts(req, res) {
        const userId = req.headers.userid
        if (!userId) 
            return res.status(400).send('userId is required')

        const myadopts = await connection('adoption').join('pets', 'pets.id', '=', 'adoption.id_pet')
            .where('id_adotante', userId)
            .select([
                'adoption.id_pet',
                'pets.id_doador',
                'pets.imagem',
                'pets.nome',
                'pets.tipo'
            ])

        if (!myadopts) 
            return res.status(404).send('no solicitations')
        else 
            return res.status(200).json(myadopts)
    },

    async myDonationsNotifications(req, res) {
        const userId = req.headers.userid
        if (!userId) 
            return res.status(400).send('userId is required')

        const mydonations = await connection('adoption').join('pets', 'pets.id', '=', 'adoption.id_pet')
            .join('users', 'users.id', '=', 'adoption.id_adotante')
            .where('id_doador', userId).select([
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

//validações
function validateAdopt(pet) {
    const schema = {
        id_pet: Joi.string().required(),
        id_doador: Joi.string().required()
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