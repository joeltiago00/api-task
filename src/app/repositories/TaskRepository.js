import Task from "../models/Task.js";

class TaskRepository 
{
    /**
     * 
     * @param { Task } task 
     * @returns { Task }
     */
    async store(task) {
        return await Task.create({
            user_id: task.userId,
            title: task.title,
            description: task.description,
            date: task.date,
            email_notify: task.emailNotify,
            time_before_notify: task.timeBeforeNotify
        });
    }
    
    /**
     * 
     * @param { ObjectId } task_id 
     * @returns { Task }
     */
    async getTaskById(task_id) {
        return await Task.findById(task_id).exec();
    }

    /**
     * 
     * @param { Task } task 
     * @param { Object } data 
     * @returns { Task }
     */
    async update(task, data) {
        return await task.updateOne({
            title: data.title ?? task.title,
            description: data.description ?? task.description,
            date: data.date ?? task.date,
            email_notify: data.email_notify ?? task.email_notify,
            time_before_notify: data.time_before_notify ?? task.time_before_notify
        });
    }
}

export default new TaskRepository();