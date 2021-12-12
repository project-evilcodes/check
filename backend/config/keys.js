require('dotenv').config();
module.exports = {

    // Database
    mongoURI: process.env.mongoURI, // Mumbai - AWS

    // JWT Secret
    secretOrKey: process.env.secretOrKey,

    // App URL
    APP_URL: process.env.APP_URL,

    // CORS Policies
    CORS_URL: "*",

    //ADMIN_EMAIL: process.env.,

    // Password recovery email and emails
    PAYMENT_REPORT_EMAIL: process.env.PAYMENT_REPORT_EMAIL,

    PW_URL: process.env.PW_URL,

    MAIL_HOST: process.env.MAIL_HOST,
    MAIL_PORT: process.env.MAIL_PORT,
    MAIL_SECURE: false,
    MAIL_TLS: true,
    MAIL_ACC: process.env.MAIL_ACC,
    MAIL_PW: process.env.MAIL_PW,
};