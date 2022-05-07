import yup from "yup";
import general from "../../../resources/lang/pt-br/general.js";

class UserRequest {
    async validateStore(req, res, next) {
        const validator = yup.object().shape({
            first_name: yup.string(general.user.string_first_name)
                .min(3, general.user.min_first_name)
                .max(20, general.user.max_first_name)
                .required(general.user.required_first_name),
            last_name: yup.string(general.user.string_last_name)
                .min(3, general.user.min_last_name)
                .max(40, general.user.max_last_name)
                .required(general.user.required_last_name),
            email: yup.string(general.user.string_email)
                .email(general.user.email)
                .required(general.user.required_email),
            password: yup.string(general.user.string_password)
                .min(8, general.user.min_password)
                .max(16, general.user.max_password)
                .required(general.user.required_password)
        });

        try {
            await validator.validate(req.body);
        } catch (err) {
            return res.status(422).json({
                error: err.errors
            });
        }
            
        await next();
    }

    async validateUpdate(req, res, next) {
        const validator = yup.object().shape({
            first_name: yup.string(general.user.string_first_name)
                .min(3, general.user.min_first_name)
                .max(20, general.user.max_first_name),
            last_name: yup.string(general.user.string_last_name)
                .min(3, general.user.min_last_name)
                .max(40, general.user.max_last_name)
        });

        try {
            await validator.validate(req.body)
        } catch (err) {
            return res.status(422).json({
                error: err.errors
            });
        }
            
        await next();
    }
}

export default new UserRequest();