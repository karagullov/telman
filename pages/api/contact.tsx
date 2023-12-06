import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  // host: "smtp.tellmann.co.za",
  // port: 587,
  service: "gmail",
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.MAIL_USERNAME,
    pass: process.env.MAIL_PASSWORD,
  },
  // tls: {
  //   rejectUnauthorized: false,
  // },
});

const mailer = (body) => {
  console.log(111, process.env.MAIL_USERNAME);

  const message = {
    from: process.env.MAIL_USERNAME,
    to: `${process.env.MAIL_USERNAME}`,
    subject: `CONTACT-FORM --- ${body.email}`,
    text: JSON.stringify(body, null, 2),
    replyTo: body.email,
  };

  return new Promise((resolve, reject) => {
    transporter.sendMail(message, (error, info) => (error ? reject(error) : resolve(info)));
  });
};

export default async (req: NextApiRequest, res: NextApiResponse) => {
  console.log(transporter);
  const mailerRes = await mailer(req.body);
  res.send(mailerRes);
};
