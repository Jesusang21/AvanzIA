import express from "express"
import { loginController, registerUserController } from "../controllers/user.controller.js";


const router = express.Router();

router.post("/registeruser", registerUserController);
router.get("/login", loginController);

export default router;