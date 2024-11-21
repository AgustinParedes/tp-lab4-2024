import mysql from "mysql2/promise";
import configDatabase from "../config.js";

const configDB = {
  host: configDatabase.mysql.host,
  user: configDatabase.mysql.user,
  password: configDatabase.mysql.password,
  database: configDatabase.mysql.database,
};

export let db;

export async function dbConnection() {
  try {
    db = await mysql.createConnection(configDB);
    console.log("base de datos conectada");
  } catch (error) {
    console.error("error de conexion en la base de datos", error.message);
  }
}

dbConnection();