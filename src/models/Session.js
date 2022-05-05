import mongoose from "mongoose";

const Session = mongoose.model('session', {
    user_id: mongoose.Types.ObjectId,
    uuid: String,
    status: String,
    expired_at: Date,
    disabled_by_session_id: String,
    disabled_by: String,
    created_at: Date,
    updated_at: Date,
    deleted_at: Date
});

export default Session;