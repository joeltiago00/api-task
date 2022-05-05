import UserRepository from "../../repositories/UserRepository.js";
import SessionRepository from "../../repositories/SessionRepository.js";
import bcrypt from "bcrypt";

const login = async (req, res) => {
    const { email, password} = req.body;

    const user = await UserRepository.getUserByEmail(email);

    if (!user) 
        res.status(422).json({error: "Invalid credentials."});

    if (!attempt(password, user.password))
        res.status(422).json({error: "Invalid credentials."});

    const session = await SessionRepository.store(user._id);

    res.status(200).json({
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

const attempt = async (password, user_password) => {
    return await bcrypt.compare(password, user_password);
}

const LoginController = {
    login
}

export default LoginController;