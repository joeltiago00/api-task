import User from "../../models/User.js";
import bcrypt from "bcrypt";

const store = async (user) => {
    const model = await User.create({
        first_name: user.firstName,
        last_name: user.lastName,
        email: user.email,
        password: await bcrypt.hash(user.password, 10)
    });

    return model;
}

const update = async (user, data) => {
    return await user.updateOne({
        first_name: data.first_name ??user.first_name,
        last_name: data.last_name ?? user.last_name
    })
}

const getUserById = async(id) => {
    const user = await User.findById(id);

    if (user === null || user === undefined) {
        console.log("Fail to get user");

        return;
    }
    
    return user;
}

const getUserByEmail = async (email) => {
    return await User.findOne({email: email}).exec();
}

const UserRepository = {
    store, update, getUserById, getUserByEmail
}
export default UserRepository;

