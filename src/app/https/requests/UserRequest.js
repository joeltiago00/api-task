import yup from "yup";
import validation from "../../../resources/lang/pt-br/validations.js";

class UserRequest {
    async validateStore(req, res, next) {
        const validator = yup.object().shape({
            first_name: yup.string(validation.user.string_first_name)
                .min(3, validation.user.min_first_name)
                .max(20, validation.user.max_first_name)
                .required(validation.user.required_first_name),
            last_name: yup.string(validation.user.string_last_name)
                .min(3, validation.user.min_last_name)
                .max(40, validation.user.max_last_name)
                .required(validation.user.required_last_name),
            email: yup.string(validation.user.string_email)
                .email(validation.user.email)
                .required(validation.user.required_email),
            password: yup.string(validation.user.string_password)
                .min(8, validation.user.min_password)
                .max(16, validation.user.max_password)
                .required(validation.user.required_password)
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
            first_name: yup.string(validation.user.string_first_name)
                .min(3, validation.user.min_first_name)
                .max(20, validation.user.max_first_name),
            last_name: yup.string(validation.user.string_last_name)
                .min(3, validation.user.min_last_name)
                .max(40, validation.user.max_last_name)
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