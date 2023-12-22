import express from "express";
import cors from "cors";
import UserRoute from "./routes/UserRoute.js";
import EventRoute from "./routes/EventRoute.js";
import AuthRoute from "./routes/AuthRoute.js";

const app = express();
app.use(express.json());
app.use(cors());
app.use(UserRoute);
app.use(EventRoute);
app.use(AuthRoute);

app.listen(5000, () => console.log("Server up and running..."));
