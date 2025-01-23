const config = {
  env: process.env.NODE_ENV,
  mail: {
    service: "Gmail",
    host: "smtp.gmail.com",
    port: 465,
    auth: {
      user: process.env.MAIL_USERNAME,
      pass: process.env.MAIL_PASSWORD,
    },
  },
  mailOptions: {
    from: process.env.MAIL_USERNAME,
    to: process.env.MAIL_USERNAME,
  },
};

export default config;
