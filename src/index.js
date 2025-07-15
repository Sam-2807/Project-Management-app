import { app } from "./app.js";
import { connectDB } from "./db/index.js";
import dotenv from "dotenv"

dotenv.config()

const PORT = process.env.PORT || 3000;

connectDB()
    .then(() => {
        app.listen(PORT, () => {
            console.log(`server listen on http://localhost:${PORT}`);
        })
    })
    .catch(err => console.log("Mongo db connect error: ", err))
