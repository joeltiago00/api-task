import Task from "../../models/Task.js";

const store = async (task) => {
    return await Task.create({
        user_id: task.userId,
        title: task.title,
        description: task.description,
        date: task.date,
        email_notify: task.emailNotify,
        time_before_notify: task.timeBeforeNotify
    });
}

export default {
    store, 
}