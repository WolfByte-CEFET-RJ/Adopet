const fs = require('fs')
const { google } = require('googleapis');


function imageUpload(fileName, filePath, folder, callback) {
  return new Promise( (resolve, reject) => { 
    require('./authdrive')(async (auth) => {
    const fileMetadata = {
        name: fileName,
        parents: [defDirectory(folder)],
    };

    const media = {
        mimeType: "image/jpeg",
        body: fs.createReadStream(filePath)
    }
    
    const drive = google.drive({version: 'v3', auth});
    await drive.files.create({
        resource: fileMetadata,
        media: media,
        fields: 'id'
      }, function (err, file) {
        if (err) {
          // Handle error
          reject({err})
        }
        else {
          fs.unlink(filePath, () => (err) => { //apaga a imagem que foi upada na pasta uploads
            if (err) throw err
          })
          //retorna o link da imagem no drive
          resolve('https://drive.google.com/thumbnail?id='+file.data.id) 
        }
      });
})
})};

function defDirectory (folder) {
  var directory
  if (folder == 'pet')
      directory = '1lz4H9Ie3a_396dHDnMPL3mSP0btg68wZ'
  else 
      directory = '1BP51YeICt4MSvAw5thygGiVwHni74GgH'
  return directory
}

module.exports = { imageUpload };

