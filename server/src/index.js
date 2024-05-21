import app from "./app";
import config from "./config";
import mongoose from "mongoose";

const dbURI =
  "mongodb://" +
  config.dbUser +
  ":" +
  config.dbPassword +
  "@mongo:27017/ArtGallery?retryWrites=true&w=majority";

mongoose
  .connect(dbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    authSource: 'admin',
  })
  .then((_) => app.listen(app.get("port")))
  .catch((err) => console.log(err));

console.log("Puerto en ", app.get("port"));
console.log(dbURI);
