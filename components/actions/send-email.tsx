"use server";
import nodemailer from "nodemailer";

export const sendEmail = async (values: {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}) => {
  const transporter = nodemailer.createTransport({
    host: "mail5.enguard.com",
    port: 587,
    secure: true,
    auth: {
      user: "wangmedial@wangmedical.com",
      pass: "PurpleDino27!",
    },
  });

  const mailOptions = {
    from: "wangmedial@wangmedical.com",
    to: values?.email,
    subject: values?.subject,
    text: `
    Hey team!,
    
    ${values.name}(${values.phone}) has send an message, please look into it.
    ${values.message}
    `,
  };

  console.log(mailOptions);

  transporter.sendMail(
    mailOptions,
    (error: Error | null, info: { response: string }) => {
      if (error) {
        console.error("Error sending email: ", error);
      } else {
        console.log("Email sent: ", info.response);
      }
    }
  );
};
