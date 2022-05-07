import express from "express";
import AuthMiddleware from "../app/https/middlewares/Authenticate.js";
import UserController from "../app/https/controllers/UserController.js";
import UserRequest from "../app/https/requests/UserRequest.js";
import LoginController from "../app/https/controllers/auth/LoginController.js";
import LogoutController from "../app/https/controllers/auth/LogoutController.js";
import TaskController from "../app/https/controllers/TaskController.js";
import TaskRequest from "../app/https/requests/TaskRequest.js";

export const router = express.Router();

router.post("/", async (req, res) => {
  return res.status(200).json({message: "API IS ON!!!"});
});

//Auth Routes
router.post("/login", await LoginController.login);
router.get('/logout', await AuthMiddleware, await LogoutController.logout);

//User Routes
router.post("/user", await UserRequest.validateStore, await UserController.store);
router.post("/user/:user_id", UserRequest.validateUpdate, await AuthMiddleware, await UserController.update);

//Task Routes
router.post('/user/:user_id/task', await TaskRequest.store, await AuthMiddleware, await TaskController.store);

