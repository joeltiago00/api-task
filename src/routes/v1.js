import express from "express";
import UserController from "../app/controllers/UserController.js";
import LoginController from "../app/controllers/auth/LoginController.js";
import LogoutController from "../app/controllers/auth/LogoutController.js";
import AuthMiddleware from "../app/middlewares/Authenticate.js";

export const router = express.Router();

router.post("/", async (req, res) => {
  res.status(200).json({message: "API IS ON!!!"})
});

router.post("/user", UserController.store);

router.post("/user/:user_id", AuthMiddleware, UserController.update);

router.post("/login", LoginController.login);

router.get('/logout', AuthMiddleware, LogoutController.logout);