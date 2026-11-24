import * as userModel from "../models/user.model.js";
// import { createToken } from "../services/token/token.service.js";
import bcrypt from "bcrypt"

export function registerUserService(body) {
    let { email, name, username, password } = body
    // password = bcrypt.hash(password, saltRounds)

    return userModel.registerUserModel(email, name, username, password)
}

export async function loginService(req) {
    const { email, password } = req.body;
    const user = await userModel.getUserModel(email);
    if (user) {
        const userData = {
            name: user.name,
            username: user.name,
            email: user.email
        }
        const pass = await bcrypt.compare(password, user.password);
        if (pass) {
            // const token = createToken(userData)
            return {
                status: 200,
                // message: token,
                message: userData,
            };
        } else {
            return { status: 401, message: "usuario o clave incorrecto" };
        }
    } else {
        return {
            status: 401,
            message: "usuario o clave incorrecto",
        };
    }
}