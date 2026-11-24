import { db } from "../prisma/db.ts"

export async function registerUserModel(email, name, username, password) {
    // return `Usuario registrado ${email} - ${name} - ${username} - ${password}`
    try {
        const create = await db.orm.public.User.create({
            email, name, username, password
        });
        console.log(create)
        // await db.close()
        return create;
    } catch (error) {
        console.log(error)
        if (error.sqlState === "23505") {
            return {
                status: 409,
                message: "Usuario ya registrado",
            }
        } else {
            return {
                status: 409,
                message: "Error inesperado",
            }
        }
    }
}

export async function getUserModel(email) {
    const user = await db.orm.public.User.where({
        email,
    }).first();
    return user;
}