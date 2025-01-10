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
      console.log("Conexion con la DB Perdida", err);
      throw err;
    }
  });
};

conMySql();

export const getAll = (table) => {
  return new Promise((resolve, reject) => {
    conexion.query("SELECT * FROM ??", table, (err, data) => {
      return err ? reject(err) : resolve(data);
    });
  });
};
export const getById = (table, data) => {
  return new Promise((resolve, reject) => {
    conexion.query(
      "SELECT * FROM ?? WHERE id = ?",
      [table, data],
      (err, data) => {
        return err ? reject(err) : resolve(data);
      }
    );
  });
};
export const deleteRow = (table, data) => {
  return new Promise((resolve, reject) => {
    conexion.query(
      "DELETE FROM ?? WHERE id = ?",
      [table, data.id],
      (error, data) => {
        return error ? reject(error) : resolve(data);
      }
    );
  });
};
