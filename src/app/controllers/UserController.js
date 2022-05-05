import User from "./../core/User.js";
import UserRepository from "../repositories/UserRepository.js";

const store = async (req) => {
    const { first_name, last_name, email, password } = req.body;

    const user = new User(first_name, last_name, email, password);
    
    const model = await UserRepository.store(user);

    return model._id;
}

const update = async (req, res, user_id) => {
    const {first_name, last_name} = req.body;

    const user = await UserRepository.getUserById(user_id);

    if (!UserRepository.update(user, {
        first_name: first_name,
        last_name: last_name
    })) {
        console.log("Fail to update user.");

        return;
    }

    res.status(201).json({
        _id: user._id,
      });
}

const UserControler = {
    store, update
}

export default UserControler;
