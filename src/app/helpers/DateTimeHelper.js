const addHours = async (date, hours) => {
    return new Date().setHours(date.getHours() + hours)
}

const DateTimeHelper = {
    addHours
}

export default DateTimeHelper;