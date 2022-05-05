import SessionRepository from "../../repositories/SessionRepository.js";

const logout = async (req, res) => {
    const auth_secure_token = req.headers['auth-secure-token'];

    const session = await SessionRepository.getValidSessionByUUID(auth_secure_token);

    if (!session)
        res.status(200).json({message: "Logged out."});

    if (!await SessionRepository.expireSessionByUUID(auth_secure_token, session)){
        res.setHeader('auth-secure-token', auth_secure_token)
        res.status(422).json({error: "Fail to logged out."});
}
    res.status(200).json({message: "Logged out."});
}

const LogoutController = {
    logout
}

export default LogoutController;