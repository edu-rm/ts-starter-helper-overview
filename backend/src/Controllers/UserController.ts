import { Request, Response} from 'express';
import EmailService from '../services/EmailService';

const users = [
    { name: 'Eduardo', email:'erm@erm.com'}
];

export default {
    async index(req : Request, res: Response){
        return res.json(users);
    },
    async create(req: Request, res: Response){
        const emailService = new EmailService();

        emailService.sendMail({
            to: { name:'Eduardo', email: 'edu@edu.com' },
            message: { subject: 'Seja Bem Vindo!', body: 'Bem vindo ao sistema'}
        });
        return res.json({ msg: 'Usuário criado'});
    }
};
