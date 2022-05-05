export default class Task
{
    /**
     * @var { ObjectId } _user_id
     */
    _user_id;
    /**
     * @var { Date }
     */
    _date;
    /**
     * @var { String } _title
     */
    _title;
    /**
     * @var { String } _description
     */
    _description;
    /**
     * @var { String } _status
     */
    _status;
    /**
     * @var { Boolean } _email_notify
     */
    _email_notify;
    /**
     * @var { Number } _time_before_notify
     */
    _time_before_notify;

    /**
     * @param { ObjectId } user_id 
     * @param { String } title 
     * @param { String } date
     * @param { String } description 
     * @param { String } status 
     * @param { String } email_notify 
     * @param { Number } time_before_notify 
     */
    constructor(user_id, date, title, description, status, email_notify, time_before_notify)
    {
        this._user_id = user_id;
        this._date = Date.parse(date);
        this._title = title;
        this._description = description;
        this._status = status;
        this._email_notify = email_notify;
        this._time_before_notify = time_before_notify;
    }

    /**
     * @returns { ObjectId }
     */
    get userId() 
    {
        return this._user_id;
    }

    /**
     * @returns { Date }
     */
    get date() 
    {
        return this._date;
    }

    /**
     * @returns { String }
     */
    get title()
    {
        return this._title;
    }

    /**
     * @returns { String }
     */
    get description()
    {
        return this._description;
    }

    /**
     * @returns { String }
     */
    get status()
    {
        return this._status;
    }

    /**
     * @returns { Boolean }
     */
    get emailNotify()
    {
        return this._email_notify;
    }

    /**
     * @returns { Number }
     */
    get timeBeforeNotify()
    {
        return this._time_before_notify;
    }
}