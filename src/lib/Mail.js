import nodemailer from 'nodemailer';
import mailconfig from '../config/mail';

class Mail {
  constructor() {
    const { host, post, secure, auth } = mailconfig;

    this.transporter = nodemailer.createTransport({
      host,
      post,
      secure,
      auth: auth.user ? auth : null,
    });
  }

  sendMail(message) {
    return this.transporter.sendMail({
      ...mailconfig.default,
      ...message,
    });
  }
}

export default new Mail();
