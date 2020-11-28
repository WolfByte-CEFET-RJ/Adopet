const connection = require('./../models/connection')
const Joi = require('joi')

module.exports = {
    async profile(req, res) {
        const userId = req.headers.userid
        if (!userId) {
            return res.status(400).send('userId is required')
        }

        const user = await connection('Users').where('Users.id', userId).select(['Users.fullname', 'Users.about',
            'Users.img_profile', 'Users.local']).first()

        if (!user)
            res.status(404).send('User not Found')

        const userPets = await connection('pets').where('pets.id_doador', userId).select(['pets.imagem',
            'pets.nome', 'pets.id', 'pets.tipo', 'pets.adotado'])

        res.status(200).json({
            user,
            pets: userPets
        })
    },

    async updateProfile(req, res) { 
        const userId = req.headers.userid
        if (!userId) {
            return res.status(400).send('userId is required')
        }

        const { error } = validateUpdate(req.body)
        if(error) {
            return res.status(400).send(error.details[0].message)
        }

        const user = await connection('users').where('id', userId).select(['users.fullName']).first()
        if (!user) 
            res.status(404).send('User not Found')
        
        try {
            await connection('users').where('id', userId).update(req.body)
        } catch (error) {
            res.status(500).send(error)
        }

        res.status(200).send('Update Completed')
    }
}

function validateUpdate(info) {
    const schema = {
        fullName: Joi.string().min(5).max(60),
        phone: Joi.string().length(13),
        about: Joi.string()
    }
    return Joi.validate(info, schema)
}