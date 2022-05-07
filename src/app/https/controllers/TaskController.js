import TaskRepository from "../../repositories/TaskRepository.js";
import Task from "../../core/Task.js";

class TaskContoller
{
    /**
     * @param {*} req 
     * @param {*} res 
     * @returns { json }
     */
    async store(req, res)
    {
        const { title, description, date, email_notify, time_before_notify } = req.body;
        const user_id = req.params.user_id;
    
        const task = new Task(user_id, date, title, description, 'active', email_notify, time_before_notify ?? 0);
    
        const model = await TaskRepository.store(task);

        if (!model)
            res.status(422).json({error: "Fail to create task."});
    
        res.status(201).json({_id: model._id});
    }
    
    /**
     * @param {*} req 
     * @param {*} res 
     * @returns { json }
     */
    async update(req, res)
    {
        const { title, description, date, email_notify, time_before_notify } = req.body;
        const task = await TaskRepository.getTaskById(req.params.task_id);
    
        if (!task)
            res.status(422).json({error: "Invalid task."});

        if (!await TaskRepository.update(task, {
            title: title,
            description: description,
            date: date,
            email_notify: email_notify,
            time_before_notify: time_before_notify
        }))
            return res.status(422).json({error: "Fail to update task."});

        return res.status(200).json({_id: task._id});
    }
}

export default new TaskContoller();