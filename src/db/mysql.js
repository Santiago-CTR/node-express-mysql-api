import mysql from "mysql2";
import { config } from "../config.js";

let conexion;

const conMySql = () => {
  conexion = mysql.createConnection(config.mysql);
  conexion.connect((err) => {
    if (err) {
      console.log("[db error] ", err.message);
      return setTimeout(conMySql, 200);
    }
    console.log("DB Conectada!!");
  });

  conexion.on("error", (err) => {
    if (err.code === "PROTOCOL_CONNECTION_LOST") {
      conMySql();
    } else {
      console.log("Conexion con la BD Perdida", err);
      throw err;
    }
  });
};

conMySql();

const getAll = (table) => {
  return new Promise((resolve, reject) => {});
};
const getById = (table, data) => {};
const deleteItem = (table, data) => {};
