import dotenv from "dotenv";
dotenv.config(); //permite que se entiendan las variables de entorno

/*
en el archivo .env se colocan los valores de las variables de mongoDB Atlas 
*/
export default {
  MONGO_DATABASE: process.env.MONGO_DATABASE || "mern-ts",
  MONGO_USER: process.env.MONGO_USER || "admin",
  MONGO_PASSWORD: process.env.MONGO_PASSWORD || "admin",
  MONGO_HOST: process.env.MONGO_HOST || "localhost",
  PORT: process.env.PORT || "4000",
};
