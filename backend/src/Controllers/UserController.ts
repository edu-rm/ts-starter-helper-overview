const users = [
    { name: 'Eduardo', email:'erm@erm.com'}
];

export default {
    async index(req,res){
        return res.json(users);
    }
};
