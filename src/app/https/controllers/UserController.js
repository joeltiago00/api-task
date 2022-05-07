import User from "./../../core/User.js";
import UserRepository from "../../repositories/UserRepository.js";

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
        const {first_name, last_name} = req.body;
        const user_id = req.params.user_id ?? res.status(422).json({error: "User ID is missing."});
    
        const user = await UserRepository.getUserById(user_id);
    
        if (Object.keys(user).length === 0) 
            res.status(422).json({error: "Invalid user."});
    
        if (!await UserRepository.update(user, {
            first_name: first_name,
            last_name: last_name
        })) 
        return res.status(422).json({error: "Fail to update user."});
    
        return res.status(201).json({
            _id: user._id,
          });
    }
}

export default new UserControler();
