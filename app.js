import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser";

const app = express();

app.use(cors())
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(cookieParser());


//routes
app.get("/", (req, res) => {
    res.status(200).json({
        message: "Welcome to the Project Management App API"
    });
})

export { app }