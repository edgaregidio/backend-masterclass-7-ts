import {Request, Response} from 'express'
import EmailService from '../services/EmailServices';

const users = [
  {
    name: "Edgar", 
    email: "teste@teste.com"
  },
];

export default {
  async index(req: Request, res: Response) {
    return res.json(users);
  },

  async create(req: Request, res: Response) {
    const emailService = new EmailService();
    emailService.sendMail({
      to: {
        name: 'Edgar',
        email: 'teste@teste.com'
      },
      message: {
        subject: 'Bem-vindo ao sistema',
        body: 'Seja Bem-vindo'
      }
    });
    return res.send()
  }

};