import Session from "../models/Session.js";
import DateTimeHelper from "../helpers/DateTimeHelper.js";
import { v4 as uuidv4 } from 'uuid';

class SessionRepository
{
    async store(user_id)
    {
        const model = await Session.create({
            user_id: user_id,
            uuid: uuidv4(),
            status: 'active',
            expired_at: await DateTimeHelper.addHours(new Date, 5),
            disabled_by_session_id: null,
            disabled_by: null,
            created_at: new Date(),
            updated_at: new Date()
        });
    
        if (!await expireSessionsByUserId(user_id, model._id))
            return;
    
        return model;
    }
    
    async update(user, data)
    {
        return await user.updateOne({
            first_name: data.first_name ??user.first_name,
            last_name: data.last_name ?? user.last_name
        });
    }
    
    async expireSessionsByUserId(user_id, current_session_id)
    {
        return await Session.updateMany(
            {user_id: user_id, status: 'active', _id: {$ne: current_session_id}},
            {
                status: 'inactive',
                disabled_by_session_id: current_session_id,
                disabled_by: 'login',
                updated_at: new Date()
            }
             ).exec();
    }
    
    async getValidSessionByUUID(uuid)
    {
        return await Session.findOne({uuid: uuid, status: 'active', expired_at: {$gte: new Date()}}).exec();
    }
    
    async expireSessionByUUID(uuid, session)
    {
        return await Session.updateOne(
            {uuid: uuid},
            {
                status: 'inactive',
                disabled_by_session_id: session._id,
                disabled_by: 'login',
                updated_at: new Date()
            });
    }
    
    async isValidByUUID(uuid)
    {
        const session = await Session.findOne({uuid: uuid, status: 'active', expired_at: {$gte: new Date()}}).exec();
    
        if (Object.keys(session).length === 0)
            return false;
    
        return true;
    }
}

export default new SessionRepository();
