import User from "../models/User.js";
import bcrypt from "bcrypt";

class UserRepository {
    /**
     * 
     * @param { User } user 
     * @returns { User }
     */
    async store(user) 
    {
        const model = await User.create({
            first_name: user.firstName,
            last_name: user.lastName,
            email: user.email,
            password: await bcrypt.hash(user.password, 10)
        });
    
        return model;
    }

    /**
     * 
     * @param { User } user 
     * @param { object } data 
     * @returns { User }
     */
    async update(user, data)
    {
        return await user.updateOne({
            first_name: data.first_name ??user.first_name,
            last_name: data.last_name ?? user.last_name
        })
    }
    
    /**
     * 
     * @param { ObjectId } id 
     * @returns { User }
     */
    async getUserById(id)
    {
        return await User.findById(id).exec();
    }
    
    /**
     * 
     * @param { String } email 
     * @returns { User }
     */
    async getUserByEmail(email)
    {
        return await User.findOne({email: email}).exec();
    }
}


export default new UserRepository();