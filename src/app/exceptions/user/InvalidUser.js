import Exception from "../Exception.js";
import statusCode from "../../../resources/lang/pt-br/statusCode.js";
import exceptions from "../../../resources/lang/pt-br/exceptions.js";

export default class InvalidUser extends Exception {
    _message;

    constructor() {
        super(
            exceptions.user.invalid_user,
            statusCode.unprocessable_entity
        );
    }

}