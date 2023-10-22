import express from "express";
import userRouter from "./routes/user.js";
import taskRouter from "./routes/task.js";
import { config } from "dotenv";
import cookieParser from "cookie-parser";
import { errorMiddleware } from "./middlewares/error.js";
import cors from "cors";     //Contract Research Organization

export const app = express();

config({
    path : "./data/config.env"
})

// Using Middlewares
app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin : [process.env.FRONTEND_URL] ,
    methods : ["POST" , "GET" , "PUT" , "DELETE"] ,
    credentials : true
}));

// Using Routes
app.use( "/api/v1/users" , userRouter);
app.use( "/api/v1/task" , taskRouter);

app.get("/" , (req,res) => {
    res.send("Nice Work");
});

// Using Error Middleware
app.use(errorMiddleware);