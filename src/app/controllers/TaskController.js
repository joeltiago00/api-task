import TaskRepository from "../repositories/TaskRepository.js";
import Task from "../core/Task.js";

const store = async (req, res) => {
    const { title, description, date, email_notify, time_before_notify } = req.body;
    const user_id = req.params.user_id ?? res.status(422).json({error: "User ID is missing."});

    const task = new Task(user_id, date, title, description, 'active', email_notify, time_before_notify ?? 0);

    const model = TaskRepository.store(task);

    if (!model)
        res.status(422).json({error: "Fail to create task."});

    res.status(201).json({_id: model._id});
}

export default {
    store
}