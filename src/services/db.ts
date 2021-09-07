import mysql from "mysql2";
import * as dotenv from "dotenv";

dotenv.config();

const dbService = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PWD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT as unknown as number
});

export default dbService
