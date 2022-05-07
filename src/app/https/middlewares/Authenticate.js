import UserRepository from "../../repositories/UserRepository.js";
import SessionRepository from "../../repositories/SessionRepository.js";

export default async (req, res, next) => {
    const session = await SessionRepository.getValidSessionByUUID(req.headers['auth-secure-token']);

    if (Object.keys(session).length === 0)
        return res.status(422).json({error: "Invalid session."});

    const user = await UserRepository.getUserById(session.user_id);

    if (Object.keys(user).length === 0)
        res.status(422).json({error: "Invalid user."});

    req.user = {
        _id: user._id,
        first_name: user.first_name,
        last_name: user.last_name,
        email: user.email
    }

    req.session = {
        auth_secure_token: session.uuid,
        expired_at: session.expired_at
    }

    await next()
}