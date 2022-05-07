import dotenv from "dotenv";

dotenv.config();

export default {
    db_host: process.env.DB_CONNECT_MONGODB
};