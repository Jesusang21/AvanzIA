import { registerUserService, loginService } from "../services/user.service.js";

export async function registerUserController(req, res) {
    res.status(200).send(await registerUserService(req.body))
}
export async function loginController(req, res) {
    const user = await loginService(req)
    res.status(user.status).send(user.message)
}