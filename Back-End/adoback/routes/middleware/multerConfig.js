const path = require('path')
const multer = require('multer')
const storage = multer.diskStorage({
    destination: (req, file, cb ) => {
        cb(null, path.dirname('./') + '/uploads')   //defini o local onde serão armazenadas as imagens
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname) // defini o nome da imagem
    }
})

const up = multer({ storage, 
    fileFilter: (req, file, cb) => { //só permite o upload de imagens
    if(file.mimetype != 'image/jpeg' && file.mimetype != 'image/png' && file.mimetype != 'image/pjpeg' && file.mimetype != 'image/jpg') {
        cb(new Error('invalid type file.'))
    }
    else
        cb(null, true)
    },
    limits: {
        fileSize: 1024 * 1024 * 1024   //aceita imagem de até 50 Mbytes
    }
})

const uploadProfile = up.single('img') //img = nome do campo da requisição e aceita uma foto

const uploadPet = up.array('img', 3) // aceita até 3 fotos

module.exports = { uploadProfile, uploadPet }