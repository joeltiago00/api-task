import User from "../../models/User.js";

const store = async (user) => {
    const model = await User.create({
        first_name: user.firstName,
        last_name: user.lastName,
        email: user.email,
        password: user.password
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

const UserRepository = {
    store, update, getUserById
}
export default UserRepository;

