import yup from "yup";
import validations from "../../../resources/lang/pt-br/generals.js";

class TaskRequest {
    async store(req, res, next) {
        const validator = yup.object().shape({
            title: yup.string(validations.task.string_title)
                .min(3, validations.task.min_title)
                .max(30, validations.task.max_title)
                .required(validations.task.required_title),
                description: yup.string(validations.task.string_description)
                    .max(150, validations.task.max_description),
                date: yup.date().default(function () {
                    return new Date();
                  }),
                email_notify: yup.boolean(validations.task.boolean_email_notify)
                    .required(validations.task.required_email_notify),
                time_before_notify: yup.integer(validations.task.integer_time_before_notify)
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

export default new TaskRequest();