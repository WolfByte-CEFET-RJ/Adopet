const connection = require('./../models/connection')

module.exports = {
    async profile(req, res) {
        const userId = req.headers.userid
        if (!userId) {
            return res.status(400).send('userId is required')
        }

        const user = await connection('Users').where('Users.id', userId).select(['Users.fullname',
            'Users.img_profile', 'Users.local']).first()

        if (!user)
            res.status(404).send('User not Found')

        const userPets = await connection('pets').where('pets.id_doador', userId).select(['pets.imagem',
            'pets.nome', 'pets.id', 'pets.tipo', 'pets.adotado'])

        res.status(200).json({
            user,
            pets: userPets
        })

    }
}
