import yup from "yup";
import general from "../../../resources/lang/pt-br/general.js";

class TaskRequest {
    async store(req, res, next) {
        const validator = yup.object().shape({
            title: yup.string(general.task.string_title)
                .min(3, general.task.min_title)
                .max(30, general.task.max_title)
                .required(general.task.required_title),
                description: yup.string(general.task.string_description)
                    .max(150, general.task.max_description),
                date: yup.date().default(function () {
                    return new Date();
                  }),
                email_notify: yup.boolean(general.task.boolean_email_notify)
                    .required(general.task.required_email_notify),
                time_before_notify: yup.integer(general.task.integer_time_before_notify)
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