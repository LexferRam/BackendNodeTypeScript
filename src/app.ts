//para iniciar un proyeto de typescript: npx tsc --init
import express from "express";
import morgan from "morgan";
import cors from "cors";
import config from "./config";

import videoRoutes from "./routes/video.routes";

const app = express();

app.set("port", config.PORT);
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//permite entender campos de un formulario de una peticion post
app.use(videoRoutes);

export default app;
