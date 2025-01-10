import * as db from "../../db/mysql.js";
const TABLE = "clients";

export const getAll = () => {
  return db.getAll(TABLE);
};
export const getById = (id) => {
  return db.getById(TABLE, id);
};

export const deleteRow = (id) => {
  return db.deleteRow(TABLE, id);
};
