const nodemailer = require('nodemailer');
const express = require('express')
const router = express.Router()

// Create a transporter object using your SMTP settings

const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com', // Your SMTP host (it is gmail account)
    port: 587, // Your SMTP port
    secure: false, // true for 465, false for other ports
    auth: {
        user: 'sirilcantony2@gmail.com', // Your email address 
//take google security->2 step verification->app password->create one and copy the password paste it here 

        pass: 'obmh fghn ycst erbc' // Your email password obmh fghn ycst erbc
    }
});

router.post('/sendmail', async (req,res)=>{
    try{

        const { email, message, name } = req.body
        console.log(email,message,name)
        await sendEmail('sirilcantony2@gmail.com', name, message+` \n \n send from ${email}`);
        //first one is ,to whom we send mail
        res.send("success")
    }
    catch{
        res.send("fail")
    }
})


function sendEmail(to, subject, text) {
    const mailOptions = {
        from: 'sirilcantony2@gmail.com', // Sender address
        to: to, // Recipient address
        subject: subject, // Subject line
        text: text // Plain text body
    };

    // Send mail with defined transport object
    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
}



module.exports = router;
