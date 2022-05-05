export default class User
{
    _first_name;
    _last_name;
    _email;
    _password;

    /**
     * @param { String } first_name 
     * @param { String } last_name 
     * @param { String } email 
     * @param { String } password 
     */
    constructor(first_name, last_name, email, password)
    {
        this._first_name = first_name;
        this._last_name = last_name;
        this._email = email;
        this._password = password;
    }

    /**
     * @return String
     */
    get firstName()
    {
        return this._first_name;
    }

    /**
     * @return String
     */
    get lastName()
    {
        return this._last_name;
    }

    /**
     * @return String
     */
    get email()
    {
        return this._email;
    }

    /**
     * @return String
     */
    get password()
    {
        return this._password;
    }
}