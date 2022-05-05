import Request from "./Request.js";

const store = async (req, res) => {
    const rules = {
        first_name: "string|min:1|max:30",
        last_name: "string|min:1|max:30",
        email: "string|min:15|max:100",
        password: "string|min:8|max:16"
    };

    Request.validate(rules);
}

const UserRequest = {
    store
}

export default UserRequest;