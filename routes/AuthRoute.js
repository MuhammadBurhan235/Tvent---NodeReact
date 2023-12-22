// routes/AuthRoute.js
import express from "express";
import {
  createUser,
  getUserByEmailPassword,
} from "../controllers/UserController.js";

const router = express.Router();

router.post("/signup", createUser);
router.get("/signin/:email/:password", getUserByEmailPassword);

export default router;
