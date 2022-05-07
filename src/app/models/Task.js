import mongoose from "mongoose";

const Task = mongoose.model('task', {
    user_id: mongoose.Types.ObjectId,
    status: String,
    title: String,
    description: String,
    date: Date,
    time_before_notify: Number,
    email_notify: Boolean,
    created_at: Date,
    updated_at: Date,
    deleted_at: Date
});

export default Task;