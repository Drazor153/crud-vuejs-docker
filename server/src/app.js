import express from "express";
import config from "./config";

import galleryRoutes from "../routes/gallery.routes";

const app = express();

var cors = require("cors");

app.use(
  cors({
    origin: '*'
  })
);
app.set("port", config.port);
app.use(express.json());
app.use(galleryRoutes);

export default app;
