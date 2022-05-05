import express from "express";
import UserController from "../app/controllers/UserController.js";
import UserRequest from "../app/requests/UserRequest.js";

export const router = express.Router();

router.post("/", async (req, res) => {
  UserRequest.store(req)
  return

  const id = await UserController.update(req);

  res.status(201).json({
    _id: id,
  });
});

router.post("/user", async (req, res) => {
  const id = await UserController.store(req);

  res.status(201).json({
    _id: id,
  });
});

router.post("/user/:user_id", async (req, res) => {
  if (!req.params.user_id) {
    res.status(422).json({
      error: "User ID is missing."
    })
  }

  const id = await UserController.update(req, res, req.params.user_id);
});