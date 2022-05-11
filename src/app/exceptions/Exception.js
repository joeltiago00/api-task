

export default class Exception {
    error = new Error();

    constructor(message, status_code) {
     this.handle(message, status_code);
    }

    handle (message, status_code) {
        this.error.message = message;
        this.error.status_code = status_code;

        return this.error;
    }

}