import mongoose from "mongoose";

const User = mongoose.model('user', {
    first_name: String,
    last_name: String,
    email: String,
    password: String
});

export default User;