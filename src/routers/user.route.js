import express from "express"
import { loginController, registerUserController } from "../controllers/user.controller.js";


const router = express.Router();

router.post("/registeruser", registerUserController);
router.post("/login", loginController);

export default router;