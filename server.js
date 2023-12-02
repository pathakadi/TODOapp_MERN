import { app } from "./app.js";
import { connectDB } from "./data/database.js";
import cors from "cors";

connectDB();
app.use(cors());

app.listen(process.env.PORT , () => {
    console.log(`Server is Working on Port:${process.env.PORT} in ${process.env.NODE_ENV} Mode`);
});
