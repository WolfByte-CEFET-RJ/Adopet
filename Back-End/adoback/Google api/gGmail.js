const { google } = require('googleapis');

function sendEmail (to, subject, message) { //função responsavel por mandar o email pela google api
    require('./authdrive')(async (auth) => {
        const raw = makeBody(to, subject, message)
        const gmail = google.gmail({version: 'v1', auth});
        gmail.users.messages.send({
            auth: auth,
            userId: 'me',
            resource: {
                raw
            }
    })
})
}

function makeBody(to, subject, message) { // Cria o corpo do email no padrão esperado pela api 
    var str = ["Content-Type: text/html; charset=\"UTF-8\"\n",
        "MIME-Version: 1.0\n",
        "Content-Transfer-Encoding: 7bit\n",
        "to: ", to, "\n",
        "from: adopet.suporte@gmail.com\n",
        "subject: ", subject, "\n\n",
        message
    ].join('');
    var encodedMail = new Buffer(str).toString("base64").replace(/\+/g, '-').replace(/\//g, '_');
        return encodedMail;
}

module.exports = { sendEmail }