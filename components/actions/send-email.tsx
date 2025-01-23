"use server";
import nodemailer from "nodemailer";
import config from "@/lib/config";

import { SentMessageInfo } from "nodemailer";

export const sendEmail = async (values: {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}): Promise<SentMessageInfo> => {
  const transporter = nodemailer.createTransport({
    ...config?.mail,
  });

  const mailOptions = {
    ...config.mailOptions,
    subject: `New Contact Form Submission: ${values.subject}`,
    html: `
      <p>Hello Team,</p>
      <p>You have received a new contact form submission. Here are the details:</p>
      <table border="1" cellpadding="5" cellspacing="0" style="border-collapse: collapse; width: 100%; max-width: 600px;">
        <tr>
          <th style="text-align: left;">Field</th>
          <th style="text-align: left;">Details</th>
        </tr>
        <tr>
          <td style="text-align: left;"><strong>Name</strong></td>
          <td style="text-align: left;">${values.name}</td>
        </tr>
        <tr>
          <td style="text-align: left;"><strong>Email</strong></td>
          <td style="text-align: left;">${values.email}</td>
        </tr>
        <tr>
          <td style="text-align: left;"><strong>Phone</strong></td>
          <td style="text-align: left;">${values.phone}</td>
        </tr>
        <tr>
          <td style="text-align: left;"><strong>Subject</strong></td>
          <td style="text-align: left;">${values.subject}</td>
        </tr>
        <tr>
          <td style="text-align: left;"><strong>Message</strong></td>
          <td style="text-align: left;">${values.message}</td>
        </tr>
      </table>
      <p>Please review and respond to the submission as needed.</p>
      <p>Best regards,<br/>Wang Medical Inc</p>
    `,
  };

  return await transporter.sendMail(mailOptions);
};
