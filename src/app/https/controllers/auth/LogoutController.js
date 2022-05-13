import SessionRepository from "../../../repositories/SessionRepository.js";
import generals from "../../../../resources/lang/pt-br/generals.js";

class LogoutController {
    /**
     * 
     * @param {*} req 
     * @param {*} res 
     * @returns { json }
     */
    async logout(req, res) {
        const auth_secure_token = req.headers['auth-secure-token'];
    
        const session = await SessionRepository.getValidSessionByUUID(auth_secure_token);
    
        if (Object.keys(session).length === 0)
            return res.status(200).json({message: generals.logged_out});
    
        if (!await SessionRepository.expireSessionByUUID(auth_secure_token, session)){
            return res.status(422).json({error: generals.fail_logged_out});
        }
        
        return res.status(200).json({message: generals.logged_out});
    }
}


export default new LogoutController();