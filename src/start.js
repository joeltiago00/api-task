import dotenv from "dotenv"
import express from "express";
import mongoose from "mongoose";
import {router} from "./routes/v1.js";
dotenv.config()

const app = express();
const port = 3000;

app.use(
    express.urlencoded({extended: true})
);

app.use(express.json());

app.use('/', router);

mongoose.connect(process.env.DB_CONNECT_MONGODB)
.then(() => {
    console.log("Connected at Database.");
    app.listen(port);
})
.catch((err) => {
    console.log(err);
});
