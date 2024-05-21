import { config } from "dotenv";
config();

export default {
  dbUser: process.env.DBUSER || "",
  dbPassword: process.env.PASSWORD || "",
  port: process.env.PORT || "",
};
