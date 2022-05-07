import UserRepository from "../../../repositories/UserRepository.js";
import SessionRepository from "../../../repositories/SessionRepository.js";
import bcrypt from "bcrypt";

class LoginController {
    /**
     * 
     * @param {*} req 
     * @param {*} res 
     * @returns { json }
     */
    async login(req, res) {
        const { email, password} = req.body;
    
        const user = await UserRepository.getUserByEmail(email);
    
        if (Object.keys(user).length === 0) 
            return res.status(422).json({error: "Invalid credentials."});
    
        if (!attempt(password, user.password))
            return res.status(422).json({error: "Invalid credentials."});
    
        const session = await SessionRepository.store(user._id);
    
        return res.status(200).json({
            user: {
                _id: user._id,
                first_name: user.first_name,
                last_name: user.last_name,
                email: user.email
            },
            session: {
                auth_secure_token: session.uuid,
                expired_at: session.expired_at
            }
        })
    }

    /**
     * 
     * @param { String } password 
     * @param { String} user_password 
     * @returns { Boolean }
     */
    async attempt(password, user_password) {
        return await bcrypt.compare(password, user_password);
    }
}

export default new LoginController();