import SessionRepository from "../../../repositories/SessionRepository.js";

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
            return res.status(200).json({message: "Logged out."});
    
        if (!await SessionRepository.expireSessionByUUID(auth_secure_token, session)){
            return res.status(422).json({error: "Fail to logged out."});
        }
        
        return res.status(200).json({message: "Logged out."});
    }
}


export default new LogoutController();