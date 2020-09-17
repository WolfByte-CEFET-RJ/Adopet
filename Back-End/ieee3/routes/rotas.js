const express = require('express')
const routes  = express.Router()

const newUserController = require('../controllers/newUserController')
const newOngController = require('../controllers/newOngController')
const taskController = require('../controllers/allListController')
const passwordController = require('../controllers/passwordController')
const petController = require('./../controllers/petController')
const authController = require('./../controllers/authController')

const { uploadProfile, uploadPet } = require('./middleware/multerConfig') //é middleware multer para o upload de imagens
const authMiddleware = require('./middleware/authToken') // é um middleware que autentica o token 

const gdrive = require('./../Google Drive api/gdrive')

routes.post('/api/user', uploadProfile, newUserController.create) //cria uma nova conta de usuario
routes.post('/api/ong', uploadProfile, newOngController.create) //cria uma nova conta de ong
routes.post('/api/createtask', taskController.create_a_task) //cria um novo task
routes.post('/api/forgetpassword', passwordController.forgot_password) //rota que cria o token de reset de senha
routes.post('/api/login', authController.login) //rota de login
routes.post('/api/pet', uploadPet, authMiddleware, petController.create) //cria um post para anuncio de um pet
routes.post('/api/requestpet', authMiddleware, petController.adopt) //criar uma solicitação de pet

routes.get('/api/pets', authMiddleware, petController.index) //mostras todos os pets para doação
routes.get('/api/listalltasks', taskController.list_all_tasks) //lista todos os task
routes.get('/api/readatask', taskController.read_a_task) //mostra os detalhes de um task
routes.get('/api/myadopts', authMiddleware, petController.myAdopts) //mostra todos os animais que a pessoa mostrou interesse 
routes.get('/api/mydonationsnotifications', authMiddleware, petController.myDonationsNotifications) //mostra todos os animais que tem alguem interessado para adotar

routes.put('/api/updateatask', taskController.update_a_task) //dar update em um task
routes.put('/api/resetpassword', passwordController.reset_password) //reseta as senha de um usuario ou ong
routes.put('/api/petadopted', authMiddleware, petController.adoptionAproved) //rota de confirmação de adoção, é feita pelo doador 

routes.delete('/api/deleteatask', taskController.delete_a_task) //deleta um task
routes.delete('/api/deletepet', authMiddleware, petController.delete) //deleta um pet do bd

// routes.post('/teste', uploadPet , async (req, res) => {
//     var links = [req.files.length - 1]
//     for (var i = 0; i < req.files.length; i++) {
//         links[i] =  await gdrive.imageUpload('teste'+i, req.files[i].path).then()
//         .catch( (error) => res.send(error) )
//     }
//     res.send(JSON.stringify(links))
// })

module.exports = routes