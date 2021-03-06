import database from "./config/database.js";
import express from "express";
import mongoose from "mongoose";
import { router, adminRouter } from "./routes/v1.js";

const app = express();
const port = 3000;

app.use(
    express.urlencoded({extended: true})
);

app.use(express.json());

app.use('/', router);
app.use('/admin/', adminRouter);

mongoose.connect(database.db_host)
.then(() => {
    console.log("Connected at Database.");
    app.listen(port);
})
.catch((err) => { console.log(err); });
