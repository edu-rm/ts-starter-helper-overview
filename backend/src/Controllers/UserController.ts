import { Request, Response} from 'express';

const users = [
    { name: 'Eduardo', email:'erm@erm.com'}
];

export default {
    async index(req : Request, res: Response){
        return res.json(users);
    }
};
