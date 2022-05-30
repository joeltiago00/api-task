import User from "./../../core/User.js";
import UserRepository from "../../repositories/UserRepository.js";
import generals from "../../../resources/lang/pt-br/generals.js";
import JWTHelper from "../../helpers/JWTHelper.js";

class UserControler {
    
    /**
     * 
     * @param {*} req 
     * @param {*} res 
     * @returns { json }
     */
    async store(req, res) {
        const { first_name, last_name, email, password } = req.body;
    
        const user = new User(first_name, last_name, email, password);
        
        const model = await UserRepository.store(user);
    
        return res.status(201).json({
            _id: model._id,
          });
    }

    /**
     * 
     * @param {*} req 
     * @param {*} res 
     * @returns { json }
     */
    async update(req, res) {
        const user_id = req.params.user_id;

        if (req.user._id !== user_id)
            return res.status(422).json({error: generals.not_allowed})

        const {first_name, last_name} = req.body;
    
        const user = await UserRepository.getUserById(user_id);
    
        if (Object.keys(user).length === 0) 
            res.status(422).json({error: generals.user.invalid});
    
        if (!await UserRepository.update(user, {
            first_name: first_name,
            last_name: last_name
        })) 
            return res.status(422).json({error: generals.user.fail_to_update});
    
        return res.status(204).json({});
    }

    /**
     * 
     * @param {*} req 
     * @param {*} res 
     * @returns { json }
     */
    async show(req, res) {
        const user_id = req.params.user_id;

        const user = await UserRepository.getUserById(user_id);

        if (Object.keys(user).length === 0) 
            res.status(422).json({error: generals.user.invalid});

        return res.status(200).json({
            _id: user._id,
            first_name: user.first_name,
            last_name: user.last_name,
            email: user.email
        });
    }

    /**
     * 
     * @param {*} req 
     * @param {*} res 
     * @returns { json }
     */
    async index(req, res) {
        let users = await UserRepository.getAllUsers();

        users = JSON.stringify(users);
        users = JSON.parse(users);
        let response = [];

        Object.entries(users).forEach((values) => {
            const key = values[0];
            const value = values[1];

            Object.keys(values[1]).forEach((values) => {
                const key = values[0];
                const value = values[1];
                console.log( values[1]);
            });
        });

    }
}

export default new UserControler();
