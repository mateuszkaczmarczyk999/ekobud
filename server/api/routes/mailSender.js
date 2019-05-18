const nodemailer = require("nodemailer")

module.exports = (router) => {
  const transporter = nodemailer.createTransport({
    host: "mail37.mydevil.net",
    port: 587,
    secure: false,
    auth: {
      user: 'kontakt@ekobud.org',
      pass: '123$567*As'
    }
  })

  async function sendEmail(mailOptions) {
    transporter.sendMail(mailOptions)
  }

  router.post("/send-firm-email", (req, res, next) => {
    let messageBody = req.body
    let messageText = `${messageBody.message} ${messageBody.fullName} tel: ${messageBody.phone}, email: ${messageBody.to}`
    let messageTitle = messageBody.subject === '' ? `Zapytanie od klienta: ${messageBody.fullName}` : `Zapytanie o budynek numer ${messageBody.subject}`

    let mailOptions = {
      from: '"Kontakt od klienta" <kontakt@ekobud.org>',
      to: `kontakt@ekobud.org, mariola.szwech@ekobud.org, marzena.szwech@ekobud.org`,
      subject: messageTitle,
      text: messageText
    }
    sendEmail(mailOptions)
    .then(() => {
      res.status(200).json("Wiadomość została wysłana")
    })
    .catch((error) => {
      if (error) {
        res.status(500).json({ error: error })
        return console.log(error)
      }
    })
  })

  router.post("/send-client-email", (req, res, next) => {
    let messageBody = req.body
    let noAttachment = messageBody.subject === ''
    let messageText = `${messageBody.message} ${messageBody.fullName} tel: ${messageBody.phone}, email: ${messageBody.to}`
    let attachment = noAttachment ? null : { path: `public/images/offer/plan/osiedle_przy_cichej_${messageBody.subject}.jpg` }

    let mailOptions = {
      from: '"EKO-BUD Deweloper domów ekologicznych" <kontakt@ekobud.org>',
      to: messageBody.to,
      subject: 'Zapytanie do EKO-BUD Deweloper Domów Ekologicznych',
      text: `Wysłano wiadomosc o treści: ${messageText}`
    }

    if (!noAttachment) mailOptions['attachments'] = [attachment]

    sendEmail(mailOptions)
    .then(() => {
      res.status(200).json("Wiadomość została wysłana")
    })
    .catch((error) => {
      if (error) {
        res.status(500).json({ error: error })
        return console.log(error)
      }
    })
  })  
}
