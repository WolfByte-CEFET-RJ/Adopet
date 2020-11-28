const express = require('express')
const routes = express.Router()

const gmailApi = require('./../Google api/gGmail')
const fs = require('fs')
const path = require('path')

const newUserController = require('../controllers/newUserController')
const passwordController = require('../controllers/passwordController')
const petController = require('./../controllers/petController')
const authController = require('./../controllers/authController')
const profileController = require('./../controllers/ProfileController')

const { uploadProfile, uploadPet } = require('./middleware/multerConfig') //é middleware multer para o upload de imagens
const authMiddleware = require('./middleware/authToken') // é um middleware que autentica o token 

//Rotas do usuario
routes.post('/api/user/register', uploadProfile, newUserController.create) //nova conta de usuario
routes.post('/api/user/login', authController.login)
routes.post('/api/user/forgetpassword', passwordController.forgot_password) //rota que cria o token de reset de senha

routes.get('/api/user/profile', authMiddleware, profileController.profile) 

routes.put('/api/user/resetpassword', passwordController.reset_password) //reseta as senha de um usuario ou ong
routes.put('/api/user/updateProfile', authMiddleware, profileController.updateProfile) //atualiza informações do profile

//Rotas dos pets
routes.post('/api/pets/create', uploadPet, authMiddleware, petController.create) //cria um post para anuncio de um pet
routes.post('/api/pets/requestpet', authMiddleware, petController.adopt) //criar uma solicitação de pet

routes.get('/api/pets/index', authMiddleware, petController.index) //mostras todos os pets para doação
routes.get('/api/pets/myadopts', authMiddleware, petController.myAdopts) //mostra todos os animais que a pessoa mostrou interesse 
routes.get('/api/pets/mydonationsnotifications', authMiddleware, petController.myDonationsNotifications) //mostra todos os animais que tem alguem interessado para adotar

routes.put('/api/pets/adopted', authMiddleware, petController.adoptionAproved) //rota de confirmação de adoção, é feita pelo doador 

routes.delete('/api/pets/delete', authMiddleware, petController.delete) //deleta um pet do bd

//teste
routes.post('/teste', async (req, res) => { 

})

module.exports = routes