import express from 'express'
import 'dotenv/config'
import cors from 'cors';
import userRouter from './src/routers/user.route.js'

const app = express();

app.use(cors({
    origin: [
        'http://localhost:5173',
        'https://avanza-ia-frontend.vercel.app/',
        'http://avanza-ia-frontend-2way9fq81-jesus-angulo.vercel.app'
        // Agrega aquí también la URL de tu frontend cuando lo despliegues
    ],
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
}));

app.use(express.json());

const port = process.env.PORT || 3000

app.get("/", (req, res) => {
    res.status(200).send("todo ok")
})

app.use("/api/user", userRouter)


app.listen(port, () => {
    console.log("http://localhost:" + port)
})