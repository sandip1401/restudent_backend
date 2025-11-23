import nodemailer from "nodemailer";

const sendEmail=async(subject,message,send_to)=>{
    const transporter=nodemailer.createTransport({
        service:"gmail",
        auth:{
            user:process.env.USER_EMAIL,
            pass:process.env.USER_PASSWORD,
        }
    })

    const mailOptions={
        from:process.env.USER_EMAIL,
        to: send_to,
        subject:subject,
        text:message,
    }
    await transporter.sendMail(mailOptions);
}
export default sendEmail