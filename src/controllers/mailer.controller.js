const nodemailer = require('nodemailer');
const { config } = require('../config/index');

exports.transporter = async (req, res) => {
    const { name, subject, email } = req.body;

    contentHTML = `
        <h1>User Information</h1>
        <ul>
            <li>Username: ${name}</li>
            <li>Subject: ${subject}</li>
        </ul>
        <p>${email}</p>
    `;

    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: config.MAILER_USER,
            pass: config.MAILER_PASS
        }
    });

    let info = await transporter.sendMail({
        from: req.body.email,
        to: 'vldzc92@gmail.com',
        subject: req.body.subject,
        html: contentHTML
    })

    console.log('Message sent: %s', info.messageId);

    res.redirect('/Home');
}